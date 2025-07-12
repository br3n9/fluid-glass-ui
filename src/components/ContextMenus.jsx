"use client";

import ContextMenu from "./ContextMenu";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";

export default function ContextMenus() {
  const menuItems = [
    {
      label: "Modifier",
      icon: <Edit size={16} />,
      onClick: () => alert("Modifier cliqué"),
    },
    {
      label: "Supprimer",
      icon: <Trash2 size={16} />,
      onClick: () => alert("Supprimer cliqué"),
    },
    { separator: true },
    {
      label: "Plus d'options",
      icon: <MoreHorizontal size={16} />,
      onClick: () => alert("Plus d'options cliqué"),
    },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Menu Contextuel</h3>
      <ContextMenu items={menuItems}>
        <div className="p-8 bg-gray-50 rounded-lg text-center cursor-pointer">
          <p className="text-gray-600">
            Clic droit ici pour ouvrir le menu contextuel
          </p>
        </div>
      </ContextMenu>
    </section>
  );
}
