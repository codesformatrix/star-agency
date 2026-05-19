'use client'

export default function HeroCanvas() {
  return (
    <div className="hero-canvas hero-canvas--fallback" aria-hidden="true">
      <span className="hero-canvas__orb hero-canvas__orb--saffron" />
      <span className="hero-canvas__orb hero-canvas__orb--ink" />
      <span className="hero-canvas__plane hero-canvas__plane--left" />
      <span className="hero-canvas__plane hero-canvas__plane--right" />
    </div>
  )
}
