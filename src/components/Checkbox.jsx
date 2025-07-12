"use client";

import { Check } from "lucide-react";

export default function Checkbox({ label, checked, onChange, name }) {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 glass-surface flex items-center justify-center transition-colors ${
            checked
              ? "bg-accent-500 border-accent-500"
              : "border-gray-300"
          }`}
        >
          {checked && <Check size={12} className="text-white" />}
        </div>
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
