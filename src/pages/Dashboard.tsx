import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import StatsCard from '@/components/dashboard/StatsCard';
import ComplaintsChart from '@/components/dashboard/ComplaintsChart';
import FeatureRequestsCard from '@/components/dashboard/FeatureRequestsCard';
import GrowthChart from '@/components/dashboard/GrowthChart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AppIconSuggestions from '@/components/common/AppIconSuggestions';

const mockReportData = {
  '1': {
    appName: 'Netflix',
    painScore: '6.8/10',
    reviewCount: '456',
    opportunityScore: '7.9/10',
    mrrImpact: '$15.2K'
  },
  '2': {
    appName: 'Spotify',
    painScore: '4.2/10',
    reviewCount: '289',
    opportunityScore: '8.5/10',
    mrrImpact: '$8.4K'
  },
  '3': {
    appName: 'Instagram',
    painScore: '7.5/10',
    reviewCount: '342',
    opportunityScore: '8.4/10',
    mrrImpact: '$12.4K'
  }
};

const Dashboard = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [appUrl, setAppUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const reportData = reportId ? mockReportData[reportId as keyof typeof mockReportData] : null;

  useEffect(() => {
    if (reportId) {
      console.log(`Loading report data for ID: ${reportId}`);
    }
  }, [reportId]);

  const handleAnalyze = async () => {
    if (appUrl.trim()) {
      setIsAnalyzing(true);
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        // For demo, navigate to a mock report
        navigate('/dashboard/1');
      } catch (error) {
        console.error('Error analyzing app:', error);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  const handleAppSelect = (url: string) => {
    setAppUrl(url);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Sidebar />
      
      <DashboardNavbar 
        title={reportId ? `${reportData?.appName} Analysis` : 'ReviewRadar Dashboard'} 
      />
      
      <div className="ml-64 p-6">
        {reportData ? (
          <>
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Pain Score"
                value={reportData.painScore}
                icon="💀"
                trend="High Risk"
                color="red"
                tooltip="Customer dissatisfaction level based on negative reviews"
              />
              <StatsCard
                title="1-3 Star Reviews"
                value={reportData.reviewCount}
                icon="😡"
                trend="+12 today"
                color="orange"
                tooltip="Total count of negative reviews this month"
              />
              <StatsCard
                title="Opportunity Score"
                value={reportData.opportunityScore}
                icon="🔥"
                trend="Excellent"
                color="neon"
                tooltip="Potential for improvement based on feedback patterns"
              />
              <StatsCard
                title="Current MRR"
                value={reportData.mrrImpact}
                icon="💰"
                trend="+$2.1K potential"
                color="green"
                tooltip="Current monthly recurring revenue (MRR) for app"
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
          </>
        ) : (
          // Empty state with input field
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="max-w-2xl w-full">
              <AppIconSuggestions onSelect={handleAppSelect} />
              <div className="glass-card p-8 neon-glow-strong">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="url"
                    placeholder="https://apps.apple.com/app/..."
                    value={appUrl}
                    onChange={(e) => setAppUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 h-14 text-lg bg-dark-lighter border-neon/30 focus:border-neon focus:ring-neon focus:ring-2 text-white placeholder-gray-500"
                    disabled={isAnalyzing}
                  />
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !appUrl.trim()}
                    className="h-14 px-8 text-lg font-semibold bg-neon hover:bg-neon-bright text-black transition-all duration-300 hover:scale-105 neon-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isAnalyzing ? '🔄 Analyzing...' : '🔮 Analyze App'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
