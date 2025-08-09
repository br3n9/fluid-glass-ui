"use client";

import React from "react";

// Constantes extraites pour éviter la recréation à chaque render
const VARIANT_CLASSES = {
  primary: "", // Default style
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const SIZE_CLASSES = {
  small: "text-sm py-2 px-3",
  medium: "", // Default size
  large: "text-lg py-4 px-6",
};

const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      loading = false, // API unifiée sur 'loading' uniquement
      startIcon,
      endIcon,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = "btn-fluid";

    // Calcul optimisé du className final
    const finalClassName = [
      baseClasses,
      VARIANT_CLASSES[variant],
      SIZE_CLASSES[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    // État disabled unifié
    const isDisabled = loading || disabled;

    return (
      <button 
        ref={ref} 
        className={finalClassName} 
        disabled={isDisabled}
        aria-label={loading ? 'Chargement en cours...' : undefined}
        {...props}
      >
        {loading && (
          <span 
            className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {!loading && startIcon && (
          <span className="btn-icon" aria-hidden="true">{startIcon}</span>
        )}
        <span>{children}</span>
        {!loading && endIcon && (
          <span className="btn-icon" aria-hidden="true">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
