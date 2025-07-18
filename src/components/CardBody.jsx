'use client';

import React from 'react';

const CardBody = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`card-body ${className || ''}`} {...props}>
      {children}
    </div>
  );
});

CardBody.displayName = 'CardBody';

export default CardBody;
