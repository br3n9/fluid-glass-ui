"use client";

"use client";

import ExpandableTableComponent from './ExpandableTableComponent';

export default function ExpandableTable() {
  const tableData = [
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean@example.com',
      role: 'Admin',
      status: 'Actif',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Marie Martin',
      email: 'marie@example.com',
      role: 'User',
      status: 'Inactif',
      date: '2024-01-10',
    },
    {
      id: 3,
      name: 'Pierre Durand',
      email: 'pierre@example.com',
      role: 'User',
      status: 'Actif',
      date: '2024-01-20',
    },
  ];

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Table Expansible</h3>
      <ExpandableTableComponent data={tableData} />
    </section>
  );
}
