"use client";

import { Upload } from "lucide-react";

export default function FileUploader({
  onFileSelect,
  label,
  acceptedTypes,
  accept,
  helperText,
  multiple = false,
}) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!onFileSelect || files.length === 0) return;

    if (multiple) {
      onFileSelect(files);
      return;
    }

    onFileSelect(files[0]);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors">
      <Upload size={48} className="mx-auto text-gray-400 mb-4" />
      <p className="text-gray-600 mb-2">
        {label || "Glissez-déposez vos fichiers ici ou"}
      </p>
      <label className="btn-fluid cursor-pointer">
        Parcourir les fichiers
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept}
        />
      </label>
      {helperText && <p className="text-xs text-gray-500 mt-2">{helperText}</p>}
      {!helperText && acceptedTypes && (
        <p className="text-xs text-gray-500 mt-2">{acceptedTypes}</p>
      )}
    </div>
  );
}
