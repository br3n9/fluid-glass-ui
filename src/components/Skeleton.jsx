"use client";

function Skeleton({ className, ...props }) {
  const baseClasses = "animate-pulse rounded-md bg-gray-300 dark:bg-gray-700";
  const combinedClasses = [baseClasses, className].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClasses}
      {...props}
    />
  );
}

export default Skeleton;
