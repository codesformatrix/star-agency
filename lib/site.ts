export const siteConfig = {
  agencyName: 'STAR Web Design Agency',
  agencyShortName: 'STAR',
  founderName: 'Ali Asgar',
  locationCity: 'Bhopal',
  locationLabel: 'Bhopal, India',
  serviceAreaLabel: 'Across India',
  whatsappNumber: '91XXXXXXXXXX',
  defaultWhatsAppMessage:
    "Hi Ali, I saw your portfolio and I'm interested in a website for my business.",
} as const

export type InquiryFormValues = {
  name: string
  business: string
  industry: string
  city: string
  website: string
  projectType: string
  goals: string
  timeline: string
}

export function buildWhatsAppUrl(message: string = siteConfig.defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildInquiryWhatsAppMessage(values: InquiryFormValues) {
  const lines = [
    `Hi Ali, I'm interested in a website for my business.`,
    '',
    `Name: ${values.name}`,
    `Business: ${values.business}`,
    `Industry: ${values.industry}`,
    `City: ${values.city}`,
    `Project type: ${values.projectType}`,
    values.website ? `Current website / Instagram: ${values.website}` : null,
    `Goals: ${values.goals}`,
    `Timeline: ${values.timeline}`,
  ].filter(Boolean)

  return lines.join('\n')
}

export function buildInquiryWhatsAppUrl(values: InquiryFormValues) {
  return buildWhatsAppUrl(buildInquiryWhatsAppMessage(values))
}
