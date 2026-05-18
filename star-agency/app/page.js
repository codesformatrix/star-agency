import Hero         from '@/components/sections/Hero'
import Problem      from '@/components/sections/Problem'
import Solution     from '@/components/sections/Solution'
import Process      from '@/components/sections/Process'
import Results      from '@/components/sections/Results'
import SocialProof  from '@/components/sections/SocialProof'
import PrimaryCTA   from '@/components/sections/PrimaryCTA'
import SecondaryCTA from '@/components/sections/SecondaryCTA'

export const metadata = {
  title:       'STAR Web Design Agency — Jaipur',
  description: 'Premium websites for architects, wedding planners, and Indian businesses. Zero upfront cost.',
}

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero: 3D floating cards + Fraunces headline */}
      <Hero />

      {/* 02 — Problem: why bad websites cost clients */}
      <Problem />

      {/* 03 — Solution: what STAR builds differently */}
      <Solution />

      {/* 04 — Process: how it works, zero upfront cost */}
      <Process />

      {/* 05 — Results: what clients actually gain */}
      <Results />

      {/* 06 — Social Proof: testimonials + project grid */}
      <SocialProof />

      {/* 07 — Primary CTA: saffron section — main conversion */}
      <PrimaryCTA />

      {/* 08 — Secondary CTA: softer ask before footer */}
      <SecondaryCTA />
    </>
  )
}