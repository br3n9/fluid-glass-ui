"use client";

import { useState } from "react";
import Input from "./Input";

export default function Inputs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Inputs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nom complet"
          name="fullName"
          placeholder="Entrez votre nom"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Mot de passe"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          label="Téléphone"
          type="tel"
          name="phone"
          placeholder="+33 6 12 34 56 78"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
    </section>
  );
}
