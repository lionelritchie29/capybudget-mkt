/**
 * Captures app screenshots for /features from the staging demo budget, in light and dark.
 *
 *   pnpm screenshots
 *
 * Reads .env.local (gitignored):
 *   SCREENSHOT_EMAIL, SCREENSHOT_PASSWORD   the staging demo account (USD budget)
 *   SCREENSHOT_APP_URL                      default https://staging.capybudget.site
 *   SCREENSHOT_TARGET_CATEGORY              category opened for the targets shot, default "Vacation"
 *
 * Writes src/assets/screenshots/{light,dark}/<name>.png. The names match `screenshot` in
 * src/content/features.ts; /features falls back to the HTML mockups for any that are missing.
 */
import { mkdir } from 'node:fs/promises';
import { chromium, type Browser, type BrowserContext, type Page } from '@playwright/test';

const APP_URL = (process.env.SCREENSHOT_APP_URL ?? 'https://staging.capybudget.site').replace(/\/$/, '');
const EMAIL = process.env.SCREENSHOT_EMAIL;
const PASSWORD = process.env.SCREENSHOT_PASSWORD;
const TARGET_CATEGORY = process.env.SCREENSHOT_TARGET_CATEGORY ?? 'Vacation';
const OUT = new URL('../src/assets/screenshots/', import.meta.url);

type Theme = 'light' | 'dark';
type Shot = {
  name: string;
  path: (budgetId: string) => string;
  phone?: boolean;
  /** Runs after load; return false to skip the shot (e.g. the demo budget lacks the category). */
  prepare?: (page: Page) => Promise<boolean | void>;
};

const SHOTS: Shot[] = [
  { name: 'plan', path: (id) => `/b/${id}/budget` },
  {
    name: 'targets',
    path: (id) => `/b/${id}/budget`,
    prepare: async (page) => {
      const row = page.getByText(TARGET_CATEGORY, { exact: true }).first();
      if (!(await row.isVisible().catch(() => false))) return false;
      await row.click();
      await page.waitForTimeout(600);
    },
  },
  { name: 'transactions', path: (id) => `/b/${id}/transactions` },
  { name: 'reports', path: (id) => `/b/${id}/reports` },
  { name: 'mobile', path: (id) => `/b/${id}/budget`, phone: true },
];

async function signIn(
  browser: Browser
): Promise<{ storageState: Awaited<ReturnType<BrowserContext['storageState']>>; budgetId: string }> {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${APP_URL}/login`);
  await page.locator('input[name="email"]').fill(EMAIL!);
  await page.locator('input[name="password"]').fill(PASSWORD!);
  await page.locator('button[type="submit"]').click();
  await page.waitForURL(/\/b\/[^/]+\/budget/, { timeout: 30_000 });
  const budgetId = new URL(page.url()).pathname.split('/')[2];
  const storageState = await context.storageState();
  await context.close();
  return { storageState, budgetId };
}

async function main() {
  if (!EMAIL || !PASSWORD) {
    console.error('Set SCREENSHOT_EMAIL and SCREENSHOT_PASSWORD in .env.local (the staging demo account).');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const { storageState, budgetId } = await signIn(browser);
  const host = new URL(APP_URL).hostname;

  for (const theme of ['light', 'dark'] as Theme[]) {
    await mkdir(new URL(`${theme}/`, OUT), { recursive: true });
    for (const shot of SHOTS) {
      const context = await browser.newContext({
        storageState,
        colorScheme: theme,
        ...(shot.phone
          ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
          : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 }),
      });
      // The app reads its theme from this cookie (src/lib/theme.ts), not only the OS.
      await context.addCookies([{ name: 'theme', value: theme, domain: host, path: '/' }]);
      const page = await context.newPage();
      await page.goto(`${APP_URL}${shot.path(budgetId)}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      if ((await shot.prepare?.(page)) === false) {
        console.warn(`skipped ${theme}/${shot.name}: nothing to show`);
        await context.close();
        continue;
      }
      const file = new URL(`${theme}/${shot.name}.png`, OUT);
      await page.screenshot({ path: file.pathname });
      console.log(`wrote ${theme}/${shot.name}.png`);
      await context.close();
    }
  }

  await browser.close();
}

await main();
