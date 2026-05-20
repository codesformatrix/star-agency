'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'
import { allProjects } from '@/lib/data/projects'

const TESTIMONIALS = [
  {
    quote:
      'The website finally gave the studio the level of presentation our work deserved. It felt sharper, calmer, and far more credible.',
    author: 'Architecture client',
    role: 'Portfolio repositioning',
  },
  {
    quote:
      'The difference was immediate. The brand stopped feeling generic online and started feeling like a premium service again.',
    author: 'Wedding planning client',
    role: 'Luxury presentation refresh',
  },
  {
    quote:
      'The new direction made the business look more established before anyone even reached out. That changed the tone of enquiries completely.',
    author: 'Hospitality client',
    role: 'Experience-led website rebuild',
  },
  {
    quote:
      'Instead of explaining what made the brand special, we could simply send the website and let it speak for itself.',
    author: 'Architecture client',
    role: 'Trust-first redesign',
  },
  {
    quote:
      'The site felt intentional from the first screen. It no longer looked like a placeholder business trying to sell a premium service.',
    author: 'Wedding planning client',
    role: 'Brand presentation upgrade',
  },
  {
    quote:
      'The strongest part was clarity. Everything felt easier to understand, easier to trust, and easier to remember.',
    author: 'Boutique brand client',
    role: 'Conversion and positioning refresh',
  },
]

const PROJECTS = allProjects.slice(0, 4)
const TESTIMONIAL_TRACK = [...TESTIMONIALS, ...TESTIMONIALS]

export default function SocialProof() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef}
      id="section-proof"
      className="surface-light"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EBEBEA',
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 'clamp(5rem,10vw,9rem)',
          paddingBottom: 'clamp(5rem,10vw,9rem)',
          display: 'grid',
          gap: 32,
        }}
      >
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.02fr) minmax(280px, 0.98fr)',
            gap: 28,
            alignItems: 'end',
          }}
        >
          <div>
            <p className="section-tag">06 - Proof</p>
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
              The website should make the standard obvious before you have to explain it.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.05vw,1.0625rem)',
              lineHeight: 1.8,
              color: '#555553',
              maxWidth: '35ch',
              justifySelf: 'end',
            }}
          >
            This is why the work matters. Prospects trust what they can see, what they can feel,
            and what already looks considered before the first reply is ever sent.
          </p>
        </div>

        <div
          data-reveal
          style={{
            overflow: 'hidden',
            marginInline: 'calc(var(--gutter) * -1)',
            paddingInline: 'var(--gutter)',
          }}
        >
          <div className="proof-slider">
            {TESTIMONIAL_TRACK.map((testimonial, index) => (
              <article
                key={`${testimonial.author}-${testimonial.role}-${index}`}
                className="proof-slider__card"
                style={{
                  padding: '1.6rem',
                  borderRadius: 28,
                  border: '1px solid #EBEBEA',
                  background: index % 3 === 1 ? '#111111' : '#F8F6F2',
                  color: index % 3 === 1 ? '#FAFAF8' : '#111111',
                  boxShadow:
                    index % 3 === 1
                      ? '0 26px 56px rgba(17,17,17,0.12)'
                      : '0 20px 48px rgba(17,17,17,0.06)',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    marginBottom: 16,
                    fontFamily: 'var(--font-display)',
                    fontSize: 42,
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1,
                    color: index % 3 === 1 ? '#F2B24A' : '#E8940A',
                  }}
                >
                  &ldquo;
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(0.98rem,1vw,1rem)',
                    lineHeight: 1.82,
                    color: index % 3 === 1 ? 'rgba(250,250,248,0.82)' : '#333332',
                    marginBottom: 18,
                    maxWidth: '30ch',
                  }}
                >
                  {testimonial.quote}
                </p>
                <div
                  style={{
                    paddingTop: 14,
                    borderTop: `1px solid ${index % 3 === 1 ? 'rgba(255,255,255,0.1)' : '#E5E3DE'}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 13,
                      fontWeight: 700,
                      color: index % 3 === 1 ? '#FAFAF8' : '#111111',
                      marginBottom: 3,
                    }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: index % 3 === 1 ? 'rgba(250,250,248,0.48)' : '#888886',
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-stagger-child
              data-cursor="view"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(220px, 0.92fr) minmax(0, 1.08fr)',
                gap: 16,
                padding: 16,
                borderRadius: 30,
                border: '1px solid #EBEBEA',
                background: '#FAFAF8',
                boxShadow: '0 20px 48px rgba(17,17,17,0.05)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  minHeight: 240,
                  borderRadius: 22,
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})`,
                }}
              >
                <Image
                  src={project.screenshot}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 920px) 100vw, 40vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'grid', alignContent: 'space-between', gap: 18 }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#888886',
                      marginBottom: 10,
                    }}
                  >
                    {project.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.45rem,2vw,2rem)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      lineHeight: 1.08,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: 10,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 'clamp(0.95rem,0.98vw,1rem)',
                      lineHeight: 1.78,
                      color: '#555553',
                      maxWidth: '32ch',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: 9999,
                        background: '#F3F1EC',
                        border: '1px solid #EBEBEA',
                        fontFamily: 'var(--font-ui)',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: '#333332',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          data-reveal
          style={{
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
              color: '#888886',
            }}
          >
            Built to function as a serious trust asset
          </span>
          <Link href="/work" className="btn btn-outline" data-cursor="view">
            View all work
          </Link>
        </div>
      </div>

      <style>{`
        .proof-slider {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: proof-slider-scroll 34s linear infinite;
        }

        .proof-slider:hover {
          animation-play-state: paused;
        }

        .proof-slider__card {
          width: min(24rem, 82vw);
          flex-shrink: 0;
        }

        @keyframes proof-slider-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 9px)); }
        }

        @media (max-width: 980px) {
          #section-proof .container > div {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 820px) {
          #section-proof a[data-stagger-child] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
