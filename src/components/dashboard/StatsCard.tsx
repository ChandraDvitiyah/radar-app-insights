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

const colorMap = {
  red: {
    bg: 'bg-[#FF5A5A]',
    circle: 'bg-[#FF8A8A]/40',
    badge: 'bg-[#FF8A8A]/30',
    text: 'text-black',
  },
  orange: {
    bg: 'bg-[#FFE066]',
    circle: 'bg-[#FFF0B3]/60',
    badge: 'bg-[#FFF0B3]/50',
    text: 'text-black',
  },
  green: {
    bg: 'bg-[#B6FF6C]',
    circle: 'bg-[#D6FFB3]/60',
    badge: 'bg-[#D6FFB3]/50',
    text: 'text-black',
  },
  neon: {
    bg: 'bg-[#DAFF3E]',
    circle: 'bg-[#F3FFB3]/60',
    badge: 'bg-[#F3FFB3]/50',
    text: 'text-black',
  },
  blue: {
    bg: 'bg-[#AEEBFF]',
    circle: 'bg-[#D6F6FF]/60',
    badge: 'bg-[#D6F6FF]/50',
    text: 'text-black',
  },
  yellow: {
    bg: 'bg-[#FFE066]',
    circle: 'bg-[#FFF0B3]/60',
    badge: 'bg-[#FFF0B3]/50',
    text: 'text-black',
  },
};

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  color = 'blue', 
  large = false,
  tooltip 
}) => {
  const c = colorMap[color] || colorMap['neon'];

  return (
    <div 
      className={`relative overflow-hidden ${c.bg} ${c.text} rounded-[2.5rem] px-8 py-7 flex flex-col min-h-[180px] transition-all duration-200 hover:scale-[1.02] group cursor-pointer`}
      title={tooltip}
      style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)' }}
    >
      {/* Large soft circle */}
      <div className={`absolute -top-10 -left-10 w-32 h-32 ${c.circle} rounded-full z-0`} />
      {/* Large emoji icon with drop shadow */}
      <div className="absolute top-4 left-4 z-10 text-[2.2rem] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
        {icon}
      </div>
      {/* Trend badge */}
      {trend && (
        <span className={`absolute top-5 right-7 z-10 px-4 py-1 rounded-full font-semibold text-sm ${c.badge} backdrop-blur-sm`} style={{letterSpacing: 0.1}}>
          {trend}
        </span>
      )}
      {/* Card content */}
      <div className="flex flex-col justify-end h-full z-20 relative pt-8">
        <h3 className="text-xl font-bold mb-2 leading-tight" style={{fontFamily: 'inherit'}}>{title}</h3>
        <p className="text-5xl font-extrabold leading-none tracking-tight mb-1">{value}</p>
        {tooltip && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
            <p className="text-xs text-black/60">{tooltip}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
