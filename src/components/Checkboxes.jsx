"use client";

import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Checkboxes() {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Checkboxes</h3>
      <div className="space-y-3">
        {Object.entries(checkboxes).map(([key, value]) => (
          <Checkbox
            key={key}
            name={key}
            label={`Option ${key.slice(-1)} - ${value ? "Activée" : "Désactivée"}`}
            checked={value}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
    </section>
  );
}
