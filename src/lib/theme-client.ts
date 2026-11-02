/** Browser-only. Matches the inline init script in Base.astro: `theme` in localStorage, absent means system. */
export type ThemeChoice = 'system' | 'light' | 'dark';

const KEY = 'theme';
const media = window.matchMedia('(prefers-color-scheme: dark)');

export function getTheme(): ThemeChoice {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'light' || value === 'dark' ? value : 'system';
  } catch {
    return 'system';
  }
}

function apply(choice: ThemeChoice) {
  const root = document.documentElement;
  root.classList.toggle('dark', choice === 'dark' || (choice === 'system' && media.matches));
  root.dataset.theme = choice;
  document.dispatchEvent(new CustomEvent('themechange', { detail: choice }));
}

export function setTheme(choice: ThemeChoice) {
  try {
    if (choice === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, choice);
  } catch {
    // Private mode or blocked storage: the choice still applies to this page.
  }
  apply(choice);
}

export function isDark(): boolean {
  return document.documentElement.classList.contains('dark');
}

media.addEventListener('change', () => {
  if (getTheme() === 'system') apply('system');
});
