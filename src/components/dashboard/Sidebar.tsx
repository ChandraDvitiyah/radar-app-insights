
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, History, MessageSquare } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Dashboard', path: '/' },
  { icon: History, label: 'History', path: '/history' },
  { icon: MessageSquare, label: 'Feedback', path: '/feedback' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-black/20 backdrop-blur-xl h-screen fixed left-0 top-0 p-6 z-50 border-r border-white/10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">ReviewRadar</h1>
        <p className="text-sm text-white/60 mt-1">Customer Intelligence</p>
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
      
      {/* Bottom Profile Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-white/60">Store Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
