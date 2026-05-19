import { Suspense } from 'react'
import PortfolioGridClient, { PortfolioGridFallback } from '@/components/work/PortfolioGridClient'
import { allProjects } from '@/lib/data/projects'

export const metadata = {
  title: 'Work',
  description:
    'Selected web design projects for architects, wedding planners, hospitality brands, and premium Indian businesses.',
}

export default function WorkPage() {
  return (
    <section className="section surface-light" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-12% auto auto 62%',
          width: '28rem',
          height: '28rem',
          borderRadius: '50%',
          background: 'rgba(232,148,10,0.1)',
          filter: 'blur(28px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div
          className="work-page__intro"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(260px, 0.85fr)',
            gap: 32,
            alignItems: 'end',
          }}
        >
          <div>
            <p className="section-tag">Portfolio</p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.2rem,7vw,6.8rem)',
                fontWeight: 800,
                fontStyle: 'italic',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                color: '#111111',
                maxWidth: '10ch',
              }}
            >
              Work that makes the next conversation feel easier to trust.
            </h1>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.2vw,1.125rem)',
              lineHeight: 1.8,
              color: '#555553',
              maxWidth: '34ch',
              justifySelf: 'end',
            }}
          >
            The visuals are still a curated temporary set, but the portfolio structure, case-study
            rhythm, and trust-building role are already the real system.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 18,
          }}
        >
          {[
            {
              label: 'Projects',
              value: `${allProjects.length}`,
              note: 'Curated portfolio system',
            },
            {
              label: 'Primary sectors',
              value: '3',
              note: 'Architecture, weddings, hospitality',
            },
            {
              label: 'Purpose',
              value: 'Trust asset',
              note: 'Built for outreach and deeper proof',
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '24px 24px 22px',
                borderRadius: 24,
                border: '1px solid #EBEBEA',
                backgroundColor: '#F8F6F2',
                boxShadow: '0 16px 40px rgba(17,17,17,0.04)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#888886',
                  marginBottom: 14,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem,3vw,2.5rem)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                  marginBottom: 10,
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: '#555553',
                }}
              >
                {item.note}
              </p>
            </div>
          ))}
        </div>

        <Suspense fallback={<PortfolioGridFallback projects={allProjects} />}>
          <PortfolioGridClient projects={allProjects} />
        </Suspense>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-page__intro {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
