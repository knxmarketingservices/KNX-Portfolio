import React, { useState } from "react";
import { motion } from "motion/react";
import { STATS_DATA } from "../data";
import { TrendingUp, Users, Inbox, Award } from "lucide-react";

interface CountUpProps {
  valueStr: string;
  duration?: number;
}

function CountUp({ valueStr, duration = 1500 }: CountUpProps) {
  const { numericPart, suffix } = React.useMemo(() => {
    const num = parseInt(valueStr.replace(/[^0-9]/g, ""), 10) || 0;
    const suf = valueStr.replace(/[0-9]/g, "");
    return { numericPart: num, suffix: suf };
  }, [valueStr]);

  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let startFrame = 0;
    const endValue = numericPart;
    if (endValue === 0) {
      setCount(0);
      return;
    }

    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const current = Math.round(easeProgress * endValue);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [numericPart, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function ReStats() {
  const getDelay = (id: string) => {
    switch (id) {
      case "reach": return 0;
      case "leads": return 0.8;
      case "enquiries": return 1.6;
      case "brands": return 2.4;
      default: return 0;
    }
  };

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "reach":
        return (
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2.5 rounded-full bg-indigo-950/60 border border-indigo-900/50 text-indigo-400 shadow-sm shadow-indigo-950/40"
          >
            <TrendingUp className="w-5 h-5" />
          </motion.div>
        );
      case "leads":
        return (
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2.5 rounded-full bg-emerald-950/60 border border-emerald-900/50 text-emerald-400 shadow-sm shadow-emerald-950/40"
          >
            <Users className="w-5 h-5" />
          </motion.div>
        );
      case "enquiries":
        return (
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-2.5 rounded-full bg-violet-950/60 border border-violet-900/50 text-violet-400 shadow-sm shadow-violet-950/40"
          >
            <Inbox className="w-5 h-5" />
          </motion.div>
        );
      case "brands":
        return (
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2.5 rounded-full bg-amber-950/60 border border-amber-900/50 text-amber-400 shadow-sm shadow-amber-950/40"
          >
            <Award className="w-5 h-5" />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="border-y border-neutral-800 bg-neutral-900 overflow-hidden" id="stats">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {STATS_DATA.map((stat) => (
            <div
              key={stat.id}
              className="relative p-8 md:py-12 md:px-10 text-center transition-all duration-300 hover:bg-neutral-950 overflow-hidden group select-none cursor-pointer"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: getDelay(stat.id),
                }}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center gap-3 mb-4">
                  {getMetricIcon(stat.id)}
                  <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-white transition-colors duration-200">
                    {stat.metricLabel}
                  </span>
                </div>

                {/* Stat number with modern display typography */}
                <h2 className="font-mono font-bold text-5xl sm:text-6xl tracking-tight text-white transition-all duration-300 group-hover:scale-110 origin-center">
                  <CountUp valueStr={stat.value} />
                </h2>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
