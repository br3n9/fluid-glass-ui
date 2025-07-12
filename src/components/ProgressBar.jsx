"use client";

export default function ProgressBar({ value, label, showPercentage = true }) {
  const progress = Math.max(0, Math.min(100, value)); // Clamp value between 0 and 100

  return (
    <div>
      <div className="flex justify-between mb-2">
        {label && <span className="text-sm font-medium">{label}</span>}
        {showPercentage && <span className="text-sm text-gray-500">{progress}%</span>}
      </div>
      <div
        className="progress-fluid"
        style={{ "--progress-width": `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
}
