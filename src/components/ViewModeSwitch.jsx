"use client";

import { Grid, List } from 'lucide-react';

export default function ViewModeSwitch({ view, setView }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setView('grid')}
        className={`p-2 rounded-lg transition-colors ${
          view === 'grid'
            ? 'bg-accent-500 text-white'
            : 'hover:bg-glass-light'
        }`}
      >
        <Grid size={16} />
      </button>
      <button
        onClick={() => setView('list')}
        className={`p-2 rounded-lg transition-colors ${
          view === 'list'
            ? 'bg-accent-500 text-white'
            : 'hover:bg-glass-light'
        }`}
      >
        <List size={16} />
      </button>
    </div>
  );
}
