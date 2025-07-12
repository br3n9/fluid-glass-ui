"use client";

import Dropdown from "./Dropdown";
import { Settings, User, LogOut, ChevronDown } from "lucide-react";

export default function Dropdowns() {
  const dropdownItems = [
    {
      label: "Profil",
      icon: <User size={16} />,
      onClick: () => alert("Profil cliqué"),
    },
    {
      label: "Paramètres",
      icon: <Settings size={16} />,
      onClick: () => alert("Paramètres cliqué"),
    },
    { separator: true },
    {
      label: "Déconnexion",
      icon: <LogOut size={16} />,
      onClick: () => alert("Déconnexion cliqué"),
      className: "text-red-600 hover:bg-red-50",
    },
  ];

  const trigger = (
    <button className="btn-fluid btn-ghost">
      <Settings size={16} />
      Actions
      <ChevronDown size={16} />
    </button>
  );

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Dropdowns</h3>
      <Dropdown trigger={trigger} items={dropdownItems} />
    </section>
  );
}
