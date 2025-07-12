"use client";

import { useState } from 'react';
import {
  Home,
  Users,
  FileText,
  Settings,
} from 'lucide-react';
import SidebarMenuItem from './SidebarMenuItem';

export default function SidebarNavigation() {
  const [activeItem, setActiveItem] = useState('overview');

  const sidebarItems = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: Home,
      children: [
        { id: 'overview', label: "Vue d'ensemble" },
        { id: 'analytics', label: 'Analytiques' },
        { id: 'reports', label: 'Rapports' },
      ],
    },
    {
      id: 'users',
      label: 'Utilisateurs',
      icon: Users,
      children: [
        { id: 'all-users', label: 'Tous les utilisateurs' },
        { id: 'roles', label: 'Rôles' },
        { id: 'permissions', label: 'Permissions' },
      ],
    },
    {
      id: 'content',
      label: 'Contenu',
      icon: FileText,
      children: [
        { id: 'articles', label: 'Articles' },
        { id: 'pages', label: 'Pages' },
        { id: 'media', label: 'Média' },
      ],
    },
    {
      id: 'settings',
      label: 'Paramètres',
      icon: Settings,
    },
  ];

  const handleItemClick = (id) => {
    // This is where you would handle navigation for parent items if they were clickable
    // For this example, we'll just set the active item for visual feedback
    const clickedItem = sidebarItems.find(item => item.id === id);
    if (!clickedItem.children) {
      setActiveItem(id);
    }
  };

  const handleSubItemClick = (id) => {
    setActiveItem(id);
    // Handle navigation for sub-items here, e.g., router.push(`/dashboard/${id}`)
    console.log(`Navigating to ${id}`);
  };

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Navigation Latérale</h3>

      <div className="flex h-96">
        <div className="w-64 glass-surface rounded-lg p-4">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <SidebarMenuItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id || item.children?.some(c => c.id === activeItem)}
                onClick={handleItemClick}
                onSubItemClick={handleSubItemClick}
              />
            ))}
          </nav>
        </div>

        <div className="flex-1 ml-4 glass-surface rounded-lg p-4">
          <h4 className="font-medium mb-2">Contenu Principal</h4>
          <p className="text-sm text-gray-600">
            Zone de contenu correspondant à la navigation sélectionnée: {activeItem}
          </p>
        </div>
      </div>
    </section>
  );
}
