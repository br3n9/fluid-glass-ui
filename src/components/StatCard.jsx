"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  variant = "default",
}) {
  const getVariantStyles = (v) => {
    switch (v) {
      case "warning":
        return "bg-orange-100 text-orange-600";
      case "error":
        return "bg-red-100 text-red-600";
      case "success":
        return "bg-green-100 text-green-600";
      case "info":
        return "bg-sky-100 text-sky-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  const iconStyles = getVariantStyles(variant);

  return (
    <div className="glass-surface p-5 rounded-xl transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-medium text-gray-500">{title}</h4>
          <div className="text-2xl font-bold text-gray-800 tracking-tight">
            {value}
          </div>
        </div>
        {Icon && (
          <div
            className={`p-3 rounded-xl ${iconStyles} flex items-center justify-center shadow-sm`}
          >
            <Icon size={20} strokeWidth={2} />
          </div>
        )}
      </div>

      {(change || trend) && (
        <div className="flex items-center gap-2 mt-3">
          {trend === "up" && (
            <TrendingUp size={16} className="text-green-500" />
          )}
          {trend === "down" && (
            <TrendingDown size={16} className="text-red-500" />
          )}
          {change && (
            <span
              className={`text-sm font-medium ${
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                    ? "text-red-600"
                    : "text-gray-600"
              }`}
            >
              {change}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
