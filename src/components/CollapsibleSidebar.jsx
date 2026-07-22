"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import IconButton from "./IconButton";

const CollapsibleSidebar = ({ logo, title, header, navContent, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-full">
      <div
        className={`glass-surface transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header avec bouton toggle en haut à droite */}
          <div className="relative">
            {/* Bouton toggle en position absolue en haut à droite */}
            <div className="absolute top-3 right-3 z-10">
              <IconButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <Menu size={18} /> : <X size={18} />}
                aria-label="Toggle sidebar"
              />
            </div>
            {header}
            {/* Logo et titre centrés verticalement */}

            {logo ||
              (title && (
                <div
                  className={`flex flex-col items-center pt-12 pb-3 px-3 ${
                    isCollapsed ? "pb-5" : "pb-6"
                  }`}
                >
                  {logo && <div className="flex-shrink-0 mb-3">{logo}</div>}
                  {!isCollapsed && title && (
                    <div className="font-semibold text-lg text-center leading-tight px-2">
                      {title}
                    </div>
                  )}
                </div>
              ))}

            {/* Séparateur subtil */}
            <div className="mx-3 mb-3 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
          </div>

          {/* Contenu de navigation avec défilement */}
          <div className="flex-grow overflow-y-auto overflow-x-hidden px-3 pb-3">
            {typeof navContent === "function"
              ? navContent(isCollapsed)
              : navContent}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default CollapsibleSidebar;
