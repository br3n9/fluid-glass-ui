"use client";

import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Input from './Input';
import Button from './Button';

export default function AuthenticationForm() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Replace with actual toast implementation
      alert('Connexion réussie');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="votre@email.com"
          value={loginData.email}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
          startIcon={<Mail />}
          required
        />

        <Input
          label="Mot de passe"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          value={loginData.password}
          onChange={(e) =>
            setLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
          startIcon={<Lock />}
          endIcon={
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          required
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Se souvenir de moi</span>
          </label>
          <a href="#" className="text-sm text-accent-500 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>

        <Button type="submit" className="w-full" isLoading={loading}>
          {loading ? 'Connexion en cours...' : 'Se connecter'}
        </Button>
      </form>
    </div>
  );
}
