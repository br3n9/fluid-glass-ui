'use client'

import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeContext = createContext();

export function ThemeProvider({ children, mode = 'auto', config }) {
  const themeApi = useTheme({ mode, config });

  return (
    <ThemeContext.Provider value={themeApi}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext doit être utilisé dans un ThemeProvider');
  }
  return context;
}
