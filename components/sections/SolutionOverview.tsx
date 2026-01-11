'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, MessageSquare, GitPullRequest, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const flowSteps = [
  {
    icon: Users,
    title: 'User Persona',
    description: 'Define target users',
  },
  {
    icon: Eye,
    title: 'Agentic Testing',
    description: 'AI agents test with vision',
  },
  {
    icon: MessageSquare,
    title: 'Feedback',
    description: 'Actionable insights',
  },
  {
    icon: GitPullRequest,
    title: 'Auto PRs',
    description: 'Automated fixes',
  },
];

export const SolutionOverview: React.FC = () => {
  return (
    <Section id="solution" className="bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="eyebrow">MEET ONFLOW</p>
          <h2 className="text-h2 mb-6">
            Agentic testing that thinks like your users
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Our proprietary Browser Using Agents (BUA) leverage Computer Vision to
            interact with your product exactly as real users do—seeing, clicking,
            and experiencing every element of your interface.
          </p>
        </div>

        {/* Animated Flow Diagram */}
        <div className="relative">
          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {flowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-h5 mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600">{step.description}</p>

                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Arrow (desktop only) */}
                  {index < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </motion.div>
                    </div>
                  )}

                  {/* Arrow (mobile only) */}
                  {index < flowSteps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.3,
                        }}
                      >
                        <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* Animated Background Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-h5 mb-2">See Like Humans</h4>
            <p className="text-gray-600">
              Our agents process visual cues, get confused by bad UI, and navigate
              exactly as your users would.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-h5 mb-2">Diverse Personas</h4>
            <p className="text-gray-600">
              Test with AI agents representing different user archetypes, goals,
              and behaviors.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GitPullRequest className="w-6 h-6 text-success" />
            </div>
            <h4 className="text-h5 mb-2">Instant Action</h4>
            <p className="text-gray-600">
              Convert feedback into features with automatically generated,
              human-verified pull requests.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
