import React, { useState } from "react";
import { motion } from "motion/react";
import { STATS_DATA } from "../data";
import { TrendingUp, Users, Inbox, Award } from "lucide-react";

export default function ReStats() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "reach":
        return <TrendingUp className="w-5 h-5 text-neutral-400" />;
      case "leads":
        return <Users className="w-5 h-5 text-neutral-400" />;
      case "enquiries":
        return <Inbox className="w-5 h-5 text-neutral-400" />;
      case "brands":
        return <Award className="w-5 h-5 text-neutral-400" />;
      default:
        return null;
    }
  };

  const getMetricDetails = (id: string) => {
    switch (id) {
      case "reach":
        return "Total eyeballs and targeted impressions generated across luxury housing campaigns, video assets, and organic content systems within optimal focus periods.";
      case "leads":
        return "High-intent individuals who completed meta form registrations, requested pricing prospectuses, or explicitly scheduled a follow-up consultation call.";
      case "enquiries":
        return "Verified direct inquiry messages received via WhatsApp, Instagram DM, and clinical web portals initiated directly by prospective service buyers.";
      case "brands":
        return "Enterprise and boutique companies fully structured with design books, high-retaining video structures, and calibrated digital sales pipelines.";
      default:
        return "";
    }
  };

  return (
    <section className="border-y border-neutral-200 bg-neutral-50" id="stats">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="relative p-8 md:py-12 md:px-10 text-center transition-all duration-300 hover:bg-white overflow-hidden group select-none cursor-pointer"
              onMouseEnter={() => setHoveredCard(stat.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                {getMetricIcon(stat.id)}
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                  {stat.metricLabel}
                </span>
              </div>

              {/* Stat number with modern display typography */}
              <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight text-neutral-900 mb-2">
                {stat.value}
              </h2>

              <p className="font-sans font-medium text-xs text-neutral-500 uppercase tracking-widest sm:text-xs">
                {stat.label}
              </p>

              {/* Micro interactive hint box */}
              <div className="mt-4 pt-4 border-t border-dashed border-neutral-100 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[11px] text-neutral-500 text-left leading-relaxed">
                  {getMetricDetails(stat.id)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
