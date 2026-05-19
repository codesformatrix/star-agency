/**
 * app/layout.js
 * Root layout - every page inherits this.
 *
 * ORDER MATTERS:
 * 1. Fonts injected as CSS variables on <html>
 * 2. SmoothScroll initializes Lenis + GSAP sync
 * 3. Cursor floats above everything (z-9999)
 * 4. Navbar fixed at top (z-200)
 * 5. <main> receives page content
 * 6. Footer closes every page
 */

import { Fraunces, Syne } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://star-web-design-agency.vercel.app'
  ),
  title: {
    default: 'STAR Web Design Agency - Bhopal',
    template: '%s | STAR Web Design Agency',
  },
  description:
    'Premium websites for architects, wedding planners, and Indian businesses. Zero upfront cost - you pay only if you love it.',
  keywords: [
    'web design Bhopal',
    'website design India',
    'architect website',
    'wedding planner website',
    'STAR web design agency',
    'Ali Asgar',
  ],
  authors: [{ name: 'Ali Asgar' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'STAR Web Design Agency',
    title: 'STAR Web Design Agency - Bhopal',
    description: 'Premium websites for Indian businesses. Zero upfront cost.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable}`}>
      <body style={{ background: '#FAFAF8', overflowX: 'hidden' }}>
        <SmoothScroll>
          <Cursor />
          <Navbar />
          <main id="main-content" tabIndex={-1} style={{ paddingTop: 64 }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
