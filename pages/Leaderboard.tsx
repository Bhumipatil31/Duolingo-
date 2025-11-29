import React from 'react';
import { LeaderboardUser } from '../types';
import { Trophy, Shield } from 'lucide-react';

const mockUsers: LeaderboardUser[] = [
  { rank: 1, name: 'Sofia', xp: 2400, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia' },
  { rank: 2, name: 'Mateo', xp: 2150, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo' },
  { rank: 3, name: 'Liam', xp: 1900, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam' },
  { rank: 4, name: 'You', xp: 850, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', isCurrentUser: true },
  { rank: 5, name: 'Emma', xp: 600, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
       <div className="text-center mb-8">
           <div className="w-20 h-20 bg-amber-100 rounded-[2rem] mx-auto flex items-center justify-center mb-4 shadow-lg shadow-amber-50">
               <Trophy className="w-10 h-10 text-amber-500 fill-amber-500" />
           </div>
           <h2 className="text-2xl font-extrabold text-slate-700">Amethyst League</h2>
           <p className="text-slate-400 font-bold">Top 10 advance to the next league</p>
       </div>

       <div className="bg-white rounded-[2.5rem] shadow-xl shadow-indigo-50 border border-slate-100 overflow-hidden">
           {mockUsers.map((user) => (
               <div 
                 key={user.rank} 
                 className={`flex items-center p-5 gap-4 border-b border-slate-50 last:border-none hover:bg-slate-50 transition-colors ${user.isCurrentUser ? 'bg-emerald-50/50' : ''}`}
               >
                  <div className={`w-8 font-extrabold text-lg ${user.rank <= 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                      {user.rank}
                  </div>
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-white" />
                  <div className="flex-1">
                      <h4 className={`font-extrabold text-base ${user.isCurrentUser ? 'text-emerald-600' : 'text-slate-700'}`}>
                          {user.name}
                      </h4>
                      {user.rank <= 3 && (
                          <div className="text-xs font-bold text-amber-500 uppercase flex items-center gap-1">
                             🔥 On Fire
                          </div>
                      )}
                  </div>
                  <div className="font-mono font-bold text-slate-500 text-sm">
                      {user.xp} XP
                  </div>
               </div>
           ))}
       </div>

       <div className="mt-8 flex justify-center">
           <div className="px-6 py-3 bg-white border-2 border-slate-100 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
               Promotion Zone
           </div>
       </div>
    </div>
  );
};

export default Leaderboard;
