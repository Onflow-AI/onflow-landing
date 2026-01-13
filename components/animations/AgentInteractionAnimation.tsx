'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, AlertCircle, Eye, Search } from 'lucide-react';

export const AgentInteractionAnimation: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const cursorPath = [
    { x: '20%', y: '30%', label: 'Scanning menu...' },
    { x: '70%', y: '25%', label: 'Checking login button...' },
    { x: '50%', y: '60%', label: 'Analyzing form fields...' },
    { x: '80%', y: '80%', label: 'Button unreachable!' },
  ];

  return (
    <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 p-4">
      {/* Browser Bar */}
      <div className="h-8 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2 mb-4 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 h-5 bg-slate-950/50 rounded flex items-center px-3">
          <div className="w-full h-1.5 bg-slate-800 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative aspect-[4/3] bg-white rounded-lg p-6 overflow-hidden">
        {/* Mock UI Elements */}
        <div className="flex justify-between mb-8">
          <div className="w-24 h-6 bg-slate-100 rounded" />
          <div className="flex gap-4">
            <div className="w-12 h-6 bg-slate-100 rounded" />
            <div id="target-1" className={`w-12 h-6 rounded transition-colors duration-500 ${step === 1 ? 'bg-blue-100 ring-2 ring-blue-400' : 'bg-slate-100'}`} />
          </div>
        </div>

        <div className="space-y-4 max-w-sm mb-8">
          <div className="h-8 w-3/4 bg-slate-200 rounded" />
          <div className="h-4 w-full bg-slate-100 rounded" />
          <div className="h-4 w-5/6 bg-slate-100 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-slate-50 border border-slate-100 rounded-xl" />
          <div className={`h-24 rounded-xl border transition-all duration-500 flex items-center justify-center relative ${step === 3 ? 'bg-red-50 border-red-200 ring-2 ring-red-400 scale-[1.02]' : 'bg-slate-50 border-slate-100'}`}>
             {step === 3 && (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center gap-1 text-red-500"
               >
                 <AlertCircle size={24} />
                 <span className="text-[10px] font-bold">PAIN POINT FOUND</span>
               </motion.div>
             )}
          </div>
        </div>

        {/* AI Vision Scan Line */}
        <motion.div 
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-primary/20 shadow-[0_0_15px_rgba(14,112,249,0.5)] z-10"
        />

        {/* Agent Cursor */}
        <motion.div
          animate={{ x: cursorPath[step].x, y: cursorPath[step].y }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute z-20"
        >
          <div className="relative">
            <MousePointer2 className="text-primary fill-primary" size={24} />
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 30 }}
              className="absolute top-0 left-0 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-md flex items-center gap-1 border border-white/20"
            >
               <Eye size={10} /> {cursorPath[step].label}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Log */}
      <div className="mt-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <div className="text-[10px] font-mono text-slate-400 overflow-hidden whitespace-nowrap">
           <span className="text-emerald-400">[computer-vision]</span> analyzing_dom_hierarchy... FOUND focusable=false
        </div>
      </div>
    </div>
  );
};
