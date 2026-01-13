'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Zap, Heart } from 'lucide-react';

const personas = [
  {
    name: 'Sarah',
    role: 'Power User',
    goal: 'Speed & Efficiency',
    icon: Zap,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Marcus',
    role: 'First-time Visitor',
    goal: 'Clarity & Onboarding',
    icon: User,
    color: 'from-purple-500 to-pink-400',
  },
  {
    name: 'Elena',
    role: 'Decision Maker',
    goal: 'ROI & Features',
    icon: Target,
    color: 'from-emerald-500 to-teal-400',
  },
];

export const PersonaAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 bg-slate-50 rounded-2xl overflow-visible border border-slate-200">
      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex items-center gap-3 relative overflow-visible group"
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${persona.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
              <persona.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-800 text-sm truncate">{persona.name}</h4>
              <div className="flex flex-col gap-0.5 mt-0.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Persona: {persona.role}</span>
                <span className="text-[10px] text-slate-600 flex items-center gap-1 truncate">
                  <Target size={8} /> Goal: {persona.goal}
                </span>
              </div>
            </div>
            
            {/* Animated data pulse */}
            <motion.div 
              className="absolute right-4 top-1/2 -translate-y-1/2"
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
      </div>
    </div>
  );
};
