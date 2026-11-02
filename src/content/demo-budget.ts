/**
 * One made-up USD household budget, so every mockup on the site tells the same story.
 * Labels and formats follow the app: dd/mm/yyyy dates, "$1,234.56" money, "Group: Category".
 */

export const DEMO_BUDGET_NAME = 'Household';
export const DEMO_EMAIL = 'alex@example.com';
export const DEMO_MONTH = 'November 2026';
export const READY_TO_ASSIGN = 640;

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

export const DEMO_GROUPS: DemoGroup[] = [
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
];

/** Underfunded the way the app counts it: a target, not snoozed, and Assigned below it. */
export const isUnderfunded = (c: DemoCategory) => !!c.target && !c.snoozed && c.assigned < c.target;

export const groupTotal = (group: DemoGroup, key: 'assigned' | 'activity' | 'available') =>
  group.categories.reduce((sum, c) => sum + c[key], 0);

/** The category the detail-panel mockups show selected. */
export const DEMO_SELECTED = {
  group: 'Goals',
  name: 'Vacation',
  note: 'Bali in March. Flights booked, still need the villa.',
};

export const DEMO_ACCOUNT_SECTIONS = [
  {
    title: 'Cash',
    accounts: [
      { name: 'Checking', balance: 4182.55, uncleared: true },
      { name: 'Savings', balance: 12400 },
      { name: 'Wallet', balance: 86 },
    ],
  },
  {
    title: 'Tracking',
    accounts: [{ name: 'Brokerage', balance: 24310 }],
  },
];

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

export const DEMO_REGISTER: DemoTransaction[] = [
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
];

export const DEMO_UPCOMING = [
  { date: '01/12/2026', payee: 'Parkview Apartments', category: 'Bills: Rent', outflow: 1850, every: 'Monthly' },
  { date: '01/12/2026', payee: 'Transfer: Savings', category: 'Category not needed', outflow: 300, every: 'Monthly' },
  { date: '03/12/2026', payee: 'Netflix', category: 'Fun: Streaming', outflow: 15.49, every: 'Monthly' },
  { date: '15/12/2026', payee: 'Acme Corp', category: 'Inflow: Ready to Assign', inflow: 3200, every: 'Twice a month' },
];

/** Checking's balance strip: cleared + uncleared = working. */
export const DEMO_CHECKING = {
  cleared: 4415.35,
  uncleared: -232.8,
  working: 4182.55,
  reconciled: 'Reconciled 3 days ago',
};

/** Recent Moves popover entries, newest first. */
export const DEMO_MOVES = [
  { kind: 'removed', amount: 21.4, side: 'from', category: 'Groceries', when: '5m ago' },
  { kind: 'assigned', amount: 21.4, side: 'to', category: 'Dining out', when: '5m ago' },
  { kind: 'assigned', amount: 200, side: 'to', category: 'Vacation', when: '1 Nov, 09:10' },
  { kind: 'assigned', amount: 1850, side: 'to', category: 'Rent', when: '1 Nov, 09:08' },
] as const;

/**
 * Spending by category group over the Reports default range ("Last 6 months"), largest first like
 * the app's breakdown. Colors follow the app's palette order (chart-1, chart-2, …).
 */
export const DEMO_REPORT_RANGE = { preset: 'Last 6 months', label: 'Jun 2026 – Nov 2026', months: 6 };

export const DEMO_SPENDING = [
  { name: 'Bills', amount: 12_243.6, color: 'var(--chart-1)' },
  { name: 'Everyday', amount: 4_918.35, color: 'var(--chart-2)' },
  { name: 'Fun', amount: 1_386.2, color: 'var(--chart-3)' },
  { name: 'Health', amount: 642.1, color: 'var(--chart-4)' },
  { name: 'Gifts', amount: 385, color: 'var(--chart-5)' },
  { name: 'Travel', amount: 212.4, color: 'var(--chart-6)' },
];
