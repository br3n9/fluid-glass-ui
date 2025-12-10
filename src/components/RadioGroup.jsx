"use client";

export default function RadioGroup({ options, name, selectedValue, onChange }) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                selectedValue === option.value
                  ? "bg-accent-500 border-accent-500"
                  : "border-gray-300 bg-white"
              }`}
            >
              {selectedValue === option.value && (
                <div className="w-2.5 h-2.5 bg-white rounded-full transition-all duration-200" />
              )}
            </div>
          </div>
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
