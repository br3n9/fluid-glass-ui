"use client";

import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import Dropdown from "./Dropdown";
import IconButton from "./IconButton";
import ThemeSwitcher from "./ThemeSwitcher";

export default function TopNavigation({
  logo,
  navItems = [],
  userDropdownItems = [],
  userAvatar,
  userName,
  notificationCount = 0,
  onSearch,
  onNavItemClick,
  showSearch = true,
  showNotifications = true,
  showThemeSwitcher = true,
  showThemeSwitcherLabel = false,
}) {
  const [activeTab, setActiveTab] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Définir l'onglet actif initial si des éléments de navigation sont fournis
  useState(() => {
    if (navItems.length > 0 && !activeTab) {
      setActiveTab(navItems[0].id);
    }
  }, [navItems]);

  const handleNavItemClick = (item) => {
    setActiveTab(item.id);
    if (onNavItemClick) {
      onNavItemClick(item);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="nav-fluid">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {logo && <div className="font-bold text-lg">{logo}</div>}

          {/* Navigation principale - visible uniquement sur desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-2 text-sm font-medium ${
                  activeTab === item.id
                    ? "text-accent-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => handleNavItemClick(item)}
              >
                {item.icon && <item.icon size={16} />}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Boutons d'action */}
          <div className="hidden md:flex items-center gap-2">
            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="py-1 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 w-64"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            )}

            {showThemeSwitcher && (
              <ThemeSwitcher showLabel={showThemeSwitcherLabel} />
            )}

            {showNotifications && (
              <IconButton
                icon={<Bell size={16} />}
                aria-label="Notifications"
                variant="ghost"
                badge={notificationCount > 0 ? notificationCount : undefined}
              />
            )}

            {/* Menu utilisateur */}
            {userDropdownItems.length > 0 && (
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2"
                    endIcon={<ChevronDown size={16} />}
                  >
                    {userAvatar ? (
                      typeof userAvatar === "string" ? (
                        <Avatar
                          src={userAvatar}
                          alt={userName || "User"}
                          size="sm"
                          fallback={(userName || "U").charAt(0)}
                        />
                      ) : (
                        userAvatar
                      )
                    ) : (
                      <Avatar
                        size="sm"
                        fallback={(userName || "U").charAt(0)}
                      />
                    )}
                    {userName && (
                      <span className="font-medium">{userName}</span>
                    )}
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  {userDropdownItems.map((item, index) =>
                    item.isSeparator ? (
                      <Dropdown.Separator key={`sep-${index}`} />
                    ) : (
                      <Dropdown.Item
                        key={`${item.label}-${index}`}
                        onClick={item.onClick}
                        className={
                          item.isDanger ? "text-red-600 hover:text-red-700" : ""
                        }
                      >
                        {item.icon}
                        {item.label}
                      </Dropdown.Item>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>

          {/* Bouton menu mobile */}
          <IconButton
            icon={mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Menu"
            variant="ghost"
          />
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-2 text-sm font-medium ${
                  activeTab === item.id ? "text-accent-600" : "text-gray-600"
                }`}
                onClick={() => {
                  handleNavItemClick(item);
                  setMobileMenuOpen(false);
                }}
              >
                {item.icon && <item.icon size={18} />}
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t">
              {showSearch && (
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  />
                </div>
              )}

              {showThemeSwitcher && (
                <div className="mb-4">
                  <ThemeSwitcher showLabel={true} />
                </div>
              )}

              {userName && (
                <div className="flex items-center gap-3 mb-2">
                  {userAvatar ? (
                    typeof userAvatar === "string" ? (
                      <Avatar
                        src={userAvatar}
                        alt={userName}
                        size="sm"
                        fallback={userName.charAt(0)}
                      />
                    ) : (
                      userAvatar
                    )
                  ) : (
                    <Avatar size="sm" fallback={userName.charAt(0)} />
                  )}
                  <span className="font-medium">{userName}</span>
                </div>
              )}

              {userDropdownItems
                .filter((item) => !item.isSeparator)
                .map((item, index) => (
                  <button
                    key={`${item.label}-${index}`}
                    onClick={item.onClick}
                    className={`flex items-center gap-2 text-sm font-medium py-2 w-full ${
                      item.isDanger ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
