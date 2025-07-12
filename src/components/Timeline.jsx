"use client";

"use client";

import TimelineComponent from './TimelineComponent';

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      type: 'user',
      title: 'Nouvel utilisateur inscrit',
      user: 'Jean Dupont',
      time: '2 min',
    },
    {
      id: 2,
      type: 'order',
      title: 'Nouvelle commande',
      user: 'Marie Martin',
      time: '15 min',
    },
    {
      id: 3,
      type: 'update',
      title: 'Mise à jour du profil',
      user: 'Pierre Durand',
      time: '1 h',
    },
    {
      id: 4,
      type: 'delete',
      title: "Suppression d'un élément",
      user: 'Sophie Leroy',
      time: '2 h',
    },
  ];

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Timeline</h3>
      <TimelineComponent items={timelineData} />
    </section>
  );
}
