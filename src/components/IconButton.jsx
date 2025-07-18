"use client";

export default function IconButton({ icon, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${className}`.trim()}
    >
      {icon}
    </button>
  );
}