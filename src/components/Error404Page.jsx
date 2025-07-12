"use client";

import Button from './Button';

export default function Error404Page() {
  return (
    <div className="text-center py-12">
      <div className="text-8xl font-bold text-accent-500 mb-4">404</div>
      <h4 className="text-2xl font-medium text-gray-600 mb-2">
        Page non trouvée
      </h4>
      <p className="text-gray-500 mb-6">
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="ghost">Retour</Button>
        <Button>Accueil</Button>
      </div>
    </div>
  );
}
