
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const complaintData = [
  { category: 'Delivery Issues', count: 142, color: '#ef4444' },
  { category: 'Product Quality', count: 98, color: '#f97316' },
  { category: 'Customer Service', count: 76, color: '#eab308' },
  { category: 'Website Bugs', count: 54, color: '#22c55e' },
  { category: 'Pricing Concerns', count: 32, color: '#3b82f6' }
];

const ComplaintsChart = () => {
  return (
    <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Active Complaints</h3>
          <p className="text-sm text-white/60">Top complaint categories this month</p>
        </div>
        <div className="text-sm text-red-400 font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
          402 Total Issues
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={complaintData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Tag Cloud Preview */}
      <div className="mt-4 flex flex-wrap gap-2">
        {['slow shipping', 'damaged items', 'rude staff', 'website crashes', 'overpriced'].map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-full border border-white/10">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsChart;
