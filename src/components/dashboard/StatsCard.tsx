
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'neon' | 'orange';
  large?: boolean;
  tooltip?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  color = 'blue', 
  large = false,
  tooltip 
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'red':
        return 'border-red-500/20 bg-red-500/5';
      case 'orange':
        return 'border-orange-500/20 bg-orange-500/5';
      case 'green':
        return 'border-green-500/20 bg-green-500/5';
      case 'neon':
        return 'border-[#DAFF3E]/20 bg-[#DAFF3E]/5';
      default:
        return 'border-blue-500/20 bg-blue-500/5';
    }
  };

  const getTrendColor = () => {
    switch (color) {
      case 'red':
        return 'text-red-400';
      case 'orange':
        return 'text-orange-400';
      case 'green':
        return 'text-green-400';
      case 'neon':
        return 'text-[#DAFF3E]';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div 
      className={`bg-[#111111] border ${getColorClasses()} p-6 rounded-2xl transition-all duration-200 hover:scale-[1.02] group cursor-pointer`}
      title={tooltip}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">{icon}</div>
        {trend && (
          <span className={`text-xs font-medium ${getTrendColor()} px-2 py-1 rounded-full bg-white/5`}>
            {trend}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-white/60">
          {title}
        </h3>
        <p className="text-2xl font-bold text-white">
          {value}
        </p>
        {tooltip && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
            <p className="text-xs text-white/50">{tooltip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
