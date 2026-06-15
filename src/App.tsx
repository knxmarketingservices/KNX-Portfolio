import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReStats from "./components/Stats";
import CaseStudies from "./components/CaseStudies";
import Capabilities from "./components/Capabilities";
import AIEngine from "./components/AIEngine";
import Testimonials from "./components/Testimonials";
import FoundersTrack from "./components/FoundersTrack";
import GrowthCalculator from "./components/GrowthCalculator";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Sparkles, ArrowRight, MessageSquareCode } from "lucide-react";

export default function App() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Only enable if device supports hover interactions (desktop)
    const mediaQuery = window.matchMedia("(hover: hover)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".interactive-3d")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-neutral-900 selection:text-white md:cursor-none">
      {/* Custom Dynamic Glowing Halo Cursor (Desktop only, avoids clashing on touch devices) */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: isHovered ? "40px" : "12px",
            height: isHovered ? "40px" : "12px",
            backgroundColor: isHovered ? "rgba(99, 102, 241, 0.15)" : "rgba(31, 41, 55, 0.85)",
            border: isHovered ? "1.5px solid rgba(99, 102, 241, 0.8)" : "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: isHovered
              ? "0 0 16px rgba(99, 102, 241, 0.4)"
              : "0 0 4px rgba(0, 0, 0, 0.15)",
            transform: `translate(-50%, -50%) scale(${isClicking ? 0.85 : 1})`,
            transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease"
          }}
        />
      )}

      {/* Sticky Header Nav */}
      <Navbar />

      <main className="overflow-x-hidden pt-[1px]">
        {/* Hero Segment */}
        <Hero />

        {/* Dynamic Multi-State Stats Ledger */}
        <ReStats />

        {/* Selected Work Portfolio (Interactive Tabs, Custom Charts, Blueprint mocks) */}
        <CaseStudies />

        {/* Capabilities Architecture Grid */}
        <Capabilities />

        {/* AI Sandboxed Audit & Roadmap Pipeline */}
        <AIEngine />

        {/* Client Receipts (WhatsApp emulate messenger) */}
        <Testimonials />

        {/* Founder's Track & Executive Profile */}
        <FoundersTrack />

        {/* High-Contrast Interactive Contact & ROI Modeler section */}
        <section id="contact" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Direct Section header */}
            <div className="max-w-xl mb-16 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                Initiate Consultation
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-white leading-none">
                Let's construct a funnel <span className="italic text-neutral-400">that performs.</span>
              </h2>
              <p className="text-sm text-neutral-400 font-light mt-4">
                Model your potential conversion density on the interactive planner below, and supply your company descriptors to receive an analysis draft.
              </p>
            </div>

            {/* High-Fidelity Multi-Module Grid: Calculator Sliders on Left, Contact Inputs on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Interactive ROI Growth Modeler */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <GrowthCalculator />
              </div>

              {/* Right Column: Prefilled query submissions */}
              <div className="lg:col-span-6">
                <ContactForm />
              </div>

            </div>

            {/* Direct Instant Action Lines */}
            <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-6 text-xs text-neutral-400 font-mono">
              <span className="relative group flex items-center gap-1.5 cursor-help py-1 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span className="underline decoration-dotted decoration-neutral-600 hover:decoration-white transition-colors duration-200">
                  Response threshold: Under 12 hours
                </span>
                
                {/* Subtle Refined Hover SLA Tooltip */}
                <span className="absolute bottom-full left-0 mb-3.5 hidden group-hover:block w-72 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[11px] p-4 rounded-xl shadow-2xl leading-relaxed font-sans z-50 pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
                  <span className="block font-mono text-[9px] font-semibold text-emerald-400 mb-1.5 tracking-wider uppercase">
                    Kronnex SLA Turnaround
                  </span>
                  We commit to response validation within 12 hours for all verified business inquiries. Diagnostic modeling and consultation slots are typically prioritized and scheduled within 24 to 48 hours.
                </span>
              </span>
              <div className="flex gap-6">
                <a
                  href="mailto:knxmarketing@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-1 underline"
                >
                  Direct Email Back-channel <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="https://wa.me/97455283706"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-emerald-400 underline font-semibold"
                >
                  Direct WhatsApp Liaison <MessageSquareCode className="w-4 h-4 fill-emerald-900/40" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Legal association and brand footer */}
        <Footer />
      </main>
    </div>
  );
}
