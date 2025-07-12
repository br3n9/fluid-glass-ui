"use client";

import React from 'react';
import Image from 'next/image';
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
        <Image src={src} alt="avatar" layout="fill" className="rounded-full object-cover" />
      ) : (
        React.cloneElement(icon, {
          size: config.iconSize,
          className: "text-white",
        })
      )}
    </div>
  );
}
