"use client";

import { FileText, Plus } from 'lucide-react';

export default function EmptyState({ icon, title, message, action }) {
  const Icon = icon || FileText;

  return (
    <div className="text-center py-12">
      <Icon size={48} className="mx-auto text-gray-400 mb-4" />
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
