'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import ProjectCard from '@/components/work/ProjectCard'
import type { Project, ProjectCategory } from '@/lib/data/projects'

const FILTERS: Array<'All' | ProjectCategory> = [
  'All',
  'Architecture',
  'Wedding Planning',
  'Hospitality',
]

type PortfolioGridClientProps = {
  projects: Project[]
}

type PortfolioGridViewProps = {
  projects: Project[]
  activeCategory: 'All' | ProjectCategory
}

function sanitizeCategory(value: string | null): 'All' | ProjectCategory {
  if (FILTERS.includes(value as 'All' | ProjectCategory)) {
    return value as 'All' | ProjectCategory
  }
  return 'All'
}

export function PortfolioGridView({ projects, activeCategory }: PortfolioGridViewProps) {
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#888886',
              marginBottom: 12,
            }}
          >
            Browse by category
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {FILTERS.map((filter) => {
              const isActive = filter === activeCategory
              const href = filter === 'All'
                ? '/work'
                : {
                    pathname: '/work',
                    query: { category: filter },
                  }

              return (
                <Link
                  key={filter}
                  href={href}
                  scroll={false}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '11px 18px',
                    borderRadius: 9999,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-ui)',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    border: isActive ? '1px solid #111111' : '1px solid #EBEBEA',
                    color: isActive ? '#FAFAF8' : '#111111',
                    backgroundColor: isActive ? '#111111' : '#FAFAF8',
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                  }}
                >
                  {filter}
                </Link>
              )
            })}
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 13,
            color: '#555553',
          }}
        >
          {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 34,
        }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  )
}

export function PortfolioGridFallback({ projects }: PortfolioGridClientProps) {
  return <PortfolioGridView projects={projects} activeCategory="All" />
}

export default function PortfolioGridClient({ projects }: PortfolioGridClientProps) {
  const searchParams = useSearchParams()
  const activeCategory = sanitizeCategory(searchParams.get('category'))

  return (
    <PortfolioGridView
      projects={projects}
      activeCategory={activeCategory}
    />
  )
}
