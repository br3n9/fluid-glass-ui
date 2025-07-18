'use client';

import React from 'react';
import { usePress } from '@react-aria/interactions';
import { twMerge } from 'tailwind-merge';
import { CardProvider } from './CardContext';


const Card = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    isPressable = true,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    ...otherProps
  } = props;

  const { pressProps, isPressed } = usePress({
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    isDisabled: !isPressable,
    ref,
  });

  const contextValue = {}; // Placeholder for future context values

  const cardClasses = twMerge(
    'glass-card',
    isPressable && 'cursor-pointer hover:shadow-lg hover:transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200',
    isPressed && 'transform scale-[0.98] shadow-lg',
    className
  );


  return (
    <CardProvider value={contextValue}>
      <div ref={ref} className={cardClasses} {...(isPressable ? pressProps : {})} {...otherProps}>
        {children}
      </div>
    </CardProvider>
  );
});

Card.displayName = 'Card';

export default Card;
