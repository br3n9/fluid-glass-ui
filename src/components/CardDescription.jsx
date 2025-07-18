'use client';

import React from 'react';

const CardDescription = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={`card-description ${className || ''}`} {...props}>
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export default CardDescription;
