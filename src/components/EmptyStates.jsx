"use client";

import { useState } from "react";
import EmptyState from "./EmptyState";
import { FileText, Plus } from "lucide-react";

export default function EmptyStates() {
  const [showEmpty, setShowEmpty] = useState(false);

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Empty State</h3>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setShowEmpty(true)}
          className="btn-fluid btn-ghost"
        >
          Afficher état vide
        </button>
        <button
          onClick={() => setShowEmpty(false)}
          className="btn-fluid btn-ghost"
        >
          Masquer état vide
        </button>
      </div>

      {showEmpty ? (
        <EmptyState
          icon={FileText}
          title="Aucun document trouvé"
          message="Vous n&apos;avez pas encore créé de documents. Commencez par en créer un !"
          action={{
            label: "Créer un document",
            onClick: () => console.log("Action: Créer un document"),
            icon: <Plus size={16} />,
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="glass-surface p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FileText size={20} className="text-blue-500" />
                <h4 className="font-medium">Document {item}</h4>
              </div>
              <p className="text-sm text-gray-600">
                Contenu du document {item}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
