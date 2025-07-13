"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Button from './Button.jsx';

export default function ThemeSwitcher() {
  const [mode, setMode] = useState('light');

  // Effect to load and apply saved mode on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('mode') || 'light';
    setMode(savedMode);
    document.documentElement.setAttribute('data-theme', savedMode);
  }, []);

  // Function to toggle light/dark mode
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.documentElement.setAttribute('data-theme', newMode);
  };

  return (
    <Button 
      onClick={toggleMode}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      startIcon={mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    >
      {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

