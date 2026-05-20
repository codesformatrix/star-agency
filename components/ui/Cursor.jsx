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
      width: 10,
      height: 10,
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

    const setDefault = () => {
      gsap.to(cursor, {
        width: 10,
        height: 10,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
      gsap.to(label, {
        opacity: 0,
        y: 10,
        duration: 0.24,
        ease: 'power2.out',
      })
      label.textContent = ''
    }

    const setView = () => {
      gsap.to(cursor, {
        width: 44,
        height: 44,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
      label.textContent = 'View'
      gsap.to(label, {
        opacity: 1,
        y: 0,
        duration: 0.24,
        ease: 'power2.out',
      })
    }

    const handleMove = (event) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-cursor]') : null
      if (target?.getAttribute('data-cursor') === 'view') {
        setView()
        return
      }

      setDefault()
    }

    const handleLeaveWindow = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 })
    }

    const handleEnterWindow = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
    }

    const handleFirstMove = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
      window.removeEventListener('mousemove', handleFirstMove)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousemove', handleFirstMove)
    document.body.addEventListener('mouseover', handleOver)
    document.documentElement.addEventListener('mouseleave', handleLeaveWindow)
    document.documentElement.addEventListener('mouseenter', handleEnterWindow)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousemove', handleFirstMove)
      document.body.removeEventListener('mouseover', handleOver)
      document.documentElement.removeEventListener('mouseleave', handleLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', handleEnterWindow)
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
