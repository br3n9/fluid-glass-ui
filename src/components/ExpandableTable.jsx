"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ExpandableTable({ data, renderItem, renderExpandedContent }) {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRowExpansion = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Aucune donnée à afficher.</p>;
  }

  return (
    <div className="space-y-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="glass-card-border overflow-hidden rounded-lg"
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-base-200/50"
            onClick={() => toggleRowExpansion(item.id)}
          >
            <div className="flex-grow">
              {renderItem(item)}
            </div>
            <div className="ml-4">
              {expandedRows[item.id] ? (
                <ChevronUp size={20} className="text-gray-500" />
              ) : (
                <ChevronDown size={20} className="text-gray-500" />
              )}
            </div>
          </div>
          {expandedRows[item.id] && (
            <div className="px-4 pt-2 pb-4 bg-base-200/30 border-t border-base-300/50">
              {renderExpandedContent(item)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
