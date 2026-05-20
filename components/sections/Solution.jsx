'use client'

import { useReveal } from '@/lib/hooks/useReveal'

const FEATURES = [
  {
    num: '01',
    title: 'Designed for your category, not copied from a template',
    body:
      'The visual system starts with your industry, audience, and positioning so the final website feels aligned with the brand, not borrowed from another business.',
  },
  {
    num: '02',
    title: 'Motion that guides attention instead of distracting from it',
    body:
      'Parallax, pacing, and reveal choreography are used to control emphasis, improve storytelling, and make the experience feel more intentional.',
  },
  {
    num: '03',
    title: 'Built to support premium positioning and better outreach',
    body:
      'The result is more than a working site. It becomes a portfolio-grade trust asset that helps prospects take the business seriously before the first reply.',
  },
]

export default function Solution() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-solution"
      className="surface-light"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EBEBEA',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-12% auto auto -8%',
          width: '28rem',
          height: '28rem',
          borderRadius: '50%',
          background: 'rgba(232,148,10,0.09)',
          filter: 'blur(36px)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.02fr) minmax(0, 0.98fr)',
          gap: 28,
          paddingTop: 'clamp(5rem,10vw,9rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
        }}
      >
        <div style={{ display: 'grid', gap: 20 }}>
          <div data-reveal>
            <p className="section-tag">03 - The solution</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem,6vw,5.6rem)',
                fontWeight: 800,
                fontStyle: 'italic',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                color: '#111111',
                maxWidth: '10ch',
                marginBottom: 18,
              }}
            >
              A better website should make the business look clearer, sharper, and more valuable.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'clamp(1rem,1.2vw,1.08rem)',
                lineHeight: 1.9,
                color: '#555553',
                maxWidth: '38ch',
              }}
            >
              Every part of the build is there to strengthen perception: the layout, the pacing,
              the typography, the motion, and the path to enquiry.
            </p>
          </div>

          <div
            data-reveal
            data-delay="0.08"
            data-cursor="open"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 420,
              padding: 'clamp(1.8rem,3vw,2.5rem)',
              borderRadius: 34,
              background:
                'linear-gradient(135deg, rgba(17,17,17,0.98), rgba(44,33,20,0.9) 52%, rgba(232,148,10,0.86))',
              boxShadow: '0 34px 80px rgba(17,17,17,0.14)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 'auto -12% -16% auto',
                width: 220,
                height: 220,
                borderRadius: '50%',
                background: 'rgba(250,250,248,0.12)',
                filter: 'blur(12px)',
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gap: 18,
                alignContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '0.55rem 0.85rem',
                    borderRadius: 9999,
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: 'rgba(250,250,248,0.7)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Why it works
                </span>
                <h3
                  style={{
                    marginTop: 18,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem,3.5vw,3.8rem)',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    color: '#FAFAF8',
                    maxWidth: '12ch',
                  }}
                >
                  Show the standard first. Let the work earn the decision.
                </h3>
              </div>

              <div style={{ display: 'grid', gap: 14 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: 'rgba(250,250,248,0.82)',
                    maxWidth: '34ch',
                  }}
                >
                  Instead of selling vague promises, STAR builds the first version so the quality
                  can be judged directly, with much less guesswork on the client side.
                </p>
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#111111',
                  }}
                >
                  Zero upfront cost *
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gap: 18,
            alignContent: 'start',
            paddingTop: 'clamp(1rem,2vw,2.5rem)',
          }}
        >
          {FEATURES.map((feature, index) => (
            <article
              key={feature.num}
              data-stagger-child
              data-cursor="view"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 18,
                alignItems: 'start',
                padding: '1.5rem',
                borderRadius: 28,
                border: '1px solid #EBEBEA',
                background: index === 1 ? '#F7F0E3' : '#FAFAF8',
                boxShadow: '0 20px 48px rgba(17,17,17,0.04)',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  display: 'grid',
                  placeItems: 'center',
                  background: index === 1 ? '#E8940A' : '#111111',
                  color: index === 1 ? '#111111' : '#FAFAF8',
                  fontFamily: 'var(--font-ui)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                {feature.num}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.55rem,2.2vw,2.2rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    color: '#111111',
                    marginBottom: 12,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: '#555553',
                    maxWidth: '38ch',
                  }}
                >
                  {feature.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #section-solution .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
