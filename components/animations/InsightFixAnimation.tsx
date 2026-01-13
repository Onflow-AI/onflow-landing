'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileJson, MessageSquare, Terminal, GitBranch, ArrowRight } from 'lucide-react';

const feedbacks = [
  "Color contrast too low",
  "Checkout loop detected",
  "Confusing label on CTA",
];

export const InsightFixAnimation: React.FC = () => {
  const [stage, setStage] = useState(0); // 0: Feedbacks, 1: Aggregating, 2: Recommendation, 3: Fixed

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-visible border border-white/20 flex flex-col p-4">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        
        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.div 
              key="stage0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col gap-3 w-full max-w-xs"
            >
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mb-2">Incoming Agent Feedback</p>
              {feedbacks.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/40 backdrop-blur-sm p-2 rounded-lg border border-white/30 shadow-md flex items-center gap-3"
                >
                  <MessageSquare size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-slate-700">{f}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {stage === 1 && (
            <motion.div 
              key="stage1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
                />
                <FileJson className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={24} />
              </div>
              <p className="text-sm font-bold text-slate-600">Aggregating Insights...</p>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div 
              key="stage2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full max-w-[240px] bg-slate-900/40 backdrop-blur-md rounded-xl p-4 shadow-xl space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-bold uppercase">Proposed Improvement</span>
                <GitBranch size={14} className="text-slate-500" />
              </div>
              <h4 className="text-white text-sm font-bold">Update checkout buttons to #1E40AF</h4>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2 }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500" />
                   <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                 </div>
                 <span className="text-[10px] text-slate-500">Awaiting Human Review</span>
              </div>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div 
              key="stage3"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
                 <CheckCircle2 size={40} />
              </div>
              <div className="space-y-1 text-center">
                <h4 className="text-xl font-bold text-slate-800">Deployed!</h4>
                <p className="text-sm text-slate-500 italic">"UX friction reduced by 40%"</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Connection lines or particles */}
      {stage === 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 300 - 150, y: Math.random() * 400 - 200, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-primary/40 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};
