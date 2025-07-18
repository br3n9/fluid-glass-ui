"use client";

import NextLink from 'next/link';

export default function Link({ href, variant = 'standard', icon, children, className = '' }) {
  const baseClasses = 'hover:underline';
  const variantClasses = {
    standard: 'text-accent-500 hover:text-accent-600',
    discreet: 'text-gray-600 hover:text-gray-800',
    danger: 'text-red-500 hover:text-red-600',
    icon: 'flex items-center gap-2 p-2 rounded-lg hover:bg-glass-light transition-colors',
  };

  const combinedClasses = [
    variant === 'icon' ? '' : baseClasses,
    variantClasses[variant] || variantClasses.standard,
    className,
  ].join(' ').trim();

  return (
    <NextLink href={href} className={combinedClasses}>
      {icon}
      {children}
    </NextLink>
  );
}
