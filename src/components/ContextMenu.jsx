"use client";

import { useState, useEffect, useCallback } from "react";

export default function ContextMenu({ children, items }) {
  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    setMenu({ visible: true, x: event.pageX, y: event.pageY });
  }, []);

  const handleClick = useCallback(() => {
    if (menu.visible) {
      setMenu((prev) => ({ ...prev, visible: false }));
    }
  }, [menu.visible]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {menu.visible && (
        <div
          className="fixed glass-surface rounded-lg shadow-lg z-50 py-1"
          style={{ top: menu.y, left: menu.x }}
        >
          {items.map((item, index) => {
            if (item.separator) {
              return <hr key={`sep-${index}`} className="my-1 border-gray-200" />;
            }
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex items-center w-full px-4 py-2 text-sm hover:bg-glass-light transition-colors"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
