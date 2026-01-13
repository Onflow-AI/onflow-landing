'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Users, Eye, Zap, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { PersonaAnimation } from '@/components/animations/PersonaAnimation';
import { AgentInteractionAnimation } from '@/components/animations/AgentInteractionAnimation';
import { InsightFixAnimation } from '@/components/animations/InsightFixAnimation';

const steps = [
  {
    number: '01',
    icon: Users,
    title: 'AI Persona Generation',
    description:
      'Generate a diverse swarm of agents equipped with unique personas, motives, and goals.',
    visual: <PersonaAnimation />,
    features: [
      'Custom user archetypes',
      'Goal-oriented behavior simulation',
      'Dynamic motive assignment'
    ]
  },
  {
    number: '02',
    icon: Eye,
    title: 'Human-Like Testing',
    description:
      'Powered by computer vision, our agents use real browsers to interact with your product, uncovering friction and bugs as they navigate.',
    visual: <AgentInteractionAnimation />,
    features: [
      'Visual-first interaction',
      'Real-world browser simulation',
      'Automated friction detection'
    ]
  },
  {
    number: '03',
    icon: Zap,
    title: 'Actionable Insights & Fixes',
    description:
      "Every agent provides tangible feedback that's aggregated into recommendations, with improvements ready to be pushed directly after review.",
    visual: <InsightFixAnimation />,
    features: [
      'Aggregated user feedback',
      'Actionable recommendations',
      'Direct-to-product improvements'
    ]
  },
];

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.05"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      {/* Scroll-following Line (Desktop only) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 2400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 600,-100 C 600,100 850,100 850,600 C 850,1000 350,1000 350,1300 C 350,1700 850,1700 850,2000 C 850,2300 600,2300 600,2500"
            stroke="url(#lineGradient)"
            strokeWidth="10"
            strokeDasharray="12 12"
            strokeLinecap="round"
            style={{ pathLength }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0e70f9" stopOpacity="0" />
              <stop offset="10%" stopColor="#0e70f9" stopOpacity="0.7" />
              <stop offset="90%" stopColor="#22d3ee" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10" ref={containerRef}>

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-28">
          <p className="eyebrow">THE PROCESS</p>
          <h2 className="text-3xl md:text-4xl lg:text-h2 mb-6">From feedback to fix in minutes</h2>
          <p className="text-body-base md:text-body-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Our autonomous agents handle the heavy lifting of user testing, 
            providing you with the insights you need to build better products.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-full"
            >
              {/* Content */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-h3 leading-tight transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-2 space-y-4">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="text-base text-gray-700 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Animation Container */}
              <div
                className={`relative w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="relative group">
                  {/* Animation Component wrapper */}
                  <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-1 overflow-hidden aspect-[4/3]">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      {step.visual}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
