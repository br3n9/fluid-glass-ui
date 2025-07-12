"use client";

export default function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      {label && <span className="text-sm font-medium">{label}</span>}
      <button
        onClick={onChange}
        className={`toggle-fluid ${checked ? "active" : ""}`}
      >
        <div className="toggle-handle" />
      </button>
    </div>
  );
}
