// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Keep in step with src/i18n/config.ts. English stays unprefixed; Indonesian lives under /id.
const locales = ['en', 'id'];
const defaultLocale = 'en';
const unlisted = ['/waitlist', '/404', '/og-image'];

export default defineConfig({
  site: 'https://capybudget.site',
  trailingSlash: 'never',
  // Every page is prerendered. Only /waitlist and /id/waitlist (the no-JS form fallback), unknown /id/*
  // paths (the Indonesian 404), the actions and the old app paths (src/pages/{b,auth,api}, login,
  // no-access → app.capybudget.site) run as a function.
  output: 'static',
  adapter: vercel(),
  i18n: {
    locales,
    defaultLocale,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale, locales: Object.fromEntries(locales.map((l) => [l, l])) },
      filter: (page) => {
        const path = new URL(page).pathname.replace(/^\/id(?=\/|$)/, '') || '/';
        return !unlisted.some((prefix) => path.startsWith(prefix));
      },
      // Each page already lists its en and id versions; x-default points everyone else at English.
      serialize: (item) => {
        const english = item.links?.find((link) => link.lang === defaultLocale);
        if (english) item.links = [...(item.links ?? []), { lang: 'x-default', url: english.url }];
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      // Optional so local dev and previews build without them; the waitlist action reports
      // a friendly error until they are set on Vercel.
      SUPABASE_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      SUPABASE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      WAITLIST_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'Capybudget <hello@capybudget.site>',
      }),
    },
  },
});
