'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { buildInquiryWhatsAppUrl, buildWhatsAppUrl, type InquiryFormValues } from '@/lib/site'

const INITIAL_VALUES: InquiryFormValues = {
  name: '',
  business: '',
  industry: '',
  city: '',
  website: '',
  projectType: 'New website',
  goals: '',
  timeline: '',
}

const fieldShellStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
} as const

const labelStyle = {
  fontFamily: 'var(--font-ui)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#555553',
} as const

const inputStyle = {
  width: '100%',
  borderRadius: 18,
  border: '1px solid #D4D4D2',
  backgroundColor: '#FAFAF8',
  padding: '14px 16px',
  fontFamily: 'var(--font-ui)',
  fontSize: 15,
  lineHeight: 1.5,
  color: '#111111',
  outline: 'none',
} as const

const helperStyle = {
  fontFamily: 'var(--font-ui)',
  fontSize: 13,
  lineHeight: 1.7,
  color: '#888886',
} as const

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  width: '100%',
  borderRadius: 9999,
  backgroundColor: '#111111',
  color: '#FAFAF8',
  padding: '15px 24px',
  fontFamily: 'var(--font-ui)',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
} as const

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextUrl = buildInquiryWhatsAppUrl(values)
    const openedWindow = window.open(nextUrl, '_blank', 'noopener,noreferrer')

    if (!openedWindow) {
      window.location.href = nextUrl
    }

    setHasSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        gap: 20,
        padding: 'clamp(1.5rem,2vw,2rem)',
        borderRadius: 28,
        border: '1px solid #EBEBEA',
        backgroundColor: '#F8F6F2',
        boxShadow: '0 24px 60px rgba(17,17,17,0.06)',
      }}
    >
      <div
        className="contact-form__row"
        style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
      >
        <div style={fieldShellStyle}>
          <label htmlFor="name" style={labelStyle}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Ali Asgar"
            autoComplete="name"
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldShellStyle}>
          <label htmlFor="business" style={labelStyle}>
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            value={values.business}
            onChange={handleChange}
            placeholder="Studio name or brand"
            autoComplete="organization"
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div
        className="contact-form__row"
        style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
      >
        <div style={fieldShellStyle}>
          <label htmlFor="industry" style={labelStyle}>
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            type="text"
            value={values.industry}
            onChange={handleChange}
            placeholder="Architecture, weddings, hospitality..."
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldShellStyle}>
          <label htmlFor="city" style={labelStyle}>
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
            placeholder="Jaipur, Bhopal, Indore..."
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div
        className="contact-form__row"
        style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}
      >
        <div style={fieldShellStyle}>
          <label htmlFor="projectType" style={labelStyle}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option>New website</option>
            <option>Website redesign</option>
            <option>Portfolio refresh</option>
            <option>Landing page</option>
          </select>
        </div>

        <div style={fieldShellStyle}>
          <label htmlFor="website" style={labelStyle}>
            Current website or Instagram
          </label>
          <input
            id="website"
            name="website"
            type="text"
            value={values.website}
            onChange={handleChange}
            placeholder="Optional link"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={fieldShellStyle}>
        <label htmlFor="goals" style={labelStyle}>
          What feels off right now?
        </label>
        <textarea
          id="goals"
          name="goals"
          value={values.goals}
          onChange={handleChange}
          placeholder="Tell Ali what the current site is missing, what kind of clients you want to attract, and what needs to feel more premium."
          required
          rows={6}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 160 }}
        />
      </div>

      <div style={fieldShellStyle}>
        <label htmlFor="timeline" style={labelStyle}>
          Preferred timeline
        </label>
        <input
          id="timeline"
          name="timeline"
          type="text"
          value={values.timeline}
          onChange={handleChange}
          placeholder="As soon as possible, this month, just exploring..."
          required
          style={inputStyle}
        />
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <button type="submit" style={buttonStyle} data-cursor="open">
          Send brief on WhatsApp
        </button>

        <p style={helperStyle}>
          {hasSubmitted
            ? 'WhatsApp opened with your brief prefilled. If a new tab did not open, the same link was loaded in this tab.'
            : 'Submitting this form opens WhatsApp with your project details already structured, so Ali can review the brief before replying.'}
        </p>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="open"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#555553',
          }}
        >
          Skip the form and open WhatsApp directly
        </a>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .contact-form__row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  )
}
