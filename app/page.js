import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Process from '@/components/sections/Process'
import Results from '@/components/sections/Results'
import SocialProof from '@/components/sections/SocialProof'
import PrimaryCTA from '@/components/sections/PrimaryCTA'
import SecondaryCTA from '@/components/sections/SecondaryCTA'

export const metadata = {
  title: 'STAR Web Design Agency — Jaipur',
  description:
    'Premium websites for architects, wedding planners, and Indian businesses. Zero upfront cost.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Results />
      <SocialProof />
      <PrimaryCTA />
      <SecondaryCTA />
    </>
  )
}
