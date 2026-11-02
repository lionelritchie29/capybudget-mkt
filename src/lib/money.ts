const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

/** Mockup amounts are whole dollars or cents as a number (12.5 → $12.50). Negatives keep the sign up front. */
export function formatUsd(amount: number): string {
  return usd.format(amount);
}

export type Tone = 'success' | 'warning' | 'danger' | 'zero';

/** Same rule as the app's AvailablePill: overspent beats underfunded beats funded. */
export function availableTone(amount: number, underfunded = false): Tone {
  if (amount < 0) return 'danger';
  if (underfunded) return 'warning';
  return amount > 0 ? 'success' : 'zero';
}
