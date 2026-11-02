/** Keep in step with `i18n` in astro.config.mjs. English is unprefixed; every other locale lives under /<locale>. */
export const LOCALES = ['en', 'id'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale);

/** `Astro.currentLocale` is a plain string (undefined outside i18n routes); anything unknown is English. */
export const toLocale = (value: string | undefined): Locale => (isLocale(value) ? value : DEFAULT_LOCALE);

/** `/features` → `/id/features`, `/#faq` → `/id#faq`, `/` → `/id`. Paths are written in their English form. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  const hashAt = path.indexOf('#');
  const pathname = hashAt === -1 ? path : path.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : path.slice(hashAt);
  return `/${locale}${pathname === '/' ? '' : pathname}${hash}`;
}

/** `/id/features` → `/features`, `/id` → `/`. The inverse of localizePath for a pathname. */
export function unlocalizePath(pathname: string): string {
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}
