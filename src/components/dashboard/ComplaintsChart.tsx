
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Crashes', value: 342, color: '#EF4444' },
  { name: 'Slow Loading', value: 287, color: '#F97316' },
  { name: 'UI Issues', value: 195, color: '#EAB308' },
  { name: 'Login Problems', value: 156, color: '#06B6D4' },
  { name: 'Missing Features', value: 134, color: '#8B5CF6' }
];

const ComplaintsChart = () => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        🔥 Active Complaints
        <span className="text-sm text-gray-400 font-normal">Last 30 days</span>
      </h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Bar 
              dataKey="value" 
              fill="#DAFF3E"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 space-y-2">
        {data.slice(0, 3).map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <span className="text-gray-400">{item.name}</span>
            <span className="text-white font-medium">{item.value} mentions</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsChart;
