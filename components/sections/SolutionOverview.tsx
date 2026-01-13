'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, ArrowRight, GitPullRequest } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const SolutionOverview: React.FC = () => {
  return (
    <Section id="features" className="bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="eyebrow">MEET ONFLOW</p>
          <h2 className="text-h2 mb-6">
            Agentic testing that thinks like your users
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Our proprietary Browser Using Agents (BUA) leverage Computer Vision to
            interact with your product exactly as real users do.
          </p>
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
