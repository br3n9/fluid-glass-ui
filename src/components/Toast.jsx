"use client";

import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

export default function Toast({ type = 'info', message, onClose }) {
  const icons = {
    info: <Info size={20} className="text-blue-500 mt-0.5" />,
    success: <CheckCircle size={20} className="text-green-500 mt-0.5" />,
    warning: <AlertCircle size={20} className="text-yellow-500 mt-0.5" />,
    error: <X size={20} className="text-red-500 mt-0.5" />,
  };

  const containerClasses = {
    info: 'bg-blue-50 border border-blue-200',
    success: 'bg-green-50 border border-green-200',
    warning: 'bg-yellow-50 border border-yellow-200',
    error: 'bg-red-50 border border-red-200',
  };

  return (
    <div className={`fixed bottom-5 right-5 max-w-sm w-full p-4 rounded-lg shadow-lg animate-slide-in-bottom ${containerClasses[type]}`}>
      <div className="flex items-start gap-3">
        {icons[type]}
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
