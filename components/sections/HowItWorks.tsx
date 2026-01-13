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
      'Generate a diverse swarm of agents equipped with unique personas, motives, and goals—perfectly emulating your target audience.',
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
      {/* Scroll-following Line */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 2400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 600,-100 C 600,100 1000,100 1000,600 C 1000,1000 200,1000 200,1300 C 200,1700 1000,1700 1000,2000 C 1000,2300 600,2300 600,2500"
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
              <stop offset="90%" stopColor="#1e40af" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>

        {/* Section Header */}
        <div className="text-center mb-28">
          <p className="eyebrow">THE PROCESS</p>
          <h2 className="text-h2 mb-6">From feedback to fix in minutes</h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Our autonomous agents handle the heavy lifting of user testing, 
            providing you with the insights you need to build better products.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-h3 leading-tight transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-normal">
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
                className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="relative group">
                  {/* Outer Glow Effect */}
                  <div
                    className={`absolute -inset-6 bg-gradient-to-r ${
                      index % 2 === 0
                        ? 'from-primary/10 to-blue-500/10'
                        : 'from-blue-500/10 to-primary/10'
                    } rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  {/* Animation Component wrapper */}
                  <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-1 overflow-visible aspect-[4/3]">
                    <div className="w-full h-full rounded-2xl overflow-visible">
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
