"use client";

export default function FlexboxSystem() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Système Flexbox</h3>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">Flex 1</span>
          </div>
          <div className="flex-1 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">Flex 1</span>
          </div>
          <div className="flex-1 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">Flex 1</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-grow-[2] glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">Flex 2</span>
          </div>
          <div className="flex-1 glass-surface p-4 rounded text-center">
            <span className="text-sm font-medium">Flex 1</span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="glass-surface p-4 rounded">
            <span className="text-sm font-medium">Début</span>
          </div>
          <div className="glass-surface p-4 rounded">
            <span className="text-sm font-medium">Centre</span>
          </div>
          <div className="glass-surface p-4 rounded">
            <span className="text-sm font-medium">Fin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
