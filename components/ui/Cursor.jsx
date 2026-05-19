'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MOTION } from '@/lib/motion'

const CURSOR_LABELS = {
  view: 'View',
  open: 'Open',
  drag: 'Drag',
}

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const activeTargetRef = useRef(null)
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
      width: MOTION.cursor.idleSize,
      height: MOTION.cursor.idleSize,
    })

    gsap.set(label, { opacity: 0, y: 10 })

    const xTo = gsap.quickTo(cursor, 'x', {
      duration: MOTION.cursor.moveDuration,
      ease: 'power3.out',
    })
    const yTo = gsap.quickTo(cursor, 'y', {
      duration: MOTION.cursor.moveDuration,
      ease: 'power3.out',
    })

    const updateCursorState = (target) => {
      activeTargetRef.current = target

      const mode =
        target?.getAttribute('data-cursor') ||
        (target?.matches('a, button') ? 'open' : '')
      const customLabel = target?.getAttribute('data-cursor-label')
      const nextLabel = customLabel || CURSOR_LABELS[mode] || ''
      const nextSize = mode === 'drag' ? MOTION.cursor.dragSize : MOTION.cursor.hoverSize

      gsap.to(cursor, {
        width: mode ? nextSize : MOTION.cursor.idleSize,
        height: mode ? nextSize : MOTION.cursor.idleSize,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })

      gsap.to(label, {
        opacity: nextLabel ? 1 : 0,
        y: nextLabel ? 0 : 10,
        duration: MOTION.cursor.labelDuration,
        ease: 'power2.out',
      })

      label.textContent = nextLabel
    }

    const move = (event) => {
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const hide = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 })
    }

    const show = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
    }

    const onPointerOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-cursor], a, button') : null
      updateCursorState(target)
    }

    const onPointerOut = (event) => {
      const relatedTarget =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest('[data-cursor], a, button')
          : null

      if (relatedTarget === activeTargetRef.current) return
      updateCursorState(relatedTarget)
    }

    const onFirstMove = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 })
      window.removeEventListener('mousemove', onFirstMove)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', onFirstMove)
    document.documentElement.addEventListener('mouseleave', hide)
    document.documentElement.addEventListener('mouseenter', show)
    document.body.addEventListener('mouseover', onPointerOver)
    document.body.addEventListener('mouseout', onPointerOut)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', onFirstMove)
      document.documentElement.removeEventListener('mouseleave', hide)
      document.documentElement.removeEventListener('mouseenter', show)
      document.body.removeEventListener('mouseover', onPointerOver)
      document.body.removeEventListener('mouseout', onPointerOut)
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
