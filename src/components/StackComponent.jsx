"use client";

import React from 'react';

const StackComponent = ({
  direction = 'vertical',
  spacing = 4,
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const baseClasses = 'flex';
  const directionClasses = direction === 'vertical' ? 'flex-col' : 'flex-row';
  const spacingClasses = `gap-${spacing}`;

  const combinedClasses = [
    baseClasses,
    directionClasses,
    spacingClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};

export default StackComponent;
