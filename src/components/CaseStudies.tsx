import React, { useState, useEffect } from "react";
import { KRONNEX_WORK } from "../data";
import { CaseStudy } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Image, LineChart, LayoutTemplate } from "lucide-react";
import ScrollingBackgroundText from "./ScrollingBackgroundText";

const CATEGORIES = ["All", "Luxury Real Estate", "Bridal Couture", "Health & Wellness", "Property Developer", "Web Design"];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredCases = activeCategory === "All" 
    ? KRONNEX_WORK 
    : KRONNEX_WORK.filter(c => c.tag === activeCategory);

  const [activeCaseId, setActiveCaseId] = useState(filteredCases[0]?.id || "");
  const [activeBrowserTab, setActiveBrowserTab] = useState<"strategy" | "metrics" | "assets">("strategy");

  // Reset active case when category changes
  useEffect(() => {
    if (filteredCases.length > 0 && !filteredCases.find(c => c.id === activeCaseId)) {
      setActiveCaseId(filteredCases[0].id);
    }
  }, [activeCategory, filteredCases, activeCaseId]);

  const activeCase = KRONNEX_WORK.find(c => c.id === activeCaseId) || KRONNEX_WORK[0];

  return (
    <section id="work" className="py-24 bg-white border-b border-neutral-100 relative overflow-hidden">
      <ScrollingBackgroundText text="SELECTED WORK" direction="left" speed={90} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-left max-w-2xl">
          <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-neutral-900 leading-tight">
            Results, not deliverables.
          </h2>
          <p className="text-base text-neutral-500 mt-4 font-light">
            We gauge every customer partnership in calls, leads, and conversion metrics — not placeholder content calendars or vanity metrics.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto whitespace-nowrap pb-4 gap-2 mb-8 custom-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors border ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stacked Master-Detail Layout */}
        <div className="flex flex-col gap-12">
          
          {/* TOP: Horizontal Master List */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              SELECT CLIENT ENGAGEMENT
            </span>
            
            <div className="flex overflow-x-auto gap-4 pb-4 px-1 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {filteredCases.map(cs => {
                  const isActive = activeCaseId === cs.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={cs.id}
                      onClick={() => {
                        setActiveCaseId(cs.id);
                        setActiveBrowserTab("strategy");
                      }}
                      className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex-shrink-0 w-[280px] sm:w-[320px] ${
                        isActive 
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-xl" 
                          : "bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[9px] font-mono uppercase tracking-wider ${isActive ? "text-neutral-400" : "text-neutral-500"}`}>
                          {cs.category}
                        </span>
                        <span className={`text-[10px] flex items-center gap-1 font-mono ${isActive ? "text-neutral-300" : "text-neutral-500"}`}>
                          <MapPin className="w-3 h-3" /> {cs.location.split("·")[0].trim()}
                        </span>
                      </div>
                      <h4 className="font-display font-medium text-xl mb-1 truncate">{cs.clientName}</h4>
                      <p className={`text-xs font-light mb-6 truncate ${isActive ? "text-neutral-400" : "text-neutral-500"}`}>
                        {cs.title}
                      </p>
                      
                      <div className="flex items-center justify-between gap-2">
                        {cs.stats.slice(0, 2).map((stat, i) => (
                          <div key={i}>
                            <div className={`font-display font-bold text-lg leading-none mb-1 ${isActive ? "text-white" : "text-neutral-900"}`}>
                              {stat.value}
                            </div>
                            <div className={`text-[8px] font-mono uppercase tracking-widest ${isActive ? "text-neutral-500" : "text-neutral-400"}`}>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* BOTTOM: Detail Browser */}
          <div className="w-full">
            <div className="border border-neutral-200 rounded-xl bg-white shadow-2xl shadow-black/5 overflow-hidden flex flex-col h-[700px]">
              
              {/* Browser Header */}
              <div className="bg-neutral-50 border-b border-neutral-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-300" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300" />
                  <div className="ml-4 font-mono text-[10px] text-neutral-400 flex items-center gap-1.5 bg-white border border-neutral-200 px-3 py-1 rounded">
                    kronnex-growth-ledger://{activeCase.id}.local
                  </div>
                </div>
                <div className="hidden sm:block text-[9px] font-mono uppercase tracking-widest text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                  {activeCase.tag}
                </div>
              </div>

              {/* Inner Tabs */}
              <div className="grid grid-cols-2 border-b border-neutral-200 bg-neutral-50/50">
                <button 
                  onClick={() => setActiveBrowserTab("strategy")}
                  className={`py-3 text-xs font-mono font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${activeBrowserTab === "strategy" ? "border-neutral-900 text-neutral-900 bg-white" : "border-transparent text-neutral-500 hover:bg-neutral-100"}`}
                >
                  <LayoutTemplate className="w-3.5 h-3.5" /> Strategy
                </button>
                <button 
                  onClick={() => setActiveBrowserTab("metrics")}
                  className={`py-3 text-xs font-mono font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${activeBrowserTab === "metrics" ? "border-neutral-900 text-neutral-900 bg-white" : "border-transparent text-neutral-500 hover:bg-neutral-100"}`}
                >
                  <LineChart className="w-3.5 h-3.5" /> Metric Ledger
                </button>
              </div>

              {/* Browser Content */}
              <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeCase.id}-${activeBrowserTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    
                    {activeBrowserTab === "strategy" && (
                      <div className="space-y-10">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 mb-2 block">Client Profile</span>
                          <h3 className="font-display text-3xl font-medium text-neutral-900 mb-2">{activeCase.clientName}</h3>
                          <p className="text-xs font-mono text-neutral-500">
                            Target Location: {activeCase.location} &middot; Sector: {activeCase.tag}
                          </p>
                        </div>
                        
                        <div className="border-t border-dashed border-neutral-200 pt-8">
                          <span className="text-[10px] font-mono text-neutral-400 mb-4 block">Core Brief &amp; Deployment</span>
                          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-2xl">
                            {activeCase.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                          {activeCase.stats.map((stat, idx) => (
                            <div key={idx} className="bg-neutral-50 border border-neutral-100 rounded-xl p-5">
                              <div className="font-display text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                              <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Work Assets Section Appended under Strategy */}
                        <div className="border-t border-dashed border-neutral-200 pt-10 mt-10">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 mb-2 block">Work Assets Archive</span>
                            <h3 className="font-display text-2xl font-medium text-neutral-900 mb-6">Campaign Visuals &amp; Output</h3>
                          </div>

                          {activeCase.id === "image-innovation" ? (
                            <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
                              <div className="bg-neutral-100 border-b border-neutral-200 px-3 py-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                              </div>
                              <div className="aspect-video bg-neutral-50 relative flex items-center justify-center overflow-hidden w-full">
                                 <iframe src="https://iitpl.ai/" className="absolute inset-0 w-full h-full border-0 pointer-events-none" title="Image Innovation Technology Site" />
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {activeCase.captions.map((caption, i) => (
                                <div key={i} className="group relative aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200">
                                  <div className="absolute inset-0 bg-neutral-900 p-6 flex flex-col justify-between">
                                    <div className="absolute inset-0 opacity-20"
                                         style={{
                                           backgroundImage: "linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)",
                                           backgroundSize: "24px 24px"
                                         }}
                                    />
                                    <div className="relative z-10 flex justify-between">
                                      <span className="font-mono text-[10px] text-neutral-400 bg-black/50 px-2 py-1 rounded">
                                        FRAME 0{i + 1}
                                      </span>
                                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                                      </span>
                                    </div>
                                    
                                    <div className="relative z-10 w-full text-center">
                                      <div className="w-16 h-16 border border-neutral-700 rounded-full flex items-center justify-center font-mono text-sm text-neutral-500 mx-auto mb-4 bg-neutral-950/80 backdrop-blur-sm transition-all duration-300">
                                        IMG_0{i+1}
                                      </div>
                                    </div>

                                    <div className="relative z-10">
                                      <p className="font-medium text-white text-sm">
                                        {caption}
                                      </p>
                                      <p className="text-[9px] font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                                        Creative Asset / Ad Module
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {activeBrowserTab === "metrics" && (
                      <div className="space-y-8 h-full flex flex-col">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 mb-2 block">Metric Ledger Activity</span>
                          <h3 className="font-display text-2xl font-medium text-neutral-900">{activeCase.mockChartTitle}</h3>
                        </div>
                        
                        {/* Minimalist Bar Chart representation */}
                        <div className="flex-1 min-h-[300px] border border-neutral-100 rounded-xl p-6 bg-neutral-50 flex items-end gap-4 justify-between">
                           {activeCase.mockChartData?.map((data, idx) => {
                             // find max metric to calculate percentage
                             const maxMetric = Math.max(...(activeCase.mockChartData?.map(d => d.metric) || [1]));
                             const heightPercent = `${Math.max(10, (data.metric / maxMetric) * 100)}%`;
                             
                             return (
                               <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end group">
                                 <span className="text-xs font-mono font-medium text-neutral-900 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                   {data.metric >= 1000 ? `${(data.metric/1000).toFixed(1)}k` : data.metric}
                                 </span>
                                 <div 
                                   className="w-full bg-neutral-200 group-hover:bg-neutral-900 transition-all duration-500 rounded-t-sm"
                                   style={{ height: heightPercent }}
                                 />
                                 <span className="text-[10px] font-mono text-neutral-500 mt-3 text-center">
                                   {data.period}
                                 </span>
                               </div>
                             );
                           })}
                        </div>
                      </div>
                    )}


                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
