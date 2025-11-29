import React from 'react';
import { ArrowRight, Star, Globe, Zap, Heart } from 'lucide-react';
import { Page } from '../types';

interface LandingProps {
  onNavigate: (page: Page) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-nunito text-slate-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold text-emerald-400 tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-400 rounded-md rotate-12"></div>
            Duolingo
        </div>
        <div className="flex gap-4">
            <button onClick={() => onNavigate('login')} className="px-5 py-2.5 font-bold text-slate-500 hover:text-emerald-500 transition-colors uppercase tracking-wide text-sm">
                Log In
            </button>
            <button onClick={() => onNavigate('login')} className="px-6 py-2.5 bg-emerald-400 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-500 transition-all active:scale-95 uppercase tracking-wide text-sm">
                Get Started
            </button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-800">
                Learn a language <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">beautifully.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
                The world's most aesthetic way to learn Spanish, French, and more. 
                Science-backed, fun, and designed to make you smile.
            </p>
            <div className="pt-4">
                <button onClick={() => onNavigate('login')} className="w-full md:w-auto px-10 py-4 bg-slate-800 text-white font-bold rounded-2xl shadow-xl shadow-slate-300 text-lg hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3">
                    Start Learning Now <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
        
        {/* Abstract Hero Illustration */}
        <div className="flex-1 relative w-full flex justify-center">
             <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-sky-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-indigo-100 flex flex-col items-center gap-3 transform translate-y-8 animate-float">
                      <Globe className="w-12 h-12 text-sky-400" />
                      <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                      <div className="h-2 w-10 bg-slate-100 rounded-full"></div>
                   </div>
                   <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-orange-100 flex flex-col items-center gap-3 transform -translate-y-4 animate-float" style={{ animationDelay: '1s' }}>
                      <Zap className="w-12 h-12 text-orange-400" />
                      <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                   </div>
                   <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-emerald-100 col-span-2 flex items-center gap-4 transform translate-x-4 animate-float" style={{ animationDelay: '2s' }}>
                       <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">🇪🇸</div>
                       <div className="flex-1">
                           <div className="h-2 w-full bg-slate-100 rounded-full mb-2">
                               <div className="h-full w-2/3 bg-emerald-400 rounded-full"></div>
                           </div>
                           <p className="text-xs font-bold text-slate-400">Daily Progress</p>
                       </div>
                   </div>
                </div>
             </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
             {[
                 { icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-50', title: 'Fun & Effective', desc: 'Game-like lessons that actually teach you skills.' },
                 { icon: Zap, color: 'text-orange-400', bg: 'bg-orange-50', title: 'Stay Motivated', desc: 'Build your streak and compete on leaderboards.' },
                 { icon: Heart, color: 'text-rose-400', bg: 'bg-rose-50', title: 'Personalized', desc: 'AI adapts to your learning style instantly.' }
             ].map((feature, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                     <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                         <feature.icon className={`w-8 h-8 ${feature.color}`} fill="currentColor" />
                     </div>
                     <h3 className="text-xl font-extrabold text-slate-700 mb-2">{feature.title}</h3>
                     <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                 </div>
             ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFBF7] py-12 text-center border-t border-slate-100">
          <p className="text-slate-400 font-bold mb-4">Duolingo © 2024</p>
          <div className="flex justify-center gap-6 text-slate-400 font-bold text-sm">
              <a href="#" className="hover:text-emerald-400">About</a>
              <a href="#" className="hover:text-emerald-400">Careers</a>
              <a href="#" className="hover:text-emerald-400">Terms</a>
              <a href="#" className="hover:text-emerald-400">Privacy</a>
          </div>
      </footer>
    </div>
  );
};

export default Landing;