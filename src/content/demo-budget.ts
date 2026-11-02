/** One made-up USD household budget, so every mockup on the site tells the same story. */

export type DemoCategory = {
  name: string;
  assigned: number;
  activity: number;
  available: number;
  /** 0–1 progress toward a target; omitted when the category has none. */
  target?: number;
  underfunded?: boolean;
};

export type DemoGroup = { name: string; categories: DemoCategory[] };

export const DEMO_MONTH = 'November 2026';

export const READY_TO_ASSIGN = 640;

export const DEMO_GROUPS: DemoGroup[] = [
  {
    name: 'Bills',
    categories: [
      { name: 'Rent', assigned: 1850, activity: -1850, available: 0, target: 1 },
      { name: 'Electricity', assigned: 120, activity: -84.32, available: 35.68 },
      { name: 'Internet', assigned: 65, activity: -65, available: 0 },
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
      { name: 'Vacation', assigned: 200, activity: 0, available: 1450, target: 0.72, underfunded: true },
      { name: 'Emergency fund', assigned: 300, activity: 0, available: 6300, target: 1 },
    ],
  },
];

export const DEMO_ACCOUNTS = [
  { name: 'Checking', balance: 4182.55, uncleared: true },
  { name: 'Savings', balance: 12400 },
  { name: 'Cash', balance: 86 },
];

/** Spending by category this month, for the report mockups. Colors are the app's chart series. */
export const DEMO_SPENDING = [
  { name: 'Rent', amount: 1850, color: 'var(--chart-1)' },
  { name: 'Groceries', amount: 412.18, color: 'var(--chart-2)' },
  { name: 'Dining out', amount: 171.4, color: 'var(--chart-3)' },
  { name: 'Electricity', amount: 84.32, color: 'var(--chart-4)' },
  { name: 'Internet', amount: 65, color: 'var(--chart-5)' },
  { name: 'Transport', amount: 38.5, color: 'var(--chart-6)' },
];
