"use client";

import { useMemo } from 'react';

/**
 * Hook personnalisé pour gérer le layout des modales de façon consistante
 * @param {string} maxHeight - Hauteur maximale de la modal (défaut: "80vh")
 * @returns {Object} Classes CSS et styles pour le layout de modal
 */
export const useModalLayout = (maxHeight = "80vh") => {
  return useMemo(() => ({
    // Classes pour le conteneur principal de la modal
    containerClass: "flex flex-col h-full",
    containerStyle: { maxHeight },
    
    // Classes pour le contenu scrollable
    contentClass: "flex-1 overflow-y-auto px-1 space-y-6",
    
    // Classes pour le footer fixe (si ModalFooter n'est pas utilisé)
    footerClass: "flex-shrink-0 flex justify-end gap-3 pt-4 pb-2 px-4 border-t border-border bg-background",
    
    // Utilitaires
    isScrollable: true,
    hasFixedFooter: true
  }), [maxHeight]);
};

export default useModalLayout;
