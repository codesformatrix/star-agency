'use client'

/**
 * Results.jsx — Section 05
 *
 * What clients actually gain — bold Fraunces italic statements.
 * Dark background — contrast from the warm process section.
 * Each statement scrolls in on its own trigger — staggered impact.
 */

import { useReveal } from '@/lib/hooks/useReveal'

const RESULTS = [
  {
    stat:  '3×',
    label: 'more client enquiries',
    body:  'When your website communicates quality, potential clients reach out instead of scrolling past. Your inbox changes.',
  },
  {
    stat:  '↑',
    label: 'premium brand perception',
    body:  'The same business, with the right website, commands higher fees. Clients arrive already trusting you. Negotiations are easier.',
  },
  {
    stat:  '✦',
    label: 'competitors start noticing you',
    body:  'When your digital presence is stronger than everyone around you, the market shifts. Referrals increase. Your reputation compounds.',
  },
]

export default function Results() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-results"
      style={{
        backgroundColor: '#111111',
        color:           '#FAFAF8',
        borderTop:       '1px solid #1E1E1E',
      }}
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
              color:         '#555553',
              display:       'inline-flex',
              alignItems:    'center',
              gap:            12,
            }}>
              <span style={{ display:'block', width:28, height:1, background:'#555553' }} />
              05 — The Results
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
              color:         '#FAFAF8',
              maxWidth:      '22ch',
            }}
          >
            What changes when your website works for you.
          </h2>
        </div>

        {/* Result rows */}
        <div style={{ borderTop: '1px solid #1E1E1E' }}>
          {RESULTS.map(({ stat, label, body }, i) => (
            <div
              key={i}
              data-reveal
              data-delay={`${i * 0.1}`}
              style={{
                display:       'grid',
                gridTemplateColumns: 'clamp(4rem,8vw,7rem) 1fr 1fr',
                gap:           'clamp(1rem,3vw,2.5rem)',
                alignItems:    'center',
                padding:       'clamp(2rem,4vw,3rem) 0',
                borderBottom:  '1px solid #1E1E1E',
              }}
              className="result-row"
            >
              {/* Stat */}
              <span style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem,4vw,4rem)',
                fontWeight:     800,
                fontStyle:     'italic',
                color:         '#E8940A',
                lineHeight:     1,
                letterSpacing: '-0.02em',
              }}>
                {stat}
              </span>

              {/* Label */}
              <h3 style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.25rem,2.5vw,2.5rem)',
                fontWeight:     700,
                fontStyle:     'italic',
                lineHeight:     1.1,
                letterSpacing: '-0.02em',
                color:         '#FAFAF8',
              }}>
                {label}
              </h3>

              {/* Body */}
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

      <style>{`
        @media (max-width: 768px) {
          .result-row {
            grid-template-columns: auto 1fr !important;
            grid-template-rows: auto auto !important;
          }
          .result-row p {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </section>
  )
}