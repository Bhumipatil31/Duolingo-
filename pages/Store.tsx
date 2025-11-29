import React from 'react';
import { ShopItem } from '../types';
import { Heart, Zap, Shield, Crown, Moon, Sun } from 'lucide-react';

const items: ShopItem[] = [
    { id: '1', name: 'Streak Freeze', description: 'Miss a day without losing your streak.', price: 200, icon: 'Shield', color: 'bg-sky-100 text-sky-500' },
    { id: '2', name: 'Double or Nothing', description: 'Double your 50 gem wager by maintaining a 7 day streak.', price: 50, icon: 'Zap', color: 'bg-yellow-100 text-yellow-500' },
    { id: '3', name: 'Unlimited Hearts', description: 'Never run out of hearts during lessons.', price: 500, icon: 'Heart', color: 'bg-rose-100 text-rose-500' },
];

interface StoreProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Store: React.FC<StoreProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6 px-2">
                <h2 className={`text-2xl font-extrabold ${isDarkMode ? 'text-slate-100' : 'text-slate-700'}`}>Shop</h2>
                
                {/* Theme Toggle in Store Header */}
                <button 
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-700'}`}
                >
                    {isDarkMode ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                    <span className="text-xs font-bold uppercase">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Featured Item */}
                <div className={`col-span-1 md:col-span-2 rounded-[2.5rem] p-8 flex items-center justify-between shadow-lg ${isDarkMode ? 'bg-gradient-to-r from-violet-900 to-fuchsia-900 shadow-violet-900/50 text-white' : 'bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-violet-200 text-white'}`}>
                    <div>
                        <h3 className="text-2xl font-extrabold mb-2">Super Duolingo</h3>
                        <p className="font-medium opacity-90 mb-6 max-w-sm">Support our mission and get unlimited hearts, ad-free learning, and progress quizzes.</p>
                        <button className={`px-6 py-3 rounded-xl font-extrabold shadow-sm active:scale-95 transition-transform ${isDarkMode ? 'bg-slate-800 text-violet-300' : 'bg-white text-violet-600'}`}>
                            Start Free Trial
                        </button>
                    </div>
                    <Crown className="w-24 h-24 text-white/20 hidden md:block" />
                </div>

                {/* Shop Items */}
                {items.map((item) => (
                    <div 
                      key={item.id} 
                      className={`p-6 rounded-[2rem] border shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all
                        ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}
                      `}
                    >
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 ${isDarkMode ? 'bg-slate-700' : item.color}`}>
                            {item.icon === 'Shield' && <Shield className={`w-10 h-10 ${isDarkMode ? 'text-sky-400' : ''}`} fill="currentColor" />}
                            {item.icon === 'Zap' && <Zap className={`w-10 h-10 ${isDarkMode ? 'text-yellow-400' : ''}`} fill="currentColor" />}
                            {item.icon === 'Heart' && <Heart className={`w-10 h-10 ${isDarkMode ? 'text-rose-400' : ''}`} fill="currentColor" />}
                        </div>
                        <h4 className={`font-extrabold text-lg mb-2 ${isDarkMode ? 'text-slate-100' : 'text-slate-700'}`}>{item.name}</h4>
                        <p className={`font-medium text-sm mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>
                            {item.description}
                        </p>
                        <button className={`mt-auto w-full py-3 border-2 rounded-xl font-bold uppercase text-sm tracking-wide transition-colors flex items-center justify-center gap-2
                           ${isDarkMode 
                             ? 'border-slate-700 text-slate-300 hover:bg-slate-700' 
                             : 'border-slate-100 text-slate-500 hover:bg-slate-50'
                           }
                        `}>
                             <div className="w-4 h-4 bg-sky-400 rounded-sm rotate-45"></div> {item.price}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;