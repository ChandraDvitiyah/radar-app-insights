
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import ComplaintsChart from '@/components/dashboard/ComplaintsChart';
import FeatureRequestsCard from '@/components/dashboard/FeatureRequestsCard';
import GrowthChart from '@/components/dashboard/GrowthChart';
import { Button } from '@/components/ui/button';
import { Search, Filter, Bell } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      
      {/* Top Navigation Bar */}
      <div className="ml-64 border-b border-white/5">
        <div className="flex items-center justify-between p-6">
          {/* Main Navigation Pills */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-neon text-black text-sm font-medium rounded-full">
              Overview
            </button>
            <button className="px-4 py-2 bg-white/10 text-gray-400 text-sm font-medium rounded-full hover:bg-white/15 transition-colors">
              Inventory
            </button>
            <button className="px-4 py-2 bg-white/10 text-gray-400 text-sm font-medium rounded-full hover:bg-white/15 transition-colors">
              Marketing
            </button>
            <button className="px-4 py-2 bg-white/10 text-gray-400 text-sm font-medium rounded-full hover:bg-white/15 transition-colors">
              Customer Insights
            </button>
            <button className="px-4 py-2 bg-white/10 text-gray-400 text-sm font-medium rounded-full hover:bg-white/15 transition-colors">
              Analytics Reports
            </button>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="ml-64 p-6">
        {/* Secondary Filter Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-3">
            <button className="px-4 py-2 text-white font-medium border-b-2 border-white pb-2">
              All
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Accounting
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Logistics
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Engagement
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full flex items-center gap-2">
                Weekly <span className="text-xs">✕</span>
              </span>
              <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full flex items-center gap-2">
                Last 1 hour <span className="text-xs">✕</span>
              </span>
            </div>
            <button className="p-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
              <Filter size={16} />
            </button>
          </div>
        </div>
        
        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Reviews"
            value="2,847"
            icon="📊"
            trend="30%"
            color="neon"
            large={true}
          />
          <StatsCard
            title="Pain Score"
            value="7.2/10"
            icon="💀"
            trend="+2.1"
            color="red"
          />
          <StatsCard
            title="Weekly Engagement"
            value="580"
            icon="📈"
            trend="person"
            color="blue"
          />
        </div>
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ComplaintsChart />
          <FeatureRequestsCard />
        </div>
        
        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold text-neon">$34.2K</div>
              <button className="p-2 text-white/40 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 12l4-4H4l4 4z"/>
                </svg>
              </button>
            </div>
            <div className="h-20 bg-[#0A0A0A] rounded-lg flex items-end p-4">
              <div className="flex items-end gap-1 w-full">
                {[40, 60, 30, 80, 45, 70, 55, 90, 35, 65].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-neon rounded-sm flex-1" 
                    style={{ height: `${height}%`, maxHeight: '40px' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <GrowthChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
