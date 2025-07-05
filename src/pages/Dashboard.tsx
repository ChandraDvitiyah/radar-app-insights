
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import ComplaintsChart from '@/components/dashboard/ComplaintsChart';
import FeatureRequestsCard from '@/components/dashboard/FeatureRequestsCard';
import GrowthChart from '@/components/dashboard/GrowthChart';
import { Button } from '@/components/ui/button';
import { Download, FileText, Filter, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Sidebar />
      
      {/* Top Navigation Bar */}
      <div className="ml-64 border-b border-white/10">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-semibold text-white">ReviewRadar Dashboard</h1>
          </div>
          
          {/* Filters and Profile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/80 text-sm rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <Calendar size={16} />
                Last 30 days
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/80 text-sm rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <Filter size={16} />
                All Stores
              </button>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="ml-64 p-6">
        {/* Export Options */}
        <div className="flex justify-end gap-3 mb-6">
          <Button variant="outline" size="sm" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
            <Download size={16} className="mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
            <FileText size={16} className="mr-2" />
            Generate Pitch Deck
          </Button>
        </div>
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Pain Score"
            value="7.2/10"
            icon="💀"
            trend="High Risk"
            color="red"
            tooltip="Customer dissatisfaction level based on negative reviews"
          />
          <StatsCard
            title="1-3 Star Reviews"
            value="342"
            icon="😡"
            trend="+12 today"
            color="orange"
            tooltip="Total count of negative reviews this month"
          />
          <StatsCard
            title="Opportunity Score"
            value="8.4/10"
            icon="🔥"
            trend="Excellent"
            color="neon"
            tooltip="Potential for improvement based on feedback patterns"
          />
          <StatsCard
            title="Estimated MRR Impact"
            value="$12.4K"
            icon="💰"
            trend="+$2.1K potential"
            color="green"
            tooltip="Monthly recurring revenue at risk from poor reviews"
          />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ComplaintsChart />
          <FeatureRequestsCard />
        </div>
        
        {/* Bottom Row - Growth Chart */}
        <div className="grid grid-cols-1 gap-6">
          <GrowthChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
