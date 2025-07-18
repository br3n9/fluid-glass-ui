"use client";

import { User, FileText, Edit, Trash2, Clock } from "lucide-react";

const getIcon = (type) => {
  switch (type) {
    case "user":
      return <User size={16} className="text-white" />;
    case "order":
      return <FileText size={16} className="text-white" />;
    case "update":
      return <Edit size={16} className="text-white" />;
    case "delete":
      return <Trash2 size={16} className="text-white" />;
    default:
      return null;
  }
};

const getColor = (type) => {
  switch (type) {
    case "user":
      return "bg-blue-500";
    case "order":
      return "bg-green-500";
    case "update":
      return "bg-yellow-500";
    case "delete":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function Timeline({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${getColor(item.type)}`}
          >
            {getIcon(item.type)}
          </div>
          <div className="flex-1">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-600">par {item.user}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={12} />
              il y a {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
