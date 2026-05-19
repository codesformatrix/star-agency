'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useReveal } from '@/lib/hooks/useReveal'
import { allProjects } from '@/lib/data/projects'

const TESTIMONIALS = [
  {
    quote:
      'The first thing people noticed was not just that the website looked better. It felt like the business itself had become more sure of its own standard.',
    author: 'Architecture client',
    role: 'Portfolio repositioning',
  },
  {
    quote:
      'The difference was how much more intentional everything felt. The website finally looked like it belonged to a premium wedding brand instead of a placeholder service page.',
    author: 'Wedding planning client',
    role: 'Luxury presentation refresh',
  },
]

const PROJECTS = allProjects.slice(0, 4)

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
              The work has to carry the pitch by itself.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'clamp(1rem,1.18vw,1.06rem)',
              lineHeight: 1.88,
              color: '#555553',
              maxWidth: '35ch',
              justifySelf: 'end',
            }}
          >
            That is why the portfolio matters. The strongest trust signal is not a claim about what
            STAR can do. It is a body of work that already feels considered.
          </p>
        </div>

        <div
          data-reveal="stagger-parent"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={testimonial.author}
              data-stagger-child
              style={{
                padding: 'clamp(1.6rem,3vw,2.1rem)',
                borderRadius: 30,
                border: '1px solid #EBEBEA',
                background: index === 0 ? '#F8F6F2' : '#111111',
                color: index === 0 ? '#111111' : '#FAFAF8',
                boxShadow: index === 0 ? '0 20px 48px rgba(17,17,17,0.06)' : '0 26px 56px rgba(17,17,17,0.12)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  marginBottom: 18,
                  fontFamily: 'var(--font-display)',
                  fontSize: 48,
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1,
                  color: index === 0 ? '#E8940A' : '#F2B24A',
                }}
              >
                &ldquo;
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.06rem)',
                  lineHeight: 1.9,
                  color: index === 0 ? '#333332' : 'rgba(250,250,248,0.82)',
                  marginBottom: 22,
                  maxWidth: '38ch',
                }}
              >
                {testimonial.quote}
              </p>
              <div
                style={{
                  paddingTop: 16,
                  borderTop: `1px solid ${index === 0 ? '#E5E3DE' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 13,
                    fontWeight: 700,
                    color: index === 0 ? '#111111' : '#FAFAF8',
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
                    color: index === 0 ? '#888886' : 'rgba(250,250,248,0.48)',
                  }}
                >
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
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
                      fontSize: 'clamp(1.7rem,2.4vw,2.6rem)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      lineHeight: 1.04,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 15,
                      lineHeight: 1.82,
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
            Temporary portfolio set, final structure
          </span>
          <Link href="/work" className="btn btn-outline" data-cursor="view">
            View all work
          </Link>
        </div>
      </div>

      <style>{`
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
