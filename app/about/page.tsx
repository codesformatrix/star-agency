import Image from 'next/image'
import Link from 'next/link'
import RevealSection from '@/components/ui/RevealSection'
import { allProjects, type Project } from '@/lib/data/projects'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'About',
  description:
    'Meet Ali Asgar and learn how STAR builds portfolio-grade websites for Indian businesses with zero upfront cost.',
}

const aboutPillars = [
  {
    title: 'Look unlike templates',
    text:
      'The work is designed to break away from the generic agency look. Typography, pacing, imagery, and motion all need a point of view.',
  },
  {
    title: 'Lead with business clarity',
    text:
      'A strong first impression only matters if the site also explains the offer, builds trust quickly, and makes the next step obvious.',
  },
  {
    title: 'Earn trust before payment',
    text:
      'STAR builds the first version before asking for money. The work has to carry the pitch, not just the promise around it.',
  },
]

const workingModel = [
  'Review the current website, references, and what feels weak today.',
  'Design and build a first version tailored to the business and city context.',
  'Refine the direction around feedback until the presentation feels right.',
  'Launch only when the client is convinced the work is worth paying for.',
]

const spotlightProjects = [
  allProjects.find((project) => project.slug === 'atelier-mora'),
  allProjects.find((project) => project.slug === 'roshan-events'),
  allProjects.find((project) => project.slug === 'saffron-courtyard'),
].filter((project): project is Project => Boolean(project))

export default function AboutPage() {
  return (
    <>
      <section className="section surface-warm">
        <RevealSection>
          <div
            className="container about-intro"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(300px, 0.95fr)',
              gap: 40,
              alignItems: 'end',
            }}
          >
            <div>
              <p className="section-tag" data-reveal>
                About
              </p>
              <h1
                data-reveal
                data-delay="0.05"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.1rem,7.5vw,6.8rem)',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#111111',
                  maxWidth: '11ch',
                }}
              >
                Ali built STAR to remove the risk from hiring better web design.
              </h1>
            </div>

            <div data-reveal data-delay="0.1" style={{ justifySelf: 'end', maxWidth: 480 }}>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.3vw,1.125rem)',
                  lineHeight: 1.8,
                  color: '#555553',
                  marginBottom: 28,
                }}
              >
                Based in {siteConfig.locationCity} and working across India, STAR helps premium
                businesses look as considered online as they do in real life, without asking them
                to commit blindly upfront.
              </p>

              <div
                className="about-intro__facts"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 14,
                }}
              >
                {[
                  { label: 'Base', value: siteConfig.locationCity },
                  { label: 'Model', value: 'Zero upfront' },
                  { label: 'Reach', value: 'India-wide' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '18px 16px',
                      borderRadius: 20,
                      border: '1px solid #EBEBEA',
                      backgroundColor: '#FAFAF8',
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
                        marginBottom: 10,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.3rem,2vw,1.8rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 1.08,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-light">
        <RevealSection>
          <div
            className="container about-story-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
              gap: 40,
              alignItems: 'start',
            }}
          >
            <div data-reveal>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#888886',
                  marginBottom: 16,
                }}
              >
                The story
              </p>
              <h2 className="text-h1" style={{ color: '#111111', maxWidth: '10ch' }}>
                Built for the moment a prospect asks, &quot;What have you done before?&quot;
              </h2>
            </div>

            <div
              data-reveal
              data-delay="0.1"
              style={{
                display: 'grid',
                gap: 22,
                maxWidth: 720,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                  lineHeight: 1.9,
                  color: '#333332',
                }}
              >
                STAR started from a simple problem. Businesses would invest in their service, their
                interiors, their photography, or their event experience, then send prospects to a
                website that looked generic, dated, or forgettable.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                  lineHeight: 1.9,
                  color: '#333332',
                }}
              >
                Ali built the agency around a stronger model: design and build the first version
                before asking for payment. That way, the client judges the work itself, not a sales
                pitch around it.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                  lineHeight: 1.9,
                  color: '#333332',
                }}
              >
                The bar is not just &quot;working website.&quot; It is a site that carries taste,
                trust, clarity, and enough distinctiveness to make the business feel harder to
                overlook in a competitive market.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-light" style={{ paddingTop: 0 }}>
        <RevealSection>
          <div className="container">
            <div
              data-reveal
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                gap: 24,
                flexWrap: 'wrap',
                marginBottom: 28,
              }}
            >
              <div>
                <p className="section-tag" style={{ marginBottom: 20 }}>
                  Working principles
                </p>
                <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch' }}>
                  What stays true across every project.
                </h2>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#555553',
                  maxWidth: '34ch',
                }}
              >
                The style can change by industry. The craft standard does not.
              </p>
            </div>

            <div
              className="about-principles"
              data-reveal="stagger-parent"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 18,
              }}
            >
              {aboutPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  data-stagger-child
                  style={{
                    padding: '28px 26px',
                    borderRadius: 24,
                    border: '1px solid #EBEBEA',
                    backgroundColor: '#F8F6F2',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem,1.8vw,1.9rem)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: 16,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: '#555553',
                    }}
                  >
                    {pillar.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-dark">
        <RevealSection>
          <div className="container">
            <div
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
                gap: 36,
                alignItems: 'start',
                marginBottom: 36,
              }}
            >
              <div>
                <p className="section-tag" style={{ color: 'rgba(250,250,248,0.55)' }}>
                  How STAR works
                </p>
                <h2 className="text-h1" style={{ color: '#FAFAF8', maxWidth: '10ch' }}>
                  A simpler process, with far less guesswork for the client.
                </h2>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                  lineHeight: 1.9,
                  color: 'rgba(250,250,248,0.72)',
                  maxWidth: '40ch',
                }}
              >
                The model is deliberately straightforward: understand the business, build the first
                version, refine what matters, and only move forward commercially once the work is
                genuinely convincing.
              </p>
            </div>

            <div
              className="about-process-grid"
              data-reveal="stagger-parent"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: 18,
              }}
            >
              {workingModel.map((step, index) => (
                <article
                  key={step}
                  data-stagger-child
                  style={{
                    padding: '24px 22px',
                    borderRadius: 24,
                    border: '1px solid rgba(250,250,248,0.12)',
                    backgroundColor: 'rgba(250,250,248,0.04)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#E8940A',
                      marginBottom: 14,
                    }}
                  >
                    0{index + 1}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: '#FAFAF8',
                    }}
                  >
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-light">
        <RevealSection>
          <div className="container">
            <div
              data-reveal
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                gap: 24,
                flexWrap: 'wrap',
                marginBottom: 32,
              }}
            >
              <div>
                <p className="section-tag">Selected work</p>
                <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch' }}>
                  The portfolio spans industries, but the standard stays sharp.
                </h2>
              </div>

              <Link href="/work" className="btn btn-outline" data-cursor="view">
                See all work
              </Link>
            </div>

            <div
              className="about-featured-grid"
              data-reveal="stagger-parent"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 18,
              }}
            >
              {spotlightProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  data-stagger-child
                  data-cursor="view"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    color: '#111111',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16 / 10',
                      overflow: 'hidden',
                      borderRadius: 24,
                      border: '1px solid #EBEBEA',
                      backgroundColor: project.palette[0],
                    }}
                  >
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#888886',
                        marginBottom: 8,
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
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: '#555553',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-warm">
        <RevealSection>
          <div
            className="container about-cta"
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 24,
              alignItems: 'center',
              padding: 'clamp(1.75rem,3vw,2.5rem)',
              borderRadius: 28,
              border: '1px solid #EBEBEA',
              backgroundColor: '#FAFAF8',
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: 18 }}>
                Next step
              </p>
              <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch', marginBottom: 16 }}>
                If the model makes sense, the next move is simple.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#555553',
                  maxWidth: '40ch',
                }}
              >
                Share the business, the current website, and what is not working. Ali will review
                the brief and start from the strongest direction.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/work" className="btn btn-outline">
                Review the work
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      <style>{`
        @media (max-width: 1080px) {
          .about-intro,
          .about-story-grid,
          .about-cta {
            grid-template-columns: 1fr !important;
          }

          .about-intro__facts,
          .about-principles,
          .about-process-grid,
          .about-featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 720px) {
          .about-intro__facts,
          .about-principles,
          .about-process-grid,
          .about-featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
