
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, History, MessageSquare, Settings } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: History, label: 'History', path: '/history' },
  { icon: MessageSquare, label: 'Feedback', path: '/feedback' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

const Sidebar = () => {
  return (
    <div className="w-64 glass-card h-screen fixed left-0 top-0 p-6 z-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-text">ReviewRadar</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-neon/20 text-neon border border-neon/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
