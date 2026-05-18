# STAR Web Design Agency

Next.js site lives in **`star-agency/`**.

## Vercel deployment

In your Vercel project → **Settings → General → Root Directory**, set:

```
star-agency
```

Then redeploy. Without this, `/` returns 404 because the app is not at the repository root.

## Local development

```bash
cd star-agency
npm install
npm run dev
```

Open http://localhost:3000
