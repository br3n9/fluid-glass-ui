"use client";

import Breadcrumb from "./Breadcrumb";

export default function Breadcrumbs() {
  const breadcrumbItems = [
    { label: "Accueil", href: "#" },
    { label: "Utilisateurs", href: "#" },
    { label: "Profil", href: "#" },
    { label: "Modifier" },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Fil d'Ariane</h3>
      <Breadcrumb items={breadcrumbItems} />
    </section>
  );
}
