
import React from 'react';

const FeatureRequestsCard = () => {
  return (
    <div className="bg-[#111111] border border-white/[0.08] p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Active Campaigns</h3>
        <button className="p-2 text-white/40 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12l4-4H4l4 4z"/>
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Gadget Galaxy Campaign */}
        <div className="p-4 bg-[#0A0A0A]/50 rounded-xl border border-white/[0.05]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-white">Gadget Galaxy</h4>
            <button className="p-1 text-white/40 hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 9l3-3H3l3 3z"/>
              </svg>
            </button>
          </div>
          
          {/* Timeline */}
          <div className="space-y-3 mb-4">
            {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'].map((day, index) => (
              <div key={day} className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{day}</span>
                {index === 1 && (
                  <div className="flex items-center gap-2">
                    <span className="text-neon font-bold">580</span>
                    <span className="text-gray-400">person</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mini Chart */}
          <div className="h-12 bg-[#0A0A0A] rounded-lg flex items-end p-2 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 48">
              <path 
                d="M10,35 Q25,20 40,30 T90,25" 
                stroke="#DAFF3E" 
                strokeWidth="2" 
                fill="none"
              />
              <circle cx="40" cy="30" r="3" fill="#DAFF3E" />
            </svg>
            <div className="absolute top-1 right-2 text-xs text-gray-500">26 sep</div>
          </div>
        </div>

        {/* Summer Steals Campaign */}
        <div className="p-4 bg-[#0A0A0A]/50 rounded-xl border border-white/[0.05]">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">Summer Steals</h4>
            <button className="p-1 text-white/40 hover:text-white transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 3l3 3H3l3-3z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestsCard;
