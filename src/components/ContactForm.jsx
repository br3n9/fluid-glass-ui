"use client";

"use client";

import { useState } from 'react';
import { AlertCircle, Info } from 'lucide-react';
import Input from './Input';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field) => {
    if (field === 'email' && formData.email && !formData.email.includes('@')) {
      setErrors((prev) => ({ ...prev, email: 'Email invalide' }));
    }
  };

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Contact</h4>
      <div className="space-y-4">
        <Input
          label="Email *"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          placeholder="votre@email.com"
          error={errors.email && <><AlertCircle size={12} /> {errors.email}</>}
        />
        <Input
          label="Téléphone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+33 6 12 34 56 78"
          helperText={<><Info size={12} /> Format international recommandé</>}
        />
      </div>
    </div>
  );
}
