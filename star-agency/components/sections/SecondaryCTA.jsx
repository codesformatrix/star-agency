'use client'

/**
 * SecondaryCTA.jsx — Section 08
 *
 * Captures visitors not yet ready to commit via WhatsApp.
 * Softer ask: "See all our work first."
 * Dark background — transitions naturally into the dark footer.
 */

import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'

export default function SecondaryCTA() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-alt-cta"
      style={{
        backgroundColor: '#111111',
        borderTop:       '1px solid #1E1E1E',
      }}
    >
      <div style={{
        maxWidth:       1440,
        margin:        '0 auto',
        padding:       'clamp(5rem,10vw,8rem) clamp(1.5rem,4vw,4rem)',
        display:       'flex',
        justifyContent:'space-between',
        alignItems:    'center',
        flexWrap:      'wrap',
        gap:           'clamp(2rem,4vw,3rem)',
      }}>

        {/* Left */}
        <div>
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
              08 — See The Work
            </span>
          </div>

          <h2
            data-reveal
            data-delay="0.1"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem,4.5vw,4rem)',
              fontWeight:     800,
              fontStyle:     'italic',
              lineHeight:     1.05,
              letterSpacing: '-0.02em',
              color:         '#FAFAF8',
              maxWidth:      '22ch',
            }}
          >
            Not convinced yet? Let the work speak first.
          </h2>
        </div>

        {/* Right — links */}
        <div
          data-reveal
          data-delay="0.15"
          style={{
            display:       'flex',
            flexDirection: 'column',
            gap:            16,
            alignItems:    'flex-start',
          }}
        >
          <Link
            href="/work"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.125rem,2vw,1.5rem)',
              fontStyle:     'italic',
              fontWeight:     700,
              color:         '#FAFAF8',
              textDecoration:'none',
              display:       'flex',
              alignItems:    'center',
              gap:            12,
              letterSpacing: '-0.01em',
              transition:    'color 0.2s ease',
              paddingBottom:  12,
              borderBottom:  '1px solid #1E1E1E',
              width:         '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#E8940A'
              e.currentTarget.querySelector('.arrow').style.transform = 'translateX(6px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#FAFAF8'
              e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)'
            }}
          >
            View all projects
            <span
              className="arrow"
              style={{ transition:'transform 0.3s ease', display:'inline-block' }}
            >
              →
            </span>
          </Link>

          <Link
            href="/about"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.125rem,2vw,1.5rem)',
              fontStyle:     'italic',
              fontWeight:     700,
              color:         '#555553',
              textDecoration:'none',
              display:       'flex',
              alignItems:    'center',
              gap:            12,
              letterSpacing: '-0.01em',
              transition:    'color 0.2s ease',
              paddingBottom:  12,
              borderBottom:  '1px solid #1E1E1E',
              width:         '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#FAFAF8'
              e.currentTarget.querySelector('.arrow2').style.transform = 'translateX(6px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#555553'
              e.currentTarget.querySelector('.arrow2').style.transform = 'translateX(0)'
            }}
          >
            About Ali Asgar
            <span
              className="arrow2"
              style={{ transition:'transform 0.3s ease', display:'inline-block' }}
            >
              →
            </span>
          </Link>

          <Link
            href="/contact"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.125rem,2vw,1.5rem)',
              fontStyle:     'italic',
              fontWeight:     700,
              color:         '#555553',
              textDecoration:'none',
              display:       'flex',
              alignItems:    'center',
              gap:            12,
              letterSpacing: '-0.01em',
              transition:    'color 0.2s ease',
              width:         '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#FAFAF8'
              e.currentTarget.querySelector('.arrow3').style.transform = 'translateX(6px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#555553'
              e.currentTarget.querySelector('.arrow3').style.transform = 'translateX(0)'
            }}
          >
            Get in touch
            <span
              className="arrow3"
              style={{ transition:'transform 0.3s ease', display:'inline-block' }}
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}