"use client";

import Alert from "./Alert";

export default function Alerts() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Alertes</h3>
      <div className="space-y-4">
        <Alert variant="info" title="Information">
          Voici une information importante.
        </Alert>
        <Alert variant="success" title="Succès">
          Opération réalisée avec succès.
        </Alert>
        <Alert variant="warning" title="Attention">
          Veuillez vérifier ces informations.
        </Alert>
        <Alert variant="danger" title="Erreur">
          Une erreur s&apos;est produite.
        </Alert>
      </div>
    </section>
  );
}
