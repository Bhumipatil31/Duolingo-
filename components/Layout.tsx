import React from 'react';
import { Page, UserStats } from '../types';
import { Trophy, Store, User, Settings, LogOut, Hexagon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  userStats: UserStats;
  isDarkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate, userStats, isDarkMode }) => {
  const navItems = [
    { id: 'dashboard', label: 'Learn', icon: Hexagon },
    { id: 'leaderboard', label: 'Rank', icon: Trophy },
    { id: 'store', label: 'Shop', icon: Store },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const bgColor = isDarkMode ? 'bg-slate-900' : 'bg-[#FDFBF7]';
  const sidebarBg = isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/50 border-slate-100';
  const textColor = isDarkMode ? 'text-slate-100' : 'text-slate-700';

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col md:flex-row font-nunito ${textColor} transition-colors duration-500`}>
      
      {/* DESKTOP SIDEBAR */}
      <aside className={`hidden md:flex flex-col w-64 h-screen sticky top-0 border-r backdrop-blur-xl px-6 py-8 ${sidebarBg} transition-colors duration-500`}>
        <div className="mb-10 pl-2">
           <h1 className="text-3xl font-extrabold text-emerald-400 tracking-tight flex items-center gap-2">
             <div className="w-8 h-8 bg-emerald-400 rounded-lg rotate-12"></div>
             Duolingo
           </h1>
        </div>

        <nav className="flex-1 space-y-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            const Icon = item.icon;
            
            let buttonClass = `w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group `;
            if (isActive) {
                buttonClass += isDarkMode 
                    ? 'bg-sky-900/30 text-sky-400 ring-1 ring-sky-800' 
                    : 'bg-sky-50 text-sky-500 shadow-sm shadow-sky-100 ring-1 ring-sky-100';
            } else {
                buttonClass += isDarkMode
                    ? 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600';
            }

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={buttonClass}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} strokeWidth={2.5} />
                <span className="font-bold tracking-wide uppercase text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className={`mt-auto pt-6 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-bold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className={`md:hidden sticky top-0 z-40 border-b px-4 py-3 flex justify-between items-center backdrop-blur-lg ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-100'}`}>
         <span className="font-extrabold text-emerald-400 text-xl tracking-tight">Duolingo</span>
         <div className="flex gap-3">
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full border ${isDarkMode ? 'bg-orange-900/30 border-orange-800 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-500'}`}>
               <span className="text-xs font-bold">🔥 {userStats.streak}</span>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full border ${isDarkMode ? 'bg-sky-900/30 border-sky-800 text-sky-400' : 'bg-sky-50 border-sky-100 text-sky-500'}`}>
               <span className="text-xs font-bold">💎 {userStats.gems}</span>
            </div>
         </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative overflow-y-auto overflow-x-hidden md:px-8 md:py-8 pb-24 md:pb-8">
        <div className="max-w-4xl mx-auto h-full">
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 border-t backdrop-blur-xl px-6 py-3 flex justify-between items-center z-50 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-100'}`}>
        {navItems.map((item) => {
            const isActive = currentPage === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`relative p-2 transition-all duration-300 ${isActive ? '-translate-y-2' : ''}`}
              >
                {isActive && (
                  <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-b-full ${isDarkMode ? 'bg-sky-400 shadow-[0_2px_8px_rgba(56,189,248,0.3)]' : 'bg-sky-400 shadow-[0_2px_8px_rgba(56,189,248,0.5)]'}`}></div>
                )}
                <Icon 
                  className={`w-7 h-7 ${isActive ? 'text-sky-500 fill-sky-100/20 stroke-[2.5]' : 'text-slate-400'}`} 
                />
              </button>
            );
        })}
      </nav>
    </div>
  );
};

export default Layout;