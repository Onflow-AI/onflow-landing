'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-secondary" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready to ship products users love?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Join 200+ teams using Onflow to test smarter and ship faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 shadow-xl hover:shadow-2xl group"
              href="https://tally.so/r/aQ9gxb"
            >
              Join Our Waitlist
              <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>5-minute setup</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              200+
            </div>
            <div className="text-blue-100 text-sm md:text-base">
              Active Teams
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              50K+
            </div>
            <div className="text-blue-100 text-sm md:text-base">
              Tests Run
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              99.9%
            </div>
            <div className="text-blue-100 text-sm md:text-base">
              Uptime
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
