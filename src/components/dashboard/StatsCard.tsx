
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
      return 'bg-neon text-black relative overflow-hidden';
    }
    return 'bg-[#111111] border border-white/[0.08]';
  };

  const getTextColor = () => {
    if (color === 'neon' && large) {
      return 'text-black';
    }
    return 'text-white';
  };

  const getTrendColor = () => {
    if (color === 'neon' && large) {
      return 'text-black/60';
    }
    return 'text-gray-400';
  };

  return (
    <div className={`${getCardClasses()} p-6 rounded-2xl transition-all duration-200 hover:scale-[1.02] ${large ? 'col-span-2' : ''} relative`}>
      {/* Background Pattern for Neon Card */}
      {color === 'neon' && large && (
        <>
          <div className="absolute top-4 right-4 w-16 h-16 bg-black/10 rounded-full"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 bg-black/5 rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 bg-black/10 rounded-full"></div>
          <svg className="absolute bottom-4 left-4 w-20 h-12 opacity-10" viewBox="0 0 80 48">
            <path d="M0,24 Q20,8 40,24 T80,24" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,32 Q20,16 40,32 T80,32" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </>
      )}
      
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="text-2xl">{icon}</div>
        {trend && (
          <span className={`text-xs font-medium ${getTrendColor()} px-2 py-1 rounded-full ${color === 'neon' && large ? 'bg-black/10' : 'bg-white/5'}`}>
            {trend}
          </span>
        )}
      </div>
      
      <div className="relative z-10">
        <h3 className={`text-sm font-medium mb-2 ${color === 'neon' && large ? 'text-black/60' : 'text-gray-400'}`}>
          {title}
        </h3>
        <p className={`${large ? 'text-4xl' : 'text-2xl'} font-bold ${getTextColor()}`}>
          {value}
        </p>
        {large && (
          <p className="text-sm text-black/50 mt-1">Total active Campaign</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
