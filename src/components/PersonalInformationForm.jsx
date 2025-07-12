"use client";

import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import Input from './Input';

export default function PersonalInformationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Informations Personnelles</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Prénom *</label>
          <Input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Votre prénom"
            error={!!errors.firstName}
            helperText={
              errors.firstName && (
                <span className="flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.firstName}
                </span>
              )
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Nom *</label>
          <Input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Votre nom"
            error={!!errors.lastName}
            helperText={
              errors.lastName && (
                <span className="flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.lastName}
                </span>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
