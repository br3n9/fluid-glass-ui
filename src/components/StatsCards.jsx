"use client";

"use client";

import StatCard from './StatCard';

export default function StatsCards() {
  const statsData = [
    {
      id: 1,
      title: 'Utilisateurs actifs',
      value: '2,847',
      change: '+12%',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Ventes du mois',
      value: '€45,892',
      change: '+8%',
      trend: 'up',
    },
    {
      id: 3,
      title: 'Taux de conversion',
      value: '3.2%',
      change: '-2%',
      trend: 'down',
    },
    {
      id: 4,
      title: 'Revenus annuels',
      value: '€523,180',
      change: '+15%',
      trend: 'up',
    },
  ];

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Statistiques / KPI</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>
    </section>
  );
}
