'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (coarsePointer) return

    const cursor = cursorRef.current
    const label = labelRef.current
    if (!cursor || !label) return

    setMounted(true)
    document.body.classList.add('has-custom-cursor')

    gsap.set(cursor, {
      opacity: 0,
      xPercent: -50,
      yPercent: -50,
    })

    gsap.set(label, { opacity: 0, y: 10 })

    const xTo = gsap.quickTo(cursor, 'x', {
      duration: 0.5,
      ease: 'power3.out',
    })
    const yTo = gsap.quickTo(cursor, 'y', {
      duration: 0.5,
      ease: 'power3.out',
    })

    const resetCursor = () => {
      cursor.classList.remove('is-hovering')
      label.textContent = ''
      gsap.to(label, {
        opacity: 0,
        y: 10,
        duration: 0.22,
        ease: 'power2.out',
      })
    }

    const activateView = () => {
      cursor.classList.add('is-hovering')
      label.textContent = 'View'
      gsap.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.22,
        ease: 'power2.out',
      })
    }

    const handleMove = (event) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-cursor="view"]') : null
      if (target) {
        activateView()
        return
      }

      resetCursor()
    }

    const handleFirstMove = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
      window.removeEventListener('mousemove', handleFirstMove)
    }

    const hide = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 })
    }

    const show = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousemove', handleFirstMove)
    document.body.addEventListener('mouseover', handleOver)
    document.documentElement.addEventListener('mouseleave', hide)
    document.documentElement.addEventListener('mouseenter', show)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousemove', handleFirstMove)
      document.body.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', hide)
      document.documentElement.removeEventListener('mouseenter', show)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <span ref={labelRef} className="cursor__label" />
    </div>
  )
}
