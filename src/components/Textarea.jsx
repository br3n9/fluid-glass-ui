"use client";

export default function Textarea({ label, name, value, onChange, placeholder, maxLength, className, ...props }) {
  return (
    <div>
      {label && <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-fluid min-h-[120px] resize-y ${className || ''}`}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && (
        <p className="text-sm text-gray-500 mt-1">
          {value.length}/{maxLength} caractères
        </p>
      )}
    </div>
  );
}
