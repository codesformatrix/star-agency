export type ProjectCategory =
  | 'Architecture'
  | 'Wedding Planning'
  | 'Hospitality'

export type ProjectGalleryItem = {
  image: string
  alt: string
  aspect: 'landscape' | 'portrait' | 'wide'
  objectPosition?: string
}

export type ProjectHeroFrame = {
  image: string
  alt: string
  objectPosition?: string
}

export type Project = {
  id: string
  title: string
  slug: string
  category: ProjectCategory
  industry: string
  location: string
  year: number
  url: string
  screenshot: string
  palette: [string, string]
  tags: string[]
  description: string
  featured: boolean
  summary: string
  challenge: string
  approach: string
  outcome: string
  deliverables: string[]
  gallery: ProjectGalleryItem[]
  heroFrames: ProjectHeroFrame[]
}

export const allProjects: Project[] = [
  {
    id: 'roshan-events',
    title: 'Roshan Events',
    slug: 'roshan-events',
    category: 'Wedding Planning',
    industry: 'Luxury Wedding Planning',
    location: 'Jaipur',
    year: 2025,
    url: 'https://roshan-events.pages.dev',
    screenshot: '/images/projects/roshan-events.webp',
    palette: ['#0A0D1A', '#C9A84C'],
    tags: ['Wedding', 'Events', 'Editorial', 'WhatsApp'],
    description:
      'A midnight-toned wedding site designed to feel cinematic while staying conversion-first.',
    featured: true,
    summary:
      'Roshan Events needed a portfolio that felt premium enough for destination weddings without losing the speed and clarity required for instant enquiries.',
    challenge:
      'The previous digital presence did not translate the brand’s high-touch planning experience. It looked serviceable, but not aspirational, and it buried the strongest work instead of leading with it.',
    approach:
      'We built the experience around visual storytelling: dramatic contrast, controlled motion, elegant typography, and clear WhatsApp-first contact pathways. The layout keeps every section easy to scan while making the imagery feel ceremonial.',
    outcome:
      'The final site gives Roshan Events a far stronger first impression, a clearer premium signal, and a portfolio flow that feels intentional from the first scroll to the final contact prompt.',
    deliverables: [
      'Editorial homepage design',
      'Project-led service storytelling',
      'WhatsApp-focused enquiry flow',
      'Custom visual rhythm and motion system',
    ],
    heroFrames: [
      {
        image: '/images/projects/roshan-events.webp',
        alt: 'Roshan Events editorial hero frame',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/roshan-events.webp',
        alt: 'Roshan Events enquiry flow frame',
        objectPosition: 'right center',
      },
      {
        image: '/images/projects/roshan-event-portfolio.jpg',
        alt: 'Roshan Events cinematic portfolio frame',
        objectPosition: 'center center',
      },
    ],
    gallery: [
      {
        image: '/images/projects/roshan-events.webp',
        alt: 'Roshan Events homepage detail crop',
        aspect: 'landscape',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/roshan-events-mobile.webp',
        alt: 'Roshan Events mobile-style crop',
        aspect: 'portrait',
        objectPosition: 'right center',
      },
    ],
  },
  {
    id: 'atelier-mora',
    title: 'Atelier Mora',
    slug: 'atelier-mora',
    category: 'Architecture',
    industry: 'Architecture Studio',
    location: 'Jaipur',
    year: 2025,
    url: '',
    screenshot: '/images/projects/atelier-mora.svg',
    palette: ['#EDE7DE', '#181513'],
    tags: ['Architecture', 'Portfolio', 'Minimal', 'Case Studies'],
    description:
      'A quiet, gallery-led website for an architecture practice that wanted restraint instead of flash.',
    featured: true,
    summary:
      'Atelier Mora needed a site that could present residential work with confidence while keeping the studio’s visual language sparse, warm, and considered.',
    challenge:
      'The studio had strong work, but the presentation lacked hierarchy. Everything carried the same weight, which made the portfolio feel flatter than the actual projects.',
    approach:
      'We structured the site like a printed monograph: generous spacing, careful image framing, and typography that supports the projects instead of competing with them. Each section was designed to feel calm, not generic.',
    outcome:
      'The resulting portfolio feels more credible, more curated, and far closer to the level of craft potential clients expect from a design-led architecture studio.',
    deliverables: [
      'Architecture portfolio system',
      'Case-study page templates',
      'Refined project navigation',
      'Warm editorial visual direction',
    ],
    heroFrames: [
      {
        image: '/images/projects/atelier-mora.svg',
        alt: 'Atelier Mora editorial frame',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/atelier-mora.svg',
        alt: 'Atelier Mora quiet system frame',
        objectPosition: 'left center',
      },
      {
        image: '/images/projects/atelier-mora.svg',
        alt: 'Atelier Mora project navigation frame',
        objectPosition: 'center center',
      },
    ],
    gallery: [
      {
        image: '/images/projects/atelier-mora.svg',
        alt: 'Atelier Mora image-led layout crop',
        aspect: 'wide',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/atelier-mora.svg',
        alt: 'Atelier Mora project grid crop',
        aspect: 'portrait',
        objectPosition: 'left center',
      },
    ],
  },
  {
    id: 'studio-canopy',
    title: 'Studio Canopy',
    slug: 'studio-canopy',
    category: 'Architecture',
    industry: 'Architecture and Interior Design',
    location: 'Indore',
    year: 2025,
    url: '',
    screenshot: '/images/projects/studio-canopy.svg',
    palette: ['#101A1A', '#D7A64B'],
    tags: ['Architecture', 'Interior', 'Presentation', 'Premium'],
    description:
      'A dark, tactile portfolio concept that balances visual weight with clear project discovery.',
    featured: true,
    summary:
      'Studio Canopy wanted a web presence that felt more established and more premium when prospects compared firms side by side.',
    challenge:
      'Their previous site treated architecture imagery like filler, which weakened the sense of authorship and made the studio look interchangeable.',
    approach:
      'We combined darker framing, structured project previews, and deliberate type scale to create a more commanding first impression without drifting into generic luxury tropes.',
    outcome:
      'The new direction gives the studio a more memorable portfolio identity and a stronger sense of authorship across project previews, case-study intros, and enquiry prompts.',
    deliverables: [
      'Premium portfolio homepage',
      'Interior and architecture showcase modules',
      'Structured project previews',
      'High-contrast visual system',
    ],
    heroFrames: [
      {
        image: '/images/projects/studio-canopy.svg',
        alt: 'Studio Canopy premium hero frame',
        objectPosition: 'center center',
      },
      {
        image: '/images/projects/studio-canopy.svg',
        alt: 'Studio Canopy portfolio frame',
        objectPosition: 'right center',
      },
      {
        image: '/images/projects/studio-canopy.svg',
        alt: 'Studio Canopy contrast frame',
        objectPosition: 'center top',
      },
    ],
    gallery: [
      {
        image: '/images/projects/studio-canopy.svg',
        alt: 'Studio Canopy hero composition crop',
        aspect: 'landscape',
        objectPosition: 'center center',
      },
      {
        image: '/images/projects/studio-canopy.svg',
        alt: 'Studio Canopy vertical device crop',
        aspect: 'portrait',
        objectPosition: 'right center',
      },
    ],
  },
  {
    id: 'courtyard-line',
    title: 'Courtyard Line',
    slug: 'courtyard-line',
    category: 'Architecture',
    industry: 'Contemporary Architecture Practice',
    location: 'Bhopal',
    year: 2025,
    url: '',
    screenshot: '/images/projects/courtyard-line.svg',
    palette: ['#F6F2EA', '#2D2A26'],
    tags: ['Architecture', 'Bhopal', 'Editorial', 'Residential'],
    description:
      'A refined architecture website built around calm typography and spacious case-study storytelling.',
    featured: false,
    summary:
      'Courtyard Line wanted a site that reflected thoughtful residential work and felt confident without resorting to flashy design shortcuts.',
    challenge:
      'The studio needed a presentation layer that felt contemporary and polished, but also grounded enough for clients making high-trust decisions.',
    approach:
      'We leaned into warm off-whites, long-form project framing, and understated interaction so the work feels composed, premium, and easy to trust.',
    outcome:
      'The portfolio now communicates a stronger design point of view and gives potential clients a much clearer sense of the studio’s taste level before the first conversation.',
    deliverables: [
      'Long-form case-study layout',
      'Warm neutral design system',
      'Residential project presentation',
      'Lead-oriented contact pathways',
    ],
    heroFrames: [
      {
        image: '/images/projects/courtyard-line.svg',
        alt: 'Courtyard Line editorial frame',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/courtyard-line.svg',
        alt: 'Courtyard Line residential frame',
        objectPosition: 'center center',
      },
      {
        image: '/images/projects/courtyard-line.svg',
        alt: 'Courtyard Line neutral frame',
        objectPosition: 'right center',
      },
    ],
    gallery: [
      {
        image: '/images/projects/courtyard-line.svg',
        alt: 'Courtyard Line editorial crop',
        aspect: 'wide',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/courtyard-line.svg',
        alt: 'Courtyard Line project detail crop',
        aspect: 'portrait',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'vivaah-planners',
    title: 'Vivaah Planners',
    slug: 'vivaah-planners',
    category: 'Wedding Planning',
    industry: 'Wedding Planning Studio',
    location: 'Udaipur',
    year: 2025,
    url: '',
    screenshot: '/images/projects/vivaah-planners.svg',
    palette: ['#1A0F14', '#D4A574'],
    tags: ['Wedding', 'Luxury', 'Gallery', 'Storytelling'],
    description:
      'An editorial wedding planner concept with soft contrast, romantic framing, and clear package discovery.',
    featured: true,
    summary:
      'Vivaah Planners needed a more polished digital presence that felt bespoke enough for high-end celebrations without becoming visually overdone.',
    challenge:
      'Their offer depended heavily on trust and taste, but the previous site did not communicate either clearly. It looked functional, not elevated.',
    approach:
      'We used a more editorial rhythm, softer luxury cues, and image-led sections that let the brand feel intentional from the first fold onward.',
    outcome:
      'The redesigned experience feels more aligned with the kind of premium event clients the studio wants to attract, and far more credible as a portfolio piece during outreach.',
    deliverables: [
      'Luxury wedding homepage',
      'Gallery-first content blocks',
      'Package discovery sections',
      'Soft editorial typography direction',
    ],
    heroFrames: [
      {
        image: '/images/projects/vivaah-planners.svg',
        alt: 'Vivaah Planners editorial frame',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/vivaah-planners.svg',
        alt: 'Vivaah Planners gallery frame',
        objectPosition: 'left center',
      },
      {
        image: '/images/projects/vivaah-planners.svg',
        alt: 'Vivaah Planners romantic frame',
        objectPosition: 'center center',
      },
    ],
    gallery: [
      {
        image: '/images/projects/vivaah-planners.svg',
        alt: 'Vivaah Planners layout crop',
        aspect: 'landscape',
        objectPosition: 'center top',
      },
      {
        image: '/images/projects/vivaah-planners.svg',
        alt: 'Vivaah Planners vertical crop',
        aspect: 'portrait',
        objectPosition: 'left center',
      },
    ],
  },
  {
    id: 'saffron-courtyard',
    title: 'Saffron Courtyard',
    slug: 'saffron-courtyard',
    category: 'Hospitality',
    industry: 'Boutique Hotel and Restaurant',
    location: 'Bhopal',
    year: 2025,
    url: '',
    screenshot: '/images/projects/saffron-courtyard.svg',
    palette: ['#2A211A', '#E59A32'],
    tags: ['Hospitality', 'Boutique', 'Dining', 'Reservations'],
    description:
      'A hospitality concept built to make a boutique property feel atmospheric, premium, and easy to book.',
    featured: true,
    summary:
      'Saffron Courtyard needed a site that could sell ambience, food, and stay experience in the same flow without feeling overloaded.',
    challenge:
      'Hospitality sites often become cluttered when they try to promote rooms, dining, and events at once. This brand needed a clearer narrative and stronger visual hierarchy.',
    approach:
      'We designed the journey around mood-first imagery, simplified reservation pathways, and a layered layout that gives each part of the business its own moment without fragmenting the experience.',
    outcome:
      'The final concept feels more premium, more experiential, and better suited to visitors deciding whether the property is worth remembering.',
    deliverables: [
      'Boutique hospitality homepage',
      'Room and dining presentation modules',
      'Reservation-focused calls to action',
      'Atmospheric visual storytelling',
    ],
    heroFrames: [
      {
        image: '/images/projects/saffron-courtyard.svg',
        alt: 'Saffron Courtyard hospitality frame',
        objectPosition: 'center center',
      },
      {
        image: '/images/projects/saffron-courtyard.svg',
        alt: 'Saffron Courtyard reservation frame',
        objectPosition: 'right center',
      },
      {
        image: '/images/projects/saffron-courtyard.svg',
        alt: 'Saffron Courtyard dining frame',
        objectPosition: 'center top',
      },
    ],
    gallery: [
      {
        image: '/images/projects/saffron-courtyard.svg',
        alt: 'Saffron Courtyard hero crop',
        aspect: 'landscape',
        objectPosition: 'center center',
      },
      {
        image: '/images/projects/saffron-courtyard.svg',
        alt: 'Saffron Courtyard mobile-style crop',
        aspect: 'portrait',
        objectPosition: 'right center',
      },
    ],
  },
]

export const heroProjects: Project[] = allProjects.filter((project) => project.featured).slice(0, 5)

export const heroWallItems = heroProjects.flatMap((project) =>
  project.heroFrames.map((frame, index) => ({
    id: `${project.slug}-${index}`,
    title: project.title,
    category: project.category,
    link: `/work/${project.slug}`,
    thumbnail: frame.image,
    objectPosition: frame.objectPosition ?? 'center center',
    palette: project.palette,
    caption: frame.alt,
  }))
)

export const CARD_LAYOUT = [
  { x: -2.8, y: 0.4, z: -0.8, rotY: 0.35, rotX: -0.08 },
  { x: -0.6, y: -0.2, z: 0.6, rotY: -0.2, rotX: 0.05 },
  { x: 1.4, y: 0.5, z: -0.3, rotY: 0.15, rotX: -0.04 },
  { x: 2.6, y: -0.35, z: 0.9, rotY: -0.28, rotX: 0.07 },
  { x: 0.2, y: 0.85, z: -1.2, rotY: 0.42, rotX: -0.1 },
] as const

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug)
}

export function getProjectCategories(): ProjectCategory[] {
  return ['Architecture', 'Wedding Planning', 'Hospitality']
}
