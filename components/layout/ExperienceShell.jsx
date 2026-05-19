'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import IntroLoader from '@/components/layout/IntroLoader'
import { MOTION } from '@/lib/motion'

export default function ExperienceShell({ children }) {
  const pathname = usePathname()
  const [showIntro, setShowIntro] = useState(false)
  const [routeVeilVisible, setRouteVeilVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(null)
  const initializedRef = useRef(false)
  const lastPathRef = useRef(pathname)
  const routeTimeoutRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPreference = () => {
      setReducedMotion(mediaQuery.matches)
    }

    applyPreference()
    mediaQuery.addEventListener('change', applyPreference)

    return () => {
      mediaQuery.removeEventListener('change', applyPreference)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion === null) return

    if (reducedMotion) {
      initializedRef.current = true
      return
    }

    if (initializedRef.current) {
      return
    }

    initializedRef.current = true

    const hasSeenIntro = window.sessionStorage.getItem(MOTION.loader.sessionKey) === '1'
    if (hasSeenIntro) {
      return
    }

    const showFrame = window.requestAnimationFrame(() => {
      setShowIntro(true)
    })
    document.body.classList.add('is-intro-active')

    const hideTimeout = window.setTimeout(() => {
      setShowIntro(false)
      document.body.classList.remove('is-intro-active')
      window.sessionStorage.setItem(MOTION.loader.sessionKey, '1')
    }, MOTION.loader.holdMs)

    return () => {
      window.cancelAnimationFrame(showFrame)
      window.clearTimeout(hideTimeout)
      document.body.classList.remove('is-intro-active')
    }
  }, [reducedMotion])

  useEffect(() => {
    if (!initializedRef.current) return
    if (showIntro) return
    if (lastPathRef.current === pathname) return

    lastPathRef.current = pathname

    if (routeTimeoutRef.current) {
      window.clearTimeout(routeTimeoutRef.current)
    }

    setRouteVeilVisible(true)
    routeTimeoutRef.current = window.setTimeout(() => {
      setRouteVeilVisible(false)
    }, 520)

    return () => {
      if (routeTimeoutRef.current) {
        window.clearTimeout(routeTimeoutRef.current)
      }
    }
  }, [pathname, showIntro])

  return (
    <>
      <div className="experience-shell">{children}</div>

      <AnimatePresence>{showIntro ? <IntroLoader key="intro-loader" /> : null}</AnimatePresence>

      <AnimatePresence>
        {routeVeilVisible && !showIntro ? (
          <motion.div
            key={`route-veil-${pathname}`}
            className="route-veil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: MOTION.route.veilIn,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>
    </>
  )
}
