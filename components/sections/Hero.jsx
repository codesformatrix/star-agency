'use client'

/**
 * Hero.jsx — Section 01
 *
 * Layout (desktop):
 * ┌─────────────────────┬──────────────────────┐
 * │  Tag                │                      │
 * │  H1 (Fraunces)      │   Three.js Canvas    │
 * │  Sub                │   (floating cards)   │
 * │  CTAs               │                      │
 * └─────────────────────┴──────────────────────┘
 * │ Scroll indicator                            │
 *
 * Layout (mobile): stacked, canvas hidden for perf
 *
 * Load sequence:
 *  0.0s  Section visible, canvas starts rendering
 *  0.4s  Agency tag fades up
 *  0.6s  Headline chars stagger in (power4.out)
 *  1.5s  Sub-headline fades up
 *  1.7s  CTA buttons fade up
 *  1.9s  Scroll indicator fades in
 */

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { gsap } from 'gsap'
import { MOTION } from '@/lib/motion'

// Dynamic import — Three.js cannot run on the server
const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr:     false,
  loading: () => null,
})

/* ── Manual char split (no GSAP Club needed) ─────────────────────────── */
function splitToChars(el) {
  const text = el.innerText.trim()
  el.setAttribute('aria-label', text)  // accessibility
  el.innerHTML = ''

  const chars = []
  text.split('').forEach((char) => {
    const span = document.createElement('span')
    span.style.cssText = 'display:inline-block; will-change:transform,opacity;'
    span.textContent   = char === ' ' ? '\u00A0' : char
    el.appendChild(span)
    chars.push(span)
  })
  return chars
}

export default function Hero() {
  const sectionRef  = useRef(null)
  const tagRef      = useRef(null)
  const headlineRef = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const scrollRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline into chars
      const chars = splitToChars(headlineRef.current)

      // Initial states — everything invisible
      gsap.set([tagRef.current, subRef.current, ctaRef.current, scrollRef.current], {
        opacity: 0, y: 24,
      })
      gsap.set(chars, { opacity: 0, y: 48 })

      // Master timeline
      const tl = gsap.timeline({
        defaults: { ease: MOTION.ease.out },
        delay: 0.1,
      })

      tl
        // Tag
        .to(tagRef.current, {
          opacity:  1,
          y:        0,
          duration: MOTION.dur.normal,
        }, 0.3)

        // Headline chars stagger
        .to(chars, {
          opacity:  1,
          y:        0,
          duration: 0.9,
          ease:     'power4.out',
          stagger:  0.018,
        }, 0.55)

        // Sub-headline
        .to(subRef.current, {
          opacity:  1,
          y:        0,
          duration: MOTION.dur.normal,
        }, 1.5)

        // CTAs
        .to(ctaRef.current, {
          opacity:  1,
          y:        0,
          duration: MOTION.dur.normal,
        }, 1.7)

        // Scroll indicator
        .to(scrollRef.current, {
          opacity:  1,
          y:        0,
          duration: 0.5,
        }, 1.9)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position:       'relative',
        minHeight:      '100svh',
        backgroundColor:'#FAFAF8',
        display:        'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems:     'center',
        overflow:       'hidden',
      }}
      className="hero-section"
    >

      {/* ── Left: text content ─────────────────────────────────────────── */}
      <div
        style={{
          position:      'relative',
          zIndex:         10,
          padding:       'clamp(5rem,10vw,8rem) 0 clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,4rem)',
          display:       'flex',
          flexDirection: 'column',
          justifyContent:'center',
          maxWidth:       760,
        }}
      >

        {/* Section tag */}
        <div
          ref={tagRef}
          style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:            12,
            fontFamily:    'var(--font-ui)',
            fontSize:       10,
            fontWeight:     500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color:         '#888886',
            marginBottom:   32,
          }}
        >
          <span style={{
            display:    'block',
            width:       28,
            height:      1,
            background: '#888886',
            flexShrink:  0,
          }} />
          Web Design Agency
          <span style={{ color: '#E8940A', fontSize: 12 }}>✦</span>
          Jaipur, India
        </div>

        {/* Headline — Fraunces 800 italic */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(3rem,6vw,7rem)',
            fontWeight:     800,
            fontStyle:     'italic',
            lineHeight:     1.0,
            letterSpacing: '-0.03em',
            color:         '#111111',
            marginBottom:   28,
            maxWidth:      '12ch',
          }}
        >
          Websites that make businesses impossible to ignore.
        </h1>

        {/* Sub-headline */}
        <p
          ref={subRef}
          style={{
            fontFamily:  'var(--font-ui)',
            fontSize:    'clamp(0.9375rem,1.1vw,1.0625rem)',
            fontWeight:   400,
            lineHeight:   1.75,
            color:       '#888886',
            maxWidth:    '44ch',
            marginBottom: 40,
          }}
        >
          Premium web design for architects, wedding planners, and Indian
          businesses ready to grow.{' '}
          <span style={{ color: '#111111', fontWeight: 500 }}>
            Zero upfront cost
          </span>{' '}
          — you pay only if you love it.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault()
              window.lenis?.scrollTo('#section-work', { duration: 1.2 })
            }}
            style={{
              fontFamily:      'var(--font-ui)',
              fontSize:         13,
              fontWeight:       600,
              letterSpacing:   '0.04em',
              color:           '#FAFAF8',
              backgroundColor: '#111111',
              padding:         '13px 28px',
              borderRadius:     9999,
              textDecoration:  'none',
              transition:      'background 0.2s, transform 0.2s',
              display:         'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            See our work
          </a>

          <Link
            href="/contact"
            style={{
              fontFamily:      'var(--font-ui)',
              fontSize:         13,
              fontWeight:       500,
              letterSpacing:   '0.04em',
              color:           '#111111',
              backgroundColor: 'transparent',
              padding:         '12px 28px',
              borderRadius:     9999,
              textDecoration:  'none',
              border:          '1px solid #EBEBEA',
              transition:      'border-color 0.2s, transform 0.2s',
              display:         'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#888886'
              e.currentTarget.style.transform   = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#EBEBEA'
              e.currentTarget.style.transform   = 'translateY(0)'
            }}
          >
            Let's talk
          </Link>
        </div>

      </div>

      {/* ── Right: Three.js canvas ─────────────────────────────────────── */}
      <div
        style={{
          position:       'relative',
          height:         '100%',
          minHeight:      '100svh',
        }}
        className="hero-canvas-col"
      >
        <HeroCanvas />
      </div>

      {/* ── Scroll indicator (absolute, bottom-left) ────────────────────── */}
      <div
        ref={scrollRef}
        style={{
          position:   'absolute',
          bottom:     '2.5rem',
          left:      'clamp(1.5rem,4vw,4rem)',
          display:   'flex',
          alignItems: 'center',
          gap:         12,
          zIndex:     10,
        }}
      >
        {/* Animated vertical line */}
        <span
          style={{
            display:         'block',
            width:            1,
            height:           44,
            backgroundColor: '#EBEBEA',
            position:        'relative',
            overflow:        'hidden',
            borderRadius:    9999,
          }}
        >
          <span style={{
            position:        'absolute',
            top:             '-100%',
            left:             0,
            right:            0,
            height:          '100%',
            backgroundColor: '#888886',
            animation:       'scrollDrop 1.8s cubic-bezier(0.16,1,0.3,1) infinite',
          }} />
        </span>
        <span style={{
          fontFamily:    'var(--font-ui)',
          fontSize:       10,
          fontWeight:     500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color:         '#888886',
          writingMode:   'vertical-rl',
        }}>
          Scroll
        </span>
      </div>

      {/* ── Responsive + animation keyframes ────────────────────────────── */}
      <style>{`
        @keyframes scrollDrop {
          0%   { top: -100%; }
          100% { top:  100%; }
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: 100svh !important;
          }
          .hero-canvas-col {
            display: none !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 55% 45% !important;
          }
        }
      `}</style>

    </section>
  )
}