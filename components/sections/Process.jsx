'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '@/lib/hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Understand the business before designing the screen',
    body:
      'The first step is strategy: category references, buyer expectations, positioning gaps, and what the current website fails to communicate clearly.',
  },
  {
    num: '02',
    title: 'Build a first version that already feels commercially ready',
    body:
      'Structure, hierarchy, visual language, and contact flow are developed together so the first version already feels considered, not half-finished.',
  },
  {
    num: '03',
    title: 'Refine until the message, pacing, and presentation feel right',
    body:
      'The strongest websites usually come from tightening emphasis, contrast, and clarity after the first direction has made the opportunity visible.',
  },
  {
    num: '04',
    title: 'Decide after the quality is visible',
    body:
      'Once the work is on screen, the decision becomes far more straightforward. The standard is visible before any payment conversation begins.',
  },
]

export default function Process() {
  const sectionRef = useReveal()
  const lineRef = useRef(null)

  useEffect(() => {
    if (!lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'power2.out',
          duration: 1.4,
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 75%',
            end: 'bottom center',
            scrub: 0.9,
          },
        }
      )
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
            maxWidth: 480,
          }}
        >
          <p className="section-tag">04 - How it works</p>
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
              marginBottom: 20,
            }}
          >
            The process is simple because the decision should not feel risky.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.2vw,1.08rem)',
              lineHeight: 1.9,
              color: '#555553',
              maxWidth: '36ch',
            }}
          >
            The goal is not to add complexity. It is to remove blind commitment and make the
            standard easy to judge before the business spends money.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            position: 'relative',
            display: 'grid',
            gap: 20,
            paddingLeft: 'clamp(1.25rem,3vw,2.25rem)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 22,
              left: 10,
              bottom: 22,
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
              data-stagger-child
              data-cursor="open"
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 20,
                alignItems: 'start',
                padding: '1.5rem 1.5rem 1.5rem 0.6rem',
                borderRadius: 28,
                background: index === 1 ? '#FAFAF8' : 'rgba(250,250,248,0.72)',
                border: '1px solid rgba(17,17,17,0.08)',
                boxShadow: '0 18px 48px rgba(17,17,17,0.05)',
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
                    fontSize: 'clamp(1.5rem,2.15vw,2.15rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.06,
                    letterSpacing: '-0.02em',
                    color: '#111111',
                    marginBottom: 12,
                    maxWidth: '18ch',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.85,
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
