'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '@/lib/hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    num: '01',
    title: 'Designed for your category, not copied from a template',
    body:
      'The visual direction starts with your industry, your audience, and the level of trust your business needs to build.',
  },
  {
    num: '02',
    title: 'Motion used to guide attention with intent',
    body:
      'Parallax, timing, and scroll choreography are used to improve focus, clarify hierarchy, and make the story easier to follow.',
  },
  {
    num: '03',
    title: 'Built to strengthen premium positioning',
    body:
      'The final website becomes more than a brochure. It works as a trust asset for outreach, referrals, and better first impressions.',
  },
]

export default function Solution() {
  const sectionRef = useReveal()
  const manifestoRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (!manifestoRef.current || !cards.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        manifestoRef.current,
        {
          y: 64,
          scale: 0.96,
          opacity: 0.6,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: 'top 84%',
            end: 'top 34%',
            scrub: 1,
          },
        }
      )

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 56 + index * 16,
            opacity: 0.5,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 42%',
              scrub: 1,
            },
          }
        )

        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => card.classList.add('solution-card--active'),
          onEnterBack: () => card.classList.add('solution-card--active'),
          onLeave: () => card.classList.remove('solution-card--active'),
          onLeaveBack: () => card.classList.remove('solution-card--active'),
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef])

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
                fontSize: 'clamp(2.5rem,5.2vw,4.7rem)',
                fontWeight: 800,
                fontStyle: 'italic',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: '#111111',
                maxWidth: '10.5ch',
                marginBottom: 18,
              }}
            >
              A stronger website makes the business feel clearer, sharper, and easier to trust.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 'clamp(1rem,1.05vw,1.0625rem)',
                lineHeight: 1.82,
                color: '#555553',
                maxWidth: '39ch',
              }}
            >
              Layout, typography, motion, and messaging all work together to improve perception and
              help the brand leave a stronger impression.
            </p>
          </div>

          <div
            ref={manifestoRef}
            data-reveal
            data-delay="0.08"
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 400,
              padding: 'clamp(1.7rem,2.8vw,2.3rem)',
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
                  Core approach
                </span>
                <h3
                  style={{
                    marginTop: 18,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem,3vw,3rem)',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    lineHeight: 1.04,
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
                    fontSize: 'clamp(0.95rem,1vw,1rem)',
                    lineHeight: 1.78,
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
              ref={(element) => {
                cardsRef.current[index] = element
              }}
              className="solution-card"
              data-stagger-child
              data-cursor="view"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 18,
                alignItems: 'start',
                padding: '1.35rem 1.4rem',
                borderRadius: 28,
                border: '1px solid #EBEBEA',
                background: index === 1 ? '#F7F0E3' : '#FAFAF8',
                boxShadow: '0 20px 48px rgba(17,17,17,0.04)',
                transition:
                  'transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1), border-color 320ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
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
                    fontSize: 'clamp(1.35rem,1.7vw,1.7rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#111111',
                    marginBottom: 10,
                    maxWidth: '24ch',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(0.95rem,0.98vw,1rem)',
                    lineHeight: 1.78,
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
        .solution-card.solution-card--active {
          transform: translateY(-8px) scale(1.01) !important;
          border-color: rgba(232,148,10,0.24) !important;
          box-shadow: 0 28px 64px rgba(17,17,17,0.08) !important;
        }

        @media (max-width: 980px) {
          #section-solution .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
