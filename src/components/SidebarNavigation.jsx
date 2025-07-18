"use client";

import { useCallback } from 'react';
import SidebarMenuItem from './SidebarMenuItem';

export default function SidebarNavigation({ 
  items = [],
  isCollapsed = false,
  onNavigate,
  activePath = [],
  className = '',
  wrapper,
}) {
  const handleItemClick = useCallback((item) => {
    if (onNavigate) {
      onNavigate(item);
    }
  }, [onNavigate]);

  const renderMenuItem = (item) => {
    const itemId = item.resource || item.id;
    const menuItem = (
      <SidebarMenuItem
        key={itemId}
        item={item}
        isActive={activePath.includes(itemId)}
        isCollapsed={isCollapsed}
        onClick={handleItemClick}
        activePath={activePath}
        wrapper={wrapper}
      />
    );

    // Si un wrapper est fourni, l'utiliser pour envelopper l'élément de menu
    return wrapper ? wrapper(menuItem, item) : menuItem;
  };

  return (
    <nav className={`space-y-1 ${className}`}>
      {items.map((item) => {
        const itemId = item.resource || item.id;
        return (
          <div key={itemId}>
            {renderMenuItem(item)}
          </div>
        );
      })}
    </nav>
  );
}
