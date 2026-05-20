'use client'

/**
 * Cursor.jsx
 * Custom cursor — replaces the default OS cursor on desktop.
 *
 * Behaviour:
 * - Small 10px dot that follows the mouse with slight lag (GSAP quickTo)
 * - Expands to 44px circle on hover over links, buttons, [data-cursor]
 * - mix-blend-mode: difference — inverts colour against any background
 *   (appears white on dark sections, dark on light sections — automatically)
 * - Hidden on touch devices — they never have a cursor
 * - "View" label appears when hovering project cards [data-cursor="view"]
 */

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const isHovering = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const label = labelRef.current
    if (!cursor || !label) return

    gsap.set(cursor, { opacity: 1 })

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMouseMove = (event) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const onEnter = (event) => {
      if (isHovering.current) return
      isHovering.current = true

      const cursorType = event.currentTarget.dataset.cursor || 'hover'

      gsap.to(cursor, {
        width: 44,
        height: 44,
        duration: 0.35,
        ease: 'back.out(1.7)',
      })

      if (cursorType === 'view') {
        gsap.to(label, {
          opacity: 1,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
    }

    const onLeave = () => {
      isHovering.current = false

      gsap.to(cursor, {
        width: 10,
        height: 10,
        duration: 0.35,
        ease: 'power3.out',
      })

      gsap.to(label, {
        opacity: 0,
        duration: 0.15,
        ease: 'power2.out',
      })
    }

    const onMouseLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.2 })
    const onMouseEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.2 })

    window.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    const onBodyEnter = (event) => {
      const target = event.target.closest('a, button, [data-cursor]')
      if (target) onEnter({ currentTarget: target })
    }
    const onBodyLeave = (event) => {
      const target = event.target.closest('a, button, [data-cursor]')
      if (target) onLeave()
    }

    document.body.addEventListener('mouseover', onBodyEnter)
    document.body.addEventListener('mouseout', onBodyLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      document.body.removeEventListener('mouseover', onBodyEnter)
      document.body.removeEventListener('mouseout', onBodyLeave)
    }
  }, [])

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#FAFAF8',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform, width, height',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-syne), system-ui, sans-serif',
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#111111',
            opacity: 0,
            whiteSpace: 'nowrap',
            mixBlendMode: 'normal',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          View
        </span>
      </div>
    </>
  )
}
