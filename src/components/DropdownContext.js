"use client";

import { createContext, useContext } from "react";

const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  onClose: () => {},
});

export const DropdownProvider = DropdownContext.Provider;

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  return context;
};
