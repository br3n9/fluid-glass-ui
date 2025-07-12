"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Button from './Button';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button 
        onClick={toggleTheme}
        startIcon={theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      >
        Basculer vers {theme === 'light' ? 'sombre' : 'clair'}
      </Button>

      <div className="flex items-center gap-2">
        <div
          className={`w-6 h-6 rounded-full transition-colors ${theme === 'light' ? 'bg-yellow-400' : 'bg-blue-600'}`}
        />
        <span className="text-sm capitalize">Mode {theme}</span>
      </div>
    </div>
  );
}
}
