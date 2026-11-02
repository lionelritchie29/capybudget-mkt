# Capybudget marketing site: plan

Astro site for capybudget.site, deployed on Vercel from `lionelritchie29/capybudget-mkt`.

Decisions so far:

- **CTA:** join the waitlist / request access. Sign-ups stay disabled in the app; you onboard people by hand.
- **Domain:** the marketing site takes `capybudget.site`, and the app moves to `app.capybudget.site`.
- **v1 pages:** landing page (`/`) and a features deep-dive (`/features`).
- **Visuals:** HTML mockups only, rebuilt from the app's own components and tokens (no screenshots), so they follow light/dark and never go stale against a demo account.
- **Currency:** mockups show USD on the English pages and IDR (local amounts, not a conversion) on the Bahasa Indonesia pages under `/id`.
- **Claude/MCP and YNAB import:** both are advertised as features.
- **GitHub link:** none on the site.
- **Confirmation email:** sent on sign-up, in v1.

---

## 1. Stack

| Concern   | Choice                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| Framework | Latest Astro, `output: 'static'`, so every page is prerendered                                                            |
| Hosting   | `@astrojs/vercel` adapter, region `sin1` (same as the app). Only the waitlist action runs as a function                   |
| Styling   | Tailwind v4 via `@tailwindcss/vite`, with the app's CSS variables and `@theme inline` block copied over                   |
| Fonts     | Inter (`@fontsource-variable/inter`), self-hosted, the same as the app. No mono font: amounts use Inter's tabular figures |
| Icons     | `lucide-static` / `@lucide/astro` (the app uses lucide)                                                                   |
| JS        | No framework islands. Small inline scripts for the theme toggle, the waitlist form and scroll reveals                     |
| Forms     | Astro Actions (`astro:actions`) with a zod schema. Progressive enhancement, so the form also works without JS             |
| Data      | Supabase (same project as the app), new `waitlist_signups` table, written server-side with the secret key                 |
| SEO       | `@astrojs/sitemap`, per-page meta and OG tags, JSON-LD `SoftwareApplication`, static OG image                             |
| Analytics | `@vercel/analytics` (the app already uses it)                                                                             |
| Tooling   | pnpm, Prettier with the app's `.prettierrc` + `prettier-plugin-astro`, ESLint + `eslint-plugin-astro`, `astro check`      |

Using Actions instead of an `/api/waitlist` route is deliberate: actions live under `/_actions/*`, so the whole `/api/*` namespace on the apex can redirect to the app after the domain move (see §7).

## 2. Following the app's styling

Copied directly from `capybudget/src/app/globals.css`:

- **Light theme:** neutral zinc (`#ffffff` background, `#09090b` foreground, `#18181b` primary, `#e4e4e7` borders).
- **Dark theme:** warm stone (`#1c1917` background, `#f5f0eb` foreground, `#24201d` cards). It uses the same `.dark` class strategy, with `color-scheme`, and the theme is set before paint.
- **Radius:** `--radius: 0.5rem` and the same sm/md/lg/xl scale.
- **Status tokens:** `success`, `warning`, `warning-bar`, `danger`. These cover the Available pill's four tones (green when funded, yellow when a target is underfunded, red when overspent, grey at zero) and the underfunded target bar.
- **Chart palette:** `--chart-1…8` for the report mockups.
- **Type:** Inter with `tracking-tight` headings. Every money figure uses the app's `--font-number` token (Inter with `tnum`), like `AvailablePill`.
- **Control scale:** the `--control-*` / `--tap-min` tokens, which make buttons and fields larger below 48rem, so the marketing buttons match the app's phone sizing.
- **Hover variant:** the app's `@custom-variant hover` (fine pointers only), so a tap on a phone doesn't leave a hover style stuck on.
- **Components:** the button variants (`default`, `outline`, `ghost`, `link`) and the card are ported from the shadcn/cva classes into `.astro` components.

Additions for marketing only, kept in a separate `marketing.css` so the copied token block stays a clean copy:

- `--brand: #d4895a` (caramel, the app's `APP_THEME_COLOR`, which is also the capybara's fur) for highlights, the hero glow and small accents. It is never used as the primary button colour; buttons stay zinc or stone like the app.
- `--onsen: #a9c9ec` (the hot-spring blue from the icon) as a secondary accent for illustrations and gradients.
- Larger display type (`text-5xl` to `text-7xl`, `tracking-tighter`), more whitespace, and a 1200px content width.

The "modern" feel comes from:

- a bento feature grid
- a soft radial caramel/onsen glow behind the hero mockup
- a faint grid background
- scroll-triggered reveals (CSS `animation-timeline: view()` with an IntersectionObserver fallback, all disabled under `prefers-reduced-motion`)
- Astro `<ClientRouter />` view transitions between `/` and `/features`

Brand assets: copy `public/icons/prod/*` (the caramel capybara in an onsen) into `public/`, and use `icon-512.png` as the logo mark.

## 3. Information architecture

### `/` (landing page)

1. **Nav:** logo + "Capybudget", Features, FAQ, a "Sign in" link (to `app.capybudget.site/login`), the theme toggle, and a **Join waitlist** button. The nav is sticky with a blurred background.
2. **Hero:**
   - Headline in the calm-capybara voice, e.g. _"Give every dollar a job. Then relax."_
   - A one-line subhead about envelope budgeting.
   - An inline waitlist form.
   - **HTML mockup** of the Plan screen: a Ready to Assign banner, two category groups, and rows with assigned/activity figures and available pills (green, red, zero), with the mockup tilted slightly over the glow.
3. **Principles strip** (3–4 short items):
   - Envelope budgeting.
   - Overspending stays in its category.
   - No credit-card gymnastics.
   - Per-budget currency and time zone.
4. **Bento grid** (6–8 tiles, each with a small live mockup):
   - Plan & move money, with Recent Moves
   - Targets (yellow underfunded bar, snoozing a target for a month)
   - Category notes
   - Reports (spending donut / net worth line using the chart palette)
   - Scheduled transactions
   - Splits & tags
   - Reconcile (with a red dot on accounts that have uncleared transactions)
   - Undo/redo history
   - Command menu / keyboard-first
   - Installable app (PWA) on your phone
   - Coming from YNAB? Bring your budget and history with you
5. **How it works:** three steps. Assign the income you have, spend from categories, cover overspending by moving money.
6. **Claude / MCP section:** "Ask Claude about your budget", with a chat-style mockup and a note that destructive tools need your approval.
7. **FAQ:** an accordion built on `<details>`, so it needs no JS.
8. **Final CTA:** the waitlist form again, next to the capybara.
9. **Footer:** links and © year. No GitHub link.

### `/features`

One section per feature area (Plan, Targets, Transactions/register, Scheduled, Reports, Mobile/PWA, Claude integration, Moving from YNAB). Each section has:

- copy on one side and a full-screen HTML mockup of that part of the app on the other, alternating sides
- a sticky in-page table of contents on desktop

### Also

- `404.astro`
- `robots.txt`
- the sitemap
- `site.webmanifest` (marketing-only, no app install)

## 4. Project layout

```
capybudget-mkt/
  astro.config.mjs          site URL, vercel adapter, sitemap, tailwind vite plugin
  vercel.json               region (sin1)
  src/
    styles/
      tokens.css            copy of the app's :root/.dark/@theme blocks (from develop),
                            minus app-shell-only rules (pull-to-refresh, phone-top-extra)
      marketing.css         brand/onsen tokens, display type, glow/grid utilities
    layouts/Base.astro      <head>, SEO, theme-init script, analytics, ClientRouter
    components/
      ui/                   Button, Card, Badge (ports of the app's cva classes)
      Nav, Footer, Logo, ThemeToggle, WaitlistForm, Section, Faq
      mockups/              BudgetTable, AvailablePill, TargetBar, SpendingDonut,
                            NetWorthLine, RegisterRows, PhoneFrame, ChatMock
      sections/             Hero, Principles, Bento, HowItWorks, Claude, FinalCta
    content/features.ts     feature copy, as typed data shared by bento + /features
    actions/index.ts        waitlist action
    lib/
      supabase.ts           server-only client (secret key)
      money.ts              small formatMoney port for mockups
    pages/index.astro, features.astro, 404.astro, robots.txt.ts
  scripts/og.ts             renders public/og.png from /og-image
  .github/workflows/ci.yml  lint, astro check, build
```

## 5. Waitlist

**Table:** the SQL is in `db/waitlist_signups.sql` in this repo. Copy it into the **app repo** as a new forward migration (`capybudget/supabase/migrations/…_waitlist_signups.sql`) and apply it out-of-band as usual.

```sql
create table public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  source text,                 -- 'hero' | 'final-cta' | 'features'
  referrer text,
  created_at timestamptz not null default now()
);
alter table public.waitlist_signups enable row level security;  -- no policies: service role only
comment on table public.waitlist_signups is 'Marketing-site waitlist. Written by capybudget-mkt via the secret key.';
```

**Action:** `waitlist.join`, which takes `{ email, source, company (honeypot) }`.

1. The zod schema checks the email.
2. If the honeypot is filled, the action returns success silently.
3. Otherwise it upserts on `email` with `ignoreDuplicates`, so a repeat sign-up gets the same response and nothing leaks.
4. Errors are logged, and the user sees a generic message.

**Form:**

- Accessible label, a `role="status"` live region and loading state.
- Without JS, it does a normal POST and re-renders with the result.
- A basic per-IP rate limit is a later option (Vercel firewall rule on `/_actions/*`).

**Confirmation email (v1):**

- Sent via Resend from `hello@capybudget.site` (needs the domain verified in Resend: SPF/DKIM DNS records).
- Sent only on a new insert, so a repeat sign-up doesn't email again.
- A plain HTML + text template in the site's style (capybara, caramel accent).
- A send failure is logged and doesn't fail the sign-up.

**Env vars (Vercel, mkt project):** `SUPABASE_URL`, `SUPABASE_SECRET_KEY` and `RESEND_API_KEY`, set on the server only and never prefixed `PUBLIC_`.

**Later:** a "you're in" email when you create their budget.

## 6. Mockups instead of screenshots

Every product image is HTML in `src/components/mockups/`, rebuilt from the app's real components (layout, column grids, labels, pills, icons) with the numbers in `src/content/demo-budget.ts`. They switch with the theme and need no demo account. When the app's UI changes, update the matching mockup.

## 7. Domain cutover (app → `app.capybudget.site`)

This happens last, after the marketing site is live on a Vercel preview URL. Steps in order:

1. **App project (Vercel):** add `app.capybudget.site` as a domain and confirm the app works there.
2. **Supabase Auth:** set Site URL to `https://app.capybudget.site` and add it to the redirect URLs, keeping the old one until the cutover is done.
3. **App repo:** update `docs/mcp.md` and `docs/api.md` (the only files that hardcode the domain). Check that the auth callback and email links don't assume the apex.
4. **Move the apex:** move `capybudget.site` (and `www`) from the app project to the mkt project.
5. **Redirects** (already built): on-demand endpoints in `src/pages/` that 308 to `https://app.capybudget.site`, keeping the path and query:
   - `/b/*`
   - `/login`
   - `/auth/*`
   - `/no-access`
   - `/api/*`

   They're endpoints rather than `vercel.json` rules because the Astro adapter's build output replaces `vercel.json` routing.

6. **Things that break, which you'll have to redo by hand:**
   - **Installed PWA:** home-screen installs point at the apex, so re-add the app from `app.capybudget.site`.
   - **Sessions:** cookies are host-only, so you'll sign in once more.
   - **MCP clients** (Claude Code / Claude.ai): update the URL to `https://app.capybudget.site/api/mcp`. Browsers and most clients drop the `Authorization` header on a cross-host redirect, so the redirect alone won't keep MCP working.
7. Staging is unchanged: `staging.capybudget.site` stays the app's staging. Marketing previews use Vercel preview URLs.

## 8. Milestones

1. **Scaffold:**
   - Astro + Tailwind v4 + Vercel adapter
   - tokens copied, `Base` layout, theme toggle with no flash, Nav/Footer
   - CI
   - first Vercel preview deploy linked to the GitHub repo
2. **Landing page:** all sections from §3 with HTML mockups. Copy drafted; you edit the voice.
3. **Waitlist:** the migration in the app repo (you apply it), the action, the form states, the Resend confirmation email, env vars on Vercel.
4. **`/features`:** full-screen mockups of each area, and the alternating sections.
5. **Polish:**
   - OG image, sitemap, JSON-LD
   - 404
   - Lighthouse 95+ on all four categories
   - keyboard and screen-reader pass
   - 375px layout check
   - reduced-motion check
6. **Cutover:** the checklist in §7.

**Done means:**

- `pnpm build` and `astro check` pass in CI.
- Both pages render correctly in light and dark at 375/768/1440.
- The waitlist works with and without JS, and handles a duplicate email.
- The apex serves marketing, and old app URLs redirect.

## 9. Things you'll need to do

- Create a Resend account and verify `capybudget.site` (DNS records), then add `RESEND_API_KEY` to Vercel.
- Apply the `waitlist_signups` migration.
