import Link from 'next/link'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site'

const WA_URL = buildWhatsAppUrl()

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
        color: '#FAFAF8',
        borderTop: '1px solid #1E1E1E',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12rem',
          right: '-6rem',
          width: '28rem',
          height: '28rem',
          borderRadius: '50%',
          background: 'rgba(232,148,10,0.13)',
          filter: 'blur(50px)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,4vw,4rem) clamp(2rem,4vw,3rem)',
        }}
      >
        <div
          className="footer-top"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 360px)',
            gap: 36,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(250,250,248,0.08)',
            marginBottom: 40,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                STAR
              </span>
              <span style={{ fontSize: 14, color: '#E8940A' }}>*</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem,2.7vw,2.15rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                lineHeight: 1.12,
                maxWidth: 430,
                marginBottom: 18,
              }}
            >
              Websites designed to make strong businesses feel unforgettable online.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 15,
                lineHeight: 1.84,
                color: 'rgba(250,250,248,0.66)',
                maxWidth: 520,
              }}
            >
              Based in {siteConfig.locationCity}. Working across India. Built for businesses that
              need a more credible, more distinctive, and more premium digital first impression.
            </p>
          </div>

          <article
            style={{
              padding: '24px 24px 22px',
              borderRadius: 24,
              border: '1px solid rgba(250,250,248,0.08)',
              backgroundColor: 'rgba(250,250,248,0.04)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#E8940A',
                marginBottom: 12,
              }}
            >
              Zero-upfront model
            </p>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 15,
                lineHeight: 1.78,
                color: 'rgba(250,250,248,0.72)',
                marginBottom: 18,
              }}
            >
              STAR builds the first version before asking for payment, so the quality is visible
              before the decision is.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-saffron"
              data-cursor="open"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Chat on WhatsApp
            </a>
          </article>
        </div>

        <div
          className="footer-bottom"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto auto',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <nav>
            <ul
              style={{
                display: 'flex',
                gap: 28,
                listStyle: 'none',
                flexWrap: 'wrap',
              }}
            >
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    data-cursor="open"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 13,
                      color: 'rgba(250,250,248,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 12,
              color: 'rgba(250,250,248,0.46)',
              whiteSpace: 'nowrap',
            }}
          >
            {siteConfig.founderName} | {siteConfig.locationLabel}
          </span>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontStyle: 'italic',
              color: 'rgba(250,250,248,0.38)',
              whiteSpace: 'nowrap',
            }}
          >
            Built with intent.
          </p>
        </div>

        <p
          style={{
            marginTop: 26,
            fontFamily: 'var(--font-ui)',
            fontSize: 11,
            color: 'rgba(250,250,248,0.28)',
            letterSpacing: '0.04em',
          }}
        >
          Copyright {new Date().getFullYear()} {siteConfig.agencyName}
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top,
          .footer-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
