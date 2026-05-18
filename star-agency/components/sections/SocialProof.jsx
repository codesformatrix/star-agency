'use client'

/**
 * SocialProof.jsx — Section 06
 *
 * Real testimonials + project card grid.
 * Light background — breathing room after two dark sections.
 *
 * Replace TESTIMONIALS and PROJECTS with real data as it becomes available.
 * Project cards link to /work/[slug] individual case studies.
 */

import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'

/* ── Placeholder data — replace with real client content ──────────────── */

const TESTIMONIALS = [
  {
    quote: 'We were sceptical at first — build it for free? But the website Ali delivered was better than anything we had seen from agencies charging ₹80,000. We signed immediately.',
    author: 'Rohan Mehta',
    role:   'Principal Architect, Jaipur',
    initial:'R',
  },
  {
    quote: 'Our enquiry rate doubled in the first month. Clients now mention the website specifically when they call. That never happened before.',
    author: 'Priya Sharma',
    role:   'Wedding Planner, Jaipur',
    initial:'P',
  },
]

const PROJECTS = [
  { title: 'Roshan Events',       industry: 'Events',       slug: 'roshan-events',  color: '#1a2240' },
  { title: 'Studio Verma',        industry: 'Architecture', slug: 'studio-verma',   color: '#0f2820' },
  { title: 'The Garden Wedding',  industry: 'Wedding',      slug: 'garden-wedding', color: '#2d1a10' },
  { title: 'Aangan Restaurant',   industry: 'Restaurant',   slug: 'aangan',         color: '#2d1020' },
  { title: 'Jain Architects',     industry: 'Architecture', slug: 'jain-architects',color: '#1a1040' },
  { title: 'Moments by Kavya',    industry: 'Wedding',      slug: 'moments-kavya',  color: '#102820' },
]

export default function SocialProof() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-proof"
      style={{ backgroundColor: '#FAFAF8', borderTop: '1px solid #EBEBEA' }}
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
              06 — Proof
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
            Businesses that took the leap.
          </h2>
        </div>

        {/* ── Testimonials ──────────────────────────────────────────────── */}
        <div
          data-reveal="stagger-parent"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                  24,
            marginBottom:        'clamp(4rem,7vw,6rem)',
          }}
        >
          {TESTIMONIALS.map(({ quote, author, role, initial }) => (
            <div
              key={author}
              data-stagger-child
              style={{
                backgroundColor: '#F3F1EC',
                borderRadius:     16,
                padding:         'clamp(2rem,3vw,2.5rem)',
                display:         'flex',
                flexDirection:   'column',
                gap:              20,
              }}
            >
              {/* Quote mark */}
              <span style={{
                fontFamily:  'var(--font-display)',
                fontSize:     48,
                fontStyle:   'italic',
                color:       '#E8940A',
                lineHeight:   1,
                display:     'block',
                marginBottom:-8,
              }}>
                "
              </span>

              <p style={{
                fontFamily:  'var(--font-ui)',
                fontSize:    'clamp(0.9375rem,1.1vw,1rem)',
                lineHeight:   1.75,
                color:       '#333332',
                fontWeight:   400,
                flex:         1,
              }}>
                {quote}
              </p>

              <div style={{ display:'flex', alignItems:'center', gap:12, borderTop:'1px solid #E5E3DE', paddingTop:16 }}>
                <div style={{
                  width:           36,
                  height:          36,
                  borderRadius:    '50%',
                  backgroundColor: '#111111',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  flexShrink:       0,
                }}>
                  <span style={{ fontFamily:'var(--font-ui)', fontSize:13, fontWeight:600, color:'#FAFAF8' }}>
                    {initial}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily:'var(--font-ui)', fontSize:13, fontWeight:600, color:'#111111', marginBottom:2 }}>
                    {author}
                  </p>
                  <p style={{ fontFamily:'var(--font-ui)', fontSize:11, color:'#888886', letterSpacing:'0.04em' }}>
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Project grid ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <div data-reveal style={{ marginBottom: 24, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{
              fontFamily:    'var(--font-ui)',
              fontSize:       12,
              fontWeight:     500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color:         '#888886',
            }}>
              Selected work
            </span>
            <Link href="/work" style={{
              fontFamily:    'var(--font-ui)',
              fontSize:       12,
              fontWeight:     500,
              color:         '#111111',
              textDecoration:'none',
              display:       'flex',
              alignItems:    'center',
              gap:            6,
              letterSpacing: '0.04em',
            }}>
              View all work →
            </Link>
          </div>

          <div
            data-reveal="stagger-parent"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap:                  12,
            }}
          >
            {PROJECTS.map(({ title, industry, slug, color }) => (
              <Link
                key={slug}
                href={`/work/${slug}`}
                data-stagger-child
                data-cursor="view"
                style={{
                  display:         'block',
                  textDecoration:  'none',
                  borderRadius:     12,
                  overflow:        'hidden',
                  aspectRatio:    '4 / 3',
                  backgroundColor: color,
                  position:       'relative',
                  transition:     'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Overlay */}
                <div style={{
                  position:        'absolute',
                  inset:            0,
                  background:      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                  display:         'flex',
                  flexDirection:   'column',
                  justifyContent:  'flex-end',
                  padding:          20,
                }}>
                  <span style={{
                    fontFamily:    'var(--font-ui)',
                    fontSize:       10,
                    fontWeight:     500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'rgba(255,255,255,0.5)',
                    marginBottom:   6,
                  }}>
                    {industry}
                  </span>
                  <span style={{
                    fontFamily:  'var(--font-ui)',
                    fontSize:     14,
                    fontWeight:   600,
                    color:       '#FAFAF8',
                    lineHeight:   1.3,
                  }}>
                    {title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}