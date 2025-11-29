import React from 'react';
import { LessonNode, LessonStatus } from '../types';
import { IconMap } from './Icons';
import { Check, Lock, Star } from 'lucide-react';

interface LessonPathProps {
  lessons: LessonNode[];
  theme: any;
  onLessonClick?: (lessonId: string) => void;
}

const LessonPath: React.FC<LessonPathProps> = ({ lessons, theme, onLessonClick }) => {
  
  // Calculate horizontal position for snake layout
  const getXPos = (index: number) => {
    const pattern = [0, -1, 0, 1]; // Center, Left, Center, Right
    return pattern[index % 4] * 50; // Multiplier for pixel offset
  };

  const renderPath = () => {
     const verticalGap = 100;
     const startY = 32;
     
     let pathD = `M ${150 + getXPos(0)} ${startY}`;
     
     for (let i = 0; i < lessons.length - 1; i++) {
        const x1 = 150 + getXPos(i);
        const y1 = startY + (i * verticalGap);
        const x2 = 150 + getXPos(i + 1);
        const y2 = startY + ((i + 1) * verticalGap);
        
        const cY1 = y1 + verticalGap * 0.5;
        const cY2 = y2 - verticalGap * 0.5;
        
        pathD += ` C ${x1} ${cY1}, ${x2} ${cY2}, ${x2} ${y2}`;
     }
     
     return (
       <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 300 1000" preserveAspectRatio="xMidYMin slice">
         <path 
           d={pathD} 
           stroke="#e2e8f0" 
           strokeWidth="10" 
           fill="none" 
           strokeLinecap="round"
           strokeLinejoin="round"
           className="drop-shadow-sm"
         />
         <path 
           d={pathD} 
           stroke="white" 
           strokeWidth="4" 
           fill="none" 
           strokeLinecap="round"
           strokeDasharray="12 12"
           opacity="0.6"
         />
       </svg>
     );
  };

  return (
    <div className="relative flex flex-col items-center pb-32 w-full max-w-[300px] mx-auto">
      {renderPath()}

      {lessons.map((lesson, index) => {
        const Icon = IconMap[lesson.icon] || Star;
        const isCompleted = lesson.status === LessonStatus.COMPLETED;
        const isActive = lesson.status === LessonStatus.ACTIVE;
        const isLocked = lesson.status === LessonStatus.LOCKED;

        let containerClass = "relative z-10 transition-all duration-300 transform";
        let buttonClass = "w-20 h-20 rounded-[2rem] flex items-center justify-center border-b-[6px] transition-all active:border-b-0 active:translate-y-[6px] duration-200 group";
        let iconColor = "";

        if (isCompleted) {
          buttonClass += ` bg-gradient-to-b from-amber-300 to-amber-400 border-amber-600 shadow-lg shadow-amber-200/50`;
          iconColor = "text-amber-800";
        } else if (isActive) {
          buttonClass += ` ${theme.gradient} ${theme.border.replace('border-', 'border-b-').replace('200','600')} shadow-xl ${theme.shadow} animate-float`;
          iconColor = "text-white";
        } else {
          buttonClass += " bg-slate-100 border-slate-300";
          iconColor = "text-slate-300";
        }

        const xOffset = getXPos(index);

        return (
          <div 
            key={lesson.id} 
            className={`${containerClass} mb-6`}
            style={{ transform: `translateX(${xOffset}px)` }}
          >
             {isActive && (
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
                 <div className={`${theme.text} bg-white px-3 py-1.5 rounded-xl shadow-md text-xs font-extrabold tracking-wider border border-slate-100 whitespace-nowrap`}>
                   START
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-100"></div>
                 </div>
               </div>
             )}

            <button 
                className={buttonClass} 
                onClick={() => !isLocked && onLessonClick && onLessonClick(lesson.id)}
                disabled={isLocked}
            >
              {isCompleted ? (
                <Check className="w-9 h-9 text-white stroke-[4]" />
              ) : isLocked ? (
                <Lock className="w-8 h-8 text-slate-300" />
              ) : (
                <Icon className={`w-8 h-8 ${iconColor} stroke-[3] drop-shadow-sm`} />
              )}
              {isCompleted && (
                 <div className="absolute -bottom-2 -right-2 bg-amber-400 border-4 border-[#FDFBF7] w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                   <Star className="w-3.5 h-3.5 text-white fill-current" />
                 </div>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LessonPath;
