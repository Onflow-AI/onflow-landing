'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, GitBranch } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const features = [
  {
    icon: Eye,
    title: 'Computer Vision Intelligence',
    description:
      'Our browser-using agents see your product exactly like humans—identifying friction, bugs, and pain points by navigating your actual interface.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Users,
    title: 'Agentic Personas',
    description:
      'We generate a fleet of agents equipped with unique motives and goals, emulating your real users to provide invaluable, tangible feedback.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: GitBranch,
    title: 'Automated Evolution',
    description:
      'Move beyond analysis. High-impact recommendations are aggregated and improvements are pushed directly to your product after human review.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
];

export const KeyDifferentiators: React.FC = () => {
  return (
    <Section id="key-features" className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="eyebrow">WHY ONFLOW</p>
          <h2 className="text-h2 mb-6">Testing evolved</h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            While the testing market is saturated, Onflow stands alone with our
            proprietary technology and end-to-end solution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden group cursor-pointer">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-h4 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all cursor-pointer">
                    <span className="group-hover:underline">Learn more</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                1
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                2
              </div>
              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                3
              </div>
            </div>
            <p className="text-sm font-semibold text-text-dark">
              The only platform combining Vision AI, Personas, and Auto-PR
              generation
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
