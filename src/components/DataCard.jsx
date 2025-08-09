"use client";

import React from 'react';

/**
 * Composant DataCard générique pour afficher des paires label/value
 * @param {string} label - Le label à afficher
 * @param {string|React.ReactNode} value - La valeur à afficher
 * @param {React.ReactNode} icon - Icône optionnelle
 * @param {string} className - Classes CSS additionnelles
 */
export default function DataCard({ label, value, icon, className = "" }) {
  const baseClasses = "flex justify-between items-center py-2 px-3 rounded-md bg-muted/50";
  const finalClassName = [baseClasses, className].filter(Boolean).join(" ").trim();

  return (
    <div className={finalClassName}>
      <div className="flex items-center gap-2">
        {icon && (
          <span className="text-muted-foreground" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="text-sm font-semibold text-foreground">
        {value}
      </div>
    </div>
  );
}
