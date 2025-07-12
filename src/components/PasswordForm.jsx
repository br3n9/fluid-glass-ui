"use client";

import { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import Input from './Input';

export default function PasswordForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field) => {
    if (field === 'password') {
      if (formData.password && formData.password.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: 'Le mot de passe doit contenir au moins 6 caractères',
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: undefined }));
      }
    } else if (field === 'confirmPassword') {
      if (
        formData.confirmPassword &&
        formData.confirmPassword !== formData.password
      ) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: 'Les mots de passe ne correspondent pas',
        }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
      }
    }
  };

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Mot de Passe</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Mot de passe *
          </label>
          <Input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            placeholder="••••••••"
            error={!!errors.password}
            helperText={
              errors.password && (
                <span className="flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.password}
                </span>
              )
            }
            endIcon={
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Confirmer le mot de passe *
          </label>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange('confirmPassword', e.target.value)
            }
            onBlur={() => handleBlur('confirmPassword')}
            placeholder="••••••••"
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword && (
                <span className="flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.confirmPassword}
                </span>
              )
            }
            endIcon={
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}
