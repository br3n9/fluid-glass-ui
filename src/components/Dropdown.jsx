"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
    return children ? React.cloneElement(children, {
      onClick: (e) => {
        handleClick(e);
        // Call the original onClick if it exists
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      }
    }) : null;
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
  const [menuStyle, setMenuStyle] = useState({});
  
  // Alignement par défaut (sera ajusté si nécessaire)
  const alignmentClass = align === "right" || align === "end" 
    ? "right-0" 
    : align === "center" 
      ? "left-1/2 -translate-x-1/2" 
      : "left-0";

  // Ajuster la position du menu pour éviter qu'il ne déborde de la fenêtre
  useEffect(() => {
    // N'exécuter que si le menu est ouvert et que la référence est disponible
    if (isOpen && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newStyle = {};
      
      // Vérifier si le menu déborde à droite
      if (menuRect.right > windowWidth) {
        newStyle.right = '0';
        newStyle.left = 'auto';
        // Annuler la transformation si align est "center"
        if (align === "center") {
          newStyle.transform = 'none';
        }
      }
      
      // Vérifier si le menu déborde en bas
      if (menuRect.bottom > windowHeight) {
        const overflowY = menuRect.bottom - windowHeight;
        newStyle.maxHeight = `${menuRect.height - overflowY - 10}px`; // 10px de marge
        newStyle.overflowY = 'auto';
      }
      
      setMenuStyle(newStyle);
    } else if (!isOpen) {
      // Réinitialiser les styles lorsque le menu se ferme
      setMenuStyle({});
    }
  }, [isOpen, align]);
  
  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className={`absolute ${alignmentClass} mt-2 glass-surface rounded-lg shadow-lg z-10 ${className}`}
      style={menuStyle}
    >
      <div className="py-1">
        {children}
      </div>
    </div>
  );
}

// Item component
function DropdownItem({ children, onClick, className = "", asChild }) {
  const { onClose } = useDropdown();
  
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    onClose();
  };

  if (asChild) {
    // Clone the child element and add the onClick handler
    return children ? React.cloneElement(children, {
      onClick: (e) => {
        handleClick(e);
        // Call the original onClick if it exists
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      },
      className: `flex items-center w-full px-4 py-2 text-sm transition-colors hover:bg-glass-light ${className} ${children.props.className || ''}`
    }) : null;
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
