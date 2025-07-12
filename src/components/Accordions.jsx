"use client";

import Accordion from './Accordion';

export default function Accordions() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Accordions</h3>
      <div className="space-y-4">
        <Accordion title="Qu&apos;est-ce que le Fluid Glass UI ?">
          <p>Fluid Glass UI est un système de design qui utilise des effets de verre dépoli, de la transparence et des ombres douces pour créer une interface utilisateur moderne et élégante. Il met l&apos;accent sur la profondeur et la hiérarchie visuelle.</p>
        </Accordion>
        <Accordion title="Comment utiliser ce composant Accordion ?">
          <p>Ce composant est simple à utiliser. Il suffit de l&apos;importer et de lui passer une prop `title` pour l&apos;en-tête et des `children` pour le contenu qui sera affiché ou masqué. L&apos;état d&apos;ouverture est géré à l&apos;intérieur du composant.</p>
        </Accordion>
        <Accordion title="Est-il possible de l&apos;animer ?">
          <p>Oui, l&apos;ouverture et la fermeture de l&apos;accordéon sont animées en utilisant des transitions CSS sur la propriété `max-height`. Cela crée un effet de déroulement fluide et agréable pour l&apos;utilisateur.</p>
        </Accordion>
      </div>
    </section>
  );
}
