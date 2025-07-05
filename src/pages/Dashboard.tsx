
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import ComplaintsChart from '@/components/dashboard/ComplaintsChart';
import FeatureRequestsCard from '@/components/dashboard/FeatureRequestsCard';
import GrowthChart from '@/components/dashboard/GrowthChart';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Sidebar />
      
      {/* Top Navigation */}
      <div className="ml-64 border-b border-white/5">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Weekly</span>
              <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">Last 1 hour</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/5">
              Export Report
            </Button>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="ml-64 p-6">
        {/* Secondary Navigation */}
        <div className="flex gap-6 mb-8 border-b border-white/5 pb-4">
          <button className="text-white font-medium border-b-2 border-neon pb-2">All</button>
          <button className="text-gray-400 hover:text-white transition-colors">Accounting</button>
          <button className="text-gray-400 hover:text-white transition-colors">Logistics</button>
          <button className="text-gray-400 hover:text-white transition-colors">Engagement</button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Campaign"
            value="24"
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
            title="1-3 Star Reviews"
            value="2,847"
            icon="😡"
            trend="+12%"
            color="yellow"
          />
        </div>
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ComplaintsChart />
          <FeatureRequestsCard />
        </div>
        
        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-dark-card border border-white/10 p-6 rounded-2xl">
            <div className="text-2xl font-bold text-neon mb-4">$5,230</div>
            <div className="h-16 bg-dark-bg/50 rounded-lg"></div>
          </div>
          <GrowthChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
