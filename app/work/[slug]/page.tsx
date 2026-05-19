import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectCard from '@/components/work/ProjectCard'
import { allProjects, getProjectBySlug } from '@/lib/data/projects'

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = allProjects.filter(
    (candidate) => candidate.slug !== project.slug && candidate.category === project.category
  )

  const fallbackRelatedProjects = allProjects.filter(
    (candidate) => candidate.slug !== project.slug
  )

  const moreProjects = (relatedProjects.length ? relatedProjects : fallbackRelatedProjects).slice(
    0,
    2
  )

  return (
    <section className="surface-light" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-12% auto auto 68%',
          width: '26rem',
          height: '26rem',
          borderRadius: '50%',
          background: 'rgba(232,148,10,0.1)',
          filter: 'blur(28px)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 'clamp(4rem,8vw,7rem)',
          paddingBottom: 'clamp(5rem,9vw,8rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 56,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Link
            href="/work"
            data-cursor="open"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-ui)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#555553',
              textDecoration: 'none',
            }}
          >
            <span aria-hidden="true">&larr;</span>
            Back to work
          </Link>

          <div
            className="case-study__hero"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, 0.95fr)',
              gap: 36,
              alignItems: 'end',
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: 22 }}>
                {project.category}
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem,7vw,6.75rem)',
                  fontStyle: 'italic',
                  fontWeight: 800,
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                  color: '#111111',
                  maxWidth: '11ch',
                  marginBottom: 20,
                }}
              >
                {project.title}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.25vw,1.125rem)',
                  lineHeight: 1.8,
                  color: '#555553',
                  maxWidth: '48ch',
                }}
              >
                {project.summary}
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 16,
              }}
            >
              {[
                { label: 'Industry', value: project.industry },
                { label: 'Location', value: project.location },
                { label: 'Year', value: `${project.year}` },
                { label: 'Deliverables', value: `${project.deliverables.length} items` },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: '20px 18px',
                    borderRadius: 18,
                    backgroundColor: '#F7F4EF',
                    border: '1px solid #EBEBEA',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#888886',
                      marginBottom: 10,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.4,
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

        <div
          style={{
            position: 'relative',
            aspectRatio: '16 / 10',
            borderRadius: 28,
            overflow: 'hidden',
            border: '1px solid #EBEBEA',
            boxShadow: '0 18px 60px rgba(17,17,17,0.1)',
            backgroundColor: project.palette[0],
          }}
        >
          <Image
            src={project.screenshot}
            alt={`${project.title} hero website preview`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div
          className="case-study__body"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, 0.9fr)',
            gap: 42,
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            {[
              { label: 'Challenge', body: project.challenge },
              { label: 'Approach', body: project.approach },
              { label: 'Outcome', body: project.outcome },
            ].map((section) => (
              <div
                key={section.label}
                style={{
                  paddingBottom: 28,
                  borderBottom: '1px solid #EBEBEA',
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
                    marginBottom: 14,
                  }}
                >
                  {section.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'clamp(1rem,1.15vw,1.0625rem)',
                    lineHeight: 1.85,
                    color: '#333332',
                    maxWidth: '58ch',
                  }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <aside
            style={{
              padding: '26px 24px',
              borderRadius: 22,
              backgroundColor: '#111111',
              color: '#FAFAF8',
              position: 'sticky',
              top: 96,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.5)',
                marginBottom: 18,
              }}
            >
              Deliverables
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  style={{
                    paddingBottom: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#F2EEE8',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: 'inline-flex',
                    padding: '7px 10px',
                    borderRadius: 9999,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 11,
                    color: 'rgba(250,250,248,0.76)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <p className="section-tag" style={{ marginBottom: 16 }}>
              Supporting views
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem,4vw,3.75rem)',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: '#111111',
              }}
            >
              Repeated crops from the same design system.
            </h2>
          </div>

          <div
            className="case-study__gallery"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 24,
            }}
          >
            {project.gallery.map((item) => (
              <div key={item.alt} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    position: 'relative',
                    aspectRatio:
                      item.aspect === 'portrait'
                        ? '4 / 5'
                        : item.aspect === 'wide'
                          ? '16 / 8'
                          : '16 / 10',
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1px solid #EBEBEA',
                    backgroundColor: project.palette[0],
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: item.objectPosition ?? 'center center',
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: '#555553',
                  }}
                >
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: 16 }}>
                More work
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem,4vw,3.75rem)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                }}
              >
                Keep exploring the portfolio.
              </h2>
            </div>

            <Link className="btn btn-outline" href="/work" data-cursor="view">
              View all projects
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
            }}
          >
            {moreProjects.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .case-study__hero,
          .case-study__body {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          .case-study__gallery {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
