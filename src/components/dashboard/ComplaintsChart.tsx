
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Crashes', value: 342 },
  { name: 'Slow Loading', value: 287 },
  { name: 'UI Issues', value: 195 },
  { name: 'Login Problems', value: 156 },
  { name: 'Missing Features', value: 134 }
];

const ComplaintsChart = () => {
  return (
    <div className="bg-[#111111] border border-white/[0.08] p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Weekly Engagement</h3>
          <p className="text-sm text-gray-400">Last 30 days</p>
        </div>
        <button className="p-2 text-white/40 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12l4-4H4l4 4z"/>
          </svg>
        </button>
      </div>
      
      {/* Donut Chart Simulation */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="48"
              fill="none"
              stroke="#333"
              strokeWidth="16"
            />
            <circle
              cx="64"
              cy="64"
              r="48"
              fill="none"
              stroke="#DAFF3E"
              strokeWidth="16"
              strokeDasharray="211.06 301.59"
              strokeDashoffset="0"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">70</span>
            <span className="text-xs text-gray-400">Mobile App</span>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neon rounded-full"></div>
          <span className="text-gray-400">Mobile App</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-400">Website</span>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsChart;
