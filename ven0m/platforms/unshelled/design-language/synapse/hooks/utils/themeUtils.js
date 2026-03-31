import { getActiveMind } from './useMind';

export const getTheme = (state) => {
  const theme = state?.theme;
  return theme === 'void' ? 'dark' : 'dawn';
};

export const applyTheme = (theme) => {
  if (typeof document !== 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('venom-theme', theme);
    }
  }
};
