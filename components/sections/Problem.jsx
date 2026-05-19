'use client'

import { useReveal } from '@/lib/hooks/useReveal'

const MARQUEE_WORDS = [
  'Quiet website',
  '*',
  'Weak first impression',
  '*',
  'No visual trust',
  '*',
  'Too similar to everyone else',
  '*',
  'Better work than the website suggests',
  '*',
]

const PAIN_POINTS = [
  {
    num: '01',
    title: 'The website looks polite, not memorable',
    body:
      'Most businesses are not losing trust because they lack information. They are losing it because the presentation feels generic before the visitor has even started reading.',
  },
  {
    num: '02',
    title: 'Good work is being framed too weakly',
    body:
      'Architects, wedding planners, and hospitality brands rely on taste. If the site does not express that standard immediately, the work gets judged lower than it deserves.',
  },
  {
    num: '03',
    title: 'The next step feels forgettable',
    body:
      'When the story, motion, and contact path feel interchangeable, visitors browse, compare, and leave. The business becomes easy to admire and easy to forget.',
  },
]

export default function Problem() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-problem"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 18% 14%, rgba(232,148,10,0.14), transparent 18%), linear-gradient(180deg, #111111 0%, #090909 100%)',
        color: '#FAFAF8',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '0.95rem 0',
        }}
      >
        {[0, 1].map((index) => (
          <span
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
              paddingRight: 28,
              animation: 'problem-marquee 22s linear infinite',
            }}
          >
            {MARQUEE_WORDS.map((word, wordIndex) => (
              <span
                key={`${index}-${wordIndex}-${word}`}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 11,
                  fontWeight: word === '*' ? 700 : 600,
                  letterSpacing: word === '*' ? '0' : '0.14em',
                  textTransform: word === '*' ? 'none' : 'uppercase',
                  color: word === '*' ? '#E8940A' : 'rgba(250,250,248,0.45)',
                }}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>

      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.88fr) minmax(0, 1.12fr)',
          gap: 34,
          paddingTop: 'clamp(4.5rem,9vw,8rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
        }}
      >
        <div
          data-reveal
          style={{
            position: 'sticky',
            top: 96,
            alignSelf: 'start',
            maxWidth: 480,
          }}
        >
          <p className="section-tag" style={{ color: 'rgba(250,250,248,0.5)' }}>
            02 - The problem
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem,6vw,6rem)',
              fontWeight: 800,
              fontStyle: 'italic',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: '#FAFAF8',
              marginBottom: 20,
              maxWidth: '10ch',
            }}
          >
            Better businesses deserve a stronger digital first impression.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.2vw,1.08rem)',
              lineHeight: 1.9,
              color: 'rgba(250,250,248,0.62)',
              maxWidth: '34ch',
            }}
          >
            The issue is rarely the business itself. It is the gap between how thoughtful the work
            is in real life and how ordinary the website makes it look online.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gap: 18,
          }}
        >
          {PAIN_POINTS.map((item, index) => (
            <article
              key={item.num}
              data-stagger-child
              data-cursor="open"
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: 'clamp(1.5rem,3vw,2.15rem)',
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.08)',
                background:
                  index === 1
                    ? 'linear-gradient(135deg, rgba(232,148,10,0.16), rgba(255,255,255,0.04))'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
                boxShadow: '0 24px 56px rgba(0,0,0,0.24)',
                transform: `translateZ(${16 + index * 8}px)`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 'auto -10% -28% auto',
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  background: 'rgba(232,148,10,0.11)',
                  filter: 'blur(16px)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    marginBottom: 18,
                    alignItems: 'center',
                  }}
                >
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
                    {item.num}
                  </span>
                  <span
                    style={{
                      width: 42,
                      height: 1,
                      background: 'rgba(250,250,248,0.14)',
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.55rem,2.3vw,2.25rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    color: '#FAFAF8',
                    marginBottom: 16,
                    maxWidth: '18ch',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: 'rgba(250,250,248,0.66)',
                    maxWidth: '42ch',
                  }}
                >
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes problem-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 940px) {
          #section-problem .container {
            grid-template-columns: 1fr !important;
          }

          #section-problem [style*='position: sticky'] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
