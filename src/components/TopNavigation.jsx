"use client";

import { useState } from 'react';
import {
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Mail,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Search,
  Bell,
  User,
} from 'lucide-react';
import Input from './Input';
import IconButton from './IconButton';
import Avatar from './Avatar';
import Dropdown from './Dropdown';
import Button from './Button';

export default function TopNavigation() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'analytics', label: 'Analytiques', icon: BarChart3 },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'calendar', label: 'Calendrier', icon: Calendar },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const userDropdownItems = [
    {
      label: 'Profil',
      icon: <User size={16} className="mr-2" />,
      onClick: () => console.log('Profile clicked'),
    },
    {
      label: 'Paramètres',
      icon: <Settings size={16} className="mr-2" />,
      onClick: () => console.log('Settings clicked'),
    },
    { isSeparator: true },
    {
      label: 'Déconnexion',
      onClick: () => console.log('Logout clicked'),
      isDanger: true,
    },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Navigation Principale</h3>

      <div className="nav-fluid">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-bold text-lg">Logo</div>

            <nav className="hidden md:flex space-x-1">
              {navItems.slice(0, 4).map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'subtle' : 'ghost'}
                  onClick={() => setActiveTab(item.id)}
                  startIcon={<item.icon size={16} />}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Input
                placeholder="Rechercher..."
                startIcon={<Search size={16} className="text-gray-400" />}
                className="w-64"
              />
            </div>

            <div className="relative">
              <IconButton
                icon={<Bell size={20} />}
                aria-label="Notifications"
              />
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </div>

            <Dropdown
              trigger={
                <button className="flex items-center gap-2 p-1 hover:bg-glass-light rounded-full">
                  <Avatar
                    src="/placeholder-user.jpg"
                    alt="User Avatar"
                    fallback="U"
                    size="sm"
                  />
                  <ChevronDown size={16} className="text-gray-500" />
                </button>
              }
              items={userDropdownItems}
            />

            <div className="md:hidden">
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                icon={mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                aria-label="Toggle mobile menu"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'subtle' : 'ghost'}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  startIcon={<item.icon size={16} />}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
}
