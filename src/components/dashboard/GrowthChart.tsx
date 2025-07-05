
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 25000 },
  { month: 'Feb', revenue: 28000 },
  { month: 'Mar', revenue: 31000 },
  { month: 'Apr', revenue: 34200 },
  { month: 'May', revenue: 32000 },
  { month: 'Jun', revenue: 35000 }
];

const GrowthChart = () => {
  return (
    <div className="bg-[#111111] border border-white/[0.08] p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Product Performance</h3>
        <button className="p-2 text-white/40 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12l4-4H4l4 4z"/>
          </svg>
        </button>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-bold text-white mb-2">$34.2K</div>
        <div className="text-sm text-gray-400">Total Revenue</div>
      </div>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DAFF3E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#DAFF3E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <YAxis hide />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#DAFF3E"
              strokeWidth={2}
              fill="url(#revenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowthChart;
