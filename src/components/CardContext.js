'use client';

import { createContext, useContext } from 'react';

const CardContext = createContext(undefined);

export function useCardContext() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a Card');
  }
  return context;
}

export const CardProvider = CardContext.Provider;
