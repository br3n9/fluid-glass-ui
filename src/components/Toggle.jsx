"use client";

import { useState } from "react";

export default function Toggle({ label, checked: defaultChecked, onChange }) {
  const [checked, setChecked] = useState(defaultChecked || false);
  const changeHandler = () => {
    setChecked(!checked);
    onChange(!checked);
  };
  return (
    <div className="flex items-center justify-between">
      {label && <span className="text-sm font-medium">{label}</span>}
      <button
        onClick={changeHandler}
        className={`toggle-fluid ${checked ? "active" : ""}`}
      >
        <div className="toggle-handle" />
      </button>
    </div>
  );
}
