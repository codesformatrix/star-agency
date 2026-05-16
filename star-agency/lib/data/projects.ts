export type Project = {
  id: string;
  title: string;
  slug: string;
  industry: string;
  location: string;
  url: string;
  screenshot: string;
  palette: [string, string];
  tags: string[];
  description: string;
  year: number;
};

/** Hero + portfolio source — screenshots live in /public/images/projects/ */
export const heroProjects: Project[] = [
  {
    id: "roshan-events",
    title: "Roshan Events",
    slug: "roshan-events",
    industry: "Wedding Planning",
    location: "Jaipur",
    url: "https://roshan-events.pages.dev",
    screenshot: "/images/projects/roshan-events.jpg",
    palette: ["#0a0d1a", "#c9a84c"],
    tags: ["Wedding", "Events", "Jaipur"],
    description:
      "Premium wedding planning site with midnight navy palette, canvas particles, and WhatsApp-first conversion.",
    year: 2025,
  },
  {
    id: "studio-architects",
    title: "Studio Architects",
    slug: "studio-architects",
    industry: "Architecture",
    location: "Jaipur",
    url: "#",
    screenshot: "/images/projects/studio-architects.jpg",
    palette: ["#111111", "#E8940A"],
    tags: ["Architecture", "Portfolio"],
    description:
      "Minimal portfolio for a Jaipur architecture practice — project grid and enquiry flow.",
    year: 2025,
  },
  {
    id: "vivaah-planners",
    title: "Vivaah Planners",
    slug: "vivaah-planners",
    industry: "Wedding Planning",
    location: "Jaipur",
    url: "#",
    screenshot: "/images/projects/vivaah-planners.jpg",
    palette: ["#1a0f14", "#d4a574"],
    tags: ["Wedding", "Luxury"],
    description:
      "Elegant wedding planner site with editorial typography and gallery-led storytelling.",
    year: 2025,
  },
  {
    id: "atelier-design",
    title: "Atelier Design",
    slug: "atelier-design",
    industry: "Architecture",
    location: "Jaipur",
    url: "#",
    screenshot: "/images/projects/atelier-design.jpg",
    palette: ["#f3f1ec", "#111111"],
    tags: ["Architecture", "Interior"],
    description:
      "Light, gallery-style architecture studio site with case-study depth and contact CTA.",
    year: 2025,
  },
  {
    id: "celebrations-co",
    title: "Celebrations Co.",
    slug: "celebrations-co",
    industry: "Wedding Planning",
    location: "Jaipur",
    url: "#",
    screenshot: "/images/projects/celebrations-co.jpg",
    palette: ["#0a0a0a", "#e8940a"],
    tags: ["Events", "Wedding"],
    description:
      "High-contrast events brand with motion-led hero and instant WhatsApp booking.",
    year: 2025,
  },
];

export const CARD_LAYOUT = [
  { x: -2.8, y: 0.4, z: -0.8, rotY: 0.35, rotX: -0.08 },
  { x: -0.6, y: -0.2, z: 0.6, rotY: -0.2, rotX: 0.05 },
  { x: 1.4, y: 0.5, z: -0.3, rotY: 0.15, rotX: -0.04 },
  { x: 2.6, y: -0.35, z: 0.9, rotY: -0.28, rotX: 0.07 },
  { x: 0.2, y: 0.85, z: -1.2, rotY: 0.42, rotX: -0.1 },
] as const;
