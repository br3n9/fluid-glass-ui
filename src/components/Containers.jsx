"use client";

import Container from './Container';

export default function Containers() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Conteneurs</h3>

      <div className="space-y-4">
        <Container size="sm">
          <span className="text-sm font-medium">Conteneur Small (384px)</span>
        </Container>

        <Container size="md">
          <span className="text-sm font-medium">Conteneur Medium (448px)</span>
        </Container>

        <Container size="lg">
          <span className="text-sm font-medium">Conteneur Large (512px)</span>
        </Container>

        <Container size="xl">
          <span className="text-sm font-medium">Conteneur XL (576px)</span>
        </Container>
      </div>
    </section>
  );
}
