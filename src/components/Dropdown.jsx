"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../hooks/usePortal";
import { DropdownProvider } from "./DropdownContext";

// Main Dropdown component
function Dropdown({ children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DropdownProvider value={{ isOpen, setIsOpen, onClose }}>
      <div className={`relative inline-block ${className}`} ref={dropdownRef}>
        {children}
      </div>
    </DropdownProvider>
  );
}

// Trigger component
function DropdownTrigger({ children, asChild }) {
  const { isOpen, setIsOpen } = useDropdown();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  if (asChild) {
    // Clone the child element and add the onClick handler
    return children
      ? React.cloneElement(children, {
          onClick: (e) => {
            handleClick(e);
            // Call the original onClick if it exists
            if (children.props.onClick) {
              children.props.onClick(e);
            }
          },
        })
      : null;
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center"
    >
      {children}
    </button>
  );
}

// Menu component
function DropdownMenu({ children, align = "left", className = "" }) {
  const { isOpen } = useDropdown();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [menuStyle, setMenuStyle] = useState({});
  const [usePortal, setUsePortal] = useState(false);

  // Alignement par défaut (sera ajusté si nécessaire)
  const alignmentClass =
    align === "right" || align === "end"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  // Ajuster la position du menu pour éviter qu'il ne déborde de la fenêtre
  useEffect(() => {
    if (isOpen && menuRef.current) {
      // Obtenir la position du trigger (bouton qui ouvre le menu)
      const dropdownContainer = menuRef.current.closest(".relative");
      const triggerElement =
        dropdownContainer?.querySelector("button") ||
        dropdownContainer?.querySelector('[role="button"]');

      if (triggerElement) {
        const triggerRect = triggerElement.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Vérifier si le menu risque d'être coupé par les limites du parent
        const parentContainer = dropdownContainer?.closest(
          "td, th, .overflow-hidden, .overflow-x-hidden"
        );
        // TEMPORAIRE: Désactiver le Portal pour corriger les événements click
        const shouldUsePortal = false; // parentContainer !== null;

        if (shouldUsePortal) {
          // Utiliser le portail pour éviter les contraintes du parent
          setUsePortal(true);
          const newStyle = {
            position: "fixed",
            top: `${triggerRect.bottom + scrollY + 8}px`,
            left:
              align === "right" || align === "end"
                ? `${triggerRect.right + scrollX - 200}px` // 200px = largeur approximative du menu
                : align === "center"
                ? `${
                    triggerRect.left + scrollX + triggerRect.width / 2 - 100
                  }px`
                : `${triggerRect.left + scrollX}px`,
            zIndex: 9999, // Z-index très élevé pour être au-dessus de tout
            minWidth: "200px",
          };

          // Ajuster si le menu déborde à droite
          const menuWidth = 200; // largeur approximative
          if (parseInt(newStyle.left) + menuWidth > windowWidth) {
            newStyle.left = `${windowWidth - menuWidth - 10}px`;
          }

          // Ajuster si le menu déborde à gauche
          if (parseInt(newStyle.left) < 10) {
            newStyle.left = "10px";
          }

          // Ajuster si le menu déborde en bas
          if (triggerRect.bottom + 200 > windowHeight) {
            // 200px = hauteur approximative
            newStyle.top = `${triggerRect.top + scrollY - 8}px`;
            newStyle.transform = "translateY(-100%)";
          }

          setMenuStyle(newStyle);
        } else {
          // Utiliser le positionnement normal avec z-index amélioré
          setUsePortal(false);
          const newStyle = { zIndex: 50 }; // Z-index plus élevé que la navigation (30)

          // Vérifier si le menu déborde à droite
          if (menuRect.right > windowWidth) {
            newStyle.right = "0";
            newStyle.left = "auto";
            if (align === "center") {
              newStyle.transform = "none";
            }
          }

          // Vérifier si le menu déborde en bas
          if (menuRect.bottom > windowHeight) {
            const overflowY = menuRect.bottom - windowHeight;
            newStyle.maxHeight = `${menuRect.height - overflowY - 10}px`;
            newStyle.overflowY = "auto";
          }

          setMenuStyle(newStyle);
        }
      }
    } else if (!isOpen) {
      setMenuStyle({});
      setUsePortal(false);
    }
  }, [isOpen, align]);

  if (!isOpen) return null;

  const menuContent = <div className="py-1">{children}</div>;

  if (usePortal) {
    // Rendu dans un portail pour éviter les contraintes du parent
    return (
      <Portal id="dropdown-portal">
        <div
          ref={menuRef}
          className={`dropdown-menu-portal glass-surface rounded-lg shadow-lg ${className}`}
          style={menuStyle}
        >
          {menuContent}
        </div>
      </Portal>
    );
  }

  // Rendu normal avec z-index amélioré
  return (
    <div
      ref={menuRef}
      className={`dropdown-menu absolute ${alignmentClass} mt-2 glass-surface rounded-lg shadow-lg ${className}`}
      style={menuStyle}
    >
      {menuContent}
    </div>
  );
}

// Item component
function DropdownItem({ children, onClick, className = "", asChild }) {
  const { onClose } = useDropdown();

  const handleClick = (e) => {
    // Toujours fermer le dropdown avec un délai pour permettre aux actions de se terminer
    setTimeout(() => onClose(), 150);
    
    if (onClick) {
      onClick(e);
    }
  };

  if (asChild) {
    // Clone the child element and add the onClick handler
    return children
      ? React.cloneElement(children, {
          onClick: (e) => {
            // Call the original onClick if it exists
            if (children.props.onClick) {
              children.props.onClick(e);
            }
            // Fermer le dropdown après un délai pour permettre aux actions de se terminer
            setTimeout(() => onClose(), 150);
          },
          className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${className} ${
            children.props.className || ""
          }`,
        })
      : null;
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${className}`}
    >
      {children}
    </button>
  );
}

// Separator component
function DropdownSeparator() {
  return <hr className="my-1 border-gray-200" />;
}

// Import React for cloneElement and useDropdown hook
import React from "react";
import { useDropdown } from "./DropdownContext";

// Attach subcomponents to Dropdown
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;

export default Dropdown;
