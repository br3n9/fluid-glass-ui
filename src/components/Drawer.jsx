"use client";

import { X } from 'lucide-react';

export default function Drawer({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-80 glass-surface z-50 animate-slide-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-semibold">{title}</h4>
            <button
              onClick={onClose}
              className="p-2 hover:bg-glass-light rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
