"use client";

import Badge from "./Badge";

export default function Badges() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Badges</h3>
      <div className="flex flex-wrap gap-2">
        <Badge variant="accent">Nouveau</Badge>
        <Badge variant="green">Actif</Badge>
        <Badge variant="red">Urgent</Badge>
        <Badge variant="yellow">En attente</Badge>
        <Badge variant="gray">Archivé</Badge>
      </div>
    </section>
  );
}
