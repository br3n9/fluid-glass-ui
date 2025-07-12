"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Dropdown({ trigger, items }) {
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

  const handleItemClick = (onClick) => {
    if (onClick) {
      onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass-surface rounded-lg shadow-lg z-10">
          <div className="py-1">
            {items.map((item, index) => {
              if (item.separator) {
                return <hr key={`sep-${index}`} className="my-1 border-gray-200" />;
              }
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.onClick)}
                  className={`flex items-center w-full px-4 py-2 text-sm transition-colors ${item.className || 'hover:bg-glass-light'}`}>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
