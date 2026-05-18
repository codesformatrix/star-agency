'use client'

/**
 * Process.jsx — Section 04
 *
 * The zero-upfront-cost model explained clearly.
 * 4 numbered steps with an animated connector line (GSAP ScrollTrigger scaleX).
 * Warm background #F3F1EC — visual variety between white and dark sections.
 */

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '@/lib/hooks/useReveal'
import { MOTION } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num:   '01',
    title: 'We research your business',
    body:  'We study your Google Maps profile, Instagram, client reviews, and competitors. We extract your real visual identity before writing a single line of code.',
  },
  {
    num:   '02',
    title: 'We design and build it',
    body:  'A fully custom website — designed specifically for your industry, your city, and your clients. Every animation, every section, every detail crafted with intent.',
  },
  {
    num:   '03',
    title: 'You review every detail',
    body:  'We show you the live website. You explore it, test it, and tell us what you want changed. We revise until it is exactly right — no limits on feedback.',
  },
  {
    num:   '04',
    title: 'You pay only if you love it',
    body:  'If the website impresses you, you invest in it. If it does not meet your expectations — you owe us nothing. No invoice. No awkward conversation. Just walk away.',
  },
]

export default function Process() {
  const sectionRef  = useReveal()
  const lineRef     = useRef(null)

  /* ── Animate the connector line on scroll ─────────────────────────────── */
  useEffect(() => {
    if (!lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: MOTION.dur.xslow,
          ease:     MOTION.ease.smooth,
          scrollTrigger: {
            trigger:       lineRef.current,
            start:         'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="section-process"
      style={{ backgroundColor: '#F3F1EC', borderTop: '1px solid #E5E3DE' }}
    >
      <div style={{
        maxWidth: 1440,
        margin:  '0 auto',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,4vw,4rem)',
      }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem,6vw,5rem)' }}>
          <div data-reveal style={{ marginBottom: 16 }}>
            <span style={{
              fontFamily:    'var(--font-ui)',
              fontSize:       10,
              fontWeight:     500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         '#888886',
              display:       'inline-flex',
              alignItems:    'center',
              gap:            12,
            }}>
              <span style={{ display:'block', width:28, height:1, background:'#888886' }} />
              04 — How It Works
            </span>
          </div>

          <h2
            data-reveal
            data-delay="0.1"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.25rem,5vw,4.25rem)',
              fontWeight:     800,
              fontStyle:     'italic',
              lineHeight:     1.05,
              letterSpacing: '-0.02em',
              color:         '#111111',
              maxWidth:      '20ch',
            }}
          >
            Simple process. No risk. Guaranteed results.
          </h2>
        </div>

        {/* ── Steps ──────────────────────────────────────────────────────── */}
        <div style={{ position: 'relative' }}>

          {/* Connector line — desktop only */}
          <div style={{
            position:      'absolute',
            top:            28,
            left:          'calc(28px + 0.5rem)',
            right:         'calc(28px + 0.5rem)',
            height:         1,
            backgroundColor:'#D4D2CE',
            transformOrigin:'left center',
          }}
            className="process-line-track"
          >
            <div
              ref={lineRef}
              style={{
                position:        'absolute',
                inset:            0,
                backgroundColor: '#E8940A',
                transformOrigin: 'left center',
                transform:       'scaleX(0)',
              }}
            />
          </div>

          {/* Steps grid */}
          <div
            data-reveal="stagger-parent"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 'clamp(2rem,4vw,3rem)',
            }}
          >
            {STEPS.map(({ num, title, body }) => (
              <div key={num} data-stagger-child>

                {/* Step number circle */}
                <div style={{
                  width:           56,
                  height:          56,
                  borderRadius:    '50%',
                  backgroundColor: '#111111',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  marginBottom:     24,
                  position:        'relative',
                  zIndex:           1,
                  flexShrink:       0,
                }}>
                  <span style={{
                    fontFamily:    'var(--font-ui)',
                    fontSize:       12,
                    fontWeight:     600,
                    letterSpacing: '0.08em',
                    color:         '#FAFAF8',
                  }}>
                    {num}
                  </span>
                </div>

                <h3 style={{
                  fontFamily:  'var(--font-ui)',
                  fontSize:    'clamp(1rem,1.3vw,1.125rem)',
                  fontWeight:   600,
                  lineHeight:   1.3,
                  color:       '#111111',
                  marginBottom: 12,
                }}>
                  {title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize:    14,
                  lineHeight:  1.75,
                  color:      '#888886',
                  fontWeight:  400,
                }}>
                  {body}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-line-track { display: none !important; }
        }
      `}</style>
    </section>
  )
}