"use client";

export default function IconButton({
  icon,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg glass-surface hover:bg-accent-500 hover:text-white transition-colors ${className}`.trim()}
      {...props}
    >
      {icon}
    </button>
  );
}
