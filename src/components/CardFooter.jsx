'use client';

import React from 'react';

const CardFooter = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`card-footer ${className || ''}`} {...props}>
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
