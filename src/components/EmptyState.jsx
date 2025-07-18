"use client";

import { FileText, Plus } from 'lucide-react';
import React from 'react';

export default function EmptyState({ icon, title, message, action }) {
  // Vérifier si l'icône est un élément JSX ou un composant
  const isJSXElement = React.isValidElement(icon);
  
  // Si c'est un élément JSX, l'utiliser directement, sinon utiliser comme composant
  const iconElement = isJSXElement ? 
    icon : 
    icon ? <icon.type {...icon.props} size={48} className="mx-auto text-gray-400 mb-4" /> : <FileText size={48} className="mx-auto text-gray-400 mb-4" />;

  return (
    <div className="text-center py-12">
      {isJSXElement ? 
        React.cloneElement(icon, { 
          size: icon.props.size || 48, 
          className: `mx-auto text-gray-400 mb-4 ${icon.props.className || ''}`.trim() 
        }) : 
        icon ? 
          React.createElement(icon, { size: 48, className: "mx-auto text-gray-400 mb-4" }) : 
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
      }
      <h4 className="text-lg font-medium text-gray-600 mb-2">{title}</h4>
      <p className="text-gray-500 mb-4">{message}</p>
      {action && (
        <button className="btn-fluid" onClick={action.onClick}>
          {action.icon || <Plus size={16} />}
          {action.label}
        </button>
      )}
    </div>
  );
}
