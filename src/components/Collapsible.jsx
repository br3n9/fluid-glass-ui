"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-surface rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-glass-light"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-medium">{title}</h4>
        <ChevronDown
          size={16}
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="px-4 pb-4 bg-gray-50">
          <div className="pt-4 border-t border-gray-200">{children}</div>
        </div>
      )}
    </div>
  );
}
