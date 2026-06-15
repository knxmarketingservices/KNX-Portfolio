import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, ArrowRight, CheckCircle, Percent, DollarSign, Users, Award } from "lucide-react";

export default function GrowthCalculator() {
  const [budget, setBudget] = useState<number>(100000);
  const [cpm, setCpm] = useState<number>(400);
  const [ctr, setCtr] = useState<number>(1.8);
  const [qualifyRate, setQualifyRate] = useState<number>(35);

  // Computations
  const impressions = Math.round((budget / cpm) * 1000);
  const clicks = Math.round(impressions * (ctr / 100));
  const qualifiedLeads = Math.round(clicks * (qualifyRate / 100));
  const costPerQualified = qualifiedLeads > 0 ? Number((budget / qualifiedLeads).toFixed(2)) : 0;

  return (
    <div className="bg-neutral-900 text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
      {/* Schematic overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
             backgroundSize: "16px 16px"
           }}
      />

      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-neutral-800">
          <Calculator className="w-5 h-5 text-neutral-300" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
            Interactive Growth Projection Ledger
          </span>
        </div>

        <p className="text-xs text-neutral-400 font-light max-w-md">
          Adjust the sliders below to estimate the dynamic pipeline efficiency Kronnex maps against local real-estate, clinical, or brand domains.
        </p>

        {/* Sliders bundle */}
        <div className="space-y-4">
          
          {/* Slider 1: Budget */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono items-center">
              <span className="text-neutral-400">Monthly Ad Budget</span>
              <span className="text-white font-mono font-semibold bg-neutral-800/80 border border-neutral-750 px-2 py-0.5 rounded-md select-none hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200 cursor-default">
                ₹{budget.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="10000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>₹20,000</span>
              <span>₹5,00,000</span>
            </div>
          </div>

          {/* Slider 2: CPM */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-neutral-400">Estimated CPM (Cost Per 1K Views)</span>
              <span className="text-white font-bold">₹{cpm.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="100"
              max="2000"
              step="50"
              value={cpm}
              onChange={(e) => setCpm(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>₹100 (Cheap/Broad)</span>
              <span>₹2,000 (Premium Indian/Global HNW)</span>
            </div>
          </div>

          {/* Slider 3: CTR */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-neutral-400">Funnel Click-Through Rate</span>
              <span className="text-white font-bold">{ctr}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={ctr}
              onChange={(e) => setCtr(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>0.5% (Low scroll-stop)</span>
              <span>5.0% (Kronnex high-retaining benchmark)</span>
            </div>
          </div>

          {/* Slider 4: Qualification */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono items-center">
              <span className="text-neutral-400 hover:text-white transition-colors duration-200 cursor-help select-none">
                Target Lead Qualification Rate
              </span>
              <span className="text-white font-mono font-semibold bg-neutral-800/80 border border-neutral-750 px-2 py-0.5 rounded-md select-none hover:border-neutral-500 hover:bg-neutral-800 transition-all duration-200 cursor-default">
                {qualifyRate}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={qualifyRate}
              onChange={(e) => setQualifyRate(Number(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>10% (Unfiltered)</span>
              <span>80% (Hyper-vetted matching consultation)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Numerical display indicators */}
      <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-2 gap-4">
        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850">
          <span className="font-mono text-[9px] uppercase text-neutral-500 block">
            Estimated Impressions
          </span>
          <span className="font-display font-medium text-lg text-white mt-1 block">
            {impressions >= 1000000 
              ? `${(impressions / 1000000).toFixed(1)}M+` 
              : `${(impressions / 1000).toFixed(0)}K+`}
          </span>
        </div>

        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850">
          <span className="font-mono text-[9px] uppercase text-neutral-500 block">
            Clicks &amp; Inbound Enquiries
          </span>
          <span className="font-display font-medium text-lg text-white mt-1 block">
            {clicks.toLocaleString()}
          </span>
        </div>

        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-850 col-span-2 flex items-center justify-between">
          <div>
            <span className="font-mono text-[9px] uppercase text-emerald-500 block font-semibold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> High-Intensity Leads
            </span>
            <span className="font-display font-medium text-2xl text-white mt-1 block">
              {qualifiedLeads}
            </span>
          </div>
          <div className="text-right">
            <span className="font-mono text-[9px] uppercase text-neutral-500 block">
              Predicted Cost / Qualified
            </span>
            <span className="font-display font-bold text-sm text-neutral-300 mt-1 block">
              ₹{costPerQualified.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
