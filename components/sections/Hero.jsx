'use client'

import { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { heroWallItems } from '@/lib/data/projects'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="hero__canvas-skeleton" aria-hidden="true" />,
})

function splitRows(items) {
  return [items.slice(0, 5), items.slice(5, 10), items.slice(10, 15)]
}

export default function Hero() {
  const rows = useMemo(() => splitRows(heroWallItems), [])
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const viewportHeight = window.innerHeight || 1
      const progress = Math.min(window.scrollY / (viewportHeight * 1.2), 1)
      setScrollProgress(progress)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const wallStyle = {
    transform: [
      `translate3d(0, ${-180 + scrollProgress * 300}px, 0)`,
      `rotateX(${15 - scrollProgress * 15 + pointer.y * -4}deg)`,
      `rotateY(${pointer.x * 5}deg)`,
      `rotateZ(${9 - scrollProgress * 9}deg)`,
    ].join(' '),
    opacity: 0.45 + scrollProgress * 0.55,
  }

  const firstRowStyle = {
    transform: `translate3d(${scrollProgress * 860}px, 0, 0)`,
  }

  const secondRowStyle = {
    transform: `translate3d(${-scrollProgress * 860}px, 0, 0)`,
  }

  const thirdRowStyle = {
    transform: `translate3d(${scrollProgress * 620}px, 0, 0)`,
  }

  return (
    <section className="hero hero--parallax surface-light">
      <div className="hero__backdrop">
        <HeroCanvas />
      </div>

      <div className="hero__noise" aria-hidden="true" />

      <div className="hero__stage container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            STAR <span className="hero__star">*</span> Web Design Agency
          </p>

          <h1 className="hero__title">
            Web design that gives Indian businesses the kind of presence people remember.
          </h1>

          <p className="hero__lede">
            Built for architects, wedding planners, hospitality brands, and ambitious businesses
            that need more than another polite template.
          </p>

          <div className="hero__actions">
            <Link href="/work" className="btn btn-primary" data-cursor="view">
              View the work
            </Link>
            <Link href="/contact" className="btn btn-outline" data-cursor="open">
              Start a project
            </Link>
          </div>

          <div className="hero__meta">
            <span>Bhopal-based, India-wide</span>
            <span>Build first. Pay only if you love it.</span>
          </div>
        </div>

        <div
          className="hero__wall-wrap"
          style={wallStyle}
          onMouseMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()
            const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
            const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
            setPointer({ x, y })
          }}
          onMouseLeave={() => setPointer({ x: 0, y: 0 })}
        >
          <div className="hero__wall">
            <div className="hero__row hero__row--reverse" style={firstRowStyle}>
              {rows[0].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </div>
            <div className="hero__row" style={secondRowStyle}>
              {rows[1].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </div>
            <div className="hero__row hero__row--reverse" style={thirdRowStyle}>
              {rows[2].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-line" aria-hidden="true" />
          <span className="hero__scroll-label">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

function HeroWallCard({ item }) {
  return (
    <div className="hero-wall-card">
      <Link href={item.link} className="hero-wall-card__link" data-cursor="view">
        <div
          className="hero-wall-card__image"
          style={{
            background: `linear-gradient(135deg, ${item.palette[0]}, ${item.palette[1]})`,
          }}
        >
          <Image
            src={item.thumbnail}
            alt={item.caption}
            fill
            sizes="(max-width: 768px) 92vw, 30rem"
            style={{
              objectFit: 'cover',
              objectPosition: item.objectPosition,
            }}
          />
          <div className="hero-wall-card__wash" />
        </div>

        <div className="hero-wall-card__meta">
          <span className="hero-wall-card__category">{item.category}</span>
          <span className="hero-wall-card__title">{item.title}</span>
        </div>
      </Link>
    </div>
  )
}
