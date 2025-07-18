import React from 'react';

const Label = ({ 
  children, 
  variant = 'standard', 
  htmlFor, 
  className = '' 
}) => {
  // Determine styling based on variant
  const variantStyles = {
    standard: 'text-foreground',
    required: 'text-red-600',
    optional: 'text-gray-500'
  };
  
  // Add asterisk for required fields
  const labelContent = variant === 'required' 
    ? <>{children} <span className="text-red-600">*</span></> 
    : children;
  
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-medium mb-1 ${variantStyles[variant]} ${className}`}
    >
      {labelContent}
    </label>
  );
};

export default Label;
