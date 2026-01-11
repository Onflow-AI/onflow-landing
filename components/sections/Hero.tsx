'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MockAppUI } from '@/components/ui/MockAppUI';

const trustLogos = [
  'Company 1',
  'Company 2',
  'Company 3',
  'Company 4',
  'Company 5',
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-background pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Launching Q1 2026
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-hero font-extrabold text-text-dark max-w-5xl mb-6 leading-tight"
          >
            Ship products users{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              actually love
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-gray-600 max-w-3xl mb-10"
          >
            Onflow uses AI agents with computer vision to test your product like
            real users—finding bugs, UX issues, and friction before launch.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button variant="primary" size="lg" className="group" href="https://tally.so/r/aQ9gxb">
              Join Our Waitlist
              <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
            </Button>
          </motion.div>
          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-8 w-full max-w-5xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-3xl opacity-50" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-2 md:p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 border border-slate-800">
                  <MockAppUI />
                </div>
              </div>
            </div>
          </motion.div>


                    {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full py-16 mt-8"
          >
            <p className="text-sm text-gray-500 mb-6">
              Trusted by product teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50 hover:opacity-75 transition-opacity">
              {trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-8 px-6 flex items-center justify-center bg-gray-200 rounded text-gray-600 font-semibold text-sm"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
