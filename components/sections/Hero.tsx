'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MockAppUI } from '@/components/ui/MockAppUI';

type TrustLogo = 
  | { name: string; placeholder: true }
  | { name: string; src: string; width: number; height: number; href?: string };

const trustLogos: TrustLogo[] = [
  { name: 'Linear', placeholder: true },
  { name: 'Company 1', placeholder: true },
  { name: 'PixelPro', src: '/images/company1.png', width: 779, height: 239, href: 'https://www.pixelprostudios.sg' },
  { name: 'Company 2', placeholder: true },
  { name: 'Company 3', placeholder: true },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-background pt-20">
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
            Agents that test and{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              make your flows work.
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
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">
              Trusted by product teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-opacity">
              {trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="h-10 flex items-center justify-center"
                >
                  {'placeholder' in logo ? (
                    <div className="h-10 w-24 md:w-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-300">
                      <Plus className="w-5 h-5" />
                    </div>
                  ) : (
                    'href' in logo ? (
                      <a 
                        href={logo.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform inline-block"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={logo.width}
                          height={logo.height}
                          className="h-10 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ) : (
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="h-10 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity"
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};
