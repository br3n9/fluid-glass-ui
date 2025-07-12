"use client";

import { Bell, X } from 'lucide-react';

export default function Snackbar({ message, time, onDismiss }) {
  return (
    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-3">
        <Bell size={16} className="text-blue-600" />
        <div>
          <p className="text-sm font-medium">{message}</p>
          {time && (
            <p className="text-xs text-gray-500">
              il y a {time}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="p-1 hover:bg-blue-100 rounded"
      >
        <X size={16} />
      </button>
    </div>
  );
}
