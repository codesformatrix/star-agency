# STAR Web Design Agency

Premium portfolio and marketing site for STAR Web Design Agency (Jaipur).

## Project structure

The Next.js app lives at the **repository root** — not in a subfolder:

```
app/           → pages and layout
components/    → UI, sections, Three.js hero
lib/           → motion tokens, GSAP, data
public/        → images and static assets
```

There is no `star-agency/` subfolder. The app was flattened for Vercel; edit files at the root only.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

| Setting | Value |
|---------|--------|
| **Root Directory** | *(empty — repository root)* |
| **Install command** | `npm install` (default) |
| **Build command** | `npm run build` (default) |
| **Production branch** | `main` |

Do not set Root Directory to `star-agency` — that path no longer exists.

## Stack

Next.js 16 · React 18 · GSAP · Lenis · Three.js · Tailwind CSS 4
