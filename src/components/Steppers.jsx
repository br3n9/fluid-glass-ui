"use client";

"use client";

import { useState } from 'react';
import Stepper from './Stepper';

export default function Steppers() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    { id: 1, title: 'Informations', description: 'Données personnelles' },
    { id: 2, title: 'Paramètres', description: 'Configuration' },
    { id: 3, title: 'Validation', description: 'Vérification' },
    { id: 4, title: 'Finalisation', description: 'Confirmation' },
  ];

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Stepper</h3>
      <div className="mb-8">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="btn-fluid btn-ghost"
        >
          Précédent
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          disabled={currentStep === steps.length}
          className="btn-fluid"
        >
          Suivant
        </button>
      </div>
    </section>
  );
}
