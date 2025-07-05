
import React from 'react';

const campaigns = [
  { name: 'Gadget Galaxy', days: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], value: '580 person' },
  { name: 'Summer Steals', status: 'Active' }
];

const FeatureRequestsCard = () => {
  return (
    <div className="bg-dark-card border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Active Campaigns</h3>
      </div>
      
      <div className="space-y-6">
        <div className="p-4 bg-dark-lighter/50 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-white">Gadget Galaxy</h4>
            <span className="text-xs text-gray-400">26 sep</span>
          </div>
          
          <div className="space-y-2 mb-4">
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
          
          <div className="h-16 bg-dark-bg/50 rounded-lg flex items-center justify-center">
            <div className="text-xs text-gray-500">Chart visualization area</div>
          </div>
        </div>

        <div className="p-4 bg-dark-lighter/50 rounded-xl">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">Summer Steals</h4>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestsCard;
