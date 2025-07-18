import { useEffect, useState } from 'react';

export function useTheme(options = {}) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Détection du mode initial
    if (options.mode === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
    } else {
      setTheme(options.mode || 'light');
    }
  }, [options.mode]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const applyTheme = (config) => {
    const root = document.documentElement;
    Object.entries(config).forEach(([key, value]) => {
      const cssVar = `--fg-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value.toString());
    });
  };

  const resetTheme = () => {
    const root = document.documentElement;
    const varsToRemove = [
      '--fg-primary-hue',
      '--fg-accent-hue',
      '--fg-neutral-hue',
      '--fg-success-hue',
      '--fg-warning-hue',
      '--fg-error-hue',
      '--fg-primary-saturation',
      '--fg-accent-saturation',
      '--fg-glass-opacity',
      '--fg-glass-blur',
    ];
    varsToRemove.forEach(cssVar => {
      root.style.removeProperty(cssVar);
    });
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (options.config && mounted) {
      applyTheme(options.config);
    }
  }, [options.config, mounted]);

  return {
    theme,
    toggleTheme,
    applyTheme,
    resetTheme,
    mounted,
  };
}
