'use client'

import type { ReactNode } from 'react'
import { useReveal } from '@/lib/hooks/useReveal'

type RevealSectionProps = {
  children: ReactNode
  className?: string
}

export default function RevealSection({ children, className }: RevealSectionProps) {
  const ref = useReveal()

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
