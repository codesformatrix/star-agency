# STAR Web Design Agency

Next.js site lives in **`star-agency/`**.

## Vercel deployment

1. **Settings → General → Root Directory** → set to `star-agency` (required).
2. **Settings → General → Build & Development Settings** → leave **Install Command** and **Build Command** empty (use defaults: `npm install`, `npm run build`).
3. Do **not** add `cd star-agency` in custom commands when Root Directory is already `star-agency`.
4. Redeploy.

Without Root Directory set to `star-agency`, `/` returns 404.

## Local development

```bash
cd star-agency
npm install
npm run dev
```

Open http://localhost:3000
