import { useState, useEffect, useCallback } from 'react';

const THEMES = {
  void: {
    name: 'Void',
    description: 'Dark mode. Deep blacks, bioluminescent minds.',
    isDefault: true,
  },
  dawn: {
    name: 'Dawn',
    description: 'Light mode. Warm whites, ink strokes.',
    isDefault: false,
  },
};

const STORAGE_KEY = 'venom-theme';
const DEFAULT_THEME = 'void';

const applyTheme = (theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }
};

const useTheme = () => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && THEMES[stored]) {
      setThemeState(stored);
      applyTheme(stored);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'void' : 'dawn';
      setThemeState(newTheme);
      applyTheme(newTheme);
    };

    if (!localStorage.getItem(STORAGE_KEY)) {
      handleChange(mediaQuery);
    }
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState(current => current === 'void' ? 'dawn' : 'void');
  }, []);

  const cycleTheme = useCallback(() => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themeKeys[nextIndex];
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  }, [theme]);

  return {
    theme,
    themes: THEMES,
    toggleTheme,
    cycleTheme,
  };
};

export { useTheme, THEMES, STORAGE_KEY, DEFAULT_THEME };
