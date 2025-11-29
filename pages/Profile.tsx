import React from 'react';
import { UserStats } from '../types';
import { Clock, Zap, Target, Award } from 'lucide-react';

interface ProfileProps {
    user: UserStats;
}

const StreakCalendar = () => {
    // Mock data for a month (30 days)
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const activeDays = [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 24, 25, 28, 29, 30];
    const frozenDays = [4, 7];
  
    return (
      <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm mb-8">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-extrabold text-slate-700 text-xl">Streak Calendar</h3>
             <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase">
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-orange-400"></div>Streak</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-sky-400"></div>Freeze</div>
             </div>
         </div>
         <div className="grid grid-cols-7 gap-2 md:gap-4 text-center">
             {['M','T','W','T','F','S','S'].map(d => (
                 <div key={d} className="text-xs font-extrabold text-slate-300 mb-2">{d}</div>
             ))}
             {days.map(day => {
                 const isActive = activeDays.includes(day);
                 const isFrozen = frozenDays.includes(day);
                 let bg = 'bg-transparent text-slate-300';
                 if (isActive) bg = 'bg-orange-400 text-white shadow-sm shadow-orange-200 scale-105';
                 if (isFrozen) bg = 'bg-sky-400 text-white shadow-sm shadow-sky-200';
  
                 return (
                     <div key={day} className={`aspect-square flex items-center justify-center rounded-xl font-bold text-sm transition-transform ${bg}`}>
                         {day}
                     </div>
                 )
             })}
         </div>
      </div>
    );
  };

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                    <img src={user.avatarUrl} alt="Profile" className="w-32 h-32 rounded-full border-4 border-emerald-100" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center">
                        <img src="https://flagcdn.com/w40/es.png" className="w-5 h-5 rounded-full object-cover" />
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-slate-700">{user.name}</h2>
                    <p className="text-slate-400 font-bold mb-4">@{user.username} • Joined {user.joinedDate}</p>
                    <div className="flex gap-3 justify-center md:justify-start">
                         <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 font-extrabold rounded-lg text-xs uppercase tracking-wider">
                             Friends
                         </span>
                         <span className="px-4 py-1.5 bg-sky-50 text-sky-600 font-extrabold rounded-lg text-xs uppercase tracking-wider">
                             Share
                         </span>
                    </div>
                </div>
            </div>

            {/* Streak Calendar */}
            <StreakCalendar />

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
                    <h3 className="font-extrabold text-slate-700 mb-6">Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Streak', value: user.streak, icon: Zap, color: 'text-orange-500' },
                            { label: 'Total XP', value: user.xp, icon: Target, color: 'text-emerald-500' },
                            { label: 'League', value: 'Amethyst', icon: Award, color: 'text-violet-500' },
                            { label: 'Top 3', value: '12', icon: Clock, color: 'text-sky-500' },
                        ].map((stat, i) => (
                            <div key={i} className="border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                <div>
                                    <div className="font-extrabold text-slate-700">{stat.value}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
                     <h3 className="font-extrabold text-slate-700 mb-6">Achievements</h3>
                     <div className="space-y-4">
                         <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                             <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center text-3xl shadow-sm">
                                 🔥
                             </div>
                             <div className="flex-1">
                                 <h4 className="font-extrabold text-slate-700">Wildfire</h4>
                                 <p className="text-xs font-bold text-slate-400 mb-2">Reach a 30 day streak</p>
                                 <div className="h-2 w-full bg-slate-200 rounded-full">
                                     <div className="h-full w-1/2 bg-yellow-400 rounded-full"></div>
                                 </div>
                             </div>
                         </div>
                         <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl opacity-60">
                             <div className="w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center text-3xl">
                                 👑
                             </div>
                             <div className="flex-1">
                                 <h4 className="font-extrabold text-slate-700">Sage</h4>
                                 <p className="text-xs font-bold text-slate-400 mb-2">Earn 1000 XP in a day</p>
                                 <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;