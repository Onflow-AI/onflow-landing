'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Zap, BarChart3, Rocket } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const steps = [
  {
    number: '01',
    icon: UserCircle,
    title: 'Define Your Personas',
    description:
      'Use our Persona Generation Engine to create custom user archetypes, or select from pre-built personas. Define goals, behaviors, and expectations for comprehensive testing coverage.',
    image: '/images/step-1.png',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Deploy Agent Swarm',
    description:
      'Launch your agentic swarm to interact with your product. Our AI agents use Computer Vision to see and navigate your interface exactly as real users would, simulating authentic usage patterns.',
    image: '/images/step-2.png',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Review Insights',
    description:
      'Get detailed reports on bugs, UX friction points, and improvement opportunities. Our analytics dashboard surfaces critical issues and tracks user journey success rates across all personas.',
    image: '/images/step-3.png',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Ship Fixes Fast',
    description:
      'Approve AI-generated pull requests or use insights to guide your development. Our automated PRs include code fixes, test updates, and detailed explanations—ready for human review and merge.',
    image: '/images/step-4.png',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="eyebrow">THE PROCESS</p>
          <h2 className="text-h2 mb-6">From feedback to fix in minutes</h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined workflow gets you from testing to deployment faster
            than any traditional QA process.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                {/* Step Number */}
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-br from-primary to-secondary bg-clip-text">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-h3">{step.title}</h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="pt-4 space-y-3">
                  {index === 0 && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Pre-built persona templates for common user types
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Custom persona builder with behavioral parameters
                        </p>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Parallel testing across multiple user personas
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Real-time session recording and screenshots
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Visual */}
              <div
                className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${
                      index % 2 === 0
                        ? 'from-primary/20 to-secondary/20'
                        : 'from-secondary/20 to-primary/20'
                    } rounded-3xl blur-2xl opacity-50`}
                  />

                  {/* Image Placeholder */}
                  <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <step.icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">
                          Step {step.number} Visualization
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      <div className="w-2 h-2 bg-primary/30 rounded-full" />
                      <div className="w-2 h-2 bg-primary/50 rounded-full" />
                      <div className="w-2 h-2 bg-primary rounded-full" />
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
