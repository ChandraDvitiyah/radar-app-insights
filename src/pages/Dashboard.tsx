
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import ComplaintsChart from '@/components/dashboard/ComplaintsChart';
import FeatureRequestsCard from '@/components/dashboard/FeatureRequestsCard';
import GrowthChart from '@/components/dashboard/GrowthChart';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Sidebar />
      
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">App Analysis Dashboard</h1>
            <p className="text-gray-400">Analyzing: Spotify - Music and Podcasts</p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
              Export Report
            </Button>
            <Button className="bg-neon hover:bg-neon-bright text-black">
              Analyze New App
            </Button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Pain Score"
            value="7.2/10"
            icon="💀"
            trend="+2.1 this month"
            color="red"
          />
          <StatsCard
            title="1-3 Star Reviews"
            value="2,847"
            icon="😡"
            trend="+12% this week"
            color="yellow"
          />
          <StatsCard
            title="Opportunity Score"
            value="8.9/10"
            icon="🔥"
            trend="High potential"
            color="green"
          />
          <StatsCard
            title="Estimated MRR"
            value="$12.5k"
            icon="💰"
            trend="+$2.3k potential"
            color="blue"
          />
        </div>
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ComplaintsChart />
          <FeatureRequestsCard />
        </div>
        
        {/* Growth Chart */}
        <GrowthChart />
      </div>
    </div>
  );
};

export default Dashboard;
