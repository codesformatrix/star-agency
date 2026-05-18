'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LENIS_CONFIG } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return

    const lenis = new Lenis({
      ...LENIS_CONFIG,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoRaf: false,
    })

    window.starLenis = lenis

    const onRefresh = () => lenis.resize()

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    })

    ScrollTrigger.addEventListener('refresh', onRefresh)
    lenis.on('scroll', ScrollTrigger.update)

    // GSAP ticker time is in seconds; Lenis raf expects milliseconds
    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      gsap.ticker.remove(raf)
      lenis.destroy()
      delete window.starLenis
      ScrollTrigger.scrollerProxy(document.documentElement, {})
    }
  }, [])

  return <>{children}</>
}
