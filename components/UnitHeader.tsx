import React, { useState } from 'react';
import { generateDailyInsight } from '../services/geminiService';
import { Sparkles, ArrowRight } from 'lucide-react';

interface UnitHeaderProps {
  unitNumber: number;
  title: string;
  description: string;
  theme: any;
}

const UnitHeader: React.FC<UnitHeaderProps> = ({ unitNumber, title, description, theme }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetInsight = async () => {
    if (insight || loading) return;
    setLoading(true);
    const text = await generateDailyInsight(title);
    setInsight(text);
    setLoading(false);
  };

  return (
    <div className={`${theme.gradient} rounded-[2.5rem] p-6 mb-10 text-white relative overflow-hidden shadow-xl ${theme.shadow} group transition-all duration-500 hover:shadow-2xl`}>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="uppercase tracking-widest text-[10px] font-extrabold text-white/70 mb-2 block border border-white/20 inline-block px-2 py-0.5 rounded-full backdrop-blur-sm">
              Unit {unitNumber}
            </span>
            <h2 className="text-3xl font-extrabold mb-2 tracking-tight leading-tight">{title}</h2>
            <p className="text-white/90 font-medium text-sm leading-relaxed max-w-[90%] opacity-90">
              {description}
            </p>
          </div>
        </div>

        {/* Interactive Area */}
        <div className="flex items-center gap-3 mt-5">
           <button 
             className="bg-white text-slate-800 rounded-xl px-5 py-2.5 font-bold text-sm shadow-lg shadow-black/5 flex items-center gap-2 transition-transform active:scale-95 hover:bg-slate-50"
             onClick={() => {}}
           >
             Guidebook
             <ArrowRight className="w-4 h-4 text-slate-400" />
           </button>
           
           <button 
             onClick={handleGetInsight}
             className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2.5 flex items-center gap-2 transition-all active:scale-95"
           >
             <Sparkles className={`w-4 h-4 ${loading ? 'animate-spin' : 'text-yellow-200 fill-yellow-200'}`} />
             <span className="text-sm font-bold">
               {loading ? 'Thinking...' : insight ? 'Insight' : 'AI Tip'}
             </span>
           </button>
        </div>

        {/* Insight Pop */}
        {insight && (
          <div className="mt-4 bg-white/95 text-slate-700 p-4 rounded-2xl text-sm font-medium shadow-lg animate-float border-l-4 border-indigo-400">
            {insight}
          </div>
        )}
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
      <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/20 rounded-full blur-2xl mix-blend-overlay animate-pulse"></div>
      <div className="absolute top-[40%] left-[-10%] w-24 h-24 bg-black/5 rounded-full blur-2xl"></div>
    </div>
  );
};

export default UnitHeader;