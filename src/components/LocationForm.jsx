"use client";

import { useState } from 'react';
import Input from './Input';
import Dropdown from './Dropdown';

export default function LocationForm() {
  const [formData, setFormData] = useState({
    country: '',
    city: '',
  });

  const countries = [
    { value: 'fr', label: 'France' },
    { value: 'uk', label: 'Royaume-Uni' },
    { value: 'us', label: 'États-Unis' },
    { value: 'ca', label: 'Canada' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Localisation</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Pays</label>
          <Dropdown
            options={countries}
            value={formData.country}
            onValueChange={(value) => handleInputChange('country', value)}
            placeholder="Sélectionner un pays"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Ville</label>
          <Input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            placeholder="Votre ville"
          />
        </div>
      </div>
    </div>
  );
}
