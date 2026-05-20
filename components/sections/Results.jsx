'use client'

import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'

const RESULTS = [
  {
    stat: '01',
    label: 'The business feels more established before the first conversation.',
    body:
      'A more deliberate website changes the tone of the enquiry. Visitors arrive with more confidence, more context, and a stronger sense of quality.',
    accent: '#E8940A',
    surface: 'rgba(232,148,10,0.14)',
  },
  {
    stat: '02',
    label: 'Premium positioning becomes easier to support.',
    body:
      'When the presentation finally matches the standard of the work, the brand no longer looks like it should compete on price alone.',
    accent: '#FAFAF8',
    surface: 'rgba(250,250,248,0.12)',
  },
  {
    stat: '03',
    label: 'Outreach starts relying on proof instead of persuasion.',
    body:
      'A stronger website does part of the selling by itself. Instead of explaining taste and capability in messages, the business can point prospects to proof.',
    accent: '#F2B24A',
    surface: 'rgba(242,178,74,0.16)',
  },
]

export default function Results() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-results"
      className="surface-dark"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1E1E1E',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '12% auto auto 10%',
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'rgba(232,148,10,0.12)',
          filter: 'blur(30px)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 'clamp(5rem,10vw,9rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
        }}
      >
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 0.72fr)',
            gap: 28,
            alignItems: 'end',
            marginBottom: 'clamp(2.4rem,5vw,4rem)',
          }}
        >
          <div>
            <p className="section-tag" style={{ color: 'rgba(250,250,248,0.5)' }}>
              05 - The results
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem,6vw,5.6rem)',
                fontWeight: 800,
                fontStyle: 'italic',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                color: '#FAFAF8',
                maxWidth: '10ch',
              }}
            >
              Better presentation changes how the business is valued.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.18vw,1.06rem)',
              lineHeight: 1.88,
              color: 'rgba(250,250,248,0.62)',
              maxWidth: '34ch',
              justifySelf: 'end',
            }}
          >
            The outcome is not just a nicer interface. It is a business that feels more credible,
            more distinctive, and more memorable the moment someone lands on the site.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gap: 16,
          }}
        >
          {RESULTS.map((item, index) => (
            <article
              key={item.stat}
              data-stagger-child
              className="results-point"
              style={{
                '--results-accent': item.accent,
                '--results-surface': item.surface,
                display: 'grid',
                gridTemplateColumns: 'minmax(86px, 0.16fr) minmax(0, 0.92fr) minmax(0, 0.92fr)',
                gap: 24,
                alignItems: 'start',
                padding: '1.7rem 1rem',
                borderTop: index === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                transition:
                  'background-color 280ms cubic-bezier(0.16, 1, 0.3, 1), transform 280ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                className="results-point__stat"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: item.accent,
                }}
              >
                {item.stat}
              </span>

              <h3
                className="results-point__label"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem,2.2vw,2.35rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: '#FAFAF8',
                  maxWidth: '16ch',
                }}
              >
                {item.label}
              </h3>

              <p
                className="results-point__body"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(0.95rem,0.98vw,1rem)',
                  lineHeight: 1.8,
                  color: 'rgba(250,250,248,0.64)',
                  maxWidth: '40ch',
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div
          data-reveal
          data-delay="0.18"
          style={{
            marginTop: 30,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(250,250,248,0.44)',
            }}
          >
            Built to strengthen trust before the first call
          </span>
          <Link
            href="/work"
            className="btn btn-outline"
            data-cursor="view"
            style={{ color: '#FAFAF8', borderColor: 'rgba(255,255,255,0.18)' }}
          >
            See the portfolio
          </Link>
        </div>
      </div>

      <style>{`
        .results-point:hover {
          background: var(--results-surface);
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.14) !important;
        }

        .results-point:hover .results-point__label,
        .results-point:hover .results-point__stat {
          color: var(--results-accent) !important;
        }

        .results-point:hover .results-point__body {
          color: rgba(250,250,248,0.84) !important;
        }

        @media (max-width: 980px) {
          #section-results [data-reveal] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 820px) {
          #section-results article {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
