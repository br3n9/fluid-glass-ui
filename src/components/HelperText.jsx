import React from 'react';
import { Info, AlertCircle, Check } from 'lucide-react';

const HelperText = ({ 
  children, 
  variant = 'standard', 
  className = '' 
}) => {
  // Define variants with their styles and icons
  const variants = {
    standard: {
      icon: <Info size={12} />,
      color: 'text-gray-500'
    },
    error: {
      icon: <AlertCircle size={12} />,
      color: 'text-red-500'
    },
    success: {
      icon: <Check size={12} />,
      color: 'text-green-500'
    }
  };
  
  const selectedVariant = variants[variant] || variants.standard;
  
  return (
    <p className={`text-sm flex items-center gap-1 mt-1 ${selectedVariant.color} ${className}`}>
      {selectedVariant.icon}
      {children}
    </p>
  );
};

export default HelperText;
