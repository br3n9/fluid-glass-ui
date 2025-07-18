'use client';

import React from 'react';

const CardTitle = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <h3 ref={ref} className={`card-title ${className || ''}`} {...props}>
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

export default CardTitle;
