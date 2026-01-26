"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

function AccordionItem({ title, trigger, children, isOpen, onToggle }) {
  return (
    <div className="glass-surface rounded-lg overflow-hidden border border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
        aria-expanded={isOpen}
      >
        <div className="flex-1 min-w-0 pr-4">{trigger || title}</div>
        <ChevronDown
          className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-4 border-t border-white/10">{children}</div>
      </div>
    </div>
  );
}

export default function Accordion({
  title,
  children,
  items,
  type = "single",
  className = "",
}) {
  // Mode liste (items)
  if (items && Array.isArray(items)) {
    return (
      <div className={className}>
        {items.map((item, index) => (
          <div key={item.id || index} className="mb-2 last:mb-0">
            <AccordionItemWrapper title={item.title} trigger={item.trigger}>
              {item.content}
            </AccordionItemWrapper>
          </div>
        ))}
      </div>
    );
  }

  // Mode simple (backward compatibility)
  return (
    <div className={className}>
      <AccordionItemWrapper title={title}>{children}</AccordionItemWrapper>
    </div>
  );
}

function AccordionItemWrapper({ title, trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AccordionItem
      title={title}
      trigger={trigger}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      {children}
    </AccordionItem>
  );
}
