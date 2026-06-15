import React from "react";
import { FOUNDER_RECORD } from "../data";
import { motion } from "motion/react";
import { MapPin, BadgeCheck, ArrowUpRight } from "lucide-react";
import ScrollingBackgroundText from "./ScrollingBackgroundText";

export default function FoundersTrack() {
  return (
    <section id="founder" className="py-24 bg-neutral-50 border-b border-neutral-100 relative overflow-hidden">
      <ScrollingBackgroundText text="FOUNDERS TRACK" direction="right" speed={80} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="font-display font-medium text-5xl sm:text-6xl tracking-tight text-neutral-900 leading-tight mb-4">
            Founder's Track
          </h2>
          <p className="text-base text-neutral-500 font-light">
            A look into the foundational career trajectory and early milestones that built the systems we use today.
          </p>
        </div>
        
        <div className="flex flex-col gap-16">
          
          {/* Executive Profile Card */}
          <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden max-w-4xl mx-auto w-full">
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                   backgroundSize: "40px 40px"
                 }}
            />
            <div className="flex flex-col mb-8 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-indigo-400 bg-indigo-950/50 px-3 py-1.5 rounded border border-indigo-500/20">
                  EXECUTIVE PROFILE
                </span>
                <a
                  href="https://www.linkedin.com/in/krishanthhariveerappan/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <h3 className="font-display font-medium text-3xl leading-tight text-white mb-2">
                Krishanth Hari Veerappan
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-3">
                Founder, Kronnex &bull; Client Acquisition Partner
              </p>
              <p className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                <MapPin className="w-3.5 h-3.5" /> Chennai, India
              </p>
            </div>

            <div className="relative z-10 border-t border-neutral-800 pt-6 mb-8">
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed italic border-l-2 border-indigo-500 pl-4">
                "I build simple, cohesive systems that help businesses grow. By connecting Meta ads campaign structures, story-driven content direction, and automated lead logistics, we prevent lead decay and maximize reach."
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
                  CAREER TRAJECTORY
                </span>
                <div className="space-y-2 text-xs text-neutral-400 font-mono">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Founder</span>
                    <span>Kronnex (May 2024 - Present)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Digital Marketing Manager</span>
                    <span>Image Innovation Tech (2024 - 2025)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Digital Marketing Intern</span>
                    <span>SRM IST Chennai (2024)</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 block mb-3">
                  CREDENTIALS &amp; EDUCATION
                </span>
                <p className="text-xs text-white font-medium mb-3">
                  BBA (Digital Marketing) <span className="text-neutral-400 font-mono font-normal block mt-1">- SRMIST, Kattankulathur (2023 - 2026)</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-mono rounded">Facebook Ads</span>
                  <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-mono rounded">Lead Generation</span>
                  <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px] font-mono rounded">Social Content</span>
                </div>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/krishanthhariveerappan/" target="_blank" rel="noreferrer" className="relative z-10 block w-full mt-8 text-center bg-[#0a66c2] hover:bg-[#004182] transition-colors text-white text-xs font-bold font-mono py-4 rounded-xl">
              VERIFY PROFESSIONAL PROFILE ON LINKEDIN
            </a>
          </div>

          {/* 3 Column Grid for Internships */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-6 text-center">
              HISTORIC INTERNSHIP MILESTONES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FOUNDER_RECORD.map(cs => (
                <div key={cs.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                        {cs.category.split("·")[0].trim()}
                      </span>
                      <span className="text-[10px] flex items-center gap-1 font-mono text-neutral-400">
                        <MapPin className="w-3 h-3" /> {cs.location.split("·").pop()?.trim() || cs.location}
                      </span>
                    </div>
                    <h4 className="font-display font-medium text-2xl text-neutral-900 mb-1">{cs.title}</h4>
                    <span className="text-xs font-mono text-neutral-400">{cs.clientName}</span>
                  </div>
                  
                  <p className="text-sm font-light text-neutral-600 mb-8 flex-grow leading-relaxed">
                    {cs.description}
                  </p>

                  <div className="space-y-4 border-t border-neutral-100 pt-6 mt-auto">
                    {cs.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="font-display font-bold text-xl text-neutral-900">{stat.value}</div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
