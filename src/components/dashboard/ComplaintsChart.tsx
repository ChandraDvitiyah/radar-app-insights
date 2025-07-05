
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
    <div className="bg-dark-card border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Weekly Engagement</h3>
          <p className="text-sm text-gray-400">Last 30 days</p>
        </div>
        <div className="flex gap-3 text-xs">
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
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 11 }}
            />
            <Bar 
              dataKey="value" 
              fill="#DAFF3E"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplaintsChart;
