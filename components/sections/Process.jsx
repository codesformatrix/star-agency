'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '@/lib/hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'We study the business first',
    body:
      'Before any styling decisions happen, we look at your category, audience, positioning, and what the current website fails to communicate.',
  },
  {
    num: '02',
    title: 'We design the first real direction',
    body:
      'The first version is built to feel intentional from the start, with clear structure, stronger hierarchy, and a sharper visual language.',
  },
  {
    num: '03',
    title: 'We refine what strengthens perception',
    body:
      'Then we improve the parts that matter most: clarity, pacing, contrast, trust, and how naturally the website leads people to the next step.',
  },
  {
    num: '04',
    title: 'You decide after seeing the quality',
    body:
      'Once the work is visible on screen, the decision is far clearer. The website earns confidence before the payment conversation begins.',
  },
]

export default function Process() {
  const sectionRef = useReveal()
  const lineRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (!lineRef.current || !cards.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 78%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      )

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            x: index % 2 === 0 ? 54 : -54,
            y: 60,
            opacity: 0.45,
            scale: 0.96,
          },
          {
            x: 0,
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
          start: 'top 54%',
          end: 'bottom 52%',
          onEnter: () => card.classList.add('process-card--active'),
          onEnterBack: () => card.classList.add('process-card--active'),
          onLeave: () => card.classList.remove('process-card--active'),
          onLeaveBack: () => card.classList.remove('process-card--active'),
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [sectionRef])

  return (
    <section
      ref={sectionRef}
      id="section-process"
      className="surface-warm"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #E5E3DE',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.84fr) minmax(0, 1.16fr)',
          gap: 32,
          paddingTop: 'clamp(5rem,10vw,9rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
        }}
      >
        <div
          data-reveal
          style={{
            position: 'sticky',
            top: 96,
            alignSelf: 'start',
            maxWidth: 460,
          }}
        >
          <p className="section-tag">04 - How it works</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem,5.3vw,4.8rem)',
              fontWeight: 800,
              fontStyle: 'italic',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#111111',
              maxWidth: '10.5ch',
              marginBottom: 18,
            }}
          >
            A straightforward process makes the decision feel easier.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.02vw,1.0625rem)',
              lineHeight: 1.8,
              color: '#555553',
              maxWidth: '35ch',
            }}
          >
            The process is designed to remove guesswork, keep quality visible, and let the website
            earn trust before any commitment is made.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            position: 'relative',
            display: 'grid',
            gap: 18,
            paddingLeft: 'clamp(1.25rem,3vw,2.25rem)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 18,
              left: 10,
              bottom: 18,
              width: 1,
              background: 'rgba(17,17,17,0.08)',
            }}
          >
            <div
              ref={lineRef}
              style={{
                width: '100%',
                height: '100%',
                transform: 'scaleY(0)',
                transformOrigin: 'top center',
                background: 'linear-gradient(180deg, #E8940A 0%, #111111 100%)',
              }}
            />
          </div>

          {STEPS.map((step, index) => (
            <article
              key={step.num}
              ref={(element) => {
                cardsRef.current[index] = element
              }}
              className="process-card"
              data-stagger-child
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 18,
                alignItems: 'start',
                padding: '1.35rem 1.35rem 1.35rem 0.65rem',
                borderRadius: 26,
                background: index === 1 ? '#FAFAF8' : 'rgba(250,250,248,0.72)',
                border: '1px solid rgba(17,17,17,0.08)',
                boxShadow: '0 18px 48px rgba(17,17,17,0.05)',
                transition:
                  'transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1), border-color 320ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 9999,
                  display: 'grid',
                  placeItems: 'center',
                  background: index % 2 === 0 ? '#111111' : '#E8940A',
                  color: index % 2 === 0 ? '#FAFAF8' : '#111111',
                  fontFamily: 'var(--font-ui)',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  boxShadow: '0 0 0 8px rgba(243,241,236,1)',
                }}
              >
                {step.num}
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
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(0.95rem,0.98vw,1rem)',
                    lineHeight: 1.78,
                    color: '#555553',
                    maxWidth: '40ch',
                  }}
                >
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .process-card.process-card--active {
          transform: translateY(-8px) scale(1.01) !important;
          border-color: rgba(232,148,10,0.24) !important;
          box-shadow: 0 26px 62px rgba(17,17,17,0.08) !important;
        }

        @media (max-width: 960px) {
          #section-process .container {
            grid-template-columns: 1fr !important;
          }

          #section-process [style*='position: sticky'] {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
