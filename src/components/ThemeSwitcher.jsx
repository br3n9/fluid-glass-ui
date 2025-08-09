"use client";

import { Moon, Sun } from 'lucide-react';
import Button from './Button.jsx';
import { useThemeContext } from './ThemeProvider';
import IconButton from './IconButton.jsx';

export default function ThemeSwitcher({ showLabel = true }) {
  // Utiliser le contexte de thème au lieu de l'état local
  const { theme, toggleTheme } = useThemeContext();

  return showLabel ? (<Button 
    onClick={toggleTheme}
    aria-label={`Passer au mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    startIcon={theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
  >
    {showLabel && (theme === 'light' ? 'Mode sombre' : 'Mode clair')}
  </Button>) : ( (<IconButton
    onClick={toggleTheme}
    aria-label={`Passer au mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    icon={theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
  />));
}

