import React from 'react';

interface SettingsProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isDarkMode, toggleTheme }) => {
  const cardClass = isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100';
  const textClass = isDarkMode ? 'text-slate-100' : 'text-slate-700';
  const subTextClass = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const inputClass = isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-700';
  const borderClass = isDarkMode ? 'border-slate-700' : 'border-slate-50';

  return (
    <div className="animate-in fade-in duration-500 max-w-2xl mx-auto">
        <h2 className={`text-2xl font-extrabold mb-6 ${textClass}`}>Settings</h2>
        
        <div className={`${cardClass} rounded-[2rem] border shadow-sm overflow-hidden transition-colors duration-500`}>
            <div className={`p-6 border-b ${borderClass}`}>
                <h3 className={`font-extrabold mb-4 ${textClass}`}>Account</h3>
                <div className="space-y-4">
                     <div className="flex justify-between items-center">
                         <span className={`font-bold ${subTextClass}`}>Username</span>
                         <input type="text" value="FelixTheCat" className={`${inputClass} px-4 py-2 rounded-xl font-bold border`} readOnly />
                     </div>
                     <div className="flex justify-between items-center">
                         <span className={`font-bold ${subTextClass}`}>Email</span>
                         <input type="email" value="felix@example.com" className={`${inputClass} px-4 py-2 rounded-xl font-bold border`} readOnly />
                     </div>
                </div>
            </div>
            
            <div className={`p-6 border-b ${borderClass}`}>
                <h3 className={`font-extrabold mb-4 ${textClass}`}>Preferences</h3>
                <div className="flex items-center justify-between mb-4">
                    <span className={`font-bold ${subTextClass}`}>Sound Effects</span>
                    <div className="w-12 h-6 bg-emerald-400 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className={`font-bold ${subTextClass}`}>Dark Mode</span>
                    <button 
                        onClick={toggleTheme}
                        className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${isDarkMode ? 'bg-indigo-500' : 'bg-slate-200'}`}
                    >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isDarkMode ? 'left-7' : 'left-1'}`}></div>
                    </button>
                </div>
            </div>

             <div className="p-6">
                <button className={`w-full py-3 border-2 rounded-xl font-extrabold transition-colors uppercase text-sm ${isDarkMode ? 'border-red-900/50 text-red-400 hover:bg-red-900/20' : 'border-red-100 text-red-400 hover:bg-red-50'}`}>
                    Delete Account
                </button>
            </div>
        </div>
    </div>
  );
};

export default Settings;