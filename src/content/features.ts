/**
 * Feature copy, shared by the home page bento (title + blurb) and /features (everything).
 */
export type Feature = {
  id: string;
  title: string;
  blurb: string;
  heading: string;
  body: string;
  points: string[];
};

export const FEATURES: Feature[] = [
  {
    id: 'plan',
    title: 'Plan the month',
    blurb: 'Assign the money you have to categories. Move it around when life happens; every move is logged.',
    heading: 'A plan made of money you already have',
    body: "Every dollar that lands in an account shows up in Ready to Assign. Give it a job (rent, groceries, that trip) and you'll always know what's safe to spend.",
    points: [
      'Assign, move, and cover overspending in a couple of clicks',
      'Recent Moves keeps a timestamped trail of where money went',
      'Filter to just the underfunded or overspent categories',
      'Overspending stays in its category until you cover it, never quietly eating next month',
    ],
  },
  {
    id: 'targets',
    title: 'Targets and notes',
    blurb:
      'Set aside a monthly amount per category. See what is underfunded at a glance, or snooze a target for a month.',
    heading: 'Targets that nudge, not nag',
    body: 'Give a category an amount to set aside every month. Capybudget shows how far along you are and tops up every underfunded category in one go.',
    points: [
      'Yellow means a target still needs money; green means done',
      'Snooze a target for a month when it can wait',
      'Notes on any category, for the "why" behind the number',
      'Assign to all underfunded categories at once',
    ],
  },
  {
    id: 'transactions',
    title: 'Splits and tags',
    blurb: 'Split one receipt across categories and tag what matters, all in a fast keyboard-friendly register.',
    heading: 'A register that keeps up with you',
    body: 'Enter transactions as quickly as you can type. Payees, categories and dates autocomplete, and bulk edits take a single selection.',
    points: [
      'Split a transaction across as many categories as you need',
      'Tag a memo with [trip], [work] or [reimburse] and search by it later',
      'Search, date ranges and bulk recategorize',
      'Transfers between accounts post both sides for you',
    ],
  },
  {
    id: 'scheduled',
    title: 'Scheduled transactions',
    blurb: 'Rent, salary and subscriptions enter themselves on time, transfers included.',
    heading: 'Recurring money, on autopilot',
    body: 'Set up anything that repeats and Capybudget enters it on the day, in your time zone, so your plan is never a step behind.',
    points: [
      'Once, weekly, every other week, twice a month, monthly, yearly and more',
      'Scheduled transfers between accounts',
      'Upcoming entries show in the register before they post',
    ],
  },
  {
    id: 'reports',
    title: 'Reports',
    blurb: 'Spending by category, income vs. expense and net worth, with every number one click from its transactions.',
    heading: 'Reports that answer the actual question',
    body: 'See where the money went, how this month compares, and whether you are getting ahead. Click any slice or bar to see the transactions behind it.',
    points: [
      'Spending by category, as a breakdown or a trend',
      'Income vs. expense by month',
      'Net worth over time',
      'Filter by account, category and date range',
    ],
  },
  {
    id: 'reconcile',
    title: 'Reconcile',
    blurb: 'Match your bank balance in seconds. A red dot flags accounts with uncleared transactions.',
    heading: 'Trust every balance',
    body: 'Reconcile an account against your statement, and Capybudget locks what matches. If it is off, it posts one adjustment so you can move on.',
    points: [
      'Cleared and uncleared at a glance',
      'One-step reconcile with an optional adjustment',
      'Reconciled transactions are protected from accidental edits',
    ],
  },
  {
    id: 'undo',
    title: 'Undo anything',
    blurb: 'Assigned to the wrong category? Deleted the wrong row? Undo and redo cover it.',
    heading: 'Change your mind freely',
    body: 'Every budget change goes into a history you can step back through, so trying things is never risky.',
    points: [
      'Undo and redo for assignments, moves, edits and deletes',
      'A preview of what each undo will change',
      'Keyboard shortcuts throughout',
    ],
  },
  {
    id: 'ynab',
    title: 'Coming from YNAB?',
    blurb: 'We bring your accounts, categories, payees and full transaction history across when we set you up.',
    heading: 'Bring your YNAB history',
    body: 'Capybudget speaks envelope budgeting natively, so your YNAB budget comes across as-is. When your spot opens, we run the import for you: accounts, category groups, payees, every transaction and every month of assignments.',
    points: [
      'Full history, not just balances',
      'Splits and transfers preserved',
      'Your plan picks up right where you left off',
    ],
  },
  {
    id: 'mobile',
    title: 'On your phone',
    blurb: 'Add it to your home screen for a full-screen app with big tap targets and swipe-back.',
    heading: 'Pocket-sized, not cut down',
    body: 'Capybudget installs to your home screen and behaves like a native app: full screen, swipe back, pull to refresh, sheets that follow the keyboard.',
    points: [
      'Install from the browser on iOS and Android',
      'Phone-sized controls and 44px tap targets',
      'Light and dark, following your system',
    ],
  },
  {
    id: 'claude',
    title: 'Works with Claude',
    blurb:
      'Connect Claude to ask about your budget, file receipts and tidy categories, with you approving every change.',
    heading: 'Ask Claude about your budget',
    body: 'Capybudget has a built-in MCP server, so Claude (in Claude.ai or Claude Code) can read your budget and make changes for you. Anything destructive asks for your approval first.',
    points: [
      '"How much did we spend eating out this quarter?"',
      '"Add this receipt and split it between groceries and household."',
      'Deletes, bulk edits and reconciles always need your OK',
    ],
  },
];

export const feature = (id: string) => {
  const found = FEATURES.find((f) => f.id === id);
  if (!found) throw new Error(`Unknown feature: ${id}`);
  return found;
};
