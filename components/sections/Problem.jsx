'use client'

/**
 * Problem.jsx — Section 02
 *
 * Purpose: Agitate the pain before presenting the solution.
 * The visitor (an Indian business owner) recognises their situation
 * and feels understood before Ali has pitched anything.
 *
 * Layout:
 *  - Dark #111111 background — dramatic shift from white hero
 *  - Running marquee of pain keywords (CSS animation, zero JS cost)
 *  - Large Fraunces italic central statement
 *  - 3 numbered pain points in a grid
 */

import { useReveal } from '@/lib/hooks/useReveal'

const MARQUEE_WORDS = [
  'Outdated website',
  '✦',
  'Losing clients',
  '✦',
  'No online trust',
  '✦',
  'Invisible to Google',
  '✦',
  'Looks unprofessional',
  '✦',
  'Competitors winning',
  '✦',
]

const PAIN_POINTS = [
  {
    num: '01',
    title: 'First impressions happen in 3 seconds',
    body:  'Before a potential client calls you, they judge your business entirely on how your website looks. 94% of first impressions are design-related. A bad website costs you the meeting before it starts.',
  },
  {
    num: '02',
    title: 'Your competitors look more established',
    body:  'When a client searches for an architect or wedding planner in Jaipur, they compare websites side by side. If yours looks old or generic, they assume your work is too — regardless of how good it actually is.',
  },
  {
    num: '03',
    title: 'A website built before 2023 is working against you',
    body:  "The way people browse, trust, and decide has changed entirely in the AI era. Websites that don't move, don't load fast, and don't feel premium are sending one clear signal: this business isn't keeping up.",
  },
]

export default function Problem() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-problem"
      style={{
        backgroundColor: '#111111',
        color:           '#FAFAF8',
        overflow:        'hidden',
      }}
    >

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          borderTop:    '1px solid #1E1E1E',
          borderBottom: '1px solid #1E1E1E',
          padding:      '14px 0',
          overflow:     'hidden',
          whiteSpace:   'nowrap',
        }}
      >
        {/* Duplicate for seamless loop */}
        {[0, 1].map(n => (
          <span
            key={n}
            style={{
              display:       'inline-block',
              animation:     'marqueeScroll 22s linear infinite',
              paddingRight:   80,
            }}
          >
            {MARQUEE_WORDS.map((word, i) => (
              <span
                key={i}
                style={{
                  fontFamily:    'var(--font-ui)',
                  fontSize:       12,
                  fontWeight:     word === '✦' ? 400 : 500,
                  letterSpacing:  word === '✦' ? 0 : '0.08em',
                  textTransform: 'uppercase',
                  color:          word === '✦' ? '#E8940A' : '#555553',
                  marginRight:    32,
                }}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>

      {/* ── Central statement ────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1440,
          margin:  '0 auto',
          padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,4vw,4rem)',
        }}
      >
        <div data-reveal style={{ marginBottom: 'clamp(1rem,2vw,1.5rem)' }}>
          <span style={{
            fontFamily:    'var(--font-ui)',
            fontSize:       10,
            fontWeight:     500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color:         '#555553',
            display:       'inline-flex',
            alignItems:    'center',
            gap:            12,
          }}>
            <span style={{ display:'block', width:28, height:1, background:'#555553' }} />
            02 — The Problem
          </span>
        </div>

        <h2
          data-reveal
          data-delay="0.1"
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.5rem,6vw,6rem)',
            fontWeight:     800,
            fontStyle:     'italic',
            lineHeight:     1.0,
            letterSpacing: '-0.03em',
            color:         '#FAFAF8',
            maxWidth:      '16ch',
            marginBottom:  'clamp(4rem,8vw,7rem)',
          }}
        >
          Your competitors are getting your clients. Your website is why.
        </h2>

        {/* ── Pain points grid ──────────────────────────────────────────── */}
        <div
          data-reveal="stagger-parent"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                  1,
            borderTop:           '1px solid #1E1E1E',
          }}
        >
          {PAIN_POINTS.map(({ num, title, body }) => (
            <div
              key={num}
              data-stagger-child
              style={{
                padding:       'clamp(2rem,4vw,3rem) clamp(1.5rem,3vw,2.5rem)',
                borderRight:   '1px solid #1E1E1E',
                borderBottom:  '1px solid #1E1E1E',
              }}
            >
              <span style={{
                fontFamily:    'var(--font-ui)',
                fontSize:       11,
                fontWeight:     500,
                letterSpacing: '0.12em',
                color:         '#E8940A',
                display:       'block',
                marginBottom:   20,
              }}>
                {num}
              </span>
              <h3 style={{
                fontFamily:    'var(--font-ui)',
                fontSize:      'clamp(1rem,1.4vw,1.25rem)',
                fontWeight:     600,
                lineHeight:     1.3,
                color:         '#FAFAF8',
                marginBottom:   16,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize:    14,
                lineHeight:  1.75,
                color:      '#555553',
                fontWeight:  400,
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee keyframe ─────────────────────────────────────────────── */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  )
}