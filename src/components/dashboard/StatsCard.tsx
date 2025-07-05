
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'neon';
  large?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, color = 'blue', large = false }) => {
  const getCardClasses = () => {
    if (color === 'neon' && large) {
      return 'bg-neon text-black';
    }
    return 'bg-dark-card border border-white/10';
  };

  const getTextColor = () => {
    if (color === 'neon' && large) {
      return 'text-black';
    }
    return 'text-white';
  };

  const getTrendColor = () => {
    if (color === 'neon' && large) {
      return 'text-black/70';
    }
    return 'text-gray-400';
  };

  return (
    <div className={`${getCardClasses()} p-6 rounded-2xl transition-all duration-200 hover:scale-[1.02] ${large ? 'col-span-2' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">{icon}</div>
        {trend && (
          <span className={`text-xs font-medium ${getTrendColor()}`}>
            {trend}
          </span>
        )}
      </div>
      
      <div>
        <h3 className={`text-sm font-medium mb-2 ${color === 'neon' && large ? 'text-black/70' : 'text-gray-400'}`}>
          {title}
        </h3>
        <p className={`${large ? 'text-4xl' : 'text-2xl'} font-bold ${getTextColor()}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
