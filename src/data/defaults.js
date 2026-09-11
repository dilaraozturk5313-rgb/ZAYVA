export const THEMES = {
  signature: { label: 'Signature', bg: '#F4F1EC', surface: '#FBF9F6', surfaceSoft: '#EEE8E1', text: '#1F1D1A', muted: '#7B746C', accent: '#5D5147', line: '#D8D0C7' },
  rose: { label: 'Rose', bg: '#F6F0F0', surface: '#FCF8F8', surfaceSoft: '#EEDFE0', text: '#241F20', muted: '#807174', accent: '#8A666C', line: '#DDCFD1' },
  espresso: { label: 'Espresso', bg: '#EEE8E0', surface: '#F8F4EE', surfaceSoft: '#DFD2C3', text: '#211B17', muted: '#796B61', accent: '#705545', line: '#D0C2B4' },
  midnight: { label: 'Midnight', bg: '#111419', surface: '#181D24', surfaceSoft: '#202833', text: '#F3F5F7', muted: '#9AA4B1', accent: '#9DAABC', line: '#303844' },
  slate: { label: 'Slate', bg: '#EDF0F2', surface: '#F8FAFB', surfaceSoft: '#DDE3E7', text: '#20252A', muted: '#707981', accent: '#56616B', line: '#CBD3D8' }
};

export const DEFAULT_CATEGORIES = [
  { id: 'food', name: 'Mat', icon: '◌', budget: 3000, pinned: true },
  { id: 'transport', name: 'Transport', icon: '↗', budget: 900, pinned: true },
  { id: 'shopping', name: 'Shopping', icon: '◇', budget: 1500, pinned: true },
  { id: 'fun', name: 'Nöje', icon: '✦', budget: 1000, pinned: true },
  { id: 'home', name: 'Hem', icon: '⌂', budget: 800, pinned: false },
  { id: 'health', name: 'Hälsa', icon: '+', budget: 600, pinned: false }
];

export const WIDGET_CATALOG = [
  { id: 'income', labelKey: 'income', kind: 'metric' },
  { id: 'remaining', labelKey: 'remaining', kind: 'metric' },
  { id: 'spent', labelKey: 'spent', kind: 'metric' },
  { id: 'saved', labelKey: 'saved', kind: 'metric' },
  { id: 'budget', labelKey: 'myBudget', kind: 'budget' },
  { id: 'recent', labelKey: 'recentPurchases', kind: 'recent' },
  { id: 'goals', labelKey: 'goals', kind: 'goals' },
  { id: 'fixed', labelKey: 'fixedCosts', kind: 'fixed' },
  { id: 'notes', labelKey: 'notes', kind: 'notes' },
  { id: 'payday', labelKey: 'paydayCountdown', kind: 'payday' },
  { id: 'investments', labelKey: 'investments', kind: 'placeholder' },
  { id: 'networth', labelKey: 'netWorth', kind: 'placeholder' },
  { id: 'cashflow', labelKey: 'cashFlow', kind: 'placeholder' }
];

export const DEFAULT_STATE = {
  version: '0.1.0',
  onboardingComplete: false,
  settings: {
    language: 'sv', currency: 'SEK', theme: 'signature',
    cycle: { type: 'payday', day: 25 }
  },
  profile: { income: 13400 },
  categories: DEFAULT_CATEGORIES,
  transactions: [
    { id: 't1', amount: -432, categoryId: 'food', date: '2026-09-10', title: 'ICA Maxi', note: '', account: 'Main' },
    { id: 't2', amount: -59, categoryId: 'fun', date: '2026-09-10', title: 'Espresso House', note: '', account: 'Main' },
    { id: 't3', amount: -43, categoryId: 'transport', date: '2026-09-09', title: 'SL', note: '', account: 'Main' },
    { id: 't4', amount: 13400, categoryId: null, date: '2026-09-01', title: 'CSN', note: '', account: 'Main' }
  ],
  savingsLog: [
    { month: '2026-07', amount: 4000 },
    { month: '2026-08', amount: 2500 },
    { month: '2026-09', amount: 3000 }
  ],
  goals: [
    { id: 'g1', name: 'Buffert', target: 60000, current: 42000, due: '', icon: '◉', pinned: true },
    { id: 'g2', name: 'Resa', target: 25000, current: 8000, due: '2027-06-01', icon: '✈', pinned: false }
  ],
  fixedCosts: [
    { id: 'f1', name: 'Hyra', amount: 5400, day: 27, active: true },
    { id: 'f2', name: 'Spotify', amount: 119, day: 14, active: true }
  ],
  notes: [{ id: 'n1', text: 'Kom ihåg att flytta sparandet på lönedagen.', createdAt: '2026-09-01' }],
  homeWidgets: ['income','remaining','spent','saved','budget','recent','goals']
};
