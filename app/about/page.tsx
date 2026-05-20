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
                A better website should make the business look as good online as it does in real life.
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
                STAR is built for businesses that want stronger presentation, clearer positioning,
                and a more convincing first impression without committing blindly upfront.
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
                  The website should start building trust before a prospect ever sends a message.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: 'rgba(250,250,248,0.72)',
                  }}
                >
                  That is the standard behind STAR: build work that helps the business look more
                  credible, more deliberate, and easier to trust from the very first visit.
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
                Built for businesses that know their online presence should be doing more.
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
                'Many businesses invest properly in their service, visuals, interiors, or operations, then send prospects to a website that makes the brand feel smaller than it really is.',
                'STAR was built around a more confident model: create the first version first, let the quality speak, and remove as much uncertainty from the decision as possible.',
                'That raises the bar. The website has to communicate trust, taste, and positioning clearly enough that the business feels memorable before the first conversation begins.',
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
                  Different industries need different aesthetics. The quality bar stays the same.
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
                A straightforward process built to keep the quality visible.
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
                The structure stays simple on purpose: understand the business, build a first
                version worth judging, refine what matters, and move forward once the standard is
                clear on screen.
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
                  Different sectors. Same need for trust, clarity, and a memorable first impression.
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
                If the direction feels right, the next step is simply to share the brief.
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
                Share the current website, what feels weak today, and where the business should be
                positioned. STAR will start from the strongest direction for that gap.
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
