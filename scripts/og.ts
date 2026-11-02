/**
 * Renders /og-image and /id/og-image from a running dev server into public/og.png and public/og-id.png.
 *
 *   pnpm dev   # in another terminal
 *   pnpm og
 */
import { chromium } from '@playwright/test';

const origin = process.env.OG_ORIGIN ?? 'http://localhost:4321';
const images = [
  { path: '/og-image', file: 'og.png' },
  { path: '/id/og-image', file: 'og-id.png' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });
for (const { path, file } of images) {
  await page.goto(origin + path, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // The dev server injects its toolbar; keep it out of the picture.
  await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
  await page.screenshot({ path: new URL(`../public/${file}`, import.meta.url).pathname });
  console.log(`wrote public/${file}`);
}
await browser.close();
