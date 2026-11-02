# Capybudget marketing site

Astro site for capybudget.site, deployed on Vercel. The app itself is a separate repo (`lionelritchie29/capybudget`) and lives at `app.capybudget.site`. See PLAN.md for the original plan and the domain cutover checklist.

- **Commands:** `pnpm dev`, `pnpm build`, `pnpm check` (astro check), `pnpm lint`, `pnpm format`. CI (`.github/workflows/ci.yml`) runs format check, lint, check and build.
- **Dev server:** in agents, run it in the background (`astro dev --background`; manage with `astro dev stop|status|logs`).
- **Rendering:** every page is prerendered (`output: 'static'`). Only `/waitlist` (the no-JS form fallback, `prerender = false`) and the Astro Action `waitlist.join` run as a Vercel function.
- **Styling follows the app.** `src/styles/tokens.css` is a copy of the app's `src/app/globals.css` token blocks; when the app's tokens change, copy them over again instead of editing here. Marketing-only tokens (`--brand` caramel, `--onsen` blue, glows, grid) live in `src/styles/global.css`. Caramel and onsen are accents only; buttons stay `primary` like the app.
- **Type:** Inter everywhere; money uses `font-number tabular-nums`, like the app's AvailablePill.
- **Mockups** in `src/components/mockups/` are HTML recreations of app screens. They are `role="img"` with a label, contents `aria-hidden` + `inert`. Keep their numbers from `src/content/demo-budget.ts` (one USD household budget) so every mockup tells the same story.
- **Feature copy** lives in `src/content/features.ts` and feeds both the home bento and /features. Only claim what the app actually does; check the app repo when adding copy.
- **Screenshots:** `pnpm screenshots` signs into the staging demo budget (credentials in `.env.local`, see `.env.example`) and writes `src/assets/screenshots/{light,dark}/*.png`. /features falls back to mockups for any that are missing.
- **OG image:** `src/pages/og-image.astro` → `pnpm og` (with `pnpm dev` running) → `public/og.png`.
- **Waitlist:** Supabase table `waitlist_signups` (SQL in `db/`, applied out-of-band through the app repo's migrations) and a Resend confirmation email. Server env: `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `RESEND_API_KEY`, optional `WAITLIST_FROM_EMAIL`. Without them the form shows a friendly error.
- **Redirects:** `vercel.json` sends old app paths on the apex (`/b/*`, `/login`, `/auth/*`, `/no-access`, `/api/*`) to `app.capybudget.site`. Don't add routes under those prefixes.
