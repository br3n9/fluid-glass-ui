"use client";

import React from 'react';

const Chip = ({ label, selected = false, onClick, className = '' }) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm border transition-colors cursor-pointer';
  
  const selectedClasses = 'bg-accent-500 border-accent-500 text-white';
  const defaultClasses = 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200';

  const chipClasses = `${baseClasses} ${selected ? selectedClasses : defaultClasses} ${className}`;

  return (
    <button
      type="button"
      className={chipClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Chip;
