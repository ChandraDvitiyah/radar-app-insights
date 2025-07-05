
import React from 'react';
import { Badge } from '@/components/ui/badge';

const featureRequests = [
  { feature: 'Dark Mode', requests: 89, priority: 'High' },
  { feature: 'Offline Support', requests: 67, priority: 'Medium' },
  { feature: 'Push Notifications', requests: 45, priority: 'High' },
  { feature: 'Export Data', requests: 34, priority: 'Low' },
  { feature: 'Better Search', requests: 28, priority: 'Medium' }
];

const FeatureRequestsCard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        💡 Feature Requests
        <span className="text-sm text-gray-400 font-normal">Top requested</span>
      </h3>
      
      <div className="space-y-4">
        {featureRequests.map((request, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-dark-lighter/50 rounded-xl hover:bg-dark-lighter transition-colors duration-300">
            <div className="flex-1">
              <h4 className="font-medium text-white mb-1">{request.feature}</h4>
              <p className="text-sm text-gray-400">{request.requests} user requests</p>
            </div>
            
            <Badge className={`${getPriorityColor(request.priority)} border`}>
              {request.priority}
            </Badge>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-neon/10 border border-neon/30 rounded-xl">
        <p className="text-sm text-neon font-medium">
          💡 Implementing the top 3 features could increase user satisfaction by ~23%
        </p>
      </div>
    </div>
  );
};

export default FeatureRequestsCard;
