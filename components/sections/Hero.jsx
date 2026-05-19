'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { MOTION } from '@/lib/motion'
import CanvasErrorBoundary from '@/components/three/CanvasErrorBoundary'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="hero__canvas-skeleton" aria-hidden="true" />,
})

function splitHeadlineFallback(element) {
  const originalText = element.textContent?.trim() ?? ''
  element.setAttribute('aria-label', originalText)
  element.textContent = ''

  return Array.from(originalText).map((character) => {
    const inner = document.createElement('span')
    inner.className = 'hero__char'
    inner.textContent = character === ' ' ? '\u00A0' : character

    element.appendChild(inner)
    return inner
  })
}

export default function Hero() {
  const sectionRef = useRef(null)
  const visualRef = useRef(null)
  const labelRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const scrollRef = useRef(null)
  const cleanupRef = useRef(() => {})

  useEffect(() => {
    let isCancelled = false
    let hideIndicator = false
    let splitInstance = null
    let chars = []
    let scrollHandler = null
    let lenisHandler = null

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const hideScrollIndicator = () => {
      if (hideIndicator || !scrollRef.current) return
      hideIndicator = true

      gsap.to(scrollRef.current, {
        autoAlpha: 0,
        y: 14,
        duration: MOTION.dur.fast,
        ease: MOTION.ease.out,
        pointerEvents: 'none',
      })
    }

    const attachScrollListeners = () => {
      scrollHandler = () => {
        if (window.scrollY > 24) {
          hideScrollIndicator()
        }
      }

      window.addEventListener('scroll', scrollHandler, { passive: true })

      const lenis = window.starLenis
      if (lenis?.on) {
        lenisHandler = ({ scroll }) => {
          if (scroll > 24) {
            hideScrollIndicator()
          }
        }
        lenis.on('scroll', lenisHandler)
      }
    }

    const run = async () => {
      const headline = headlineRef.current
      if (!headline || !visualRef.current || !labelRef.current || !subRef.current || !scrollRef.current) {
        return
      }

      try {
        const plugin = await import('gsap/SplitText')
        if (isCancelled) return

        const SplitText = plugin.SplitText ?? plugin.default
        if (SplitText) {
          gsap.registerPlugin(SplitText)
          splitInstance = new SplitText(headline, {
            type: 'chars',
            charsClass: 'hero__char',
          })
          chars = splitInstance.chars
        }
      } catch {
        if (isCancelled) return
        chars = splitHeadlineFallback(headline)
      }

      if (isCancelled) return

      if (!chars.length) {
        chars = splitHeadlineFallback(headline)
      }

      const ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          gsap.set([visualRef.current, labelRef.current, subRef.current, scrollRef.current], {
            autoAlpha: 1,
            y: 0,
          })
          gsap.set(chars, { autoAlpha: 1, yPercent: 0 })
          return
        }

        gsap.set(visualRef.current, { autoAlpha: 0, y: 20 })
        gsap.set([labelRef.current, subRef.current, scrollRef.current], {
          autoAlpha: 0,
          y: 16,
        })
        gsap.set(chars, {
          autoAlpha: 0,
          y: 48,
        })

        gsap
          .timeline({
            defaults: { ease: MOTION.ease.out },
          })
          .to(visualRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: MOTION.dur.normal,
          }, 0.2)
          .to(labelRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: MOTION.dur.normal,
          }, 0.4)
          .to(chars, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.02,
          }, 0.6)
          .to(subRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: MOTION.dur.normal,
          }, 1.4)
          .to(scrollRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: MOTION.dur.fast,
          }, 1.6)
      }, sectionRef)

      cleanupRef.current = () => {
        ctx.revert()
      }

      attachScrollListeners()
    }

    run()

    return () => {
      isCancelled = true
      cleanupRef.current()
      if (splitInstance) {
        splitInstance.revert()
      }
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler)
      }
      const lenis = window.starLenis
      if (lenis?.off && lenisHandler) {
        lenis.off('scroll', lenisHandler)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero surface-light">
      <div className="hero__grid">
        <div className="hero__copy">
          <div ref={labelRef} className="hero__label" aria-label="STAR">
            <span>STAR</span>
            <span className="hero__star" aria-hidden="true">
              ✦
            </span>
          </div>

          <h1 ref={headlineRef} className="hero__headline text-display">
            Websites that make your business impossible to ignore.
          </h1>

          <p ref={subRef} className="hero__sub">
            Premium web design for Indian businesses — zero upfront cost.
          </p>

          <div ref={scrollRef} className="hero__scroll" aria-label="Scroll to explore">
            <span className="hero__scroll-line" aria-hidden="true" />
            <span className="hero__scroll-label">Scroll to explore</span>
          </div>
        </div>

        <div ref={visualRef} className="hero__canvas-wrap" data-cursor="view">
          <CanvasErrorBoundary>
            <HeroCanvas />
          </CanvasErrorBoundary>
        </div>
      </div>
    </section>
  )
}
