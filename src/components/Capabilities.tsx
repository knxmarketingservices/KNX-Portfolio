import React, { useState } from "react";
import { CAPABILITIES } from "../data";
import { Check, HelpCircle, Laptop, Film, Users, Brain, Newspaper, BarChart } from "lucide-react";
import ScrollingBackgroundText from "./ScrollingBackgroundText";

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const getIcon = (id: string) => {
    const cls = "w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300";
    switch (id) {
      case "perf":
        return <BarChart className={cls} />;
      case "creat":
        return <Laptop className={cls} />;
      case "video":
        return <Film className={cls} />;
      case "influ":
        return <Users className={cls} />;
      case "ai":
        return <Brain className={cls} />;
      case "print":
        return <Newspaper className={cls} />;
      default:
        return <HelpCircle className={cls} />;
    }
  };

  return (
    <section id="capabilities" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <ScrollingBackgroundText text="CAPABILITIES" direction="left" speed={70} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title container */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-400 block mb-2">
            Our Ecosystem &amp; Suite
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-6xl tracking-tight text-white">
            One studio.<br />Full stack.
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-6 font-light leading-relaxed">
            We handle creative concept, campaign management, optimization, and AI tooling under a single roof of accountability. Nothing gets distorted between design briefing and final lead reporting.
          </p>
        </div>

        {/* Bento Box Layout for 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Item 1 - Large vertical card */}
          {CAPABILITIES[0] && (
            <div className="md:col-span-1 lg:row-span-2 lg:col-span-1">
              <CapabilityCard 
                cap={CAPABILITIES[0]} 
                getIcon={getIcon} 
                setHoveredIndex={setHoveredIndex}
                className="h-full min-h-[400px] bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20 hover:border-indigo-500/40"
              />
            </div>
          )}

          {/* Item 2 */}
          {CAPABILITIES[1] && (
            <div className="md:col-span-1 lg:col-span-1">
              <CapabilityCard cap={CAPABILITIES[1]} getIcon={getIcon} setHoveredIndex={setHoveredIndex} />
            </div>
          )}

          {/* Item 3 */}
          {CAPABILITIES[2] && (
            <div className="md:col-span-1 lg:col-span-1">
              <CapabilityCard cap={CAPABILITIES[2]} getIcon={getIcon} setHoveredIndex={setHoveredIndex} />
            </div>
          )}

          {/* Item 4 */}
          {CAPABILITIES[3] && (
            <div className="md:col-span-1 lg:col-span-1">
              <CapabilityCard cap={CAPABILITIES[3]} getIcon={getIcon} setHoveredIndex={setHoveredIndex} />
            </div>
          )}

          {/* Item 5 */}
          {CAPABILITIES[4] && (
            <div className="md:col-span-1 md:col-start-2 lg:col-start-auto lg:col-span-1">
              <CapabilityCard cap={CAPABILITIES[4]} getIcon={getIcon} setHoveredIndex={setHoveredIndex} />
            </div>
          )}
          
        </div>

      </div>
    </section>
  );
}

function CapabilityCard({ cap, getIcon, setHoveredIndex, className = "" }: any) {
  return (
    <div
      onMouseEnter={() => setHoveredIndex(cap.id)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer min-h-[300px] w-full overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex-grow">
        <div className="flex items-start justify-between mb-8">
          <div className="p-4 bg-black border border-neutral-800 rounded-2xl group-hover:border-indigo-500/50 transition-all duration-500">
            {getIcon(cap.id)}
          </div>
          <span className="font-mono text-xs text-neutral-600 font-bold group-hover:text-indigo-400 transition-colors">
            {cap.index}
          </span>
        </div>

        <h3 className="font-display font-medium text-2xl text-white mb-3">
          {cap.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed font-light font-sans group-hover:text-neutral-300 transition-colors">
          {cap.description}
        </p>
        
        {cap.id === "print" && (
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Opening secure-print arm portal for Image Security Printers. Connection established.");
            }}
            className="inline-flex items-center gap-2 mt-6 text-[10px] font-semibold text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full px-4 py-2 bg-black transition-all font-mono shadow-sm"
          >
            About Image Security Printers →
          </button>
        )}
      </div>

      <div className="relative z-10 mt-8 pt-5 border-t border-neutral-800 flex items-center justify-between">
        {cap.tag ? (
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold">
            {cap.tag}
          </span>
        ) : (
          <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1.5 group-hover:text-neutral-300 transition-colors">
            <Check className="w-3.5 h-3.5 text-emerald-500" /> Playbook Standardizado
          </span>
        )}
        
        <span className="font-mono text-[10px] text-neutral-600 group-hover:text-neutral-500 transition-colors">
          KRONNEX &bull; MODULE_0{cap.index}
        </span>
      </div>
    </div>
  );
}
