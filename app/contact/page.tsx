import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import RevealSection from '@/components/ui/RevealSection'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Contact',
  description:
    'Start a website project with STAR. Share your brief, open WhatsApp with the details prefilled, and get a first version before you pay.',
}

const bestFitBusinesses = [
  'Architecture studios that need a more credible portfolio presence.',
  'Wedding planners who rely on taste, trust, and premium presentation.',
  'Boutique hospitality brands that want a sharper first impression online.',
  'Indian businesses whose current website feels dated, generic, or easy to forget.',
]

const briefChecklist = [
  'Your current website, Instagram, or any online presence worth reviewing.',
  'What feels weak today: trust, clarity, presentation, enquiries, or all of it.',
  'A few references or competitors that feel closer to the level you want.',
  'The kind of client, city, and offer the website needs to speak to.',
]

const engagementSteps = [
  'Send the business context and the links that matter.',
  'Ali studies the current positioning, category patterns, and visible weaknesses.',
  'STAR builds the first version so the quality can be judged directly.',
]

export default function ContactPage() {
  return (
    <>
      <section
        className="section surface-light"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-7rem',
            right: '-6rem',
            width: '28rem',
            height: '28rem',
            borderRadius: '50%',
            background: 'rgba(232,148,10,0.12)',
            filter: 'blur(44px)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 'auto auto -4rem 8%',
            width: '20rem',
            height: '20rem',
            borderRadius: '50%',
            background: 'rgba(17,17,17,0.05)',
            filter: 'blur(40px)',
          }}
        />

        <RevealSection>
          <div
            className="container contact-hero"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.02fr) minmax(320px, 0.98fr)',
              gap: 32,
              alignItems: 'end',
            }}
          >
            <div>
              <p className="section-tag" data-reveal>
                Contact
              </p>
              <h1
                data-reveal
                data-delay="0.05"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.1rem,7.6vw,6.85rem)',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  lineHeight: 0.98,
                  letterSpacing: '-0.03em',
                  color: '#111111',
                  maxWidth: '11ch',
                  marginBottom: 24,
                }}
              >
                Bring the brief. We will build the first version before asking you to decide.
              </h1>
              <p
                data-reveal
                data-delay="0.12"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.25vw,1.125rem)',
                  lineHeight: 1.86,
                  color: '#555553',
                  maxWidth: '48ch',
                  marginBottom: 28,
                }}
              >
                This works best for businesses that already know the current website feels too
                generic, too dated, or too weak for the kind of clients they want to win.
              </p>

              <div
                data-reveal
                data-delay="0.16"
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
              >
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  data-cursor="open"
                >
                  Open WhatsApp
                </a>
                <Link href="/work" className="btn btn-outline" data-cursor="view">
                  Review the work first
                </Link>
              </div>
            </div>

            <div
              data-reveal
              data-delay="0.1"
              style={{
                display: 'grid',
                gap: 16,
              }}
            >
              <article
                style={{
                  padding: 'clamp(1.5rem,2vw,2rem)',
                  borderRadius: 28,
                  backgroundColor: '#111111',
                  color: '#FAFAF8',
                  boxShadow: '0 24px 70px rgba(17,17,17,0.16)',
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
                    marginBottom: 14,
                  }}
                >
                  Best starting point
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem,2vw,2.25rem)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    color: '#FAFAF8',
                    marginBottom: 16,
                    maxWidth: '13ch',
                  }}
                >
                  Share what is not working now, not just what you want added later.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: 'rgba(250,250,248,0.72)',
                  }}
                >
                  The stronger the context, the stronger the first direction becomes. Current
                  links, category references, and the real commercial problem are far more useful
                  than vague wishlists.
                </p>
              </article>

              <div
                className="contact-hero__facts"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 12,
                }}
              >
                {[
                  { label: 'Base', value: siteConfig.locationCity },
                  { label: 'Model', value: 'Build first' },
                  { label: 'Reply', value: 'WhatsApp-first' },
                ].map((item) => (
                  <article
                    key={item.label}
                    style={{
                      padding: '18px 16px',
                      borderRadius: 20,
                      border: '1px solid #EBEBEA',
                      backgroundColor: '#F8F6F2',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#888886',
                        marginBottom: 10,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem,1.8vw,1.7rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 1.08,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-warm" style={{ paddingTop: 0 }}>
        <RevealSection>
          <div
            className="container contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 0.82fr) minmax(0, 1.18fr)',
              gap: 22,
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'grid', gap: 18 }}>
              <article
                data-reveal
                style={{
                  padding: '28px 24px',
                  borderRadius: 26,
                  border: '1px solid #EBEBEA',
                  backgroundColor: '#FAFAF8',
                  boxShadow: '0 18px 40px rgba(17,17,17,0.04)',
                }}
              >
                <p className="section-tag" style={{ marginBottom: 18 }}>
                  Best fit
                </p>
                <ul
                  style={{
                    display: 'grid',
                    gap: 14,
                    listStyle: 'none',
                  }}
                >
                  {bestFitBusinesses.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: '#333332',
                        paddingLeft: 18,
                        position: 'relative',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 10,
                          width: 6,
                          height: 6,
                          borderRadius: 9999,
                          backgroundColor: '#E8940A',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                data-reveal
                data-delay="0.06"
                style={{
                  padding: '28px 24px',
                  borderRadius: 26,
                  border: '1px solid #EBEBEA',
                  backgroundColor: '#FAFAF8',
                  boxShadow: '0 18px 40px rgba(17,17,17,0.04)',
                }}
              >
                <p className="section-tag" style={{ marginBottom: 18 }}>
                  What helps
                </p>
                <ul
                  style={{
                    display: 'grid',
                    gap: 14,
                    listStyle: 'none',
                  }}
                >
                  {briefChecklist.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: '#333332',
                        paddingLeft: 18,
                        position: 'relative',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 10,
                          width: 6,
                          height: 6,
                          borderRadius: 9999,
                          backgroundColor: '#111111',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                data-reveal
                data-delay="0.12"
                style={{
                  padding: '28px 24px',
                  borderRadius: 26,
                  border: '1px solid rgba(250,250,248,0.12)',
                  backgroundColor: '#111111',
                  color: '#FAFAF8',
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
                    marginBottom: 18,
                  }}
                >
                  How the engagement starts
                </p>
                <div style={{ display: 'grid', gap: 18 }}>
                  {engagementSteps.map((step, index) => (
                    <div key={step} style={{ display: 'grid', gap: 8 }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'rgba(250,250,248,0.5)',
                        }}
                      >
                        0{index + 1}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: 15,
                          lineHeight: 1.8,
                          color: '#FAFAF8',
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div
              data-reveal
              data-delay="0.08"
              style={{ display: 'grid', gap: 18 }}
            >
              <ContactForm />

              <article
                style={{
                  padding: '22px 24px',
                  borderRadius: 24,
                  border: '1px solid #EBEBEA',
                  backgroundColor: '#FAFAF8',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 18,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#888886',
                      marginBottom: 10,
                    }}
                  >
                    Prefer a faster start?
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: '#555553',
                      maxWidth: '36ch',
                    }}
                  >
                    Start with a short WhatsApp message if that feels easier. The full brief can
                    follow once the conversation is moving in the right direction.
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  data-cursor="open"
                >
                  Message on WhatsApp
                </a>
              </article>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-dark">
        <RevealSection>
          <div
            className="container contact-cta"
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 24,
              alignItems: 'center',
              padding: 'clamp(1.9rem,3vw,2.7rem)',
              borderRadius: 30,
              border: '1px solid rgba(250,250,248,0.1)',
              backgroundColor: 'rgba(250,250,248,0.04)',
            }}
          >
            <div>
              <p className="section-tag" style={{ color: 'rgba(250,250,248,0.52)', marginBottom: 18 }}>
                Need more proof first?
              </p>
              <h2 className="text-h1" style={{ color: '#FAFAF8', maxWidth: '11ch', marginBottom: 16 }}>
                Review the portfolio first, then come back with the direction you want to pursue.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: 'rgba(250,250,248,0.7)',
                  maxWidth: '40ch',
                }}
              >
                If you want to judge the standard before starting the conversation, that is exactly
                what the work pages are built for.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/work" className="btn btn-saffron" data-cursor="view">
                Review the work
              </Link>
              <Link href="/about" className="btn btn-outline" data-cursor="open">
                Read the story
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      <style>{`
        @media (max-width: 1080px) {
          .contact-hero,
          .contact-grid,
          .contact-cta {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          .contact-hero__facts {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
