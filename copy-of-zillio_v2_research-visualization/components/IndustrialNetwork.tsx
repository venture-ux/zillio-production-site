
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NodeData } from '../types';

// Mock Ontology Data
const initialNodes: NodeData[] = [
  { id: '1', label: 'GLOBAL ORDER #8821', x: 50, y: 50, type: 'CORE', connections: ['2', '3', '4'] },
  { id: '2', label: 'INVENTORY ASSET', x: 30, y: 30, type: 'ASSET', connections: [] },
  { id: '3', label: 'CASH FLOW', x: 70, y: 30, type: 'RISK', connections: ['5'] },
  { id: '4', label: 'LOGISTICS NODE', x: 50, y: 70, type: 'LOGISTICS', connections: ['6'] },
  { id: '5', label: 'FOREX RATE', x: 85, y: 20, type: 'RISK', connections: [] },
  { id: '6', label: 'SHIPPING CONTAINER', x: 40, y: 85, type: 'LOGISTICS', connections: [] },
  { id: '7', label: 'RAW MATERIAL', x: 15, y: 40, type: 'ASSET', connections: ['2'] },
];

const IndustrialNetwork: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Auto pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = initialNodes[Math.floor(Math.random() * initialNodes.length)].id;
      setActiveNode(randomNode);
      setTimeout(() => setActiveNode(null), 1500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden flex items-center justify-center perspective-1000">
       {/* 3D Floor Grid Effect */}
       <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#C5A059]/10 to-transparent transform -skew-x-12 opacity-30 pointer-events-none"></div>

      <div className="relative w-full h-full max-w-4xl max-h-[600px] p-10">
        <svg className="w-full h-full overflow-visible">
          <defs>
             <filter id="gold-glow-svg">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
          </defs>

          {/* Connections */}
          {initialNodes.map(node => (
            node.connections.map(targetId => {
              const target = initialNodes.find(n => n.id === targetId);
              if (!target) return null;
              
              const isActive = activeNode === node.id || activeNode === targetId;

              return (
                <motion.line
                  key={`${node.id}-${targetId}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={isActive ? '#C5A059' : '#4b5563'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.8 : 0.3}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
              );
            })
          ))}

          {/* Nodes */}
          {initialNodes.map((node) => {
            const isActive = activeNode === node.id;
            
            return (
              <g key={node.id} 
                 onClick={() => setActiveNode(node.id)}
                 className="cursor-pointer hover:opacity-100 transition-opacity"
              >
                {/* Node Glow */}
                {isActive && (
                  <motion.circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="20"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="1"
                    initial={{ scale: 0.5, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
                
                {/* Node Core */}
                <circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={node.type === 'CORE' ? 6 : 4}
                  fill={isActive ? '#C5A059' : '#1f2937'}
                  stroke={isActive ? '#fff' : '#8a703d'}
                  strokeWidth="2"
                  filter="url(#gold-glow-svg)"
                />

                {/* Node Label */}
                <foreignObject x={`${node.x}%`} y={`${node.y}%`} width="150" height="50" style={{ overflow: 'visible' }}>
                   <div className={`transform -translate-x-1/2 mt-4 text-center transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-60'}`}>
                      <div className={`text-[10px] font-mono tracking-wider font-bold ${isActive ? 'text-[#DCCA98] drop-shadow-[0_0_5px_rgba(197,160,89,0.8)]' : 'text-stone-500'}`}>
                        {node.label}
                      </div>
                      {isActive && (
                        <div className="text-[8px] text-white bg-[#C5A059]/20 px-1 py-0.5 rounded-full border border-[#C5A059]/50 inline-block mt-1 backdrop-blur-sm">
                          LIVE DATA
                        </div>
                      )}
                   </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>

        {/* Console Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-stone-900/90 border-t border-[#C5A059]/30 px-8 py-2 rounded-t-3xl backdrop-blur-md w-max max-w-full">
           <div className="text-[10px] text-[#C5A059] font-mono tracking-[0.2em] uppercase animate-pulse">
              System Ontology Active • {initialNodes.length} Nodes Connected
           </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialNetwork;
