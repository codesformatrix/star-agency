'use client'

import { useReveal } from '@/lib/hooks/useReveal'
import { buildWhatsAppUrl } from '@/lib/site'

const WA_URL = buildWhatsAppUrl("Hi Ali, I saw your portfolio and I'd like a website for my business.")

export default function PrimaryCTA() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-cta"
      className="surface-saffron"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #C67800',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-14% auto auto 62%',
          width: '30rem',
          height: '30rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.14)',
          filter: 'blur(22px)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, 0.95fr)',
          gap: 28,
          alignItems: 'end',
          paddingTop: 'clamp(5rem,10vw,9rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
        }}
      >
        <div>
          <p className="section-tag" style={{ color: 'rgba(17,17,17,0.58)' }}>
            07 - Start now
          </p>
          <h2
            data-reveal
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem,6vw,6rem)',
              fontWeight: 800,
              fontStyle: 'italic',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: '#111111',
              maxWidth: '11ch',
              marginBottom: 18,
            }}
          >
            If the website is weakening the brand, this is the right time to fix it.
          </h2>
          <p
            data-reveal
            data-delay="0.08"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.2vw,1.08rem)',
              lineHeight: 1.88,
              color: '#3A2800',
              maxWidth: '36ch',
            }}
          >
            Share the current website, Instagram, or business context. STAR will build the first
            version before asking for payment, so the quality is visible before the commitment is.
          </p>
        </div>

        <div
          data-reveal
          data-delay="0.12"
          style={{
            padding: 'clamp(1.5rem,2.8vw,2rem)',
            borderRadius: 30,
            background: 'rgba(17,17,17,0.88)',
            color: '#FAFAF8',
            boxShadow: '0 24px 56px rgba(17,17,17,0.16)',
          }}
        >
          <div style={{ display: 'grid', gap: 16, marginBottom: 22 }}>
            {[
              'No upfront payment',
              'First version built before payment',
              'WhatsApp-first review and feedback flow',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: 9999,
                    background: '#E8940A',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(250,250,248,0.84)',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-saffron"
            data-cursor="open"
            style={{ width: '100%', justifyContent: 'center', marginBottom: 14 }}
          >
            Chat on WhatsApp
          </a>

          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(250,250,248,0.44)',
            }}
          >
            See the work first. Decide after.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 940px) {
          #section-cta .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
