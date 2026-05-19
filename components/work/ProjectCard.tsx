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
        display: 'grid',
        gap: 16,
        textDecoration: 'none',
        color: '#111111',
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 11',
          overflow: 'hidden',
          borderRadius: 28,
          background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})`,
          border: '1px solid rgba(17,17,17,0.08)',
          boxShadow: '0 24px 56px rgba(17,17,17,0.08)',
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.08), transparent 30%), linear-gradient(180deg, transparent 46%, rgba(17,17,17,0.48) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 18,
            right: 18,
            bottom: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 14,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.58)',
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
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
                color: '#FAFAF8',
              }}
            >
              {project.title}
            </h2>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#F2B24A',
            }}
          >
            Open
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 10, paddingInline: 2 }}>
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

        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 15,
            lineHeight: 1.8,
            color: '#555553',
            maxWidth: '46ch',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.slice(0, 3).map((tag) => (
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
                fontWeight: 600,
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
