"use client";

import DataCard from './DataCard';

export default function DataCards() {
  const data = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean@example.com",
      role: "Admin",
      status: "Actif",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      role: "User",
      status: "Inactif",
    },
    {
      id: 3,
      name: "Pierre Durand",
      email: "pierre@example.com",
      role: "User",
      status: "Actif",
    },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Cartes de Données</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <DataCard
            key={item.id}
            name={item.name}
            email={item.email}
            role={item.role}
            status={item.status}
          />
        ))}
      </div>
    </section>
  );
}
