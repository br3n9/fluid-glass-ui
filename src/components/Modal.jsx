"use client";

import { X } from 'lucide-react';
import IconButton from './IconButton';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="modal-fluid show w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">{title}</h4>
          <IconButton icon={<X size={20} />} onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
