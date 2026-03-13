/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface Laureate {
  name: string;
  image: string; // placeholder url
  role: string;
  desc: string;
}

export interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'CORE' | 'ASSET' | 'RISK' | 'LOGISTICS';
  connections: string[];
}
