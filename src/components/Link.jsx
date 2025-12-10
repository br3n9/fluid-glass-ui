"use client";

import React from 'react';

/**
 * Link component that works both in Next.js and other React applications
 * @param {Object} props - Component props
 * @param {string} props.href - The URL to link to
 * @param {'standard'|'discreet'|'danger'|'icon'} [props.variant='standard'] - Visual style variant
 * @param {React.ReactNode} [props.icon] - Optional icon to display before the link text
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {React.ReactNode} props.children - Link content
 * @returns {JSX.Element}
 */
const Link = ({ 
  href, 
  variant = 'standard', 
  icon, 
  children, 
  className = '',
  ...props 
}) => {
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

  // Use Next.js Link if available, otherwise fall back to a regular anchor tag
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:') || href?.startsWith('tel:');
  
  // If Next.js Link is available, use it
  if (typeof window !== 'undefined' && window.next && window.next.Link) {
    const NextLink = window.next.Link;
    return (
      <NextLink href={href} className={combinedClasses} {...props}>
        {icon}
        {children}
      </NextLink>
    );
  }

  // Fallback to regular anchor tag
  return (
    <a 
      href={href} 
      className={combinedClasses}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
};

export default Link;
