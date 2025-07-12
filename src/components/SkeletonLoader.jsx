"use client";

"use client";

import { useState } from 'react';
import { RefreshCw, User } from 'lucide-react';
import Skeleton from './Skeleton';

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const loadContent = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Skeleton Loader</h3>
      <div className="space-y-4">
        <button onClick={loadContent} className="btn-fluid" disabled={isLoading}>
          <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
          {isLoading ? 'Chargement...' : 'Charger le contenu'}
        </button>

        {isLoading ? (
          <Skeleton count={3} />
        ) : (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 glass-surface rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Utilisateur {item}</h4>
                  <p className="text-sm text-gray-600">
                    Contenu chargé avec succès
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
