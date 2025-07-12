"use client";

"use client";

import IconButton from './IconButton';
import Dropdown from './Dropdown';
import { Menu, ChevronDown, Edit, Copy, Trash } from "lucide-react";

export default function Menus() {
  const dropdownItems = [
    { label: 'Éditer', icon: <Edit size={16} />, onClick: () => alert('Éditer') },
    { label: 'Copier', icon: <Copy size={16} />, onClick: () => alert('Copier') },
    { separator: true },
    { label: 'Supprimer', icon: <Trash size={16} />, onClick: () => alert('Supprimer'), className: 'text-red-600 hover:bg-red-50' },
  ];

  const dropdownTrigger = (
    <button className="btn-fluid btn-ghost">
      Actions
      <ChevronDown size={16} />
    </button>
  );

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Types de Menus</h3>

      <div className="space-y-6">
        {/* Burger Menu */}
        <div>
          <h4 className="font-medium mb-3">Menu Burger</h4>
          <div className="flex items-center gap-4">
            <IconButton icon={Menu} />
            <span className="text-sm text-gray-600">
              Menu hamburger pour mobile
            </span>
          </div>
        </div>

        {/* Contextual Menu */}
        <div>
          <h4 className="font-medium mb-3">Menu Contextuel</h4>
          <div className="glass-surface p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Clic droit sur cet élément pour voir le menu contextuel.
            </p>
            <div className="text-xs text-gray-500">
              (Implémenté dans ContextMenus.js)
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div>
          <h4 className="font-medium mb-3">Menu Déroulant</h4>
          <Dropdown trigger={dropdownTrigger} items={dropdownItems} />
        </div>
      </div>
    </section>
  );
}
