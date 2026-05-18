'use client'

/**
 * Solution.jsx — Section 03
 *
 * What STAR builds differently — shown as 4 feature cards.
 * Light background — visual relief after the dark Problem section.
 */

import { useReveal } from '@/lib/hooks/useReveal'

const FEATURES = [
  {
    num:   '01',
    title: 'Custom-built, never templated',
    body:  'Every website is designed from scratch around your specific business, your clients, and your city. No Wix. No WordPress themes. No "pick a template." Just a site that could only be yours.',
    accent: false,
  },
  {
    num:   '02',
    title: '3D animations and interactions that stop people mid-scroll',
    body:  'Using Three.js and GSAP — the same tools used by Apple, Stripe, and Awwwards-winning studios — we build websites that move with purpose and feel physically real.',
    accent: false,
  },
  {
    num:   '03',
    title: 'Built for the Indian market, credible globally',
    body:  'We understand how Indian business owners think, what their clients trust, and how to position a local business as a premium choice — without looking generic or corporate.',
    accent: false,
  },
  {
    num:   '04',
    title: 'You pay nothing until you love it',
    body:  "We build the entire website first. You see it, you review it, you request changes. Only once you're genuinely impressed do you pay. Zero risk. Zero upfront cost. No contracts.",
    accent: true,  // saffron highlight card
  },
]

export default function Solution() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-solution"
      style={{
        backgroundColor: '#FAFAF8',
        borderTop:       '1px solid #EBEBEA',
      }}
    >
      <div style={{
        maxWidth: 1440,
        margin:  '0 auto',
        padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem,4vw,4rem)',
      }}>

        {/* Header */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-end',
          flexWrap:       'wrap',
          gap:             24,
          marginBottom:  'clamp(3rem,6vw,5rem)',
        }}>
          <div>
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
                03 — The Solution
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
                maxWidth:      '18ch',
              }}
            >
              What we build. And why it works.
            </h2>
          </div>

          <p
            data-reveal
            data-delay="0.15"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize:    'clamp(0.875rem,1vw,1rem)',
              lineHeight:  1.75,
              color:      '#888886',
              maxWidth:   '38ch',
            }}
          >
            Every decision we make — every animation, every font choice, every section — is designed to make your potential clients trust you before they even read a word.
          </p>
        </div>

        {/* Feature cards */}
        <div
          data-reveal="stagger-parent"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap:                  1,
            border:              '1px solid #EBEBEA',
            borderRadius:         16,
            overflow:            'hidden',
            backgroundColor:     '#EBEBEA',
          }}
        >
          {FEATURES.map(({ num, title, body, accent }) => (
            <div
              key={num}
              data-stagger-child
              style={{
                backgroundColor: accent ? '#E8940A' : '#FAFAF8',
                padding:        'clamp(2rem,3.5vw,3rem)',
                display:        'flex',
                flexDirection:  'column',
                gap:             20,
                transition:     'background-color 0.3s ease',
              }}
            >
              <span style={{
                fontFamily:    'var(--font-ui)',
                fontSize:       11,
                fontWeight:     500,
                letterSpacing: '0.12em',
                color:          accent ? '#111111' : '#888886',
              }}>
                {num}
              </span>

              <h3 style={{
                fontFamily:  'var(--font-ui)',
                fontSize:    'clamp(1.0625rem,1.3vw,1.25rem)',
                fontWeight:   600,
                lineHeight:   1.3,
                color:        accent ? '#111111' : '#111111',
                flexGrow:     1,
              }}>
                {title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-ui)',
                fontSize:    14,
                lineHeight:  1.75,
                color:       accent ? '#3a2800' : '#888886',
                fontWeight:  400,
              }}>
                {body}
              </p>

              {accent && (
                <span style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:       32,
                  fontStyle:     'italic',
                  fontWeight:     700,
                  color:         '#111111',
                  letterSpacing: '-0.02em',
                  lineHeight:     1,
                  marginTop:      8,
                }}>
                  Zero risk. ✦
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}