
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
  color?: 'red' | 'yellow' | 'green' | 'blue';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, color = 'blue' }) => {
  const colorClasses = {
    red: 'from-red-500/20 to-red-600/20 border-red-500/30',
    yellow: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
  };

  return (
    <div className={`glass-card p-6 bg-gradient-to-br ${colorClasses[color]} hover:neon-glow transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        {trend && (
          <span className="text-sm text-green-400">
            {trend}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white mb-2">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
