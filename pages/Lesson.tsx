import React, { useState, useEffect } from 'react';
import { X, Mic, Volume2, CheckCircle, Star } from 'lucide-react';
import { Page } from '../types';

interface LessonProps {
  onComplete: () => void;
  onExit: () => void;
}

const Lesson: React.FC<LessonProps> = ({ onComplete, onExit }) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [isFinished, setIsFinished] = useState(false);
  const [showCelebrationContent, setShowCelebrationContent] = useState(false);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  useEffect(() => {
    if (isFinished) {
      // Trigger entrance animation for celebration content
      setTimeout(() => setShowCelebrationContent(true), 100);
    }
  }, [isFinished]);

  const handleCheck = () => {
    if (selectedOption === null) return;
    setStatus('correct'); // Mock logic: always correct for demo
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
      setSelectedOption(null);
      setStatus('idle');
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-50 bg-emerald-400 flex flex-col items-center justify-center font-nunito overflow-hidden transition-colors duration-1000">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {/* Expanding Circles */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-300 rounded-full opacity-50 animate-pulse"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-200 rounded-full opacity-50 animate-ping" style={{ animationDuration: '3s' }}></div>
           
           {/* Floating Particles (Simulated Confetti) */}
           <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
           <div className="absolute top-3/4 left-3/4 w-6 h-6 bg-sky-300 rounded-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
           <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
           <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        </div>

        {/* Content Card */}
        <div className={`relative z-10 w-full max-w-md px-6 text-center transition-all duration-700 transform ${showCelebrationContent ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
           
           {/* Big Icon */}
           <div className="mx-auto w-40 h-40 relative mb-8">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full bg-yellow-400 rounded-[2.5rem] rotate-12 flex items-center justify-center shadow-xl border-[6px] border-yellow-200">
                  <Star className="w-20 h-20 text-white fill-white" />
              </div>
              {/* Stars Decoration */}
              <Star className="absolute -top-2 -right-2 w-10 h-10 text-white fill-white animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Star className="absolute -bottom-2 -left-2 w-8 h-8 text-white fill-white animate-bounce" style={{ animationDelay: '0.4s' }} />
           </div>

           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md tracking-tight">Lesson Complete!</h2>
           
           {/* Stats Grid */}
           <div className="grid grid-cols-2 gap-4 mt-10 mb-12">
               <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30 shadow-lg">
                   <p className="text-emerald-50 font-extrabold text-xs uppercase mb-1 tracking-wider">Total XP</p>
                   <p className="text-4xl font-extrabold text-white drop-shadow-sm">+25</p>
               </div>
               <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/30 shadow-lg">
                   <p className="text-emerald-50 font-extrabold text-xs uppercase mb-1 tracking-wider">Accuracy</p>
                   <p className="text-4xl font-extrabold text-white drop-shadow-sm">100%</p>
               </div>
           </div>

           <button 
             onClick={onComplete}
             className="w-full py-4 bg-white text-emerald-500 font-extrabold text-lg rounded-2xl shadow-[0_6px_0_0_rgba(0,0,0,0.1)] hover:bg-emerald-50 active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
           >
             Continue
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#FDFBF7] z-50 flex flex-col font-nunito">
      {/* Top Bar */}
      <div className="px-6 py-6 flex items-center gap-6 max-w-4xl mx-auto w-full">
        <button onClick={onExit} className="text-slate-300 hover:text-slate-500 transition-colors">
           <X className="w-6 h-6 stroke-[3]" />
        </button>
        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
           <div 
             className="h-full bg-emerald-400 rounded-full transition-all duration-500 ease-out"
             style={{ width: `${progress}%` }}
           ></div>
        </div>
        <div className="text-rose-400 font-extrabold flex items-center gap-1">
           ❤️ 5
        </div>
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-2xl mx-auto">
         
         <div className="w-full text-left mb-8 animate-in slide-in-from-bottom-4 duration-500">
             <h2 className="text-2xl md:text-3xl font-extrabold text-slate-700 mb-6 leading-normal">
                How do you say <span className="text-emerald-500 underline decoration-4 decoration-emerald-200 underline-offset-4">"Bread"</span>?
             </h2>
             
             {/* Character / Illustration Bubble */}
             <div className="flex items-end gap-4 mb-8">
                <div className="text-6xl animate-bounce" style={{ animationDuration: '2s' }}>🐻</div>
                <div className="bg-white border-2 border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm relative -top-4">
                   <button className="flex items-center gap-2 text-slate-700 font-bold text-sm hover:text-sky-500 transition-colors">
                      <Volume2 className="w-5 h-5 text-sky-400" />
                      Listen
                   </button>
                </div>
             </div>
         </div>

         {/* Options */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {['La Manzana', 'El Pan', 'La Leche', 'El Agua'].map((opt, i) => (
               <button
                 key={i}
                 onClick={() => status === 'idle' && setSelectedOption(i)}
                 disabled={status !== 'idle'}
                 className={`
                    p-6 rounded-2xl border-2 border-b-4 font-bold text-lg text-slate-600 transition-all active:scale-95 flex items-center justify-between group
                    ${selectedOption === i 
                        ? 'bg-sky-50 border-sky-400 text-sky-600' 
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }
                 `}
               >
                  {opt}
                  {selectedOption === i && <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>}
               </button>
            ))}
         </div>
      </div>

      {/* Bottom Action Bar */}
      <div className={`p-6 md:p-10 border-t-2 transition-colors duration-300 ${status === 'correct' ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-slate-100'}`}>
         <div className="max-w-4xl mx-auto flex justify-between items-center">
             
             {status === 'correct' ? (
                 <div className="flex items-center gap-4 animate-in slide-in-from-bottom-2">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                     </div>
                     <div>
                         <h3 className="font-extrabold text-emerald-600 text-xl">Nicely done!</h3>
                         <p className="text-emerald-500 font-bold text-sm">Practice makes perfect.</p>
                     </div>
                 </div>
             ) : (
                 <div className="hidden md:block text-slate-400 font-bold text-sm">Select the correct option</div>
             )}

             <button 
               onClick={status === 'idle' ? handleCheck : handleNext}
               disabled={selectedOption === null}
               className={`
                  px-10 py-4 rounded-2xl font-extrabold text-lg uppercase tracking-wide shadow-lg transition-all active:scale-95 w-full md:w-auto
                  ${selectedOption === null 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : status === 'correct' 
                         ? 'bg-emerald-500 text-white shadow-emerald-200 hover:bg-emerald-600' 
                         : 'bg-emerald-400 text-white shadow-emerald-200 hover:bg-emerald-500'
                  }
               `}
             >
                {status === 'idle' ? 'Check' : 'Continue'}
             </button>
         </div>
      </div>
    </div>
  );
};

export default Lesson;