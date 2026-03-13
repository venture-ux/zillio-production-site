/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

export const CapitalMap: React.FC = () => {
  // Generate a grid of nodes representing conglomerate channels
  // Using a wider grid for landscape "Map" feel
  const gridRows = 5;
  const gridCols = 9;
  
  const sectors = ["LOGISTICS", "TEXTILES", "FINANCE", "ENERGY", "RETAIL", "TECH", "MEDIA", "REAL ESTATE", "MINING"];
  
  // "Friction Points" (Blockades/Inefficiencies) - Pre-defined for visual interest
  const [frictionPoints, setFrictionPoints] = useState<number[]>([12, 25, 38, 7]);
  
  const { nodes, routes } = useMemo(() => {
    const _nodes = Array.from({ length: gridRows * gridCols }, (_, i) => {
      const row = Math.floor(i / gridCols);
      const col = i % gridCols;
      
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetY = (Math.random() - 0.5) * 15;

      return {
        id: i,
        row,
        col,
        x: ((col + 0.5) / gridCols) * 100 + offsetX,
        y: ((row + 0.5) / gridRows) * 100 + offsetY,
        label: `${sectors[col % sectors.length]}`,
        subLabel: `CH-${(row * gridCols + col).toString().padStart(3, '0')}`,
        potential: Math.floor(Math.random() * 50) + 10, // $M potential
        isGold: Math.random() > 0.7 // High profit channel
      };
    });

    const _routes: any[] = [];
    _nodes.forEach(node => {
        const right = _nodes.find(n => n.row === node.row && n.col === node.col + 1);
        const bottom = _nodes.find(n => n.row === node.row + 1 && n.col === node.col);
        
        if (right) _routes.push({ from: node, to: right });
        if (bottom) _routes.push({ from: node, to: bottom });
    });

    return { nodes: _nodes, routes: _routes };
  }, []); // Only run once

  
  // Selection State - Details only show when selected
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleNodeClick = (id: number) => {
    if (selectedNode === id) {
      setSelectedNode(null); // Deselect
    } else {
      setSelectedNode(id);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#f4f1ea] rounded-3xl shadow-xl border border-[#d6cfc2] my-8 w-full relative overflow-hidden h-[600px]">
      
      {/* Texture Overlay for "Old Map" feel */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {/* Header */}
      <div className="w-full flex justify-between items-end mb-6 relative z-10 border-b border-[#c5bda5] pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1 opacity-60">
                <Compass size={14} className="text-stone-600" />
                <span className="text-[10px] font-serif font-bold tracking-widest text-stone-600 uppercase">Conglomerate Topography</span>
            </div>
            <h3 className="font-serif text-2xl text-stone-900 tracking-wide">CAPITAL TERRITORY MAP</h3>
          </div>
          <div className="text-right hidden sm:block">
              <div className="text-[10px] font-mono text-stone-500 uppercase">Sector Analysis</div>
              <div className="text-lg font-serif text-stone-800">Global Operations</div>
          </div>
      </div>
      
      {/* Map Container - Landscape */}
      <div className="relative w-full h-full bg-[#eaddcf] rounded-xl border border-[#c5bda5] shadow-inner overflow-hidden group cursor-crosshair" onClick={() => setSelectedNode(null)}>
         
         {/* Abstract Topographic Lines / Contours (SVG Background) */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#a89f91" strokeWidth="0.5" strokeDasharray="5 5"/>
            <path d="M0,80 Q40,60 60,80 T100,70" fill="none" stroke="#a89f91" strokeWidth="0.5" strokeDasharray="5 5"/>
            <path d="M0,20 Q30,40 70,10 T100,30" fill="none" stroke="#a89f91" strokeWidth="0.5" strokeDasharray="5 5"/>
            {/* "Coastline" shapes */}
            <path d="M 10,10 Q 30,5 40,20 T 20,40 T 5,30 Z" fill="#d6cfc2" fillOpacity="0.3" stroke="none"/>
            <path d="M 70,60 Q 90,50 95,70 T 80,90 T 60,80 Z" fill="#d6cfc2" fillOpacity="0.3" stroke="none"/>
         </svg>

         {/* Detailed Grid Lines (Lat/Long) */}
         <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
             {/* Major Grid Lines */}
             {[...Array(9)].map((_, i) => (
                 <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-stone-800" style={{ left: `${(i+1) * 10}%` }}></div>
             ))}
             {[...Array(5)].map((_, i) => (
                 <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-stone-800" style={{ top: `${(i+1) * 16}%` }}></div>
             ))}
             
             {/* Minor Grid Pattern using repeating linear-gradient */}
             <div className="absolute inset-0" style={{ 
                backgroundImage: 'linear-gradient(to right, #8a703d 1px, transparent 1px), linear-gradient(to bottom, #8a703d 1px, transparent 1px)',
                backgroundSize: '2% 3%',
                opacity: 0.2
             }}></div>
         </div>

         {/* Trade Routes (Connections) */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
            {routes.map((route, i) => {
               const node = route.from;
               const target = route.to;
               const isBlocked = frictionPoints.includes(node.id) || frictionPoints.includes(target.id);
               const isHighValue = node.isGold && target.isGold;
               
               return (
                   <motion.path 
                     key={`route-${i}`}
                     d={`M ${node.x}% ${node.y}% L ${target.x}% ${target.y}%`}
                     stroke={isBlocked ? '#ef4444' : isHighValue ? '#C5A059' : '#a89f91'}
                     strokeWidth={isHighValue ? 1.5 : 0.5}
                     strokeOpacity={isBlocked ? 0.3 : 0.4}
                     fill="none"
                     strokeDasharray={isBlocked ? "2 2" : "none"}
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 2, delay: Math.random() }}
                   />
               )
            })}
         </svg>

         {/* Nodes (Territories/Channels) */}
         {nodes.map((node) => {
            const isFriction = frictionPoints.includes(node.id);
            const isSelected = selectedNode === node.id;
            
            return (
                <div
                    key={`node-${node.id}`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNodeClick(node.id);
                    }}
                >
                    <button
                        className={`rounded-full border shadow-sm transition-all duration-300 relative flex items-center justify-center
                            ${isSelected ? 'w-6 h-6 z-30' : 'w-2 h-2 z-20 hover:scale-150'}
                            ${isFriction ? 'bg-red-500 border-red-800' : 
                              node.isGold ? 'bg-nobel-gold border-[#8a703d]' : 
                              'bg-stone-300 border-stone-500 hover:bg-white'}
                        `}
                    >
                         {isSelected && (
                           <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                         )}
                    </button>

                    {/* Ping Animation for Gold Nodes */}
                    {node.isGold && !isSelected && !isFriction && (
                        <div className="absolute inset-0 rounded-full bg-nobel-gold animate-ping opacity-30 pointer-events-none"></div>
                    )}
                    
                    {/* Tooltip - Data Marker (Only visible on Click) */}
                    <AnimatePresence>
                        {isSelected && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max z-50 pointer-events-none"
                            >
                                <div className="bg-[#fffefc] px-4 py-3 rounded-xl border border-[#c5bda5] shadow-2xl text-center min-w-[120px]">
                                    <div className="text-[10px] font-serif font-bold text-stone-900 uppercase tracking-widest border-b border-stone-200 pb-2 mb-2">
                                        {node.label}
                                    </div>
                                    <div className="flex justify-between items-center gap-4 mb-1">
                                       <span className="text-[9px] font-mono text-stone-400">ID</span>
                                       <span className="text-[9px] font-mono text-stone-600 font-bold">{node.subLabel}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                       <span className="text-[9px] font-mono text-stone-400">STATUS</span>
                                       <span className={`text-[9px] font-bold ${isFriction ? 'text-red-600' : 'text-emerald-600'}`}>
                                            {isFriction ? 'BLOCKED' : 'ACTIVE'}
                                       </span>
                                    </div>
                                    {!isFriction && (
                                      <div className="mt-2 pt-2 border-t border-dashed border-stone-200">
                                         <div className="text-[10px] text-nobel-gold font-bold">
                                            EST. YIELD: ${node.potential}M
                                         </div>
                                      </div>
                                    )}
                                </div>
                                {/* Arrow */}
                                <div className="w-2 h-2 bg-[#fffefc] border-r border-b border-[#c5bda5] transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            )
         })}

         {/* Map Legend Overlay */}
         <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-xl border border-[#c5bda5] shadow-lg backdrop-blur-sm z-30">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-nobel-gold border border-[#8a703d]"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-600">High Yield</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-stone-300 border border-stone-500"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Standard Channel</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 border border-red-800"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-400">Capital Friction</span>
                </div>
            </div>
         </div>
      </div>
      
      {/* Map Footer status */}
      <div className="mt-4 flex w-full justify-between items-center px-2 text-[#8a703d] font-mono text-[10px] tracking-widest">
         <div>COORDINATES: 42°N 71°W</div>
         <div>TOTAL CHANNELS: {nodes.length}</div>
         <div>OPPORTUNITY GAP: {frictionPoints.length} DETECTED</div>
      </div>

    </div>
  );
};