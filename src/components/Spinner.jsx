"use client";

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const dotSizeClasses = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3",
};

export default function Spinner({ type = "spin", size = "md" }) {
  if (type === "dots") {
    const dotClass = dotSizeClasses[size] || dotSizeClasses.md;
    return (
      <div className="flex space-x-1">
        <div className={`${dotClass} bg-accent-500 rounded-full animate-bounce`} />
        <div
          className={`${dotClass} bg-accent-500 rounded-full animate-bounce`}
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className={`${dotClass} bg-accent-500 rounded-full animate-bounce`}
          style={{ animationDelay: "0.2s" }}
        />
      </div>
    );
  }

  const spinnerClass = sizeClasses[size] || sizeClasses.md;

  if (type === "pulse") {
    return <div className={`animate-pulse ${spinnerClass} bg-accent-500 rounded-full`} />;
  }

  // Default to 'spin'
  return (
    <div
      className={`animate-spin rounded-full ${spinnerClass} border-4 border-accent-500 border-t-transparent`}
    />
  );
}
