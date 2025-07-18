"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function Checkbox({ label, defaultChecked = false, onChange, name }) {

  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange(e);
        }}
        className="sr-only"
      />

      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          checked ? "bg-accent-500 border-accent-500" : "border-gray-300"
        }`}
      >
        {checked && <Check size={12} className="text-white" />}
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
