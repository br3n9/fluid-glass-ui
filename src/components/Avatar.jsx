"use client";

import React from 'react';
// Removed next/image import as it's specific to Next.js
import { User } from "lucide-react";

const sizeConfig = {
  sm: {
    wrapper: "w-8 h-8",
    iconSize: 16,
  },
  md: {
    wrapper: "w-12 h-12",
    iconSize: 20,
  },
  lg: {
    wrapper: "w-16 h-16",
    iconSize: 24,
  },
  xl: {
    wrapper: "w-20 h-20",
    iconSize: 32,
  },
};

export default function Avatar({
  size = "md",
  src,
  icon = <User />,
  className = "bg-accent-500",
}) {
  const config = sizeConfig[size];

  const finalClassName = [
    "rounded-full flex items-center justify-center",
    config.wrapper,
    className,
  ]
    .join(" ")
    .trim();

  return (
    <div className={finalClassName}>
      {src ? (
        <img 
          src={src} 
          alt="avatar" 
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            // Fallback si l'image ne se charge pas
            e.target.style.display = 'none';
          }}
        />
      ) : (
        React.cloneElement(icon, {
          size: config.iconSize,
          className: "text-white",
        })
      )}
    </div>
  );
}
