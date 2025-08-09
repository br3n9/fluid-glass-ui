"use client";

import React from 'react';

/**
 * Composant ModalFooter réutilisable pour les footers de modales
 * avec boutons d'action fixes en bas
 */
const ModalFooter = ({ 
  children, 
  className = "",
  variant = "default" // default, compact, spacious
}) => {
  const baseClasses = "flex-shrink-0 flex justify-end gap-3 border-t border-border bg-background";
  
  const variantClasses = {
    default: "pt-4 pb-2 px-4",
    compact: "pt-2 pb-1 px-3",
    spacious: "pt-6 pb-4 px-6"
  };

  const finalClassName = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    className
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

ModalFooter.displayName = "ModalFooter";

export default ModalFooter;
