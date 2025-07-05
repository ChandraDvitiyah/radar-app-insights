
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, History, MessageSquare, Settings } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Overview', path: '/dashboard' },
  { icon: History, label: 'Inventory', path: '/inventory' },
  { icon: MessageSquare, label: 'Marketing', path: '/marketing' },
  { icon: Settings, label: 'Analytics Reports', path: '/analytics' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-dark-card/80 backdrop-blur-sm h-screen fixed left-0 top-0 p-6 z-50 border-r border-white/5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">ReviewRadar</h1>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-neon text-black font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
