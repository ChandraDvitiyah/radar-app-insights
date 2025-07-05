import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

const historyItems = [
  {
    id: '1',
    appName: 'Netflix',
    date: '2024-03-15',
    painScore: '6.8/10',
    status: 'Completed',
    icon: '📱'
  },
  {
    id: '2',
    appName: 'Spotify',
    date: '2024-03-14',
    painScore: '4.2/10',
    status: 'Completed',
    icon: '🎵'
  },
  {
    id: '3',
    appName: 'Instagram',
    date: '2024-03-12',
    painScore: '7.5/10',
    status: 'Completed',
    icon: '📸'
  }
];

const History = () => {
  const navigate = useNavigate();

  const handleReportClick = (reportId: string) => {
    navigate(`/dashboard/${reportId}`);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Sidebar />
      
      <DashboardNavbar title="Analysis History" />
      
      <div className="ml-64 p-6">
        <div className="glass-card border border-white/10">
          {historyItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleReportClick(item.id)}
              className={`flex items-center justify-between p-6 hover:bg-white/5 transition-colors cursor-pointer group ${
                index !== historyItems.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-neon transition-colors">{item.appName}</h3>
                  <p className="text-white/60 text-sm">{item.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-white font-medium">Pain Score</p>
                  <p className="text-neon">{item.painScore}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm group-hover:bg-white/20 transition-colors">
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History; 