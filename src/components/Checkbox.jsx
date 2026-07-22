"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";

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

  const inputRef = React.useRef(null);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newChecked = !isChecked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    if (onChange) {
      // Simulate a native-like event shape
      const syntheticEvent = {
        target: { name, checked: newChecked, type: "checkbox" },
        currentTarget: { name, checked: newChecked, type: "checkbox" },
        preventDefault: () => {},
        stopPropagation: () => {},
      };
      onChange(syntheticEvent);
    }
  };

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer"
      onClick={handleToggle}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          handleToggle(e);
        }
      }}
    >
      <input
        ref={inputRef}
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={() => {}}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          isChecked ? "bg-accent-500 border-accent-500" : "border-gray-300"
        }`}
      >
        {isChecked && <Check size={12} className="text-white" />}
      </div>
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}
