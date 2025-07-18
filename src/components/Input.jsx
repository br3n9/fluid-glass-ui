"use client";

import React from 'react';
import HelperText from './HelperText';

const Input = React.forwardRef(
  ({ label, name, startIcon, endIcon, className, error, helperText, ...props }, ref) => {
    const inputClasses = [
      'input-fluid',
      startIcon ? 'pl-10' : '',
      endIcon ? 'pr-10' : '',
      error ? 'border-red-500' : '',
      className,
    ]
      .join(' ')
      .trim();

    return (
      <div>
        {label && (
          <label htmlFor={name} className="block text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {React.cloneElement(startIcon, { size: 16 })}
            </div>
          )}
          <input ref={ref} id={name} name={name} className={inputClasses} {...props} />
          {endIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {endIcon}
            </div>
          )}
        </div>
        {error && <HelperText variant="error">{error}</HelperText>}
        {helperText && !error && <HelperText variant="info">{helperText}</HelperText>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
