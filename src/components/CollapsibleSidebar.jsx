"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import IconButton from './IconButton';

const CollapsibleSidebar = ({ navContent, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-full">
      <div
        className={`glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4 flex flex-col h-full">
          <IconButton
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <Menu size={20} /> : <X size={20} />}
            aria-label="Toggle sidebar"
            className="mb-4 self-end"
          />
          <div className="flex-grow">
            {navContent(isCollapsed)}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
