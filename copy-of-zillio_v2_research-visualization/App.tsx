/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/HeroScene';
import IndustrialNetwork from './components/IndustrialNetwork';
import { CapitalMap } from './components/CapitalMap';
import { AcquisitionMap } from './components/AcquisitionMap';
import { GrowthGraph } from './components/GrowthGraph';
import { ArrowDown, Menu, X, ArrowRight, AlertCircle, Key, Activity } from 'lucide-react';

const DiagnosisCard = ({ title, sub, symptom, cure, impact, delay }: { title: string, sub: string, symptom: string, cure: string, impact: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up p-8 bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 w-full hover:border-nobel-gold relative overflow-hidden" style={{ animationDelay: delay }}>
       {/* Hover Reveal Effect */}
       <div className="absolute top-0 left-0 w-1 h-full bg-nobel-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

       <div className="mb-6 relative z-10">
          <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <Activity size={12} className="text-nobel-gold" />
            {sub}
          </p>
          <h3 className="font-serif text-2xl text-stone-900 leading-tight">{title}</h3>
       </div>

       <div className="space-y-5 mb-8 flex-grow relative z-10">
          <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={14} className="text-red-900/60" />
                  <span className="text-[10px] font-bold uppercase text-stone-400">The Linear Lock (Symptom)</span>
              </div>
              <p className="text-sm text-stone-600 font-light italic leading-relaxed">
                  "{symptom}"
              </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 group-hover:bg-nobel-gold/5 group-hover:border-nobel-gold/20 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                  <Key size={14} className="text-nobel-gold" />
                  <span className="text-[10px] font-bold uppercase text-nobel-gold">The Zillio Key (Cure)</span>
              </div>
               <p className="text-sm text-stone-800 font-medium leading-relaxed">
                  {cure}
              </p>
          </div>
       </div>

       <div className="pt-6 border-t border-stone-100 mt-auto relative z-10">
          <div className="flex justify-between items-center group/btn cursor-pointer">
              <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-stone-400 mb-1">Projected Impact</span>
                  <span className="text-sm font-serif text-stone-900 font-bold">{impact}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover/btn:bg-stone-900 group-hover/btn:text-white transition-colors border border-stone-200">
                  <ArrowRight size={14} />
              </div>
          </div>
       </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-sm pb-1 transition-colors ${scrolled ? 'bg-stone-900 text-nobel-gold' : 'bg-white/20 text-white backdrop-blur-md border border-white/30'}`}>Z</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-colors ${scrolled ? 'text-stone-900' : 'text-white drop-shadow-md'}`}>
              ZILLIO <span className={`font-normal ${scrolled ? 'text-stone-500' : 'text-stone-200'}`}>IND.</span>
            </span>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-stone-600' : 'text-white drop-shadow-md'}`}>
            <a href="#awakening" onClick={scrollToSection('awakening')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">I. Awakening</a>
            <a href="#audit" onClick={scrollToSection('audit')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">II. Audit</a>
            <a href="#research" onClick={scrollToSection('research')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Research</a>
            <a href="#amplification" onClick={scrollToSection('amplification')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">III. Amplification</a>
            <a href="#industries" onClick={scrollToSection('industries')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Diagnostics</a>
            <a 
              href="#contact"
              className={`px-6 py-2 rounded-full transition-colors shadow-sm cursor-pointer uppercase text-xs tracking-widest font-bold ${scrolled ? 'bg-stone-900 text-white hover:bg-nobel-gold hover:text-stone-900' : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-stone-900'}`}
            >
              Partner
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-stone-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in text-stone-900">
            <a href="#awakening" onClick={scrollToSection('awakening')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Phase I : Awakening</a>
            <a href="#audit" onClick={scrollToSection('audit')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Phase II : Audit</a>
            <a href="#amplification" onClick={scrollToSection('amplification')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Phase III : Amplification</a>
            <a href="#industries" onClick={scrollToSection('industries')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Diagnostics</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#b8860b]">
        <HeroScene />
        
        {/* Main Content Overlay - Added strong shadow/blur for legibility on gold */}
        <div className="relative z-20 container mx-auto px-6 text-center pointer-events-none">
          
          <div className="relative inline-block">
            {/* Stronger backdrop for text to prevent overlap with bright gold background */}
            <div className="absolute inset-0 bg-black/50 blur-[80px] -z-10 rounded-full scale-125"></div>
            
            <div className="pointer-events-auto inline-block mb-6 px-5 py-2 border border-white/20 text-white text-xs tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-md bg-stone-900/40 shadow-xl">
              Enterprise Intelligence
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-white drop-shadow-2xl">
              ZILLIO <br/><span className="italic font-normal text-stone-200 text-2xl md:text-4xl block mt-6 drop-shadow-lg">Transmuting Chaos into Consciousness</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 font-light leading-relaxed mb-12 drop-shadow-xl font-sans">
              We operate at the intersection of digital archaeology and futuristic architecture, refining legacy foundations into a singular, structured intelligent core.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 pointer-events-auto">
             <a href="#awakening" onClick={scrollToSection('awakening')} className="px-7 py-3 bg-white text-stone-900 text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-stone-900 hover:text-white transition-colors shadow-xl shadow-black/20 border border-white/50 backdrop-blur-sm">
               Explore Architecture
             </a>
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce duration-[2000ms]">
             <ArrowDown className="text-white drop-shadow-lg" size={20} />
          </div>
        </div>
      </header>

      <main>
        {/* Phase I: Awakening */}
        <section id="awakening" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="aspect-[4/5] bg-[#1a1a1a] rounded-3xl overflow-hidden relative border border-stone-800 shadow-2xl">
                 <IndustrialNetwork />
              </div>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="inline-block mb-3 px-3 py-1 rounded-full border border-stone-200 bg-stone-50 text-xs font-bold tracking-widest text-nobel-gold uppercase">Phase I</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-stone-900">The Architectural Awakening</h2>
              <h3 className="text-xl font-light text-stone-500 mb-8 italic">Accessing Legacy Data to Form the Intelligent Core</h3>
              
              <div className="w-16 h-1 bg-nobel-gold mb-8 rounded-full"></div>
              
              <div className="text-lg text-stone-600 leading-relaxed space-y-6">
                <p>
                  Your legacy infrastructure isn't dead; it's dormant. Zillio acts as the architect that accesses these forgotten foundations—the messy, unstructured data—and refines them.
                </p>
                <p>
                  We don't just clean data; we transmute chaos into a singular, structured, intelligent consciousness for the enterprise. It is digital archaeology meeting futuristic architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase II: Audit */}
        <section id="audit" className="py-24 bg-[#F5F4F0] border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white text-stone-900 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200 shadow-sm">
                           Phase II
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Capital Cartography</h2>
                        <h3 className="text-xl font-light text-stone-500 mb-8 italic">Mapping Hidden Revenue Streams</h3>
                        
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Like an explorer mapping a new continent, Zillio visualizes every channel of your conglomerate. We don't just find inefficiencies; we discover dormant capital.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Every node on this map represents a potential profit center. We identify the friction points—the "blockades" stopping your flow—and illuminate the trade routes that will maximize deployment. It is a precise topography of your financial future.
                        </p>
                    </div>
                    <div>
                        <CapitalMap />
                    </div>
                </div>
            </div>
        </section>

        {/* Research: Acquisition Territory Map */}
        <section id="research" className="py-24 bg-white border-t border-stone-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-stone-50 text-stone-900 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200 shadow-sm">
                           Research
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Acquisition Territory</h2>
                        <h3 className="text-xl font-light text-stone-500 mb-8 italic">Claiming World's Assets Through Strategic Rollups</h3>

                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Every territory on this map represents a fragmented industry awaiting consolidation. Zillio doesn't just acquire—we claim entire sectors through tech-enabled rollups.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Green territories show completed acquisitions with active integration. Yellow marks our pipeline—targets identified, diligence underway. Red territories await our arrival.
                        </p>
                        <div className="flex gap-3 text-sm text-stone-500 font-mono">
                            <div className="px-3 py-1 bg-stone-50 rounded-lg border border-stone-200">
                                <span className="font-bold text-stone-900">5</span> Acquired
                            </div>
                            <div className="px-3 py-1 bg-stone-50 rounded-lg border border-stone-200">
                                <span className="font-bold text-stone-900">9</span> Pipeline
                            </div>
                            <div className="px-3 py-1 bg-stone-50 rounded-lg border border-stone-200">
                                <span className="font-bold text-stone-900">$90M</span> Revenue
                            </div>
                        </div>
                    </div>
                    <div>
                        <AcquisitionMap />
                    </div>
                </div>
            </div>
        </section>

        {/* Phase III: Amplification */}
        <section id="amplification" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full bg-stone-600 blur-[150px] absolute top-[-200px] right-[-200px]"></div>
                <div className="w-[600px] h-[600px] rounded-full bg-nobel-gold blur-[150px] absolute bottom-[-100px] left-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <GrowthGraph />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            Phase III
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">The Amplification Event</h2>
                        <h3 className="text-xl font-light text-stone-400 mb-8 italic">Profit Maximization • The 138x Concept</h3>
                        
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            This is the resulting physics of the Zillio architecture. When data is unified and gaps are closed, revenue streams don't just add up; they amplify. 
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            This visual represents the immense, steady gravitational pull of the Zillio OS, focusing fragmented income into a single, high-density beam of realized value.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Applied Intelligence / Target Sectors */}
        <section id="industries" className="py-24 bg-white">
           <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Sector Diagnostics</div>
                    <h2 className="font-serif text-4xl md:text-6xl mb-6 text-stone-900">Applied Intelligence</h2>
                    <p className="text-stone-600 text-lg max-w-4xl mx-auto leading-relaxed italic">
                        "You possess immense resources—assets, traffic, capital—but are locked in linear growth. <br/>
                        We hold the key to structural leverage, transforming your 2D business into a 3D asset."
                    </p>
                </div>
                
                {/* Top Row: 3 Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <DiagnosisCard 
                        title="Private Equity"
                        sub="Operations Team"
                        symptom="Acquiring high-potential assets but struggling to integrate operational efficiency at speed."
                        cure="Systematized operational overhaul & digital leverage."
                        impact="Rapid EBITDA Expansion"
                        delay="0s" 
                    />
                    <DiagnosisCard 
                        title="Legacy Conglomerates"
                        sub="Family Offices"
                        symptom="Massive resource base and legacy assets locked in static, linear yield models."
                        cure="Digital archaeology to structure legacy data into active assets."
                        impact="2D Business → 3D Asset"
                        delay="0.1s" 
                    />
                    <DiagnosisCard 
                        title="Corporate Ventures"
                        sub="Venture Builders"
                        symptom="High capital burn with chaotic, unpredictable incubation results."
                        cure="Modular growth architecture & standardized venture scaling."
                        impact="Repeatable Success Models"
                        delay="0.2s" 
                    />
                </div>
                
                {/* Bottom Row: 2 Cards Centered */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
                    <DiagnosisCard 
                        title="High-Friction Giants"
                        sub="Regulated Industries"
                        symptom="Dominant cash flow capped by regulatory friction or stigma in 'Grey Zone' markets."
                        cure="Automated compliance & reputational architecture."
                        impact="Institutional Legitimacy"
                        delay="0.3s" 
                    />
                    <DiagnosisCard 
                        title="Scaling AI Agencies"
                        sub="App Layer Expansion"
                        symptom="Explosive market demand breaking manual operational seams."
                        cure="Zillio OS as the central nervous system for autonomous ops."
                        impact="Non-Linear Output Scaling"
                        delay="0.4s" 
                    />
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 text-stone-400 hover:text-nobel-gold transition-colors text-xs font-bold uppercase tracking-widest group cursor-pointer">
                        View Full Diagnostic Reports <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                    </a>
                </div>
           </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-24 bg-[#F5F4F0] border-t border-stone-200 text-center">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900">Ready to Transmute Chaos?</h2>
                <a href="#" className="inline-flex items-center gap-3 px-10 py-5 bg-stone-900 text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-nobel-gold hover:text-stone-900 transition-all duration-300 shadow-xl group">
                    Partner With Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">AMPLIFICATION IND.</div>
                <p className="text-sm tracking-wide text-stone-500">ZILLIO OS • ENTERPRISE INTELLIGENCE</p>
            </div>
            <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-stone-500">
                <a href="#" className="hover:text-nobel-gold transition-colors">Legal</a>
                <a href="#" className="hover:text-nobel-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-nobel-gold transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-stone-700 uppercase tracking-widest">
            © 2024 Amplification Industries. All Systems Operational.
        </div>
      </footer>
    </div>
  );
};

export default App;