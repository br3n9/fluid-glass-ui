"use client";

"use client";

import { useState } from 'react';
import Modal from './Modal';

export default function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Modal</h3>
      <button onClick={() => setModalOpen(true)} className="btn-fluid">
        Ouvrir Modal
      </button>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title="Titre du Modal"
      >
        <p className="text-gray-600 mb-6">
          Contenu du modal avec des informations importantes à afficher à l&apos;utilisateur.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setModalOpen(false)}
            className="btn-fluid btn-ghost"
          >
            Annuler
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="btn-fluid"
          >
            Confirmer
          </button>
        </div>
      </Modal>
    </section>
  );
}
