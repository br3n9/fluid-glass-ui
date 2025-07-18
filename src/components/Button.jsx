"use client";

import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    const baseClasses = "btn-fluid";

    const variantClasses = {
      primary: "", // Default style
      outline: "btn-outline",
      ghost: "btn-ghost",
    };

    const sizeClasses = {
      small: "text-sm py-2 px-3",
      medium: "", // Default size
      large: "text-lg py-4 px-6",
    };

    const finalClassName = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      props.className || "",
    ]
      .join(" ")
      .trim();

    return (
      <button ref={ref} className={finalClassName} disabled={isLoading || props.disabled} {...props}>
        {isLoading && <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />}
        {!isLoading && <span className="btn-icon">{startIcon}</span>}
        {children}
        {!isLoading && <span className="btn-icon">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
