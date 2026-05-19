'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { heroWallItems } from '@/lib/data/projects'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="hero__canvas-skeleton" aria-hidden="true" />,
})

function splitRows(items) {
  return [items.slice(0, 5), items.slice(5, 10), items.slice(10, 15)]
}

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const rows = useMemo(() => splitRows(heroWallItems), [])
  const { scrollYProgress } = useScroll()

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.18], [15, 0]), {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  })
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.18], [9, 0]), {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  })
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.24], [-180, 120]), {
    stiffness: 90,
    damping: 18,
    mass: 0.6,
  })
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.16], [0.45, 1]), {
    stiffness: 120,
    damping: 24,
  })
  const firstRowX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 860]), {
    stiffness: 110,
    damping: 24,
  })
  const secondRowX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -860]), {
    stiffness: 110,
    damping: 24,
  })
  const thirdRowX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 620]), {
    stiffness: 110,
    damping: 24,
  })
  const pointerRotateY = useMotionTemplate`${pointer.x * 4.5}deg`
  const pointerRotateX = useMotionTemplate`${pointer.y * -2.8}deg`

  return (
    <section className="hero hero--parallax surface-light">
      <div className="hero__backdrop">
        <HeroCanvas />
      </div>

      <div className="hero__noise" aria-hidden="true" />

      <div className="hero__stage container">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            STAR <span className="hero__star">*</span> Web Design Agency
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Web design that gives Indian businesses the kind of presence people remember.
          </motion.h1>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            Built for architects, wedding planners, hospitality brands, and ambitious businesses
            that need more than another polite template.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/work" className="btn btn-primary" data-cursor="view">
              View the work
            </Link>
            <Link href="/contact" className="btn btn-outline" data-cursor="open">
              Start a project
            </Link>
          </motion.div>

          <motion.div
            className="hero__meta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Bhopal-based, India-wide</span>
            <span>Build first. Pay only if you love it.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__wall-wrap"
          style={{
            rotateX,
            rotateZ,
            y: translateY,
            opacity,
          }}
          onMouseMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect()
            const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
            const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
            setPointer({ x, y })
          }}
          onMouseLeave={() => setPointer({ x: 0, y: 0 })}
        >
          <motion.div
            className="hero__wall"
            style={{
              rotateY: pointerRotateY,
              rotateX: pointerRotateX,
            }}
          >
            <motion.div className="hero__row hero__row--reverse" style={{ x: firstRowX }}>
              {rows[0].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </motion.div>
            <motion.div className="hero__row" style={{ x: secondRowX }}>
              {rows[1].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </motion.div>
            <motion.div className="hero__row hero__row--reverse" style={{ x: thirdRowX }}>
              {rows[2].map((item) => (
                <HeroWallCard key={item.id} item={item} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__scroll-line" aria-hidden="true" />
          <span className="hero__scroll-label">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

function HeroWallCard({ item }) {
  return (
    <motion.div
      className="hero-wall-card"
      whileHover={{ y: -18, rotateX: 5, rotateY: 2, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.div>
  )
}
