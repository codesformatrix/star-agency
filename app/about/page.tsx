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

const principles = [
  {
    title: 'Distinctiveness before decoration',
    text:
      'Every project needs a point of view. Typography, composition, motion, and copy should feel chosen, not auto-generated from the same agency template.',
  },
  {
    title: 'Business clarity, not just visual polish',
    text:
      'A premium site still has to explain the offer, reduce doubt, and make the next step obvious. Taste and conversion should support each other.',
  },
  {
    title: 'Trust earned through the work itself',
    text:
      'STAR builds the first version before asking for money. That model only works when the quality is strong enough to carry the decision.',
  },
]

const workingModel = [
  'Study the business, category, city context, and what feels weak online right now.',
  'Design and build a first version that already feels closer to the standard the brand should have.',
  'Refine the presentation until the positioning, clarity, and tone feel commercially ready.',
  'Move forward only when the client feels the work is worth paying for.',
]

const spotlightProjects = [
  allProjects.find((project) => project.slug === 'atelier-mora'),
  allProjects.find((project) => project.slug === 'roshan-events'),
  allProjects.find((project) => project.slug === 'saffron-courtyard'),
].filter((project): project is Project => Boolean(project))

export default function AboutPage() {
  return (
    <>
      <section
        className="section surface-light"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-8rem',
            right: '-5rem',
            width: '26rem',
            height: '26rem',
            borderRadius: '50%',
            background: 'rgba(232,148,10,0.11)',
            filter: 'blur(36px)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 'auto auto 5% -8%',
            width: '24rem',
            height: '24rem',
            borderRadius: '50%',
            background: 'rgba(17,17,17,0.05)',
            filter: 'blur(44px)',
          }}
        />

        <RevealSection>
          <div
            className="container about-hero"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.02fr) minmax(320px, 0.98fr)',
              gap: 32,
              alignItems: 'end',
            }}
          >
            <div>
              <p className="section-tag" data-reveal>
                About STAR
              </p>
              <h1
                data-reveal
                data-delay="0.05"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.15rem,7.8vw,6.9rem)',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                  color: '#111111',
                  maxWidth: '11ch',
                  marginBottom: 24,
                }}
              >
                STAR exists to make hiring better web design feel less risky.
              </h1>
              <p
                data-reveal
                data-delay="0.12"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.25vw,1.125rem)',
                  lineHeight: 1.86,
                  color: '#555553',
                  maxWidth: '46ch',
                  marginBottom: 28,
                }}
              >
                Built by Ali Asgar in {siteConfig.locationCity}, STAR helps Indian businesses look
                more considered online without asking them to commit blindly upfront. The work has
                to prove itself first.
              </p>

              <div
                data-reveal
                data-delay="0.16"
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
              >
                <Link href="/work" className="btn btn-primary" data-cursor="view">
                  Review the work
                </Link>
                <Link href="/contact" className="btn btn-outline" data-cursor="open">
                  Start a conversation
                </Link>
              </div>
            </div>

            <div
              data-reveal
              data-delay="0.1"
              style={{
                display: 'grid',
                gap: 16,
              }}
            >
              <article
                style={{
                  padding: 'clamp(1.5rem,2vw,2rem)',
                  borderRadius: 28,
                  backgroundColor: '#111111',
                  color: '#FAFAF8',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.16)',
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
                  Founder note
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem,2vw,2.25rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#FAFAF8',
                    marginBottom: 16,
                    maxWidth: '12ch',
                  }}
                >
                  The portfolio should do part of the selling before the call even starts.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: 'rgba(250,250,248,0.72)',
                  }}
                >
                  STAR was built around that exact moment: when a prospect asks what has been done
                  before, and the answer needs to feel sharp, credible, and hard to forget.
                </p>
              </article>

              <div
                className="about-hero__facts"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 12,
                }}
              >
                {[
                  { label: 'Base', value: siteConfig.locationCity },
                  { label: 'Model', value: 'Zero upfront' },
                  { label: 'Scope', value: 'India-wide' },
                ].map((item) => (
                  <article
                    key={item.label}
                    style={{
                      padding: '18px 16px',
                      borderRadius: 20,
                      border: '1px solid #EBEBEA',
                      backgroundColor: '#F8F6F2',
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
                        fontSize: 'clamp(1.3rem,1.8vw,1.75rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 1.08,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-warm" style={{ paddingTop: 0 }}>
        <RevealSection>
          <div
            className="container about-story"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.78fr) minmax(0, 1.22fr)',
              gap: 28,
              alignItems: 'start',
            }}
          >
            <div data-reveal>
              <p className="section-tag" style={{ marginBottom: 20 }}>
                Why it started
              </p>
              <h2 className="text-h1" style={{ color: '#111111', maxWidth: '10ch' }}>
                Built for the moment a business realizes its current site is underselling it.
              </h2>
            </div>

            <article
              data-reveal
              data-delay="0.08"
              style={{
                padding: 'clamp(1.75rem,2.4vw,2.4rem)',
                borderRadius: 30,
                border: '1px solid #EBEBEA',
                backgroundColor: '#FAFAF8',
                boxShadow: '0 24px 70px rgba(17,17,17,0.05)',
                display: 'grid',
                gap: 20,
              }}
            >
              {[
                'Many premium businesses invest heavily in service quality, interiors, photography, or presentation, then send prospects to a website that feels generic, dated, or too easy to confuse with everyone else.',
                'Ali built STAR around a more convincing answer than another sales pitch: design and build the first version before asking for payment, so the client can judge the work directly.',
                'That shifts the standard. The site has to carry taste, trust, positioning, and enough originality to make the business feel harder to overlook in its category.',
              ].map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                    lineHeight: 1.92,
                    color: '#333332',
                    maxWidth: '60ch',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </article>
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
                marginBottom: 30,
              }}
            >
              <div>
                <p className="section-tag" style={{ marginBottom: 18 }}>
                  Principles
                </p>
                <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch' }}>
                  The style can change by category. The standard does not.
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
                These are the ideas that stay consistent whether the client is an architecture
                studio, wedding planner, or hospitality brand.
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
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  data-stagger-child
                  style={{
                    padding: '28px 26px',
                    borderRadius: 26,
                    border: '1px solid #EBEBEA',
                    background:
                      'linear-gradient(180deg, rgba(250,250,248,1) 0%, rgba(248,246,242,1) 100%)',
                    boxShadow: '0 18px 40px rgba(17,17,17,0.04)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem,1.8vw,1.9rem)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      lineHeight: 1.08,
                      letterSpacing: '-0.02em',
                      color: '#111111',
                      marginBottom: 16,
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 15,
                      lineHeight: 1.82,
                      color: '#555553',
                    }}
                  >
                    {principle.text}
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
                gridTemplateColumns: 'minmax(0, 0.86fr) minmax(0, 1.14fr)',
                gap: 34,
                alignItems: 'end',
                marginBottom: 34,
              }}
            >
              <div>
                <p className="section-tag" style={{ color: 'rgba(250,250,248,0.52)' }}>
                  Working model
                </p>
                <h2 className="text-h1" style={{ color: '#FAFAF8', maxWidth: '10ch' }}>
                  A cleaner process, with less guesswork on the client side.
                </h2>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                  lineHeight: 1.9,
                  color: 'rgba(250,250,248,0.72)',
                  maxWidth: '42ch',
                }}
              >
                The structure is simple on purpose: understand the business properly, build a
                first version worth judging, refine the details that matter, then move commercially
                once the quality feels convincing.
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
                <p className="section-tag" style={{ marginBottom: 18 }}>
                  Selected work
                </p>
                <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch' }}>
                  Different industries. Same demand for taste, clarity, and trust.
                </h2>
              </div>

              <Link href="/work" className="btn btn-outline" data-cursor="view">
                See the full portfolio
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
                      boxShadow: '0 20px 48px rgba(17,17,17,0.06)',
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
              padding: 'clamp(1.9rem,3vw,2.7rem)',
              borderRadius: 30,
              border: '1px solid #EBEBEA',
              background:
                'linear-gradient(135deg, rgba(250,250,248,1) 0%, rgba(243,241,236,1) 100%)',
              boxShadow: '0 24px 70px rgba(17,17,17,0.05)',
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: 18 }}>
                Next step
              </p>
              <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch', marginBottom: 16 }}>
                If the model feels right, the next move is just to share the brief.
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
                Send the current website, what feels weak today, and the kind of standard the
                business should be operating at. STAR will start from the strongest direction.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/contact" className="btn btn-primary" data-cursor="open">
                Start a project
              </Link>
              <Link href="/work" className="btn btn-outline" data-cursor="view">
                Review the work
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      <style>{`
        @media (max-width: 1080px) {
          .about-hero,
          .about-story,
          .about-cta {
            grid-template-columns: 1fr !important;
          }

          .about-hero__facts,
          .about-principles,
          .about-process-grid,
          .about-featured-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 720px) {
          .about-hero__facts,
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
