
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const mrrData = [
  { month: 'Jan', current: 45000, potential: 52000 },
  { month: 'Feb', current: 47000, potential: 55000 },
  { month: 'Mar', current: 46000, potential: 58000 },
  { month: 'Apr', current: 48000, potential: 61000 },
  { month: 'May', current: 45000, potential: 63000 },
  { month: 'Jun', current: 49000, potential: 66000 }
];

const GrowthChart = () => {
  return (
    <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">MRR Recovery Potential</h3>
          <p className="text-sm text-white/60">Current vs. potential monthly recurring revenue</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$17K</div>
          <div className="text-sm text-[#DAFF3E]">Monthly upside potential</div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mrrData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="current" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="potential" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DAFF3E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#DAFF3E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value/1000}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'current' ? 'Current MRR' : 'Potential MRR']}
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#current)"
            />
            <Area
              type="monotone"
              dataKey="potential"
              stroke="#DAFF3E"
              strokeWidth={2}
              fill="url(#potential)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-white/70">Current MRR</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#DAFF3E] rounded-full"></div>
          <span className="text-sm text-white/70">Potential with Improvements</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;
