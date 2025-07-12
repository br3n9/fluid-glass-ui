"use client";

export default function Container({ size = 'md', children }) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  const containerClasses = `
    ${sizeClasses[size] || sizeClasses.md}
    mx-auto 
    glass-surface 
    p-4 
    rounded 
    text-center
  `;

  return (
    <div className={containerClasses.trim()}>
      {children}
    </div>
  );
}
