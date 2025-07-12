"use client";

import { useState } from 'react';
import FileUploader from './FileUploader';

export default function FileUploaders() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    // Logique de traitement du fichier ici
    console.log('Fichier sélectionné:', file);
  };

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">File Uploader</h3>
      <FileUploader
        onFileSelect={handleFileSelect}
        acceptedTypes="PNG, JPG, PDF jusqu'à 10MB"
      />
      {selectedFile && (
        <div className="mt-4 text-sm text-gray-600">
          <p>Fichier sélectionné: {selectedFile.name}</p>
        </div>
      )}
    </section>
  );
}
