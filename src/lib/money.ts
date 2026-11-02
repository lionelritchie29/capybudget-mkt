export type Currency = 'USD' | 'IDR';

/** Same shapes as the app: USD as "$1,234.56", IDR (zero-decimal) as "Rp 1.234.567". */
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

/** Mockup amounts are plain numbers in currency units (12.5 → $12.50). Negatives keep the sign up front. */
export function formatMoney(amount: number, currency: Currency): string {
  return formats[currency].format(amount);
}

/** For prose such as aria-labels, where "$640" reads better than "$640.00". */
export function formatMoneyShort(amount: number, currency: Currency): string {
  return shortFormats[currency].format(amount);
}

export type Tone = 'success' | 'warning' | 'danger' | 'zero';

/** Same rule as the app's AvailablePill: overspent beats underfunded beats funded. */
export function availableTone(amount: number, underfunded = false): Tone {
  if (amount < 0) return 'danger';
  if (underfunded) return 'warning';
  return amount > 0 ? 'success' : 'zero';
}
