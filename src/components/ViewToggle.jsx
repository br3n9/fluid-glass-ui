"use client";

"use client";

import { useState } from 'react';
import ViewModeSwitch from './ViewModeSwitch';

export default function ViewToggle() {
  const [view, setView] = useState('grid');

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Basculeur de Vue</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Liste des Éléments</h4>
          <ViewModeSwitch view={view} setView={setView} />
        </div>

        <div
          className={view === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 gap-4' : 'space-y-2'}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className={`glass-surface p-4 rounded-lg ${
                view === 'grid' ? 'text-center' : 'flex items-center justify-between'
              }`}
            >
              <div>
                <h5 className="font-medium">Élément {item}</h5>
                <p className="text-sm text-gray-600">Description</p>
              </div>
              {view === 'list' && (
                <button className="btn-fluid btn-ghost text-sm">Action</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
