"use client";

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';

export default function SidebarMenuItem({ item, isActive, onClick, onSubItemClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleItemClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    onClick(item.id);
  };

  return (
    <div>
      <Button
        variant={isActive ? 'subtle' : 'ghost'}
        onClick={handleItemClick}
        startIcon={<item.icon size={16} />}
        endIcon={hasChildren && 
          <ChevronRight size={16} className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        }
        className="w-full justify-between"
      >
        {item.label}
      </Button>
      {hasChildren && isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children.map((child) => (
            <Button
              key={child.id}
              variant='ghost'
              onClick={() => onSubItemClick(child.id)}
              className="w-full justify-start text-sm"
            >
              {child.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
