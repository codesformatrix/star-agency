'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LENIS_CONFIG } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  const pathname = usePathname()
  const lenisRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      ...LENIS_CONFIG,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoRaf: false,
    })

    lenisRef.current = lenis
    window.starLenis = lenis

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    const onResize = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }

    const frameId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    window.addEventListener('resize', onResize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
      delete window.starLenis
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    const frameId = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [pathname])

  return <>{children}</>
}
