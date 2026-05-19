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
  'Boutique hospitality brands that want a stronger first impression online.',
  'Indian businesses whose current website feels dated, generic, or easy to forget.',
]

const briefChecklist = [
  'Your current website, Instagram, or any existing online presence.',
  'What feels weak today: trust, clarity, presentation, enquiries, or all of it.',
  'A few references or competitor sites that feel closer to the level you want.',
  'The services, cities, and type of client the website needs to speak to.',
]

const engagementSteps = [
  'Send the business context and the links that matter.',
  'Ali studies the positioning, the current weaknesses, and the category.',
  'STAR builds the first version so the quality can be judged directly.',
]

export default function ContactPage() {
  return (
    <>
      <section className="section surface-light">
        <RevealSection>
          <div
            className="container contact-intro"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(300px, 0.95fr)',
              gap: 40,
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
                  fontSize: 'clamp(3rem,7.5vw,6.8rem)',
                  fontWeight: 800,
                  fontStyle: 'italic',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#111111',
                  maxWidth: '10.8ch',
                }}
              >
                Bring the brief. Ali will build the first version before you decide.
              </h1>
            </div>

            <div data-reveal data-delay="0.1" style={{ justifySelf: 'end', maxWidth: 480 }}>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(1rem,1.3vw,1.125rem)',
                  lineHeight: 1.8,
                  color: '#555553',
                  marginBottom: 28,
                }}
              >
                This is the right place if the current website feels too generic, too dated, or too
                weak to support the kind of clients the business should be attracting.
              </p>

              <div
                className="contact-intro__facts"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 14,
                }}
              >
                {[
                  { label: 'Base', value: siteConfig.locationCity },
                  { label: 'Model', value: 'Build first' },
                  { label: 'Reply style', value: 'WhatsApp-first' },
                ].map((item) => (
                  <div
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
                        fontSize: 'clamp(1.25rem,2vw,1.7rem)',
                        fontWeight: 700,
                        fontStyle: 'italic',
                        lineHeight: 1.08,
                        letterSpacing: '-0.02em',
                        color: '#111111',
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-warm" style={{ paddingTop: 0 }}>
        <RevealSection>
          <div className="container">
            <div
              className="contact-grid"
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
                    borderRadius: 24,
                    border: '1px solid #EBEBEA',
                    backgroundColor: '#FAFAF8',
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
                  data-delay="0.08"
                  style={{
                    padding: '28px 24px',
                    borderRadius: 24,
                    border: '1px solid #EBEBEA',
                    backgroundColor: '#FAFAF8',
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
                    borderRadius: 24,
                    border: '1px solid #EBEBEA',
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

              <div data-reveal data-delay="0.08">
                <ContactForm />
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      <section className="section surface-light">
        <RevealSection>
          <div
            className="container contact-cta"
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 24,
              alignItems: 'center',
              padding: 'clamp(1.75rem,3vw,2.5rem)',
              borderRadius: 28,
              border: '1px solid #EBEBEA',
              backgroundColor: '#F8F6F2',
            }}
          >
            <div>
              <p className="section-tag" style={{ marginBottom: 18 }}>
                Need more context first?
              </p>
              <h2 className="text-h1" style={{ color: '#111111', maxWidth: '11ch', marginBottom: 16 }}>
                Review the work, then come back with the strongest direction.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: '#555553',
                  maxWidth: '40ch',
                }}
              >
                The portfolio is the clearest proof of the standard. If you need to judge the work
                before starting the conversation, that is exactly what it is there for.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <Link href="/work" className="btn btn-primary">
                Review the work
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Open WhatsApp directly
              </a>
            </div>
          </div>
        </RevealSection>
      </section>

      <style>{`
        @media (max-width: 1080px) {
          .contact-intro,
          .contact-grid,
          .contact-cta {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          .contact-intro__facts {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
