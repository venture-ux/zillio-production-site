/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp } from 'lucide-react';

export const GrowthGraph: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Start animation loop
    const interval = setInterval(() => {
      setActive(true);
      setTimeout(() => setActive(false), 8000); // 8 second cycle
    }, 9000);
    
    // Initial start
    setTimeout(() => setActive(true), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-1 bg-[#0a0a0a] rounded-3xl border border-stone-800 my-8 shadow-2xl relative w-full overflow-hidden">
      
      {/* Header / CFO Dashboard Overlay */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center gap-2 mb-2">
            <Activity className="text-nobel-gold" size={16} />
            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Projection Analysis</span>
        </div>
        <h3 className="font-serif text-2xl text-white">Hybrid Growth Model</h3>
      </div>

      <div className="absolute top-8 right-8 z-20 text-right">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 border border-stone-700 rounded-full">
            <div className={`w-2 h-2 rounded-full ${active ? 'bg-nobel-gold animate-pulse' : 'bg-stone-600'}`}></div>
            <span className="text-[10px] text-stone-400 font-mono uppercase tracking-widest">Live Simulation</span>
         </div>
      </div>

      {/* Main Graph Container */}
      <div className="relative w-full h-[500px] bg-gradient-to-b from-[#111] to-[#050505] rounded-[22px] flex items-end p-8 overflow-hidden">
        
        {/* Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full h-px bg-stone-500" style={{ bottom: `${i * 20}%` }}></div>
            ))}
            {[...Array(6)].map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full w-px bg-stone-500" style={{ left: `${i * 20}%` }}></div>
            ))}
        </div>

        {/* SVG Chart */}
        <svg className="w-full h-full z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Baseline Trend (Legacy) - Linear faint line */}
            <motion.path
                d="M 0,90 L 100,60"
                fill="none"
                stroke="#44403c"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
            />

            {/* Growth Curve (Hybrid) */}
            {/* Starts linear, hits Singularity at 40%, then curves up exponentially */}
            <motion.path
                d="M 0,90 L 40,78 Q 60,75 75,40 T 100,10"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={active ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 4, ease: "easeInOut" }}
            />

            {/* The Singularity Point (Zillio Integration) */}
            <motion.circle
                cx="40"
                cy="78"
                r="1.5"
                fill="#1a1a1a"
                stroke="#C5A059"
                strokeWidth="0.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            />
            {/* Pulse effect for singularity */}
            <motion.circle
                cx="40"
                cy="78"
                r="4"
                fill="none"
                stroke="#C5A059"
                strokeWidth="0.2"
                initial={{ scale: 0, opacity: 0 }}
                animate={active ? { scale: 3, opacity: 0 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            />

        </svg>

        {/* Labels & Data Points Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
            
            {/* Singularity Label */}
            <motion.div 
                className="absolute left-[40%] top-[78%] -translate-y-full ml-4"
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 1.8 }}
            >
                <div className="flex flex-col">
                    <span className="text-[10px] text-nobel-gold font-bold uppercase tracking-wider bg-stone-900/80 px-2 py-1 rounded border border-nobel-gold/30 backdrop-blur-sm">
                        Singularity Event
                    </span>
                    <span className="text-[8px] text-stone-500 font-mono mt-1 pl-2 border-l border-stone-700">
                        Zillio Integration
                    </span>
                </div>
            </motion.div>

            {/* Mid-Growth Metric */}
            <motion.div 
                className="absolute left-[70%] top-[30%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 2.8 }}
            >
                <div className="bg-stone-800/90 p-3 rounded-xl border border-stone-700 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-1">
                        <TrendingUp size={12} className="text-emerald-400" />
                        <span className="text-[10px] text-stone-300 font-bold uppercase">Revenue Velocity</span>
                    </div>
                    <div className="text-xl font-mono text-white font-medium">3.4x</div>
                </div>
            </motion.div>

            {/* End Goal Metric (138x) */}
            <motion.div 
                className="absolute right-4 top-4"
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 3.5 }}
            >
                <div className="bg-nobel-gold p-4 rounded-2xl shadow-[0_0_30px_rgba(197,160,89,0.3)] text-center">
                    <span className="text-[10px] text-stone-900 font-bold uppercase tracking-widest block mb-1">Amplification</span>
                    <div className="text-4xl font-serif text-stone-900 font-bold">138x</div>
                    <div className="w-full h-px bg-stone-900/20 my-2"></div>
                    <span className="text-[9px] text-stone-800 font-mono">OPTIMIZATION REALIZED</span>
                </div>
            </motion.div>

        </div>

        {/* Axis Labels */}
        <div className="absolute bottom-2 right-4 text-[10px] text-stone-600 font-mono">TIME (Qtr) &rarr;</div>
        <div className="absolute top-4 left-2 text-[10px] text-stone-600 font-mono rotate-90 origin-top-left">&uarr; ENTERPRISE VALUE</div>

      </div>

      {/* CFO Key Performance Indicators (Bottom) */}
      <div className="w-full grid grid-cols-3 gap-4 mt-6 px-4">
          <motion.div 
            className="flex flex-col items-center p-3 bg-stone-900/50 rounded-2xl border border-stone-800"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
          >
              <span className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Cap. Efficiency</span>
              <span className="text-lg text-white font-mono">+42%</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center p-3 bg-stone-900/50 rounded-2xl border border-stone-800"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.7 }}
          >
              <span className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Risk Reduction</span>
              <span className="text-lg text-emerald-400 font-mono">-85%</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center p-3 bg-stone-900/50 rounded-2xl border border-stone-800"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.9 }}
          >
              <span className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Forecast Accuracy</span>
              <span className="text-lg text-nobel-gold font-mono">99.9%</span>
          </motion.div>
      </div>

    </div>
  );
};