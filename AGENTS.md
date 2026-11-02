# Capybudget marketing site

Astro site for capybudget.site, deployed on Vercel. The app itself is a separate repo (`lionelritchie29/capybudget`) and lives at `app.capybudget.site`. See PLAN.md for the original plan and the domain cutover checklist.

- **Commands:** `pnpm dev`, `pnpm build`, `pnpm check` (astro check), `pnpm lint`, `pnpm format`. CI (`.github/workflows/ci.yml`) runs format check, lint, check and build.
- **Dev server:** in agents, run it in the background (`astro dev --background`; manage with `astro dev stop|status|logs`).
- **Rendering:** every page is prerendered (`output: 'static'`). Only `/waitlist` (the no-JS form fallback, `prerender = false`), the Astro Action `waitlist.join` and the app redirects run as a Vercel function.
- **Styling follows the app.** `src/styles/tokens.css` is a copy of the app's `src/app/globals.css` token blocks; when the app's tokens change, copy them over again instead of editing here. Marketing-only tokens (`--brand` caramel, `--onsen` blue, glows, grid) live in `src/styles/global.css`. Caramel and onsen are accents only; buttons stay `primary` like the app.
- **Type:** Inter everywhere; money uses `font-number tabular-nums`, like the app's AvailablePill.
- **Mockups** in `src/components/mockups/` are HTML recreations of app screens. They are `role="img"` with a label, contents `aria-hidden` + `inert`. They mirror the app's markup (grids, labels, classes, lucide icons); keep their numbers from `src/content/demo-budget.ts` (one USD household budget) so every mockup tells the same story.
- **Feature copy** lives in `src/content/features.ts` and feeds both the home bento and /features. Only claim what the app actually does; check the app repo when adding copy.
- **No screenshots.** Every product image is an HTML mockup rebuilt from the app's real components (`src/components/mockups/`). When the app's UI changes, read the matching app component and update the mockup.
- **OG image:** `src/pages/og-image.astro` → `pnpm og` (with `pnpm dev` running) → `public/og.png`.
- **Waitlist:** Supabase table `waitlist_signups` (SQL in `db/`, applied out-of-band through the app repo's migrations) and a Resend confirmation email. Server env: `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `RESEND_API_KEY`, optional `WAITLIST_FROM_EMAIL`. Without them the form shows a friendly error.
- **Redirects:** on-demand endpoints in `src/pages/` (`b/[...path]`, `login`, `auth/[...path]`, `no-access`, `api/[...path]`, all via `src/lib/app-redirect.ts`) send old app paths on the apex to `app.capybudget.site` with a 308. Not `vercel.json`: the adapter's build output replaces its routing. Don't add pages under those prefixes.
