"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  name,
}) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={(e) => {
          if (!isControlled) {
            setInternalChecked(e.target.checked);
          }
          if (onChange) {
            onChange(e);
          }
        }}
        className="sr-only"
      />

      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          isChecked ? "bg-accent-500 border-accent-500" : "border-gray-300"
        }`}
      >
        {isChecked && <Check size={12} className="text-white" />}
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
