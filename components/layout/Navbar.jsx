'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const TALK_LABEL = "Let's talk"

export default function Navbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    gsap.set(nav, { '--nb': '0', '--nblur': '0px', '--nborder': '0' })

    const trigger = ScrollTrigger.create({
      start: 'top -72px',
      onEnter: () =>
        gsap.to(nav, {
          '--nb': '1',
          '--nblur': '14px',
          '--nborder': '1',
          duration: 0.35,
          ease: 'power2.out',
        }),
      onLeaveBack: () =>
        gsap.to(nav, {
          '--nb': '0',
          '--nblur': '0px',
          '--nborder': '0',
          duration: 0.35,
          ease: 'power2.out',
        }),
    })

    return () => trigger.kill()
  }, [])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', display: 'flex' }
      )
      return
    }

    document.body.style.overflow = ''
    gsap.to(menu, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => gsap.set(menu, { display: 'none' }),
    })
  }, [open])

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 200,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(250,250,248,calc(var(--nb,0)*0.92))',
          backdropFilter: 'blur(var(--nblur,0px))',
          WebkitBackdropFilter: 'blur(var(--nblur,0px))',
          borderBottom: 'calc(var(--nborder,0)*1px) solid #EBEBEA',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1440,
            margin: '0 auto',
            padding: '0 clamp(1.5rem,4vw,4rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            data-cursor="open"
            style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#111111',
                lineHeight: 1,
              }}
            >
              STAR
            </span>
            <span style={{ fontSize: 16, color: '#E8940A', lineHeight: 1 }}>*</span>
          </Link>

          <div
            style={{ display: 'flex', alignItems: 'center', gap: 40 }}
            className="star-desktop-nav"
          >
            {LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                data-cursor="open"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 13,
                  fontWeight: pathname === href ? 600 : 400,
                  letterSpacing: '0.04em',
                  color: pathname === href ? '#111111' : '#888886',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact"
              data-cursor="open"
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: '#FAFAF8',
                backgroundColor: '#111111',
                padding: '9px 20px',
                borderRadius: 9999,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
            >
              {TALK_LABEL}
            </Link>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              padding: 8,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            className="star-hamburger"
          >
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                style={{
                  display: 'block',
                  width: 22,
                  height: 1.5,
                  backgroundColor: open ? (index === 1 ? 'transparent' : '#FAFAF8') : '#111111',
                  transform: open
                    ? index === 0
                      ? 'translateY(6.5px) rotate(45deg)'
                      : index === 2
                        ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'none'
                    : 'none',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  borderRadius: 9999,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 180,
          backgroundColor: '#0A0A0A',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(1.5rem,4vw,4rem)',
        }}
      >
        {[...LINKS, { label: TALK_LABEL, href: '/contact' }].map(({ label, href }, index) => (
          <Link
            key={href}
            href={href}
            data-cursor="open"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem,10vw,4.5rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              color: index === 3 ? '#E8940A' : '#FAFAF8',
              textDecoration: 'none',
              lineHeight: 1.15,
              padding: '6px 0',
            }}
          >
            {label}
          </Link>
        ))}

        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(1.5rem,4vw,4rem)',
            left: 'clamp(1.5rem,4vw,4rem)',
            right: 'clamp(1.5rem,4vw,4rem)',
            borderTop: '1px solid #1E1E1E',
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              color: '#555553',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            STAR * Web Design
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: '#555553' }}>
            Bhopal, India
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .star-desktop-nav { display: none !important; }
          .star-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
