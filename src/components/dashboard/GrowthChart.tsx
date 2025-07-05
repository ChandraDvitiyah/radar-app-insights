
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', current: 12000, projected: 12000 },
  { month: 'Feb', current: 11800, projected: 13200 },
  { month: 'Mar', current: 11500, projected: 14800 },
  { month: 'Apr', current: 11200, projected: 16800 },
  { month: 'May', current: 10800, projected: 19200 },
  { month: 'Jun', current: 10500, projected: 22400 }
];

const GrowthChart = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          📈 MRR Growth Potential
        </h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-400">Current MRR</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-neon rounded-full"></div>
            <span className="text-gray-400">Projected MRR</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="current" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="projected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DAFF3E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#DAFF3E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#EF4444"
              fill="url(#current)"
            />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="#DAFF3E"
              fill="url(#projected)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-2xl font-bold text-red-400">$10.5k</p>
          <p className="text-sm text-gray-400">Current MRR</p>
        </div>
        <div className="text-center p-4 bg-neon/10 border border-neon/20 rounded-xl">
          <p className="text-2xl font-bold text-neon">$22.4k</p>
          <p className="text-sm text-gray-400">Potential MRR</p>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;
