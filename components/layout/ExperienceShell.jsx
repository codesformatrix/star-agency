'use client'

import { useEffect, useState } from 'react'

const SESSION_KEY = 'star-intro-seen'
const TOTAL_DURATION = 4200

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
  const [progress, setProgress] = useState(0)

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

    const startTime = Date.now()
    const intervalId = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min(100, Math.max(1, Math.round((elapsed / TOTAL_DURATION) * 100)))
      setProgress(nextProgress)
    }, 40)

    const timeout = window.setTimeout(() => {
      setProgress(100)
      setShowIntro(false)
      document.body.classList.remove('is-intro-active')
      writeSessionFlag()
    }, TOTAL_DURATION + 300)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearInterval(intervalId)
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
          <div className="intro-loader__progress">
            <span className="intro-loader__progress-value">{progress}%</span>
            <span className="intro-loader__progress-label">Loading</span>
          </div>
        </div>
      ) : null}
    </>
  )
}
