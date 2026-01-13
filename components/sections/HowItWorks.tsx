'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ArrowRight, Users, Eye, Zap } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'AI Personas',
    description: 'Diverse simulated users'
  },
  {
    icon: Eye,
    title: 'Visual Testing',
    description: 'Human-like navigation'
  },
  {
    icon: Zap,
    title: 'Actionable Fixes',
    description: 'Direct product improvements'
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="eyebrow">THE PROCESS</p>
          <h2 className="text-h2 mb-6 text-[#003040]">From feedback to fix in minutes</h2>
          <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
            Our autonomous agents handle the heavy lifting of user testing, 
            providing you with the insights you need to build better products.
          </p>
        </div>

        {/* Steps Flow - Horizontal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex-1 w-full bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 md:p-10 flex flex-col items-center text-center group hover:border-primary/20 transition-colors"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0e70f9] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-10">
                  {index + 1}
                </div>

                {/* Icon Box */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0e70f9] to-[#008ba6] rounded-xl text-white mb-6">
                  <step.icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#003040] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  {step.description}
                </p>
              </motion.div>

              {/* Connecting Arrow (only between cards) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center p-2 text-primary">
                  <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0 opacity-80" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
