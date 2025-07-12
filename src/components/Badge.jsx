"use client";

import React from 'react';

const badgeConfig = {
  accent: "bg-accent-500",
  green: "bg-green-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
};

export default function Badge({ variant = "accent", children, className = '' }) {
  const colorClass = badgeConfig[variant] || badgeConfig.accent;

  const finalClassName = [
    "px-3 py-1 text-xs font-medium text-white rounded-full",
    colorClass,
    className,
  ]
    .join(" ")
    .trim();

  return <span className={finalClassName}>{children}</span>;
}
