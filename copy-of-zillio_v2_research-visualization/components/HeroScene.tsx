/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useMemo, useState } from 'react';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dataSeed, setDataSeed] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateMouse = (x: number, y: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        // Use requestAnimationFrame to avoid layout thrashing on every event
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
            if(containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', `${relativeX}px`);
                containerRef.current.style.setProperty('--mouse-y', `${relativeY}px`);
            }
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => updateMouse(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
       if(e.touches[0]) updateMouse(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Initial centering
    if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        updateMouse(rect.width / 2, rect.height / 2);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleInteraction = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    // Trigger data refresh
    setTimeout(() => {
        setDataSeed(prev => prev + 1);
        setIsScrambling(false);
    }, 300);
  };

  // Generate Flowing Data Columns - Optimized Count
  const columns = useMemo(() => {
    // REDUCED FOR PERFORMANCE: 50 -> 24 columns
    const colCount = 24; 
    const cols = [];
    
    const financialTerms = ["LIQUIDITY", "YIELD", "ALPHA", "FOREX", "SWAP", "HEDGE", "BETA", "DELTA", "GAMMA", "VEGA", "THETA", "RHO"];
    const codeTerms = ["KERNEL", "BUFFER", "TUNNEL", "DAEMON", "PROXY", "HASH", "CIPHER", "TOKEN", "BLOCK", "NODE", "SHARD"];
    const hexChars = "0123456789ABCDEF";

    for (let i = 0; i < colCount; i++) {
        const items = [];
        // REDUCED FOR PERFORMANCE: 40 -> 15 items per column
        for(let j=0; j < 15; j++) {
            const type = Math.random();
            let text = "";
            
            if (type > 0.7) {
                // Money Data
                const amount = (Math.random() * 10000).toFixed(2);
                text = `$${amount}`;
            } else if (type > 0.35) {
                // Compact Hex
                let hex = "0x";
                for(let k=0; k<4; k++) hex += hexChars[Math.floor(Math.random() * 16)];
                text = hex;
            } else {
                // Short Term
                text = Math.random() > 0.5 ? 
                    financialTerms[Math.floor(Math.random() * financialTerms.length)] :
                    codeTerms[Math.floor(Math.random() * codeTerms.length)];
            }

            items.push({
                text,
                isHighValue: Math.random() > 0.9
            });
        }
        
        // Varying speeds for dynamic feel
        const duration = Math.floor(Math.random() * 15) + 20; // Slower, smoother
        
        cols.push({
            id: i,
            items,
            duration,
            delay: Math.random() * -20
        });
    }
    return cols;
  }, [dataSeed]); 

  // Component to render a single column
  // Optimized: Removed text-shadow animation from dormant layer
  const DataColumn = React.memo(({ col, isReveal }: { col: any, isReveal: boolean }) => (
    <div 
        className={`flex flex-col gap-4 transition-opacity duration-300 will-change-transform ${isScrambling ? 'opacity-50 blur-[1px]' : 'opacity-100'}`}
        style={{
            animation: `scrollUp ${col.duration}s linear infinite`,
            animationDelay: `${col.delay}s`
        }}
    >
        {[...col.items, ...col.items].map((item: any, idx: number) => (
            <div key={`${col.id}-${idx}`} className="font-mono text-[10px] md:text-xs leading-tight whitespace-nowrap">
                <div 
                    className={`flex items-center gap-1 transition-colors duration-200 
                    ${isReveal 
                        ? (item.isHighValue ? 'text-white font-bold' : 'text-[#fef3c7]') 
                        : 'text-[#5c4010]'
                    }`}
                    style={isReveal ? {
                        animation: `glowPulse ${2 + Math.random() * 2}s ease-in-out infinite`
                    } : undefined}
                >
                    <span className={isReveal && item.isHighValue ? 'text-white' : 'opacity-20'}>
                        {isReveal ? (item.isHighValue ? '>' : ':') : ':'}
                    </span>
                    <span className="tracking-tight">{item.text}</span>
                </div>
            </div>
        ))}
    </div>
  ));

  return (
    <div 
      ref={containerRef} 
      onClick={handleInteraction}
      className="absolute inset-0 overflow-hidden select-none cursor-pointer z-0 group"
      style={{ 
          '--mouse-x': '50%', 
          '--mouse-y': '50%',
          background: 'linear-gradient(135deg, #050505 0%, #1a1205 25%, #422a08 50%, #1a1205 75%, #000000 100%)',
          backgroundSize: '400% 400%',
          animation: 'liquidBackground 15s ease infinite'
      } as React.CSSProperties}
    >
      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes liquidBackground {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }
        @keyframes glowPulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
        }
      `}</style>

      {/* --- LAYER 1: THE DORMANT DATA (Base Layer) --- */}
      <div 
        className="absolute inset-0 flex justify-between px-2 md:px-8 opacity-5 pointer-events-none"
      >
         {columns.map((col) => (
             <div key={`base-${col.id}`} className="w-full flex justify-center">
                 <DataColumn col={col} isReveal={false} />
             </div>
         ))}
      </div>

      {/* --- LAYER 2: THE REVEAL (Torch Layer) --- */}
      <div 
        className="absolute inset-0 flex justify-between px-2 md:px-8 pointer-events-none"
        style={{
            maskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black 0%, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black 0%, transparent 70%)`
        }}
      >
         {columns.map((col) => (
             <div key={`reveal-${col.id}`} className="w-full flex justify-center">
                 <DataColumn col={col} isReveal={true} />
             </div>
         ))}
      </div>

      {/* --- LAYER 3: ATMOSPHERE & LIGHTING --- */}
      
      {/* Torch Glow (Warm Gold) */}
      <div 
         className="absolute w-[500px] h-[500px] rounded-full bg-[#C5A059]/20 pointer-events-none blur-3xl transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen will-change-transform"
         style={{ left: 'var(--mouse-x)', top: 'var(--mouse-y)' }}
      />
      
      {/* Specular Highlight (The Source) */}
      <div 
         className="absolute w-[2px] h-[2px] rounded-full bg-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_40px_rgba(255,255,255,0.8)] will-change-transform"
         style={{ left: 'var(--mouse-x)', top: 'var(--mouse-y)' }}
      />
      
      {/* Dynamic Gold Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C5A059]/5 to-transparent opacity-50 pointer-events-none mix-blend-overlay"></div>
      
      {/* --- BOTTOM TRANSITION TO WHITE SECTION --- */}
       <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#F9F8F4] via-[#F9F8F4]/20 to-transparent pointer-events-none blur-[60px]"></div>
       <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#F9F8F4] via-[#F9F8F4]/80 to-transparent pointer-events-none blur-[20px]"></div>
       <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-[#F9F8F4] to-[#F9F8F4]/90 pointer-events-none"></div>

    </div>
  );
};