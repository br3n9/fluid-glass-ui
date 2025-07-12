"use client";

import { useState } from 'react';
import { Home, Users, Settings } from 'lucide-react';
import CollapsibleSidebar from './CollapsibleSidebar';
import Button from './Button';
import IconButton from './IconButton';

export default function SidebarLayout() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const navContent = (isCollapsed) => (
    <nav className="space-y-2">
      {sidebarItems.map(item => (
        isCollapsed ? (
          <IconButton
            key={item.id}
            icon={<item.icon size={20} />}
            aria-label={item.label}
            variant={activeItem === item.id ? 'subtle' : 'ghost'}
            onClick={() => handleItemClick(item.id)}
            className="w-full"
          />
        ) : (
          <Button
            key={item.id}
            variant={activeItem === item.id ? 'subtle' : 'ghost'}
            onClick={() => handleItemClick(item.id)}
            startIcon={<item.icon size={16} />}
            className="w-full justify-start"
          >
            {item.label}
          </Button>
        )
      ))}
    </nav>
  );

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Layout avec Sidebar</h3>
      <div className="h-96 glass-surface rounded-lg overflow-hidden">
        <CollapsibleSidebar navContent={navContent}>
          <div className="glass-surface p-4 rounded h-full">
            <h4 className="font-medium mb-2">Contenu Principal</h4>
            <p className="text-sm text-gray-600">
              Contenu pour: {activeItem}
            </p>
          </div>
        </CollapsibleSidebar>
      </div>
    </section>
  );
}
