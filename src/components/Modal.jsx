"use client";

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import IconButton from './IconButton';

// Constantes extraites pour éviter la recréation à chaque render
const SIZE_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-6xl'
};

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Gestion du focus pour l'accessibilité
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder l'élément actuellement focusé
      previousFocusRef.current = document.activeElement;
      // Focuser la modal
      modalRef.current?.focus();
    } else {
      // Restaurer le focus précédent
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalSizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4" 
      style={{ background: 'var(--fg-overlay-medium)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className={`modal-fluid show w-full ${modalSizeClass} max-h-[90vh] overflow-hidden`} 
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="document"
      >
        <div className="flex justify-between items-center mb-4">
          <h4 id="modal-title" className="text-lg font-semibold">{title}</h4>
          <IconButton 
            icon={<X size={20} />} 
            onClick={onClose}
            aria-label="Fermer la modal"
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
