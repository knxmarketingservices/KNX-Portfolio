import React from "react";
import { ArrowUp, ArrowUpRight, Github, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      
      {/* Association Backed by Board Segment */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-b border-neutral-200 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-neutral-200 text-[10px] font-mono uppercase text-neutral-500 rounded-full select-none shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-800" /> Structure &amp; Accountability
          </div>
          
          <h4 className="font-display font-medium text-lg text-neutral-950">
            Backed by Image Innovation Technology
          </h4>
          
          <p className="text-xs text-neutral-500 font-light leading-relaxed">
            Kronnex operates as an initiative of <span className="font-semibold text-neutral-800">Image Innovation Technology Pvt. Ltd.</span> — a registered corporate company. You obtain the high agility, creative obsessiveness, and custom attention of an independent studio, backed by the legal structure and business accountability of an established venture.
          </p>

          <div className="pt-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Redirecting to corporate portal for Image Innovation (Demonstration Only).");
              }}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-900 font-semibold border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-300 transition-colors"
            >
              Enterprise Credentials Verification <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & copyright lines */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 text-neutral-500">
        <div className="space-y-2">
          {/* Brand mark */}
          <div className="flex items-center gap-2 mb-2">
            <img src="/NEW_LOGO.png" alt="Kronnex Logo" className="h-8 w-8 rounded-full" />
          </div>
          
          <p className="text-xs font-light font-sans max-w-sm leading-relaxed">
            An independent conversion studio engineering social creatives, luxury real-estate portfolios, clinical content pipelines, and automated prospecting engines.
          </p>

          <p className="text-[10px] font-mono text-neutral-400">
            Chennai, India &middot; Operating globally &bull; &copy; 2026. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-neutral-400">
            Powered by{" "}
            <a 
              href="https://team-o7-digital-solutions.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-neutral-600 hover:text-black transition-colors underline decoration-neutral-300"
            >
              TEAM o7 Digital solutions
            </a>
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-neutral-500">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#founder" className="hover:text-black transition-colors">Founder</a>
          <a href="#capabilities" className="hover:text-black transition-colors">Capabilities</a>
          <a href="#ai" className="hover:text-black transition-colors font-semibold text-neutral-900">AI Edge</a>
          <a href="#words" className="hover:text-black transition-colors">Receipts</a>
          <a href="#contact" className="hover:text-black transition-colors text-black font-bold border-b border-black pb-0.5">Start Projekt</a>
        </div>

        {/* Scroll back to top utility button */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors text-neutral-800"
            aria-label="Scroll to top of the page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
}
