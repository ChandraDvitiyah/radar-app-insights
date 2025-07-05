
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, History, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const navItems = [
  { icon: BarChart3, label: 'Overview', path: '/dashboard' },
  { icon: History, label: 'Inventory', path: '/inventory' },
  { icon: MessageSquare, label: 'Marketing', path: '/marketing' },
  { icon: TrendingUp, label: 'Customer Insights', path: '/insights' },
  { icon: Settings, label: 'Analytics Reports', path: '/analytics' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#111111]/50 backdrop-blur-sm h-screen fixed left-0 top-0 p-6 z-50 border-r border-white/[0.08]">
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
                    ? 'bg-neon text-black font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.08]'
                }`
              }
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      
      {/* Bottom Profile Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">John Doe</div>
            <div className="text-xs text-gray-400 truncate">john@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
