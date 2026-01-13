'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Activity, ShieldCheck, AlertCircle, Layout, Search, Settings, User, MousePointer2 } from 'lucide-react';

export const MockAppUI: React.FC = () => {
  const [showUserCursor, setShowUserCursor] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [logs, setLogs] = useState([
    "Initial Page load successful",
    "Navigated to /checkout",
    "Identifying primary CTA...",
  ]);
  const browserRef = useRef<HTMLDivElement>(null);

  // High-performance mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const completeOrder = () => {
    if (isOrderCompleted) return;
    setIsOrderCompleted(true);
    setLogs(prev => [...prev, "SUCCESS: Order completed"]);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsOrderCompleted(false);
      setLogs(prev => prev.slice(0, 3));
    }, 3000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOrderCompleted) {
        // This is a simplified way to trigger the agent click in sync with its animation
        // In a real app we'd use useAnimation controls
      }
    }, 12000);
    return () => clearInterval(timer);
  }, [isOrderCompleted]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (browserRef.current) {
      const rect = browserRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.15,
      x: 30,
      y: -30,
      z: -100,
      rotateX: 20,
      rotateY: -5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 18,
        mass: 1.2
      }
    },
  };

  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl relative border border-slate-700 flex flex-col" style={{ perspective: '1000px' }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex h-full w-full"
      >
        {/* Sidebar */}
        <motion.div 
          variants={itemVariants}
          className="w-16 md:w-20 bg-slate-800 border-r border-slate-700 flex flex-col items-center py-6 gap-6 shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Layout className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col gap-4">
            {[Activity, Search, Settings, User].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-700 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <motion.header 
            variants={itemVariants}
            className="h-14 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between px-6 shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE TEST
              </div>
              <div className="text-slate-300 text-sm font-medium truncate">
                E-commerce Checkout Flow
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-400 text-xs">3 Agents Running</span>
            </div>
          </motion.header>

          {/* Browser View */}
          <div className="flex-1 p-4 flex gap-4 overflow-hidden">
            <motion.div 
              ref={browserRef}
              variants={itemVariants}
              onMouseEnter={() => setShowUserCursor(true)}
              onMouseLeave={() => setShowUserCursor(false)}
              onMouseMove={handleMouseMove}
              className="flex-1 bg-white rounded-lg border border-slate-700 overflow-hidden relative shadow-inner flex flex-col cursor-none"
            >
              {/* Fake Website UI */}
              <div className="h-10 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <div className="flex-1 max-w-sm h-5 bg-white rounded border border-gray-200 text-[9px] flex items-center px-2 text-gray-400">
                  store.example.com/checkout
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4 relative">
                {isOrderCompleted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <ShieldCheck className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Order Confirmed!</h4>
                    <p className="text-sm text-slate-500">Thank you for your purchase.</p>
                  </motion.div>
                ) : null}
                <div className="h-6 w-1/3 bg-gray-200 rounded" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-gray-300 text-[10px]">Product Image</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    <motion.button 
                      whileTap={{ scale: 0.90 }}
                      onClick={completeOrder}
                      className="h-10 w-full bg-primary/80 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shadow-md !cursor-none hover:bg-primary transition-colors"
                    >
                      COMPLETE ORDER
                    </motion.button>
                  </div>
                </div>
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
              </div>

              {/* Agent Cursor Marker */}
              <motion.div 
                animate={isOrderCompleted ? {
                  x: 350,
                  y: 160,
                  scale: [1, 0.8, 1]
                } : { 
                  x: [100, 250, 200, 150, 350, 350, 350, 100], 
                  y: [100, 150, 300, 200, 160, 160, 160, 100],
                  scale: [1, 1, 1, 1, 0.8, 1, 1, 1]
                }}
                onUpdate={(latest: any) => {
                  // Trigger completion when the agent "clicks" at the 10s mark roughly
                  if (!isOrderCompleted && latest.x === 350 && latest.y === 160 && latest.scale < 0.9) {
                    completeOrder();
                  }
                }}
                transition={{ 
                  duration: 12, 
                  repeat: isOrderCompleted ? 0 : Infinity,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 0.85, 0.9, 1]
                }}
                className="absolute pointer-events-none flex items-start gap-1 z-20"
              >
                <MousePointer2 className="w-5 h-5 text-primary fill-primary drop-shadow-md" />
                <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
                  AGENT
                </div>
              </motion.div>

              {/* User Interactive Cursor */}
              {showUserCursor && (
                <motion.div 
                   className="absolute pointer-events-none flex items-start gap-1 z-30"
                   style={{ 
                     x: smoothX,
                     y: smoothY
                   }}
                >
                  <MousePointer2 className="w-5 h-5 text-indigo-600 fill-indigo-600 drop-shadow-md" />
                  <div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20">
                    USER
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Side Panel Labels */}
            <div className="w-48 hidden lg:flex flex-col gap-3 shrink-0">
              <motion.div 
                variants={itemVariants}
                className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Analysis</span>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight italic">
                  "Agent successfully navigated to cart. No friction detected in this step."
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-red-500/10 p-3 rounded-lg border border-red-500/20 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-3 h-3 text-red-500" />
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Friction point</span>
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  CTA button color doesn't meet AA contrast standards.
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg flex-1"
              >
                <div className="text-[10px] text-slate-500 mb-2">AGENT LOGS</div>
                <div className="space-y-2">
                  {logs.map((log, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <div className={cn(
                        "w-1 h-3 rounded mt-0.5 shrink-0",
                        log.startsWith("SUCCESS") ? "bg-emerald-500" : "bg-slate-700"
                      )} />
                      <div className={cn(
                        "text-[10px] leading-tight",
                        log.startsWith("SUCCESS") ? "text-emerald-400 font-bold" : "text-slate-400"
                      )}>
                        {log}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
    </div>
  );
};
