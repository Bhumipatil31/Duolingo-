import React from 'react';
import UnitHeader from '../components/UnitHeader';
import LessonPath from '../components/LessonPath';
import DailyGoalWidget from '../components/DailyGoalWidget';
import { Unit } from '../types';

interface DashboardProps {
  unit: Unit;
  theme: any;
  onStartLesson: () => void;
  isDarkMode?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ unit, theme, onStartLesson, isDarkMode = false }) => {
  const cardBg = isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100';
  const textPrimary = isDarkMode ? 'text-slate-100' : 'text-slate-700';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-400';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       
       {/* Desktop Header Stats */}
       <div className={`hidden md:flex justify-between items-center p-6 rounded-[2rem] shadow-sm border ${cardBg}`}>
           <div className="flex items-center gap-4">
               <img src="https://flagcdn.com/w80/es.png" alt="Spanish" className="w-10 h-10 rounded-full object-cover shadow-sm" />
               <div>
                   <h2 className={`font-extrabold text-lg ${textPrimary}`}>Spanish Course</h2>
                   <p className={`${textSecondary} font-bold text-xs uppercase tracking-wider`}>Unit {unit.number}</p>
               </div>
           </div>
           <div className="flex items-center gap-6">
               <div className="text-center">
                   <p className={`${textSecondary} text-xs font-bold uppercase`}>XP Earned</p>
                   <p className="text-emerald-500 font-extrabold text-xl">850</p>
               </div>
               <div className={`w-px h-8 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}></div>
               <div className="text-center">
                   <p className={`${textSecondary} text-xs font-bold uppercase`}>Next Milestone</p>
                   <p className={`${textPrimary} font-extrabold text-xl`}>1000</p>
               </div>
           </div>
       </div>

       <div className="grid md:grid-cols-[1fr_320px] gap-8">
           {/* Main Path */}
           <div>
              <UnitHeader 
                unitNumber={unit.number} 
                title={unit.title} 
                description={unit.description}
                theme={theme}
              />
              <div className="mt-8">
                <LessonPath 
                  lessons={unit.lessons} 
                  theme={theme}
                  onLessonClick={onStartLesson}
                />
              </div>
           </div>

           {/* Sidebar Widgets (Desktop) */}
           <div className="hidden md:block space-y-6">
              <DailyGoalWidget current={35} target={50} />
              
              <div className={`rounded-[2rem] p-6 border shadow-sm ${cardBg}`}>
                  <h3 className={`font-extrabold mb-4 text-lg ${textPrimary}`}>Friend Quests</h3>
                  <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isDarkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'}`}>🎁</div>
                      <div className="flex-1">
                          <p className={`font-bold text-sm ${textPrimary}`}>Earn 50 XP together</p>
                          <div className={`h-2.5 rounded-full mt-2 overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                              <div className="h-full w-2/3 bg-indigo-400 rounded-full"></div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-[2rem] p-6">
                  <h3 className="font-extrabold text-violet-800 mb-2">Super Duolingo</h3>
                  <p className="text-violet-600 text-sm font-semibold mb-4">Unlimited hearts and custom themes!</p>
                  <button className="w-full py-3 bg-white text-violet-600 font-extrabold rounded-xl shadow-sm text-sm hover:bg-violet-50 transition-colors">
                      Upgrade Today
                  </button>
              </div>
           </div>
       </div>
    </div>
  );
};

export default Dashboard;