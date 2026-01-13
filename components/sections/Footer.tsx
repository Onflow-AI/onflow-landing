'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { name: 'Privacy', href: '#' },
  { name: 'Terms', href: '#' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Onflow-AI' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/runonflow' },
  { name: 'Email', icon: Mail, href: 'mailto:onflowai.general@gmail.com' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center space-x-1.5 mb-4">
                <Image
                  src="/onflow-logo.svg"
                  alt="Onflow Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-white">Onflow</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Testing evolved. Ship products users love with AI-powered agentic testing.
              </p>
 
               {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-all cursor-pointer group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <ul className="space-y-3 text-center md:text-left">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-white transition-all inline-block cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-gray-400">
                © 2026 Onflow. All rights reserved.
              </p>
              <div className="flex gap-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
