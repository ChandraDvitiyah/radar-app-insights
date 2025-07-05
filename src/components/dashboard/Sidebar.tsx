import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, History, User } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: History, label: 'History', path: '/history' },
  { icon: User, label: 'Profile', path: '/profile' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-black/20 backdrop-blur-xl h-screen fixed left-0 top-0 p-6 z-50 border-r border-white/10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">ReviewRadar</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
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
