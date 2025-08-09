"use client";

import React from "react";
import { X } from "lucide-react";
import IconButton from "./IconButton";

/**
 * ModalHeader - En-tête de modale avec titre et bouton de fermeture
 * Composant modulaire pour construire des modales flexibles
 */
const ModalHeader = ({ 
  title,
  onClose,
  showCloseButton = true,
  children, 
  className = "",
  variant = "default" // default, compact, spacious
}) => {
  const baseClasses = "flex-shrink-0 flex justify-between items-center border-b border-border bg-background";
  
  const variantClasses = {
    default: "pb-4 pt-2 px-4",
    compact: "pb-2 pt-1 px-3",
    spacious: "pb-6 pt-4 px-6"
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
      <div className="flex-1">
        {title && (
          <h4 
            id="modal-title" 
            className="text-lg font-semibold text-foreground"
            style={{ color: 'var(--fg-text-primary)' }}
          >
            {title}
          </h4>
        )}
        {children}
      </div>
      {showCloseButton && onClose && (
        <IconButton 
          icon={<X size={20} />} 
          onClick={onClose}
          aria-label="Fermer la modal"
          className="ml-4"
        />
      )}
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

export default ModalHeader;
