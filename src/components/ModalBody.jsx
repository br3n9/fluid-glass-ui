"use client";

import React from "react";

/**
 * ModalBody - Corps de modale avec contenu scrollable
 * Composant modulaire pour construire des modales flexibles
 */
const ModalBody = ({ 
  children, 
  className = "",
  variant = "default", // default, compact, spacious
  scrollable = true
}) => {
  const baseClasses = "flex-1 bg-background";
  
  const variantClasses = {
    default: "py-4 px-4",
    compact: "py-2 px-3",
    spacious: "py-6 px-6"
  };

  const scrollClasses = scrollable 
    ? "overflow-y-auto max-h-[60vh]" 
    : "overflow-visible";

  const finalClassName = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    scrollClasses,
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

ModalBody.displayName = "ModalBody";

export default ModalBody;
