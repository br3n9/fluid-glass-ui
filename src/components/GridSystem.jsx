"use client";

export default function GridSystem() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Système de Grille</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">12 colonnes</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">6 colonnes</span>
          </div>
          <div className="col-span-6 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">6 colonnes</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">4 colonnes</span>
          </div>
          <div className="col-span-4 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">4 colonnes</span>
          </div>
          <div className="col-span-4 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">4 colonnes</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">3 colonnes</span>
          </div>
          <div className="col-span-3 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">3 colonnes</span>
          </div>
          <div className="col-span-3 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">3 colonnes</span>
          </div>
          <div className="col-span-3 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">3 colonnes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
