import Link from 'next/link'

const WA_NUMBER = '91XXXXXXXXXX' // Replace with your WhatsApp number
const WA_MESSAGE = encodeURIComponent(
  "Hi Ali, I saw your portfolio and I'm interested in a website for my business."
)
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FAFAF8',
        borderTop: '1px solid #1E1E1E',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,4vw,4rem) clamp(2rem,4vw,3rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 40,
            paddingBottom: 48,
            borderBottom: '1px solid #1E1E1E',
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
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
              <span style={{ fontSize: 16, color: '#E8940A' }}>✦</span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.375rem,2.5vw,1.875rem)',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                maxWidth: 360,
              }}
            >
              Websites that make your business impossible to ignore.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 13,
                color: '#555553',
                textAlign: 'right',
                maxWidth: 220,
                lineHeight: 1.7,
              }}
            >
              Ready to grow? We build first - you pay only if you love it.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-ui)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: '#111111',
                backgroundColor: '#E8940A',
                padding: '12px 24px',
                borderRadius: 9999,
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
            paddingBottom: 32,
            borderBottom: '1px solid #1E1E1E',
            marginBottom: 28,
          }}
        >
          <nav>
            <ul style={{ display: 'flex', gap: 32, listStyle: 'none' }}>
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 13,
                      color: '#555553',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
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
              color: '#555553',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ color: '#E8940A', fontSize: 10 }}>✦</span>
            Ali Asgar · Bhopal, India
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              color: '#333332',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} STAR Web Design Agency
          </p>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 13,
              fontStyle: 'italic',
              color: '#333332',
            }}
          >
            Built with intent.
          </p>
        </div>
      </div>
    </footer>
  )
}
