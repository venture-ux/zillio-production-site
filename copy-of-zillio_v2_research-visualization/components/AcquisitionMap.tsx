/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, TrendingUp, Globe, Compass } from 'lucide-react';

interface TerritoryData {
  industry: string;
  region: string;
  status: 'acquired' | 'pipeline' | 'unexplored';
  count: number;
  pipeline: number;
  totalRevenue: number;
  avgEBITDA: number;
}

const acquisitionData: TerritoryData[] = [
  // Professional Services
  { industry: 'Professional Services', region: 'North America', status: 'acquired', count: 2, pipeline: 3, totalRevenue: 30, avgEBITDA: 14 },
  { industry: 'Professional Services', region: 'EMEA', status: 'pipeline', count: 0, pipeline: 1, totalRevenue: 0, avgEBITDA: 0 },
  { industry: 'Professional Services', region: 'APAC', status: 'unexplored', count: 0, pipeline: 0, totalRevenue: 0, avgEBITDA: 0 },

  // Healthcare
  { industry: 'Healthcare', region: 'North America', status: 'acquired', count: 1, pipeline: 2, totalRevenue: 15, avgEBITDA: 12 },
  { industry: 'Healthcare', region: 'EMEA', status: 'pipeline', count: 0, pipeline: 1, totalRevenue: 0, avgEBITDA: 0 },
  { industry: 'Healthcare', region: 'APAC', status: 'unexplored', count: 0, pipeline: 0, totalRevenue: 0, avgEBITDA: 0 },

  // Industrial Services
  { industry: 'Industrial Services', region: 'North America', status: 'acquired', count: 1, pipeline: 1, totalRevenue: 25, avgEBITDA: 18 },
  { industry: 'Industrial Services', region: 'EMEA', status: 'unexplored', count: 0, pipeline: 0, totalRevenue: 0, avgEBITDA: 0 },
  { industry: 'Industrial Services', region: 'APAC', status: 'unexplored', count: 0, pipeline: 0, totalRevenue: 0, avgEBITDA: 0 },

  // B2B SaaS
  { industry: 'B2B SaaS', region: 'North America', status: 'acquired', count: 1, pipeline: 2, totalRevenue: 20, avgEBITDA: 15 },
  { industry: 'B2B SaaS', region: 'EMEA', status: 'pipeline', count: 0, pipeline: 1, totalRevenue: 0, avgEBITDA: 0 },
  { industry: 'B2B SaaS', region: 'APAC', status: 'pipeline', count: 0, pipeline: 1, totalRevenue: 0, avgEBITDA: 0 },
];

const industries = ['Professional Services', 'Healthcare', 'Industrial Services', 'B2B SaaS'];
const regions = ['North America', 'EMEA', 'APAC'];

export const AcquisitionMap: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  const getCellData = (industry: string, region: string): TerritoryData | undefined => {
    return acquisitionData.find(d => d.industry === industry && d.region === region);
  };

  const getStatusColors = (status: 'acquired' | 'pipeline' | 'unexplored') => {
    switch (status) {
      case 'acquired':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
          border: 'border-emerald-400',
          text: 'text-emerald-900',
          glow: 'shadow-emerald-200'
        };
      case 'pipeline':
        return {
          bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
          border: 'border-amber-400',
          text: 'text-amber-900',
          glow: 'shadow-amber-200'
        };
      case 'unexplored':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-600',
          glow: 'shadow-red-100'
        };
    }
  };

  const handleCellClick = (industry: string, region: string) => {
    const key = `${industry}-${region}`;
    setSelectedCell(selectedCell === key ? null : key);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#f4f1ea] rounded-3xl shadow-xl border border-[#d6cfc2] my-8 w-full relative overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      {/* Header */}
      <div className="w-full flex justify-between items-end mb-6 relative z-10 border-b border-[#c5bda5] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1 opacity-60">
            <Globe size={14} className="text-stone-600" />
            <span className="text-[10px] font-serif font-bold tracking-widest text-stone-600 uppercase">Global Acquisition Strategy</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-900 tracking-wide">TERRITORY DOMINION MAP</h3>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Compass size={20} className="text-stone-400" />
          <div className="text-right">
            <div className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">Est. MMXXVI</div>
            <div className="text-sm font-serif text-stone-800">Zillio Holdings</div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full bg-[#eaddcf] rounded-xl border border-[#c5bda5] shadow-inner overflow-hidden p-6">

        {/* Grid Structure: 4 industries (cols) × 3 regions (rows) */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {/* Column Headers - Industries */}
          <div className="col-span-4 grid grid-cols-4 gap-3 mb-2">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-[9px] font-mono font-bold text-stone-600 uppercase tracking-widest px-2 py-1 bg-stone-100 rounded border border-stone-300">
                  {industry.split(' ').map(word => word.substring(0, 4)).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Territory Cells */}
          {regions.map((region, regionIdx) => (
            <React.Fragment key={region}>
              {industries.map((industry, industryIdx) => {
                const cellData = getCellData(industry, region);
                if (!cellData) return null;

                const colors = getStatusColors(cellData.status);
                const cellKey = `${industry}-${region}`;
                const isSelected = selectedCell === cellKey;
                const cellIndex = regionIdx * industries.length + industryIdx;

                return (
                  <motion.div
                    key={cellKey}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: cellIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 20
                    }}
                    onClick={() => handleCellClick(industry, region)}
                    className={`
                      relative cursor-pointer rounded-lg border-2 p-4 min-h-[120px]
                      transition-all duration-300 ease-in-out
                      ${colors.bg} ${colors.border}
                      hover:scale-105 hover:shadow-lg ${colors.glow}
                      ${isSelected ? 'ring-4 ring-stone-900 ring-opacity-50 scale-105' : ''}
                    `}
                  >
                    {/* Region Label (only show in first column) */}
                    {industryIdx === 0 && (
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full">
                        <div className="text-[10px] font-serif font-bold text-stone-700 uppercase tracking-widest writing-mode-vertical transform -rotate-180 whitespace-nowrap pr-2">
                          {region}
                        </div>
                      </div>
                    )}

                    {/* Cell Content */}
                    <div className="relative z-10">
                      {/* Company Markers */}
                      {cellData.count > 0 && (
                        <div className="flex gap-1 mb-2">
                          {Array.from({ length: cellData.count }).map((_, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: cellIndex * 0.05 + idx * 0.1 + 0.3 }}
                              className="relative"
                            >
                              <MapPin size={16} className={`${colors.text} fill-current`} />
                              {/* Ping animation for acquired companies */}
                              <span className="absolute top-0 left-0 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Status Indicator */}
                      <div className="flex items-center gap-1 mb-2">
                        <div className={`w-2 h-2 rounded-full ${cellData.status === 'acquired' ? 'bg-emerald-500' : cellData.status === 'pipeline' ? 'bg-amber-500 animate-pulse' : 'bg-red-300'}`}></div>
                        <span className="text-[8px] font-mono uppercase tracking-widest text-stone-600">
                          {cellData.status}
                        </span>
                      </div>

                      {/* Key Metrics */}
                      <div className="space-y-1">
                        {cellData.count > 0 && (
                          <div className="text-[10px] font-mono text-stone-700">
                            <span className="font-bold text-stone-900">{cellData.count}</span> acquired
                          </div>
                        )}
                        {cellData.pipeline > 0 && (
                          <div className="text-[10px] font-mono text-stone-700">
                            <span className="font-bold text-stone-900">{cellData.pipeline}</span> pipeline
                          </div>
                        )}
                        {cellData.totalRevenue > 0 && (
                          <div className="text-[10px] font-mono text-stone-700">
                            <span className="font-bold text-stone-900">${cellData.totalRevenue}M</span> rev
                          </div>
                        )}
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isSelected && cellData.count > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pt-3 border-t border-stone-300"
                          >
                            <div className="space-y-1 text-[9px] font-mono text-stone-600">
                              <div className="flex justify-between">
                                <span>Avg EBITDA:</span>
                                <span className="font-bold text-stone-900">{cellData.avgEBITDA}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Integration:</span>
                                <span className="font-bold text-emerald-700">Day 45/90</span>
                              </div>
                              <div className="flex items-center gap-1 mt-2 text-emerald-700">
                                <TrendingUp size={10} />
                                <span className="text-[8px] uppercase tracking-wider">Active</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Unexplored Territory Pattern */}
                    {cellData.status === 'unexplored' && (
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <pattern id={`diagonal-${cellKey}`} patternUnits="userSpaceOnUse" width="8" height="8">
                            <path d="M-1,1 l2,-2 M0,8 l8,-8 M7,9 l2,-2" stroke="#991b1b" strokeWidth="0.5" />
                          </pattern>
                          <rect width="100" height="100" fill={`url(#diagonal-${cellKey})`} />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </React.Fragment>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-[#c5bda5]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-600"></div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-600">Acquired</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-600 animate-pulse"></div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-600">Pipeline</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-300 border border-red-400"></div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-600">Unexplored</span>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <MapPin size={12} className="text-emerald-600 fill-current" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-600">Company Settlement</span>
          </div>
        </div>

        {/* Decorative Compass Rose (Bottom Right) */}
        <div className="absolute bottom-4 right-4 opacity-30">
          <Compass size={40} className="text-stone-600" />
        </div>
      </div>
    </div>
  );
};
