"use client";

import { Info, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const alertConfig = {
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-700",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    textColor: "text-green-700",
  },
  warning: {
    icon: AlertCircle,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    textColor: "text-yellow-700",
  },
  danger: {
    icon: XCircle,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-700",
  },
};

export default function Alert({ variant = "info", title, children }) {
  const config = alertConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className={`flex items-center gap-3 p-4 border rounded-lg ${config.bgColor} ${config.borderColor}`}
    >
      <Icon size={20} className={config.iconColor} />
      <div>
        {title && <p className={`font-medium ${config.titleColor}`}>{title}</p>}
        <p className={`text-sm ${config.textColor}`}>{children}</p>
      </div>
    </div>
  );
}
