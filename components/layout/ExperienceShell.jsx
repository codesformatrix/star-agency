'use client'

import { useEffect, useState } from 'react'

const SESSION_KEY = 'star-intro-seen'

function readSessionFlag() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return true
  }
}

function writeSessionFlag() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    return
  }
}

export default function ExperienceShell({ children }) {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || readSessionFlag()) {
      writeSessionFlag()
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      setShowIntro(true)
      document.body.classList.add('is-intro-active')
    })

    const timeout = window.setTimeout(() => {
      setShowIntro(false)
      document.body.classList.remove('is-intro-active')
      writeSessionFlag()
    }, 1800)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeout)
      document.body.classList.remove('is-intro-active')
    }
  }, [])

  return (
    <>
      {children}
      {showIntro ? (
        <div className="intro-loader" aria-hidden="true">
          <div className="intro-loader__glow intro-loader__glow--top" />
          <div className="intro-loader__glow intro-loader__glow--bottom" />
          <div className="intro-loader__mark">
            <span className="intro-loader__word">STAR</span>
            <span className="intro-loader__star">*</span>
          </div>
          <div className="intro-loader__line" />
          <p className="intro-loader__caption">
            Premium websites for businesses that should be remembered.
          </p>
        </div>
      ) : null}
    </>
  )
}
