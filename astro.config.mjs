// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://capybudget.site',
  trailingSlash: 'never',
  // Every page is prerendered. Only /waitlist (the no-JS form fallback), the actions and the
  // old app paths (src/pages/{b,auth,api}, login, no-access → app.capybudget.site) run as a function.
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !['/waitlist', '/404', '/og-image'].some((path) => new URL(page).pathname.startsWith(path)),
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
