'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef  = useRef(null)
  const hovering   = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = cursorRef.current
    gsap.set(el, { opacity: 0, xPercent: -50, yPercent: -50 })

    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' })

    const move = (e) => { xTo(e.clientX); yTo(e.clientY) }

    const enter = () => {
      if (hovering.current) return
      hovering.current = true
      gsap.to(el, { width: 44, height: 44, duration: 0.3, ease: 'back.out(1.7)' })
    }

    const leave = () => {
      hovering.current = false
      gsap.to(el, { width: 10, height: 10, duration: 0.3, ease: 'power3.out' })
    }

    const hide = () => gsap.to(el, { opacity: 0, duration: 0.2 })
    const show = () => gsap.to(el, { opacity: 1, duration: 0.2 })

    window.addEventListener('mousemove', move)
    document.documentElement.addEventListener('mouseleave', hide)
    document.documentElement.addEventListener('mouseenter', show)

    document.body.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [data-cursor]')) enter()
    })
    document.body.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, [data-cursor]')) leave()
    })

    // Show after first mouse move
    const firstMove = () => {
      gsap.to(el, { opacity: 1, duration: 0.3 })
      window.removeEventListener('mousemove', firstMove)
    }
    window.addEventListener('mousemove', firstMove)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', firstMove)
    }
  }, [])

  return (
    <>
      <style>{`@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`}</style>
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position:        'fixed',
          top:              0,
          left:             0,
          width:            10,
          height:           10,
          borderRadius:    '50%',
          backgroundColor: '#FAFAF8',
          pointerEvents:   'none',
          zIndex:           9999,
          mixBlendMode:    'difference',
          willChange:      'transform, width, height',
        }}
      />
    </>
  )
}