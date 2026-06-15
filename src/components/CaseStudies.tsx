import React, { useState, useEffect } from "react";
import { KRONNEX_WORK } from "../data";
import { CaseStudy } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Image, LineChart, LayoutTemplate, ChevronLeft, ChevronRight, Activity, TrendingUp, DollarSign, Percent, MousePointerClick, Users } from "lucide-react";
import ScrollingBackgroundText from "./ScrollingBackgroundText";

const CATEGORIES = ["All", "Luxury Real Estate", "Bridal Couture", "Health & Wellness", "Property Developer", "Web Design"];

function ShowcaseGallery({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {images.map((img, i) => (
        <div key={i} className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200">
          <img
            src={img.src}
            alt={img.label}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-neutral-400 block mb-1">
              CAMPAIGN VISUAL 0{i + 1}
            </span>
            <h4 className="font-display text-sm sm:text-base font-medium text-white leading-tight">
              {img.label}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

const getScorecard = (id: string) => {
  switch (id) {
    case "gvr":
      return { ctr: "3.92%", cpl: "AED 45", cvr: "4.8%", cplLabel: "Cost Per Lead", ctrDiff: "+1.4%", cvrDiff: "+2.1%" };
    case "hash":
      return { ctr: "4.12%", cpl: "₹240", cvr: "5.2%", cplLabel: "Cost Per Lead", ctrDiff: "+1.9%", cvrDiff: "+1.8%" };
    case "sukriti":
      return { ctr: "3.45%", cpl: "₹180", cvr: "6.1%", cplLabel: "Cost Per Booking", ctrDiff: "+1.1%", cvrDiff: "+2.4%" };
    case "pawan":
      return { ctr: "2.85%", cpl: "₹650", cvr: "3.9%", cplLabel: "Cost Per Lead", ctrDiff: "+0.8%", cvrDiff: "+1.1%" };
    default: // image-innovation
      return { ctr: "4.60%", cpl: "₹320", cvr: "5.5%", cplLabel: "Cost Per Enquiry", ctrDiff: "+1.7%", cvrDiff: "+2.2%" };
  }
};

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
            <div className="border border-neutral-200 rounded-xl bg-white shadow-2xl shadow-black/5 overflow-hidden flex flex-col">
              
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
                  <LineChart className="w-3.5 h-3.5" /> Performance Ledger
                </button>
              </div>

              {/* Browser Content */}
              <div className="p-8 overflow-y-auto custom-scrollbar" style={{ maxHeight: "800px" }}>
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

                        {/* ★ Showcase Image Gallery — renders FIRST, above the fold */}
                        {activeCase.showcaseImages && activeCase.showcaseImages.length > 0 && (
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 mb-3 block">Featured Campaign Visuals</span>
                            <ShowcaseGallery images={activeCase.showcaseImages} />
                          </div>
                        )}

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

                        {/* Work Assets Section Appended under Strategy - only show if there are no showcaseImages */}
                        {!activeCase.showcaseImages && (
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
                        )}
                      </div>
                    )}

                    {activeBrowserTab === "metrics" && (
                      <div className="space-y-8 h-full flex flex-col">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 mb-2 block uppercase tracking-wider font-semibold">Performance Ledger</span>
                          <h3 className="font-display text-2xl font-medium text-neutral-900">{activeCase.mockChartTitle}</h3>
                        </div>

                        {/* Interactive Performance Scorecard */}
                        {(() => {
                          const scorecard = getScorecard(activeCase.id);
                          return (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 hover:bg-neutral-900 hover:text-white transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">CTR (Click-Through)</span>
                                  <span className="text-[9px] font-mono text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded group-hover:bg-emerald-950/50">{scorecard.ctrDiff}</span>
                                </div>
                                <div className="font-display text-3xl font-bold text-neutral-900 group-hover:text-white">{scorecard.ctr}</div>
                                <div className="text-[8px] font-mono text-neutral-400 mt-2">Ad Engagement Rate</div>
                              </div>

                              <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 hover:bg-neutral-900 hover:text-white transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">{scorecard.cplLabel.split(" ")[1]} Cost</span>
                                  <span className="text-[9px] font-mono text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded group-hover:bg-emerald-950/50">-18%</span>
                                </div>
                                <div className="font-display text-3xl font-bold text-neutral-900 group-hover:text-white">{scorecard.cpl}</div>
                                <div className="text-[8px] font-mono text-neutral-400 mt-2">{scorecard.cplLabel}</div>
                              </div>

                              <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50 hover:bg-neutral-900 hover:text-white transition-all duration-300 group">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">CVR (Conversion)</span>
                                  <span className="text-[9px] font-mono text-emerald-500 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded group-hover:bg-emerald-950/50">{scorecard.cvrDiff}</span>
                                </div>
                                <div className="font-display text-3xl font-bold text-neutral-900 group-hover:text-white">{scorecard.cvr}</div>
                                <div className="text-[8px] font-mono text-neutral-400 mt-2">Funnel Conversion Rate</div>
                              </div>
                            </div>
                          );
                        })()}

                        {/* High-Fidelity SVG Area Chart */}
                        <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50 flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5" /> Growth Curve &amp; Influx
                            </span>
                            <span className="text-[10px] font-mono text-neutral-500 bg-neutral-200/50 px-2 py-0.5 rounded">Sprint Timeline</span>
                          </div>
                          
                          {(() => {
                            const data = activeCase.mockChartData || [];
                            const maxVal = Math.max(...data.map(d => d.metric), 1);
                            const chartHeight = 160;
                            const chartWidth = 500;
                            const padding = 20;

                            const points = data.map((d, i) => {
                              const x = padding + (i / (data.length - 1)) * (chartWidth - padding * 2);
                              const y = chartHeight - (d.metric / maxVal) * (chartHeight - 40);
                              return { x, y, label: d.period, val: d.metric };
                            });

                            const linePath = points.reduce((acc, p, i) => {
                              return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
                            }, "");

                            const areaPath = points.length > 0
                              ? `${linePath} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`
                              : "";

                            return (
                              <div className="relative w-full h-[200px]">
                                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full overflow-visible">
                                  <defs>
                                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#000" stopOpacity="0.1" />
                                      <stop offset="100%" stopColor="#000" stopOpacity="0.0" />
                                    </linearGradient>
                                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                      <stop offset="0%" stopColor="#404040" />
                                      <stop offset="100%" stopColor="#000000" />
                                    </linearGradient>
                                  </defs>

                                  {/* Grid Lines */}
                                  <line x1={padding} y1={30} x2={chartWidth - padding} y2={30} stroke="#e5e5e5" strokeDasharray="3 3" />
                                  <line x1={padding} y1={80} x2={chartWidth - padding} y2={80} stroke="#e5e5e5" strokeDasharray="3 3" />
                                  <line x1={padding} y1={130} x2={chartWidth - padding} y2={130} stroke="#e5e5e5" strokeDasharray="3 3" />
                                  <line x1={padding} y1={chartHeight} x2={chartWidth - padding} y2={chartHeight} stroke="#d4d4d4" strokeWidth="1.5" />

                                  {/* Area */}
                                  {areaPath && <path d={areaPath} fill="url(#areaGradient)" />}

                                  {/* Line */}
                                  {linePath && <path d={linePath} fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}

                                  {/* Data Points */}
                                  {points.map((p, i) => (
                                    <g key={i} className="group/dot cursor-pointer">
                                      <circle cx={p.x} cy={p.y} r="5" fill="#ffffff" stroke="#000000" strokeWidth="2.5" className="transition-all duration-300 group-hover/dot:r-7" />
                                      <circle cx={p.x} cy={p.y} r="1.5" fill="#000000" />
                                      
                                      {/* Tooltip over dot */}
                                      <text x={p.x} y={p.y - 12} textAnchor="middle" className="font-mono text-[9px] font-bold fill-neutral-900 opacity-0 group-hover/dot:opacity-100 transition-opacity bg-white px-1 py-0.5 rounded">
                                        {p.val >= 1000 ? `${(p.val / 1000).toFixed(1)}k` : p.val}
                                      </text>
                                    </g>
                                  ))}

                                  {/* X-Axis Labels */}
                                  {points.map((p, i) => (
                                    <text key={i} x={p.x} y={chartHeight + 15} textAnchor="middle" className="font-mono text-[8px] fill-neutral-400 uppercase tracking-wider">
                                      {p.label}
                                    </text>
                                  ))}
                                </svg>
                              </div>
                            );
                          })()}
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
