import React from "react";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

const ORBIT_IMAGES = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", size: "w-24 h-24 sm:w-32 sm:h-32", distance: 540, angle: 0 },
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400", size: "w-32 h-32 sm:w-40 sm:h-40", distance: 620, angle: 50 },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400", size: "w-28 h-28 sm:w-36 sm:h-36", distance: 550, angle: 100 },
  { src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=400", size: "w-20 h-20 sm:w-28 sm:h-28", distance: 660, angle: 140 },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400", size: "w-32 h-32 sm:w-44 sm:h-44", distance: 520, angle: 190 },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400", size: "w-24 h-24 sm:w-32 sm:h-32", distance: 640, angle: 230 },
  { src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=400", size: "w-28 h-28 sm:w-36 sm:h-36", distance: 560, angle: 280 },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400", size: "w-32 h-32 sm:w-40 sm:h-40", distance: 680, angle: 320 },
];

export default function Hero() {
  return (
    <header className="relative pt-44 pb-20 md:pb-32 bg-white overflow-hidden">
      {/* Cosmos-style Rotating Hero Grid - Now behind text again */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Soft center fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_65%)] z-10" />
        
        {/* Scale container for responsiveness */}
        <div className="scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-[1] absolute top-[40%] left-1/2 w-0 h-0">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-0 h-0"
          >
            {ORBIT_IMAGES.map((img, i) => (
               <div 
                 key={i}
                 className="absolute top-0 left-0 w-0 h-0 shadow-2xl"
                 style={{ 
                   transform: `rotate(${img.angle}deg) translateY(-${img.distance}px)`
                 }}
               >
                  <motion.div
                     initial={{ rotate: -img.angle, x: "-50%", y: "-50%" }}
                     animate={{ rotate: -360 - img.angle, x: "-50%", y: "-50%" }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className={`absolute top-0 left-0 rounded-full overflow-hidden border border-neutral-200/60 shadow-xl ${img.size}`}
                     style={{ transformOrigin: "center center" }}
                  >
                     <img src={img.src} alt="Kronnex Marketing" className="w-full h-full object-cover" />
                  </motion.div>
               </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Text Container Top */}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs text-neutral-600 font-semibold mb-8 select-none shadow-sm shadow-neutral-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
            </span>
            Kronnex Digital &amp; AI · Performance Engineering
          </div>

          {/* Main Display Heading */}
          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] leading-[1.03] text-black drop-shadow-sm">
            We don't post.<br />
            <span className="text-neutral-400 italic font-semibold inline-block">
              We engineer growth.
            </span>
          </h1>

          {/* Core Descriptive Text */}
          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed drop-shadow-sm">
            Kronnex is a performance-driven digital &amp; AI transformation studio. We design high-ticket identities, run highly precise Meta ad campaigns, and build the custom AI systems that multiply your conversion.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800 transition-colors px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 group shadow-sm shadow-black/5"
            >
              Analyze the work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ y: -1, backgroundColor: "rgba(245, 245, 245, 0.9)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto bg-white/80 backdrop-blur-md text-neutral-800 border border-neutral-200 transition-colors px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              Start growing your brand
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </motion.a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 pt-8 border-t border-dashed border-neutral-200 w-full text-neutral-500 font-mono text-[11px] uppercase tracking-wider bg-white/40 backdrop-blur-[2px] py-4 rounded-3xl mx-auto">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" /> Complete Performance Funnels
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" /> Proprietary Prospecting AI
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" /> Luxury real-estate validated
            </span>
          </div>
        </motion.div>
      </div>

    </header>
  );
}
