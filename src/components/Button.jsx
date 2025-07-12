"use client";

import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      isLoading = false,
      startContent,
      endContent,
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
        {isLoading && <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />}
        {!isLoading && startContent}
        {children}
        {!isLoading && endContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
