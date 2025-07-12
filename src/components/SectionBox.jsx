"use client";

import React from 'react';

const SectionBox = ({ title, children, variant = 'default', className = '' }) => {
  const baseClasses = 'glass-surface rounded-lg';

  const variantClasses = {
    default: 'p-6',
    highlighted: 'p-8 border-2 border-accent-500',
    gradient: 'p-4 bg-gradient-to-r from-blue-50 to-purple-50',
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClasses}>
      {title && <h4 className="font-medium mb-2">{title}</h4>}
      <p className="text-sm text-gray-600">
        {children}
      </p>
    </div>
  );
};

export default SectionBox;
