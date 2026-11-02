/**
 * Renders /og-image from a running dev server into public/og.png.
 *
 *   pnpm dev   # in another terminal
 *   pnpm og
 */
import { chromium } from '@playwright/test';

const url = process.env.OG_URL ?? 'http://localhost:4321/og-image';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'light' });
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
// The dev server injects its toolbar; keep it out of the picture.
await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
await page.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname });
await browser.close();
console.log('wrote public/og.png');
