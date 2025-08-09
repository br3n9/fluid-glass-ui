import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Hook pour créer un portail DOM
 * Permet de rendre des composants en dehors de leur hiérarchie normale
 */
export function usePortal(id = 'portal-root') {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    // Chercher un élément portail existant ou en créer un nouveau
    let element = document.getElementById(id);
    let created = false;

    if (!element) {
      created = true;
      element = document.createElement('div');
      element.id = id;
      element.style.position = 'relative';
      element.style.zIndex = '9999';
      document.body.appendChild(element);
    }

    setPortalElement(element);

    // Nettoyer si l'élément a été créé par ce hook
    return () => {
      if (created && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  return portalElement;
}

/**
 * Composant Portal pour rendre du contenu dans un portail
 */
export function Portal({ children, id = 'portal-root' }) {
  const portalElement = usePortal(id);
  
  if (!portalElement) return null;
  
  return createPortal(children, portalElement);
}

export default Portal;
