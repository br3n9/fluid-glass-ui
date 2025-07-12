"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

export default function ExpandableTableComponent({ data }) {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRowExpansion = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => toggleRowExpansion(item.id)}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Actif'
                    ? 'bg-green-100 text-green-700'
                    : item.status === 'Inactif'
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {item.status}
              </span>
              {expandedRows[item.id] ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>
          </div>
          {expandedRows[item.id] && (
            <div className="px-4 pb-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rôle</p>
                  <p className="text-sm">{item.role}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Date d&apos;inscription
                  </p>
                  <p className="text-sm">{item.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Dernière connexion
                  </p>
                  <p className="text-sm">il y a 2 heures</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Permissions
                  </p>
                  <p className="text-sm">Lecture, Écriture</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
