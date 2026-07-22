"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import IconButton from "./IconButton";

// Constantes extraites pour éviter la recréation à chaque render
const SIZE_CLASSES = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  "2xl": "max-w-6xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}) {
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
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Empêcher le scroll du body
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // State for portal mounting (client-side only)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalSizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        background: "var(--fg-overlay-medium)",
        zIndex: 9999,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
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
        <div className="flex justify-between items-center mb-4 absolute top-[20px] right-[25px]">
          <h4 id="modal-title" className="text-lg font-semibold">
            {title}
          </h4>
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

  // Use portal to render modal at document.body level
  return createPortal(modalContent, document.body);
}
