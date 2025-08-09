"use client";

import { Check } from "lucide-react";

export default function Stepper({ steps, currentStep }) {
  return (
    <div className="flex items-center mb-6">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              currentStep >= step.id
                ? "bg-accent-500 border-accent-500 text-white"
                : "border-gray-300 text-gray-400"
            }`}
          >
            {currentStep > step.id ? <Check size={16} /> : step.id}
          </div>
          <div className="ml-2 mr-4">
            <div className="text-sm font-medium">{step.title}</div>
            <div className="text-xs text-gray-500">{step.description}</div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-0.5 ${
                currentStep > step.id ? "bg-accent-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
