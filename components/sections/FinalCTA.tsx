'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Primary Vortex Layer */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square opacity-60 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #0e70f9, #22d3ee, transparent 30%, #0e70f9, #a855f7, transparent 70%, #0e70f9)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary Counter-Vortex Layer */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-40 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent, #0e70f9, transparent 25%, #22d3ee, transparent 50%, #a855f7, transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }}></div>


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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !text-white leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Ready to ship products users love?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl !text-blue-100 max-w-2xl mx-auto">
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

      </div>
    </Section>
  );
};
