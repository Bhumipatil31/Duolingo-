import React from 'react';

interface DailyGoalWidgetProps {
  current: number;
  target: number;
}

const DailyGoalWidget: React.FC<DailyGoalWidgetProps> = ({ current, target }) => {
  const percentage = Math.min((current / target) * 100, 100);
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-[1.5rem] p-4 shadow-sm border border-slate-100 flex items-center justify-between mb-8 mx-1">
      <div className="flex flex-col gap-1">
        <h3 className="text-slate-700 font-extrabold text-base tracking-tight">Daily Goal</h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wide">
          {current} / {target} XP earned
        </p>
      </div>
      
      <div className="relative w-14 h-14 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="transform -rotate-90 w-14 h-14">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="#f1f5f9"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Checkmark or Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
           {percentage >= 100 ? (
             <span className="text-emerald-500 font-bold text-lg">✓</span>
           ) : (
             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
           )}
        </div>
      </div>
    </div>
  );
};

export default DailyGoalWidget;