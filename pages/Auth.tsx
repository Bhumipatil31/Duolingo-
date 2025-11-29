import React, { useState } from 'react';
import { Page } from '../types';

interface AuthProps {
  onLogin: () => void;
  onNavigate: (page: Page) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
       <button onClick={() => onNavigate('landing')} className="absolute top-6 left-6 text-slate-400 font-bold hover:text-slate-600">
          ← Back
       </button>

       <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Illustration Side */}
          <div className="hidden md:flex flex-1 bg-emerald-50 flex-col justify-center items-center p-12 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/50 to-transparent"></div>
             <div className="relative z-10 text-center">
                 <div className="w-32 h-32 bg-white rounded-3xl shadow-xl shadow-emerald-100 mx-auto mb-8 flex items-center justify-center text-6xl transform -rotate-6">
                    🦉
                 </div>
                 <h2 className="text-3xl font-extrabold text-emerald-800 mb-4">Welcome back!</h2>
                 <p className="text-emerald-600/80 font-medium">Ready to continue your streak?</p>
             </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                  <h1 className="text-2xl font-extrabold text-slate-800 mb-2">
                      {isLogin ? 'Log in' : 'Create Account'}
                  </h1>
                  <p className="text-slate-400 font-bold text-sm">
                      {isLogin ? 'Enter your details below' : 'Join the Duolingo community'}
                  </p>
              </div>

              <div className="space-y-4">
                  {!isLogin && (
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3.5 font-bold text-slate-700 placeholder-slate-300 focus:outline-none focus:border-emerald-300 focus:bg-white transition-all"
                    />
                  )}
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3.5 font-bold text-slate-700 placeholder-slate-300 focus:outline-none focus:border-emerald-300 focus:bg-white transition-all"
                  />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3.5 font-bold text-slate-700 placeholder-slate-300 focus:outline-none focus:border-emerald-300 focus:bg-white transition-all"
                  />
              </div>

              <button 
                onClick={onLogin}
                className="w-full mt-8 bg-emerald-400 text-white font-extrabold text-lg py-3.5 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-500 transition-all active:scale-95"
              >
                  {isLogin ? 'LOG IN' : 'CREATE ACCOUNT'}
              </button>

              <div className="mt-6 flex items-center gap-4">
                  <div className="h-px bg-slate-100 flex-1"></div>
                  <span className="text-slate-300 text-xs font-bold uppercase">Or continue with</span>
                  <div className="h-px bg-slate-100 flex-1"></div>
              </div>

              <div className="flex gap-4 mt-6">
                  <button className="flex-1 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                     Google
                  </button>
                  <button className="flex-1 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                     Facebook
                  </button>
              </div>

              <p className="text-center mt-8 text-slate-400 font-bold text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-emerald-500 hover:underline"
                  >
                      {isLogin ? 'Sign up' : 'Log in'}
                  </button>
              </p>
          </div>
       </div>
    </div>
  );
};

export default Auth;