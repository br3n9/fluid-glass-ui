"use client";

import { User } from 'lucide-react';

export default function DataCard({ icon, name, email, role, status }) {
  const statusClasses = {
    Actif: 'bg-green-100 text-green-700',
    Inactif: 'bg-gray-100 text-gray-700',
  };

  const cardClasses = `
    glass-surface 
    p-4 
    rounded-lg 
    hover:shadow-lg 
    transition-shadow
  `;

  const statusBadgeClasses = `
    px-2 
    py-1 
    rounded-full 
    text-xs 
    ${statusClasses[status] || 'bg-red-100 text-red-700'}
  `;

  return (
    <div className={cardClasses.trim()}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          {icon || <User size={20} className="text-white" />}
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{role}</span>
        <span className={statusBadgeClasses.trim()}>
          {status}
        </span>
      </div>
    </div>
  );
}
