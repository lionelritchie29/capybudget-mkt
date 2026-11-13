import type { Locale } from '../i18n/config';
import type { Currency } from '../lib/money';

/**
 * One made-up household budget per locale, so every mockup on a page tells the same story: USD on
 * the English pages, IDR on /id (local amounts, not a conversion). Labels and formats follow the app:
 * dd/mm/yyyy dates, "Group: Category", money in the budget's currency.
 */

export type DemoCategory = {
  name: string;
  assigned: number;
  activity: number;
  available: number;
  /** "Set aside <target> each month". Underfunded while this month's Assigned is below it. */
  target?: number;
  snoozed?: boolean;
};

export type DemoGroup = { name: string; categories: DemoCategory[] };

/** The Checking register. Newest first, like the app's default Date ↓ sort. */
export type DemoTransaction = {
  date: string;
  payee: string;
  category?: string;
  memo?: string;
  outflow?: number;
  inflow?: number;
  state: 'cleared' | 'uncleared' | 'reconciled';
  transfer?: boolean;
  /** Lines of one split share a group and show the SPLIT badge. */
  split?: boolean;
  needsCategory?: boolean;
};

export type DemoBudget = {
  currency: Currency;
  name: string;
  email: string;
  month: string;
  readyToAssign: number;
  groups: DemoGroup[];
  /** The category the detail-panel mockups show selected. */
  selected: { group: string; name: string; note: string };
  /** Categories the How it works pills and the Claude chat point at. */
  highlights: { funded: string; overspent: string };
  accountSections: { title: string; accounts: { name: string; balance: number; uncleared?: boolean }[] }[];
  /** The account whose register the mockups show, and its type label. */
  registerAccount: { name: string; type: string };
  register: DemoTransaction[];
  upcoming: { date: string; payee: string; category: string; outflow?: number; inflow?: number; every: string }[];
  /** The register's balance strip: cleared + uncleared = working. */
  balances: { cleared: number; uncleared: number; working: number; reconciled: string };
  /** Recent Moves popover entries, newest first. */
  moves: { kind: 'removed' | 'assigned'; amount: number; side: string; category: string; when: string }[];
  /** The edit the Undo hover card offers to take back. */
  edit: { payee: string; from: number; to: number; fromCategory: string; toCategory: string };
  /** Reports default range ("Last 6 months"). */
  reportRange: { preset: string; label: string; months: number };
  /** Spending by category group over the report range, largest first like the app's breakdown. */
  spending: { name: string; amount: number; color: string }[];
  /** The Claude chat's "entered twice" find. */
  duplicates: { payee: string; count: number };
};

const en: DemoBudget = {
  currency: 'USD',
  name: 'Household',
  email: 'alex@example.com',
  month: 'November 2026',
  readyToAssign: 640,
  groups: [
    {
      name: 'Bills',
      categories: [
        { name: 'Rent', assigned: 1850, activity: -1850, available: 0, target: 1850 },
        { name: 'Electricity', assigned: 120, activity: -84.32, available: 35.68 },
        { name: 'Internet', assigned: 65, activity: -65, available: 0 },
        { name: 'Car insurance', assigned: 0, activity: 0, available: 440, target: 110, snoozed: true },
      ],
    },
    {
      name: 'Everyday',
      categories: [
        { name: 'Groceries', assigned: 600, activity: -412.18, available: 187.82 },
        { name: 'Dining out', assigned: 150, activity: -171.4, available: -21.4 },
        { name: 'Transport', assigned: 120, activity: -38.5, available: 81.5 },
      ],
    },
    {
      name: 'Goals',
      categories: [
        { name: 'Vacation', assigned: 200, activity: 0, available: 1450, target: 500 },
        { name: 'Emergency fund', assigned: 300, activity: 0, available: 6300, target: 300 },
      ],
    },
  ],
  selected: { group: 'Goals', name: 'Vacation', note: 'Bali in March. Flights booked, still need the villa.' },
  highlights: { funded: 'Groceries', overspent: 'Dining out' },
  accountSections: [
    {
      title: 'Cash',
      accounts: [
        { name: 'Checking', balance: 4182.55, uncleared: true },
        { name: 'Savings', balance: 12400 },
        { name: 'Wallet', balance: 86 },
      ],
    },
    { title: 'Tracking', accounts: [{ name: 'Brokerage', balance: 24310 }] },
  ],
  registerAccount: { name: 'Checking', type: 'Checking' },
  register: [
    { date: '14/11/2026', payee: 'Uber', memo: '', outflow: 18.2, state: 'uncleared', needsCategory: true },
    {
      date: '13/11/2026',
      payee: 'Costco',
      category: 'Everyday: Groceries',
      outflow: 162.1,
      state: 'uncleared',
      split: true,
    },
    {
      date: '13/11/2026',
      payee: 'Costco',
      category: 'Everyday: Household',
      memo: '[reimburse] Office chair mat',
      outflow: 52.5,
      state: 'uncleared',
      split: true,
    },
    {
      date: '12/11/2026',
      payee: 'Trattoria Roma',
      category: 'Everyday: Dining out',
      memo: "Sam's birthday",
      outflow: 86.4,
      state: 'cleared',
    },
    {
      date: '10/11/2026',
      payee: 'Transfer: Savings',
      category: 'Category not needed',
      outflow: 300,
      state: 'cleared',
      transfer: true,
    },
    { date: '07/11/2026', payee: 'City Power', category: 'Bills: Electricity', outflow: 84.32, state: 'cleared' },
    {
      date: '01/11/2026',
      payee: 'Acme Corp',
      category: 'Inflow: Ready to Assign',
      memo: 'Paycheck',
      inflow: 3200,
      state: 'reconciled',
    },
    { date: '01/11/2026', payee: 'Parkview Apartments', category: 'Bills: Rent', outflow: 1850, state: 'reconciled' },
  ],
  upcoming: [
    { date: '01/12/2026', payee: 'Parkview Apartments', category: 'Bills: Rent', outflow: 1850, every: 'Monthly' },
    { date: '01/12/2026', payee: 'Transfer: Savings', category: 'Category not needed', outflow: 300, every: 'Monthly' },
    { date: '03/12/2026', payee: 'Netflix', category: 'Fun: Streaming', outflow: 15.49, every: 'Monthly' },
    {
      date: '15/12/2026',
      payee: 'Acme Corp',
      category: 'Inflow: Ready to Assign',
      inflow: 3200,
      every: 'Twice a month',
    },
  ],
  balances: { cleared: 4415.35, uncleared: -232.8, working: 4182.55, reconciled: 'Reconciled 3 days ago' },
  moves: [
    { kind: 'removed', amount: 21.4, side: 'from', category: 'Groceries', when: '5m ago' },
    { kind: 'assigned', amount: 21.4, side: 'to', category: 'Dining out', when: '5m ago' },
    { kind: 'assigned', amount: 200, side: 'to', category: 'Vacation', when: '1 Nov, 09:10' },
    { kind: 'assigned', amount: 1850, side: 'to', category: 'Rent', when: '1 Nov, 09:08' },
  ],
  edit: {
    payee: 'Trattoria Roma',
    from: 86.4,
    to: 68.4,
    fromCategory: 'Everyday: Groceries',
    toCategory: 'Everyday: Dining out',
  },
  reportRange: { preset: 'Last 6 months', label: 'Jun 2026 – Nov 2026', months: 6 },
  spending: [
    { name: 'Bills', amount: 12_243.6, color: 'var(--chart-1)' },
    { name: 'Everyday', amount: 4_918.35, color: 'var(--chart-2)' },
    { name: 'Fun', amount: 1_386.2, color: 'var(--chart-3)' },
    { name: 'Health', amount: 642.1, color: 'var(--chart-4)' },
    { name: 'Gifts', amount: 385, color: 'var(--chart-5)' },
    { name: 'Travel', amount: 212.4, color: 'var(--chart-6)' },
  ],
  duplicates: { payee: 'Uber', count: 3 },
};

/** An Indonesian household: one salary on the 1st, a rented house, token electricity, Gojek rides. */
const id: DemoBudget = {
  currency: 'IDR',
  name: 'Keluarga',
  email: 'rani@example.com',
  month: 'November 2026',
  readyToAssign: 750_000,
  groups: [
    {
      name: 'Tagihan',
      categories: [
        { name: 'Sewa rumah', assigned: 4_500_000, activity: -4_500_000, available: 0, target: 4_500_000 },
        { name: 'Listrik', assigned: 500_000, activity: -402_500, available: 97_500 },
        { name: 'Internet', assigned: 385_000, activity: -385_000, available: 0 },
        { name: 'Pajak mobil', assigned: 0, activity: 0, available: 2_400_000, target: 300_000, snoozed: true },
      ],
    },
    {
      name: 'Sehari-hari',
      categories: [
        { name: 'Belanja dapur', assigned: 3_000_000, activity: -2_135_000, available: 865_000 },
        { name: 'Makan di luar', assigned: 800_000, activity: -935_000, available: -135_000 },
        { name: 'Transportasi', assigned: 600_000, activity: -248_000, available: 352_000 },
      ],
    },
    {
      name: 'Tabungan',
      categories: [
        { name: 'Liburan', assigned: 1_000_000, activity: 0, available: 7_500_000, target: 2_500_000 },
        { name: 'Dana darurat', assigned: 1_500_000, activity: 0, available: 30_000_000, target: 1_500_000 },
      ],
    },
  ],
  selected: {
    group: 'Tabungan',
    name: 'Liburan',
    note: 'Labuan Bajo bulan Maret. Tiket pesawat sudah aman, tinggal cari penginapan.',
  },
  highlights: { funded: 'Belanja dapur', overspent: 'Makan di luar' },
  accountSections: [
    {
      title: 'Kas',
      accounts: [
        { name: 'BCA', balance: 8_250_000, uncleared: true },
        { name: 'Jago', balance: 35_000_000 },
        { name: 'Dompet', balance: 450_000 },
      ],
    },
    { title: 'Pantauan', accounts: [{ name: 'Reksa dana', balance: 48_500_000 }] },
  ],
  registerAccount: { name: 'BCA', type: 'Giro' },
  register: [
    { date: '14/11/2026', payee: 'Gojek', memo: '', outflow: 32_000, state: 'uncleared', needsCategory: true },
    {
      date: '13/11/2026',
      payee: 'Superindo',
      category: 'Sehari-hari: Belanja dapur',
      outflow: 685_000,
      state: 'uncleared',
      split: true,
    },
    {
      date: '13/11/2026',
      payee: 'Superindo',
      category: 'Sehari-hari: Rumah tangga',
      memo: '[klaim] Alas kursi kantor',
      outflow: 215_000,
      state: 'uncleared',
      split: true,
    },
    {
      date: '12/11/2026',
      payee: 'Sate Khas Senayan',
      category: 'Sehari-hari: Makan di luar',
      memo: 'Ulang tahun Made',
      outflow: 420_000,
      state: 'cleared',
    },
    {
      date: '10/11/2026',
      payee: 'Transfer: Jago',
      category: 'Tidak perlu kategori',
      outflow: 1_500_000,
      state: 'cleared',
      transfer: true,
    },
    { date: '07/11/2026', payee: 'PLN', category: 'Tagihan: Listrik', outflow: 202_500, state: 'cleared' },
    {
      date: '01/11/2026',
      payee: 'PT Maju Bersama',
      category: 'Pemasukan: Siap Dialokasikan',
      memo: 'Gaji',
      inflow: 15_000_000,
      state: 'reconciled',
    },
    {
      date: '01/11/2026',
      payee: 'Ratna Siregar',
      category: 'Tagihan: Sewa rumah',
      outflow: 4_500_000,
      state: 'reconciled',
    },
  ],
  upcoming: [
    {
      date: '01/12/2026',
      payee: 'Ratna Siregar',
      category: 'Tagihan: Sewa rumah',
      outflow: 4_500_000,
      every: 'Bulanan',
    },
    {
      date: '01/12/2026',
      payee: 'Transfer: Jago',
      category: 'Tidak perlu kategori',
      outflow: 1_500_000,
      every: 'Bulanan',
    },
    {
      date: '01/12/2026',
      payee: 'PT Maju Bersama',
      category: 'Pemasukan: Siap Dialokasikan',
      inflow: 15_000_000,
      every: 'Bulanan',
    },
    { date: '03/12/2026', payee: 'Netflix', category: 'Hiburan: Streaming', outflow: 65_000, every: 'Bulanan' },
  ],
  balances: {
    cleared: 9_182_000,
    uncleared: -932_000,
    working: 8_250_000,
    reconciled: 'Terakhir direkonsiliasi 3 hari lalu',
  },
  moves: [
    { kind: 'removed', amount: 135_000, side: 'dari', category: 'Belanja dapur', when: '5 menit lalu' },
    { kind: 'assigned', amount: 135_000, side: 'ke', category: 'Makan di luar', when: '5 menit lalu' },
    { kind: 'assigned', amount: 1_000_000, side: 'ke', category: 'Liburan', when: '1 Nov 09.10' },
    { kind: 'assigned', amount: 4_500_000, side: 'ke', category: 'Sewa rumah', when: '1 Nov 09.08' },
  ],
  edit: {
    payee: 'Sate Khas Senayan',
    from: 420_000,
    to: 240_000,
    fromCategory: 'Sehari-hari: Belanja dapur',
    toCategory: 'Sehari-hari: Makan di luar',
  },
  reportRange: { preset: '6 bulan terakhir', label: 'Juni sampai November 2026', months: 6 },
  spending: [
    { name: 'Tagihan', amount: 33_450_000, color: 'var(--chart-1)' },
    { name: 'Sehari-hari', amount: 24_615_000, color: 'var(--chart-2)' },
    { name: 'Hiburan', amount: 4_830_000, color: 'var(--chart-3)' },
    { name: 'Kesehatan', amount: 2_275_000, color: 'var(--chart-4)' },
    { name: 'Hadiah', amount: 1_750_000, color: 'var(--chart-5)' },
    { name: 'Liburan', amount: 1_180_000, color: 'var(--chart-6)' },
  ],
  duplicates: { payee: 'Gojek', count: 3 },
};

export const DEMO_BUDGETS: Record<Locale, DemoBudget> = { en, id };

/** Underfunded the way the app counts it: a target, not snoozed, and Assigned below it. */
export const isUnderfunded = (c: DemoCategory) => !!c.target && !c.snoozed && c.assigned < c.target;

export const groupTotal = (group: DemoGroup, key: 'assigned' | 'activity' | 'available') =>
  group.categories.reduce((sum, c) => sum + c[key], 0);

export function findCategory(demo: DemoBudget, name: string): DemoCategory {
  const found = demo.groups.flatMap((g) => g.categories).find((c) => c.name === name);
  if (!found) throw new Error(`Unknown demo category: ${name}`);
  return found;
}
