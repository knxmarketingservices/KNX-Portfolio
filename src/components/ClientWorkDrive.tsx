import React from "react";
import { FolderOpen, ExternalLink, FileText, Image, Film, Table, ArrowRight, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function ClientWorkDrive() {
  const driveUrl = "https://drive.google.com/drive/folders/1WVQP9HXFtF2PxXtBd5eoXLVGFHLxkWBf";

  const mockFiles = [
    { name: "Bugatti_Mercedes_Creative_Deliverables.pdf", type: "pdf", size: "12.4 MB", icon: FileText, color: "text-red-500 bg-red-500/10 border-red-500/20" },
    { name: "Hash_Bespoke_Editorial_Storyboards.pdf", type: "pdf", size: "8.2 MB", icon: FileText, color: "text-red-500 bg-red-500/10 border-red-500/20" },
    { name: "Sukriti_Ayur_AI_Thumbnail_Grid.png", type: "image", size: "4.8 MB", icon: Image, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "Pawan_Castles_Meta_Ad_Creative_Sprint.mp4", type: "video", size: "42.1 MB", icon: Film, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
    { name: "Kronnex_Conversion_Logistics_Setup.xlsx", type: "sheet", size: "1.2 MB", icon: Table, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  ];

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-100 relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Copy */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2 font-medium">
              Verified Deliverables
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl tracking-tight text-neutral-900 leading-tight mb-4">
              Real Work. <br />
              <span className="italic text-neutral-500">Unfiltered Archives.</span>
            </h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
              Browse the actual design assets, high-ticket ad mockups, storyboards, and campaign reports delivered to our clients. Hosted transparently in our public Google Drive directory.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white hover:bg-neutral-800 transition-colors px-6 py-3.5 rounded-xl font-medium text-xs font-mono tracking-wider shadow-md hover:shadow-lg"
            >
              ACCESS PUBLIC WORK DRIVE <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Right Column: Interactive Folder Mockup (The "Must Click" Visual) */}
          <div className="lg:col-span-7">
            <motion.a
              whileHover={{ y: -4 }}
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="block cursor-pointer group"
            >
              <div className="border border-neutral-200 rounded-2xl bg-white shadow-xl shadow-black/5 overflow-hidden transition-all duration-300 group-hover:border-neutral-300 group-hover:shadow-2xl">
                
                {/* Folder Header / Top Bar */}
                <div className="bg-neutral-50 border-b border-neutral-200 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                      <FolderOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-neutral-800">Krishanth's Client Work Archive</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400 block mt-0.5">Google Drive Directory &bull; Public access</span>
                    </div>
                  </div>
                  
                  {/* Glassmorphic View Badge */}
                  <div className="flex items-center gap-1 bg-white border border-neutral-200 shadow-sm px-2.5 py-1 rounded-lg text-[9px] font-mono font-medium text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                    <Eye className="w-3.5 h-3.5" /> CLICK TO VIEW
                  </div>
                </div>

                {/* Folder Content / File List */}
                <div className="p-5 space-y-2.5 bg-white">
                  {mockFiles.map((file, idx) => {
                    const FileIcon = file.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-3 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${file.color}`}>
                            <FileIcon className="w-4 h-4" />
                          </div>
                          <p className="text-[11px] font-medium text-neutral-700 truncate max-w-[280px] sm:max-w-[380px]">
                            {file.name}
                          </p>
                        </div>
                        <span className="text-[9px] font-mono text-neutral-400 font-semibold shrink-0">
                          {file.size}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Call-to-Action Bar inside Folder */}
                <div className="bg-neutral-50 border-t border-neutral-200 px-5 py-4 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>5 assets &bull; Last updated recently</span>
                  <span className="text-indigo-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    drive.google.com <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
