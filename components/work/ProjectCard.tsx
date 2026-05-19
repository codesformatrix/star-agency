import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/data/projects'

type ProjectCardProps = {
  project: Project
  priority?: boolean
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        textDecoration: 'none',
        color: '#111111',
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          borderRadius: 24,
          backgroundColor: project.palette[0],
          border: '1px solid #EBEBEA',
          boxShadow: '0 16px 50px rgba(17,17,17,0.08)',
        }}
      >
        <Image
          src={project.screenshot}
          alt={`${project.title} website preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888886',
                marginBottom: 8,
              }}
            >
              {project.category}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem,2vw,2rem)',
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h2>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 12,
              color: '#555553',
              whiteSpace: 'nowrap',
            }}
          >
            {project.location} · {project.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 15,
            lineHeight: 1.7,
            color: '#555553',
            maxWidth: '48ch',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 12px',
                borderRadius: 9999,
                backgroundColor: '#F3F1EC',
                border: '1px solid #EBEBEA',
                fontFamily: 'var(--font-ui)',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#333332',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
