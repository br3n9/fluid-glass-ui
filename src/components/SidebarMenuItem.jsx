"use client";

import { useState, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

export default function SidebarMenuItem({ 
  item, 
  isActive, 
  isCollapsed = false,
  onClick, 
  level = 0, 
  activePath = [],
  wrapper
}) {
  // Initialiser l'état d'expansion en fonction du chemin actif
  const [isExpanded, setIsExpanded] = useState(() => {
    const itemId = item.resource || item.id;
    return activePath.includes(itemId);
  });
  
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;
  const itemLabel = item.name || item.label;
  const itemId = item.resource || item.id;

  const handleItemClick = useCallback((e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
    if (onClick) {
      onClick(item);
    }
  }, [hasChildren, isExpanded, item, onClick]);

  return (
    <div className="w-full">
      <button
        onClick={handleItemClick}
        className={`nav-item w-full text-left ${hasChildren ? 'justify-between' : ''}`}
      >

        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} />}
          {isCollapsed ? '' : itemLabel}
        </div>

        {hasChildren && 
          <ChevronRight 
            size={16} 
            className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
          />
        }

        
      </button>
      
      {hasChildren && isExpanded && !isCollapsed && (
        <div className="ml-4 mt-1 space-y-1 border-l pl-2 border-primary-100 dark:border-primary-800">
          {item.children.map((child) => {
            const childId = child.id;
            const childMenuItem = (
              <SidebarMenuItem
                key={childId}
                item={child}
                isActive={activePath.includes(childId)}
                isCollapsed={isCollapsed}
                onClick={onClick}
                level={level + 1}
                activePath={activePath}
                wrapper={wrapper}
              />
            );
            
            // Si un wrapper est fourni, l'utiliser pour envelopper l'élément de menu enfant
            if (wrapper) {
              // Créer une fonction wrapper qui garantit que l'élément retourné a une clé
              const wrappedItem = wrapper(childMenuItem, child);
              // Vérifier si l'élément retourné a déjà une clé, sinon ajouter une clé
              const hasKey = wrappedItem && wrappedItem.key !== undefined && wrappedItem.key !== null;
              return hasKey ? wrappedItem : <div key={childId}>{wrappedItem}</div>;
            } else {
              return childMenuItem;
            }
          })}
        </div>
      )}
    </div>
  );
}
