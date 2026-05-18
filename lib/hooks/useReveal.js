'use client'

/**
 * useReveal.js
 * Shared GSAP ScrollTrigger reveal hook.
 * Every section imports this — one place to control all scroll animations.
 *
 * Usage:
 *   const sectionRef = useReveal()
 *   <section ref={sectionRef}>
 *     <h2 data-reveal>Reveals up</h2>
 *     <p data-reveal="up" data-delay="0.1">Reveals up with delay</p>
 *     <div data-reveal="left">Reveals from left</div>
 *     <div data-reveal="scale">Scales up</div>
 *     <div data-reveal="stagger-parent">
 *       <div data-stagger-child>Item 1</div>
 *       <div data-stagger-child>Item 2</div>
 *     </div>
 *   </section>
 */

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MOTION } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {

      /* ── Standard reveals: [data-reveal] ────────────────────────────── */
      el.querySelectorAll('[data-reveal]').forEach((target) => {
        const type  = target.dataset.reveal || 'up'
        const delay = parseFloat(target.dataset.delay || '0')

        const from = {
          opacity: 0,
          y:       type === 'up'    ? 48  : type === 'down'  ? -48 : 0,
          x:       type === 'left'  ? 48  : type === 'right' ? -48 : 0,
          scale:   type === 'scale' ? 0.94 : 1,
          rotation: type === 'scale' ? 1 : 0,
        }

        gsap.fromTo(target, from, {
          opacity:  1,
          y:        0,
          x:        0,
          scale:    1,
          rotation: 0,
          duration: MOTION.dur.slow,
          ease:     MOTION.ease.reveal,
          delay,
          scrollTrigger: {
            trigger:       target,
            start:         'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      /* ── Stagger groups: [data-reveal="stagger-parent"] ─────────────── */
      el.querySelectorAll('[data-reveal="stagger-parent"]').forEach((parent) => {
        const children = parent.querySelectorAll('[data-stagger-child]')
        const delay    = parseFloat(parent.dataset.delay || '0')

        gsap.fromTo(children,
          { opacity: 0, y: 40 },
          {
            opacity:  1,
            y:        0,
            duration: MOTION.dur.normal,
            ease:     MOTION.ease.reveal,
            stagger:  MOTION.stagger.normal,
            delay,
            scrollTrigger: {
              trigger:       parent,
              start:         'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}