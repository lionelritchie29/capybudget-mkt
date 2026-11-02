import { DEMO_BUDGETS } from '../content/demo-budget';
import { FEATURES } from '../content/features';
import { formatMoney, formatMoneyShort } from '../lib/money';
import { toLocale, localizePath, type Locale } from './config';
import en, { type Dictionary } from './en';
import id from './id';

export * from './config';
export type { Dictionary };

export const ui: Record<Locale, Dictionary> = { en, id };

/**
 * Everything a component needs for the page's language, from `Astro.currentLocale` (set by the
 * i18n routing from the URL): the dictionary, that locale's demo budget and money format, and paths.
 */
export function useI18n(astro: { currentLocale: string | undefined }) {
  const locale = toLocale(astro.currentLocale);
  const demo = DEMO_BUDGETS[locale];
  return {
    locale,
    t: ui[locale],
    demo,
    features: FEATURES[locale],
    money: (amount: number) => formatMoney(amount, demo.currency),
    moneyShort: (amount: number) => formatMoneyShort(amount, demo.currency),
    path: (path: string) => localizePath(path, locale),
  };
}
