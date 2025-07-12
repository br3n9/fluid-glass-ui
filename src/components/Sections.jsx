"use client";

import SectionBox from './SectionBox';

export default function Sections() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Sections et Boîtes</h3>

      <div className="space-y-4">
        <SectionBox title="Section Standard">
          Contenu de la section avec padding standard
        </SectionBox>

        <SectionBox title="Section Mise en Évidence" variant="highlighted">
          Section avec bordure colorée pour attirer l&apos;attention
        </SectionBox>

        <SectionBox title="Section avec Gradient" variant="gradient">
          Section avec arrière-plan dégradé
        </SectionBox>
      </div>
    </section>
  );
}
