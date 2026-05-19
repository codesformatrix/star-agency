'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import IntroLoader from '@/components/layout/IntroLoader'
import { MOTION } from '@/lib/motion'

function bindMediaQueryChange(mediaQuery, listener) {
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }

  if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(listener)
    return () => mediaQuery.removeListener(listener)
  }

  return () => {}
}

function readSessionFlag(key) {
  try {
    return window.sessionStorage.getItem(key) === '1'
  } catch {
    return true
  }
}

function writeSessionFlag(key) {
  try {
    window.sessionStorage.setItem(key, '1')
  } catch {
    return
  }
}

export default function ExperienceShell({ children }) {
  const pathname = usePathname()
  const [showIntro, setShowIntro] = useState(false)
  const [routeVeilVisible, setRouteVeilVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [preferencesReady, setPreferencesReady] = useState(false)
  const initializedRef = useRef(false)
  const lastPathRef = useRef(pathname)
  const routeTimeoutRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const applyPreference = () => {
      setReducedMotion(mediaQuery.matches)
      setPreferencesReady(true)
    }

    applyPreference()
    return bindMediaQueryChange(mediaQuery, applyPreference)
  }, [])

  useEffect(() => {
    if (!preferencesReady || initializedRef.current) return

    initializedRef.current = true

    if (reducedMotion || readSessionFlag(MOTION.loader.sessionKey)) {
      writeSessionFlag(MOTION.loader.sessionKey)
      return
    }

    const showFrame = window.requestAnimationFrame(() => {
      setShowIntro(true)
      document.body.classList.add('is-intro-active')
    })

    const hideTimeout = window.setTimeout(() => {
      setShowIntro(false)
      document.body.classList.remove('is-intro-active')
      writeSessionFlag(MOTION.loader.sessionKey)
    }, MOTION.loader.holdMs)

    return () => {
      window.cancelAnimationFrame(showFrame)
      window.clearTimeout(hideTimeout)
      document.body.classList.remove('is-intro-active')
    }
  }, [preferencesReady, reducedMotion])

  useEffect(() => {
    if (!preferencesReady) return
    if (!initializedRef.current || showIntro) return
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
  }, [pathname, preferencesReady, showIntro])

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
