"use client";

import { useState } from "react";
import { Upload, File, X, Eye, Download, AlertCircle } from "lucide-react";
import Button from "./Button.jsx";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader.jsx";
import ModalBody from "./ModalBody.jsx";

/**
 * Composant DocumentUploader - Upload, prévisualisation et gestion de documents
 * Supporte les fichiers multiples avec preview et suppression
 */
export default function DocumentUploader({
  label = "Documents",
  acceptedTypes = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxFileSize = 10 * 1024 * 1024, // 10MB par défaut
  multiple = true,
  files = [],
  onFilesChange,
  onFileRemove,
  onFilePreview,
  disabled = false,
  error = null,
  helperText = null,
  required = false,
}) {
  const [dragActive, setDragActive] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Gestion du drag & drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
    e.target.value = ""; // Reset input
  };

  const handleFiles = (newFiles) => {
    const validFiles = [];
    const errors = [];

    newFiles.forEach((file) => {
      // Vérification de la taille
      if (file.size > maxFileSize) {
        errors.push(`${file.name}: Fichier trop volumineux (max ${formatFileSize(maxFileSize)})`);
        return;
      }

      // Vérification du type
      const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`;
      if (acceptedTypes && !acceptedTypes.includes(fileExtension)) {
        errors.push(`${file.name}: Type de fichier non supporté`);
        return;
      }

      validFiles.push(file);
    });

    if (errors.length > 0) {
      console.warn("Erreurs de validation:", errors);
    }

    if (validFiles.length > 0 && onFilesChange) {
      if (multiple) {
        onFilesChange([...files, ...validFiles]);
      } else {
        onFilesChange([validFiles[0]]);
      }
    }
  };

  const handleRemoveFile = (index) => {
    if (onFileRemove) {
      onFileRemove(index);
    } else if (onFilesChange) {
      const updatedFiles = files.filter((_, i) => i !== index);
      onFilesChange(updatedFiles);
    }
  };

  const handlePreview = (file, index) => {
    setPreviewFile({ file, index });
    setIsPreviewOpen(true);
    
    if (onFilePreview) {
      onFilePreview(file, index);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension)) {
      return '🖼️';
    } else if (['pdf'].includes(extension)) {
      return '📄';
    } else if (['doc', 'docx'].includes(extension)) {
      return '📝';
    }
    return '📎';
  };

  const canPreview = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf'].includes(extension);
  };

  return (
    <div className="space-y-4">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Zone de drop */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200
          ${dragActive 
            ? "border-primary-500 bg-primary-50" 
            : "border-gray-300 hover:border-primary-400"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${error ? "border-red-300 bg-red-50" : ""}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple={multiple}
          accept={acceptedTypes}
          onChange={handleFileInput}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <Upload 
          size={48} 
          className={`mx-auto mb-4 ${dragActive ? "text-primary-500" : "text-gray-400"}`} 
        />
        
        <p className="text-gray-600 mb-2">
          {dragActive 
            ? "Déposez vos fichiers ici..." 
            : "Glissez-déposez vos fichiers ici ou cliquez pour parcourir"
          }
        </p>
        
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled}
          onClick={(e) => e.stopPropagation()}
        >
          Parcourir les fichiers
        </Button>

        {acceptedTypes && (
          <p className="text-xs text-gray-500 mt-2">
            Types acceptés: {acceptedTypes}
          </p>
        )}
        
        {maxFileSize && (
          <p className="text-xs text-gray-500">
            Taille max: {formatFileSize(maxFileSize)}
          </p>
        )}
      </div>

      {/* Message d'aide */}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="flex items-center text-sm text-red-600">
          <AlertCircle size={16} className="mr-1" />
          {error}
        </div>
      )}

      {/* Liste des fichiers */}
      {files && files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">
            Fichiers sélectionnés ({files.length})
          </h4>
          
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <span className="text-lg">{getFileIcon(file.name)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {canPreview(file.name) && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      startIcon={<Eye size={16} />}
                      onClick={() => handlePreview(file, index)}
                    >
                      Aperçu
                    </Button>
                  )}
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    startIcon={<X size={16} />}
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal de prévisualisation */}
      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title="Aperçu du document"
      >
        <ModalHeader>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {previewFile?.file?.name}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              startIcon={<Download size={16} />}
              onClick={() => {
                const url = URL.createObjectURL(previewFile.file);
                const a = document.createElement('a');
                a.href = url;
                a.download = previewFile.file.name;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              Télécharger
            </Button>
          </div>
        </ModalHeader>
        
        <ModalBody>
          {previewFile && (
            <div className="max-h-96 overflow-auto">
              {previewFile.file.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(previewFile.file)}
                  alt={previewFile.file.name}
                  className="max-w-full h-auto rounded-lg"
                />
              ) : previewFile.file.type === 'application/pdf' ? (
                <embed
                  src={URL.createObjectURL(previewFile.file)}
                  type="application/pdf"
                  width="100%"
                  height="400px"
                  className="rounded-lg"
                />
              ) : (
                <div className="text-center py-8">
                  <File size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">
                    Aperçu non disponible pour ce type de fichier
                  </p>
                </div>
              )}
            </div>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}
