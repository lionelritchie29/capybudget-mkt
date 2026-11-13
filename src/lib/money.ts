export type Currency = 'USD' | 'IDR';

/** USD as "$1,234.56" like the app; IDR (zero-decimal) as "Rp1.234.567", with no space as EYD writes it. */
const formats: Record<Currency, Intl.NumberFormat> = {
  USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
  IDR: new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }),
};

const shortFormats: Record<Currency, Intl.NumberFormat> = {
  USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', trailingZeroDisplay: 'stripIfInteger' }),
  IDR: formats.IDR,
};

const tidy = (text: string, currency: Currency) => (currency === 'IDR' ? text.replace(/Rp\s+/u, 'Rp') : text);

/** Mockup amounts are plain numbers in currency units (12.5 → $12.50). Negatives keep the sign up front. */
export function formatMoney(amount: number, currency: Currency): string {
  return tidy(formats[currency].format(amount), currency);
}

/** For prose such as aria-labels, where "$640" reads better than "$640.00". */
export function formatMoneyShort(amount: number, currency: Currency): string {
  return tidy(shortFormats[currency].format(amount), currency);
}

export type Tone = 'success' | 'warning' | 'danger' | 'zero';

/** Same rule as the app's AvailablePill: overspent beats underfunded beats funded. */
export function availableTone(amount: number, underfunded = false): Tone {
  if (amount < 0) return 'danger';
  if (underfunded) return 'warning';
  return amount > 0 ? 'success' : 'zero';
}
