'use client';

import React from 'react';

const CardHeader = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`card-header ${className || ''}`} {...props}>
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
