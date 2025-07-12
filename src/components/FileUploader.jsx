"use client";

import { Upload } from 'lucide-react';

export default function FileUploader({ onFileSelect, label, acceptedTypes }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors">
      <Upload size={48} className="mx-auto text-gray-400 mb-4" />
      <p className="text-gray-600 mb-2">
        {label || 'Glissez-déposez vos fichiers ici ou'}
      </p>
      <label className="btn-fluid cursor-pointer">
        Parcourir les fichiers
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      {acceptedTypes && (
        <p className="text-xs text-gray-500 mt-2">{acceptedTypes}</p>
      )}
    </div>
  );
}
