'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden section-padding">
      {/* Dark Base - Now full bleed */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Primary Gradient Layer */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square opacity-60 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #0e70f9, #22d3ee, transparent 30%, #0e70f9, #a855f7, transparent 70%, #0e70f9)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary Gradient Layer */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-40 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent, #0e70f9, transparent 25%, #22d3ee, transparent 50%, #a855f7, transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, mixBlendMode: 'overlay' }}></div>


      {/* Content */}
      <Container className="relative z-10 text-center">
        <div className="space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold !text-white leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Ready to ship products users love?
          </h2>

           {/* Subheadline */ }
          <p className="text-lg md:text-xl md:text-2xl !text-blue-100 max-w-2xl mx-auto">
            Join 100+ people waiting for Onflow to test smarter and ship faster.
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
          </div>
        </div>
      </Container>
    </section>
  );
};
