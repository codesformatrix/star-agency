'use client'

import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'

export default function SecondaryCTA() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-alt-cta"
      className="surface-dark"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1E1E1E',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 0.74fr)',
          gap: 28,
          alignItems: 'center',
          paddingTop: 'clamp(5rem,10vw,8rem)',
          paddingBottom: 'clamp(5rem,10vw,8rem)',
        }}
      >
        <div>
          <p className="section-tag" style={{ color: 'rgba(250,250,248,0.46)' }}>
            08 - See the work
          </p>
          <h2
            data-reveal
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem,5vw,4.6rem)',
              fontWeight: 800,
              fontStyle: 'italic',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: '#FAFAF8',
              maxWidth: '12ch',
              marginBottom: 18,
            }}
          >
            If the offer sounds strong, let the portfolio confirm it.
          </h2>
          <p
            data-reveal
            data-delay="0.08"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.18vw,1.06rem)',
              lineHeight: 1.88,
              color: 'rgba(250,250,248,0.62)',
              maxWidth: '36ch',
            }}
          >
            Some visitors are ready to talk immediately. Others want to study the work first. Both
            paths should feel intentional.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gap: 14,
          }}
        >
          {[
            { href: '/work', label: 'View all projects', state: 'view' },
            { href: '/about', label: 'Read Ali Asgar\'s story', state: 'open' },
            { href: '/contact', label: 'Start with a project brief', state: 'open' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-stagger-child
              data-cursor={item.state}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                padding: '1.2rem 1.25rem',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.04)',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem,2vw,1.75rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#FAFAF8',
              }}
            >
              <span>{item.label}</span>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#E8940A',
                }}
              >
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          #section-alt-cta .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
