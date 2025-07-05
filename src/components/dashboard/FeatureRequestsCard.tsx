
import React from 'react';

const featureRequests = [
  { feature: 'Mobile App', votes: 156, priority: 'High', color: '#DAFF3E' },
  { feature: 'Live Chat', votes: 89, priority: 'Medium', color: '#3b82f6' },
  { feature: 'Loyalty Program', votes: 67, priority: 'Medium', color: '#22c55e' },
  { feature: 'Same-Day Delivery', votes: 45, priority: 'Low', color: '#f97316' },
  { feature: 'Product Reviews', votes: 32, priority: 'Low', color: '#8b5cf6' }
];

const FeatureRequestsCard = () => {
  return (
    <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Feature Requests</h3>
          <p className="text-sm text-white/60">Customer-requested improvements</p>
        </div>
        <div className="text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          389 Total Votes
        </div>
      </div>
      
      <div className="space-y-4">
        {featureRequests.map((request, index) => (
          <div key={request.feature} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white group-hover:text-white transition-colors">
                {request.feature}
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{request.votes}</span>
                <span className="text-xs text-white/60">votes</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${
                request.priority === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                request.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}>
                {request.priority} Priority
              </span>
              
              <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(request.votes / 156) * 100}%`,
                    backgroundColor: request.color 
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureRequestsCard;
