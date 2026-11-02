/**
 * English UI copy. The source of truth for the dictionary's shape: id.ts must match it key for key.
 * Feature copy lives in src/content/features.ts and the mockups' numbers in src/content/demo-budget.ts.
 */
const list = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : (items[0] ?? '');

const en = {
  meta: {
    homeTitle: 'Capybudget · Calm envelope budgeting',
    description: 'Calm envelope budgeting. Give every dollar a job, see what you can spend, and let the rest soak.',
    ogLocale: 'en_US',
    ogImage: '/og.png',
  },
  skipToContent: 'Skip to content',
  nav: {
    label: 'Main',
    home: 'Capybudget home',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#faq', label: 'FAQ' },
    ],
    signIn: 'Sign in',
    /** "Join the waitlist", with the middle part dropped on phones. */
    join: { before: 'Join', optional: ' the', after: ' waitlist' },
    menu: 'Menu',
  },
  /** The switcher points at the other language, so its text is written in that language. */
  language: { name: 'English', short: 'EN', switchTo: 'Read in English' },
  theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme', label: 'Theme' },
  themeOptions: { system: 'System', light: 'Light', dark: 'Dark' },
  footer: {
    tagline: 'Calm envelope budgeting. Made with a lot of soaking.',
    label: 'Footer',
    join: 'Join the waitlist',
    signIn: 'Sign in',
  },
  waitlist: {
    emailLabel: 'Email address',
    placeholder: 'you@example.com',
    submit: 'Join the waitlist',
    submitting: 'Joining…',
    hint: 'No spam. One email when your budget is ready.',
    success: "You're on the list. Check your inbox for a hello from the capybara.",
    errors: {
      invalid: 'Enter a valid email address.',
      tooLong: 'That email address is too long.',
      network: "Couldn't reach the server. Check your connection and try again.",
      unavailable: "We couldn't add you just now. Please try again in a minute.",
    },
  },
  waitlistPage: {
    title: 'Waitlist',
    joined: "You're on the list",
    join: 'Join the waitlist',
    back: 'Back to the home page',
  },
  notFound: {
    title: 'Page not found',
    heading: 'This page went for a soak',
    body: "We couldn't find what you were looking for. If you were heading to your budget, it lives at the app now.",
    home: 'Back home',
    app: 'Open the app',
  },
  hero: {
    eyebrow: 'Letting people in from the waitlist',
    titleLead: 'Give every dollar a job.',
    titleAccent: 'Then relax.',
    body: "Capybudget is a calm, fast envelope budget for the money you actually have. Plan the month, see what's safe to spend, and let the rest soak.",
    mockLabel: (d: { month: string; ready: string; groups: string[] }) =>
      `The Capybudget Plan screen for ${d.month}: ${d.ready} ready to assign, and ${list(d.groups)} categories with assigned, activity and available amounts.`,
  },
  principles: [
    { title: 'Only real money', body: 'You budget what is in your accounts today, not what you hope to earn.' },
    {
      title: 'Overspending stays put',
      body: 'A negative category carries forward until you cover it. It never quietly eats next month.',
    },
    { title: 'No credit-card gymnastics', body: 'Cash, checking and savings. No payment categories to babysit.' },
    {
      title: 'Your currency, your day',
      body: 'Each budget has its own currency and time zone, so "today" means your today.',
    },
  ],
  bento: {
    eyebrow: 'Everything in one calm place',
    title: 'All the envelope budgeting. None of the stress.',
    body: 'The tools you need to run a monthly plan, and none of the ones that make you feel behind.',
    seeAll: 'See every feature',
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: "Three habits. That's the whole method.",
    body: 'Envelope budgeting, the way it was meant to be: simple rules, applied to real money.',
    steps: [
      {
        title: 'Assign what you have',
        body: 'Money that lands in your accounts goes to Ready to Assign. Give every dollar a category until it reaches zero.',
      },
      {
        title: 'Spend from categories',
        body: 'Transactions draw down their category. Green means there is still money to spend; yellow means a target still needs some.',
      },
      {
        title: 'Roll with it',
        body: 'Overspent? Red shows exactly where. Move money from another category to cover it, and carry on.',
      },
    ],
  },
  mobile: { eyebrow: 'On your phone' },
  claude: { eyebrow: 'Works with Claude' },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered calmly',
    items: [
      {
        q: 'What is envelope budgeting?',
        a: 'You split the money you have into categories ("envelopes") before you spend it. When an envelope is empty, you either stop spending or move money from another one. Capybudget does the bookkeeping so the envelopes are always right.',
      },
      {
        q: 'How do I get access?',
        a: "Join the waitlist. We're letting people in a few at a time and will email you when your budget is set up. Joining is free and takes one email address.",
      },
      {
        q: 'Does it connect to my bank?',
        a: 'Not yet. You add transactions yourself (it is fast, and many people find that is what keeps them honest), set up scheduled ones for anything recurring, or ask Claude to enter them for you.',
      },
      {
        q: 'I use YNAB. Can I bring my budget?',
        a: 'Yes. Your accounts, category groups, payees, every transaction (with splits and transfers) and every month of assignments come across. One difference: Capybudget has no credit card accounts or payment categories, by design.',
      },
      {
        q: 'Why no credit cards?',
        a: 'Credit card handling is where envelope budgets get confusing. Capybudget keeps to cash, checking, savings and tracking accounts, and overspending stays in its own category until you cover it.',
      },
      {
        q: 'Which currencies are supported?',
        a: "Each budget has its own currency, including zero-decimal ones like the Indonesian rupiah and Japanese yen, and its own time zone, so the month rolls over on your calendar, not a server's.",
      },
      {
        q: 'Is there a phone app?',
        a: 'Capybudget is a web app you can add to your home screen on iOS and Android. It runs full screen, with phone-sized controls and swipe back, so it feels like an app because it is one.',
      },
      {
        q: 'How does the Claude integration work?',
        a: 'Capybudget includes an MCP server. Add it to Claude.ai or Claude Code and Claude can read your budget, add transactions, move money and more. Deleting, bulk edits and reconciling always ask for your approval first.',
      },
    ],
  },
  finalCta: {
    title: 'Ready for a calmer budget?',
    body: "Join the waitlist and we'll let you know as soon as your spot opens up.",
  },
  featuresPage: {
    title: 'Features',
    description:
      'Everything in Capybudget: the monthly plan, targets, a fast register with splits and tags, scheduled transactions, reports, reconcile, undo, YNAB import, a phone app and Claude.',
    eyebrow: 'Features',
    heading: 'Everything a calm budget needs',
    body: 'A tour of Capybudget, from the monthly plan to the phone in your pocket.',
    toc: 'On this page',
    cardLabel: (title: string) => `${title} in Capybudget`,
    planLabel: "The Plan screen: Ready to Assign, the month's categories and their available balances.",
    targetsLabel: (d: { category: string; target: string; gap: string }) =>
      `The Plan screen with ${d.category} selected: its panel shows the available balance, a ${d.target} monthly target that needs ${d.gap} more, and a note.`,
    registerLabel: (d: { account: string; splitPayee: string }) =>
      `The ${d.account} register: balances, upcoming scheduled transactions, a split ${d.splitPayee} purchase, a transfer and reconciled rows.`,
    reportsLabel: 'Reports, Spending breakdown for the last 6 months: a donut and a table of category groups.',
  },
  og: { titleLead: 'Give every dollar a job.', titleAccent: 'Then relax.', tagline: 'Calm envelope budgeting' },
  email: {
    subject: "You're on the Capybudget waitlist",
    heading: "You're on the list.",
    body: "Thanks for joining the Capybudget waitlist. We're letting people in a few at a time, and we'll email you when your budget is ready.",
    textSignoff: 'Until then: give every dollar a job, and take a long soak.',
    htmlSignoff: 'Until then: take a long soak.',
    signature: 'The Capybudget capybara',
    readyAmount: '$0.00',
    readyCaption: 'Ready to Assign · every dollar has a job',
    footer: (link: string) =>
      `You're getting this because this address was entered on ${link}. If that wasn't you, ignore this email and you won't hear from us again.`,
  },

  /** Labels inside the app mockups, as the app shows them. */
  app: {
    nav: { plan: 'Plan', reports: 'Reports', transactions: 'Transactions', accounts: 'Accounts', settings: 'Settings' },
    addAccount: 'Add Account',
    budget: 'Budget',
    today: 'Today',
    all: 'All',
    readyToAssign: 'Ready to Assign',
    assign: 'Assign',
    overspent: (n: number) => `${n} Overspent`,
    underfunded: (n: number) => `${n} Underfunded`,
    overfunded: 'Overfunded',
    categoryGroup: 'Category Group',
    undo: 'Undo',
    redo: 'Redo',
    moves: 'Moves',
    columns: { category: 'Category', assigned: 'Assigned', activity: 'Activity', available: 'Available' },
    panel: {
      availableBalance: 'Available Balance',
      leftOver: 'Cash Left Over From Last Month',
      assignedThisMonth: 'Assigned This Month',
      spending: 'Spending',
      target: 'Target',
      setAside: { before: 'Set aside ', after: ' each month' },
      needed: { before: '', after: ' more needed this month' },
      assign: (amount: string) => `Assign ${amount}`,
      snooze: 'Snooze for this month',
      editTarget: 'Edit target',
      note: 'Note',
    },
    moveMoney: {
      title: 'Move money',
      move: 'Move',
      submit: 'Move',
      to: 'To',
      cancel: 'Cancel',
      recentMoves: 'Recent Moves',
      filters: ['All', 'Moved', 'Assigned'],
      assigned: 'Assigned',
      removed: 'Removed',
    },
    register: {
      cleared: { label: 'Cleared Balance', short: 'Cleared' },
      uncleared: { label: 'Uncleared Balance', short: 'Uncleared' },
      working: { label: 'Working Balance', short: 'Working' },
      editAccount: 'Edit account',
      reconcile: 'Reconcile',
      add: 'Add',
      addSuffix: ' Transaction',
      needsCategoryCount: (n: number) => `${n} needs a category`,
      view: 'View:',
      thisMonth: 'This month',
      search: (account: string) => `Search ${account}`,
      headers: {
        date: 'Date',
        payee: 'Payee',
        category: 'Category',
        memo: 'Memo',
        outflow: 'Outflow',
        inflow: 'Inflow',
      },
      clearedMark: 'C',
      upcoming: 'Upcoming transactions',
      needsCategory: 'Needs a category',
      split: 'Split',
    },
    reconcile: {
      title: 'Reconcile account',
      question: { before: 'Is your current ', middle: ' balance ', after: '?' },
      hint: 'This is the cleared balance. Uncleared transactions aren’t included and won’t be locked.',
      no: 'No',
      yes: 'Yes, reconcile',
      done: (n: number) => `Reconciled ${n} transactions.`,
    },
    reports: {
      title: 'Reports',
      tabs: ['Spending', 'Net Worth', 'Income vs Expense'],
      accounts: 'Accounts',
      categories: 'Categories',
      breakdown: 'Breakdown',
      trends: 'Trends',
      totalSpending: 'Total spending',
      monthlyAverage: 'Monthly average',
      categoryGroup: 'Category group',
      amount: 'Amount',
      share: 'Share',
      total: 'Total',
    },
    undoCard: { title: 'Undo edit transaction', outflow: 'Outflow', category: 'Category' },
    phoneLabel:
      'Capybudget on a phone: the Plan screen with Ready to Assign and category balances, and the tab bar along the bottom.',
    chat: {
      label:
        'A conversation with Claude: it reads the Capybudget budget to answer a spending question, then asks for approval before deleting duplicate transactions.',
      question: 'How much have we spent eating out this month?',
      /** The answer reads: <spent> + a + <over> + b. */
      answer: (d: { category: string; month: string; count: number; payee: string }) => ({
        a: ` on ${d.category} in ${d.month.split(' ')[0]}, which is `,
        b: ` over what you assigned. I also spotted ${d.count} duplicate ${d.payee} charges that look like they were entered twice.`,
      }),
      followUp: 'Delete the duplicates.',
      approvalTitle: 'Capybudget is asking for approval',
      approvalBody: (n: number) => `Delete ${n} transaction(s), and the other side of any transfer among them?`,
      cannotUndo: 'This cannot be undone.',
      approveHint: 'Tick to approve, then accept',
      accept: 'Accept',
      decline: 'Decline',
    },
  },
};

export type Dictionary = typeof en;
export default en;
