import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'fluid-glass-theme';

export function useTheme(options = {}) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Récupération du thème sauvegardé ou détection du mode initial
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      // Utiliser le thème sauvegardé s'il existe
      setTheme(savedTheme);
    } else if (options.mode === 'auto') {
      // Détection automatique du mode système
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const detectedTheme = isDark ? 'dark' : 'light';
      setTheme(detectedTheme);
      // Sauvegarder le thème détecté
      localStorage.setItem(THEME_STORAGE_KEY, detectedTheme);
    } else {
      // Utiliser le mode spécifié ou par défaut
      const initialTheme = options.mode || 'light';
      setTheme(initialTheme);
      // Sauvegarder le thème initial
      localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
    }
  }, [options.mode]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    // Sauvegarder le nouveau thème dans localStorage
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  const setThemeManually = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      // Sauvegarder le nouveau thème dans localStorage
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  };

  const clearSavedTheme = () => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    // Revenir au mode système si 'auto' est activé
    if (options.mode === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = isDark ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    }
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

  // Écouter les changements de préférence système si le mode est 'auto'
  useEffect(() => {
    if (options.mode === 'auto' && mounted) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        // Ne changer que si aucun thème n'est explicitement sauvegardé
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (!savedTheme) {
          const systemTheme = e.matches ? 'dark' : 'light';
          setTheme(systemTheme);
          document.documentElement.setAttribute('data-theme', systemTheme);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [options.mode, mounted]);

  return {
    theme,
    toggleTheme,
    setTheme: setThemeManually,
    clearSavedTheme,
    applyTheme,
    resetTheme,
    mounted,
  };
}
