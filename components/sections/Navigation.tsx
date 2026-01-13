'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';


const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isJiggling, setIsJiggling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handlePricingClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isJiggling) return;
    
    setIsJiggling(true);
    await controls.start({
      x: [0, -4, 4, -4, 4, 0],
      transition: { duration: 0.4 }
    });
    setTimeout(() => setIsJiggling(false), 1000);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center hover:opacity-90 transition-opacity cursor-pointer"
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
            >
              <Image
                src="/onflow-logo.svg"
                alt="Onflow Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold text-primary">Onflow</span>
            </motion.a>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.name === 'Pricing' ? (
                  <motion.button
                    key={link.name}
                    animate={controls}
                    onClick={handlePricingClick}
                    className="text-gray-400 font-medium transition-colors duration-200 cursor-not-allowed relative"
                  >
                    <span>{link.name}</span>
                  </motion.button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-primary font-medium transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Temporary Sign In Button */}
              <Button variant="ghost" size="md" onClick={handleSignInClick}>
                Sign In
              </Button>
              <Button variant="primary" size="md" href="https://tally.so/r/aQ9gxb">
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  link.name === 'Pricing' ? (
                    <motion.button
                      key={link.name}
                      animate={controls}
                      onClick={handlePricingClick}
                      className="text-left text-gray-400 font-medium transition-all duration-200 py-2 px-4 rounded-lg cursor-not-allowed"
                    >
                      <span>{link.name}</span>
                    </motion.button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-600 hover:text-primary hover:bg-blue-50 font-medium transition-all duration-200 py-2 px-4 rounded-lg cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )
                ))}
                <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                  {/* Temporary Sign In Button (Mobile) */}
                  <Button variant="ghost" size="md" onClick={handleSignInClick}>
                    Sign In
                  </Button>
                  <Button variant="primary" size="md" href="https://tally.so/r/aQ9gxb">
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Temporary Modal Overlay */}
      {isSignInModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsSignInModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center space-y-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-text-dark">Almost There!</h3>
            <p className="text-gray-600">
              Onflow is currently being alpha tested by Onflow. We're polishing the final bits to give you the best experience!
            </p>
            <Button 
              variant="primary" 
              className="w-full" 
              href="https://tally.so/r/aQ9gxb"
              onClick={() => setIsSignInModalOpen(false)}
            >
              Join the Waitlist
            </Button>
            <button 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setIsSignInModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
