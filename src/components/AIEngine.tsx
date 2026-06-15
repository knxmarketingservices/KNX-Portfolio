import React, { useState } from "react";
import { ROADMAP_ITEMS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Cpu, ArrowRight, Play, CheckCircle2, Terminal, AlertTriangle, Sparkles } from "lucide-react";

export default function AIEngine() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>("rm1");
  const [niche, setNiche] = useState<string>("luxury_property");
  const [blocker, setBlocker] = useState<string>("social_strategy");
  const [isScanning, setIsScanning] = useState(false);
  const [scanOutput, setScanOutput] = useState<any | null>(null);
  const [scanStep, setScanStep] = useState(0);

  const nichesList = [
    { id: "luxury_property", name: "High-Ticket / Real Estate" },
    { id: "couture_brand", name: "Bespoke Fashion & Lifestyle" },
    { id: "clinic_health", name: "Clinical Health & Ayurvedic" },
    { id: "saas_b2b", name: "Enterprise SaaS & B2B" }
  ];

  const blockersList = [
    { id: "social_strategy", name: "I want to build an authority-driven social media strategy" },
    { id: "video_hooks", name: "I need high-retention hook architectures for scripted videos" },
    { id: "meta_ads", name: "How do I approach scalable, high-converting Meta Ads?" }
  ];

  const handleRunAudit = () => {
    setIsScanning(true);
    setScanOutput(null);
    setScanStep(0);

    // Simulate stepping through log outputs
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsScanning(false);
          generateTargetOutput();
          return 3;
        }
        return prev + 1;
      });
    }, 700);
  };

  const generateTargetOutput = () => {
    let response = {
      summary: "",
      hooks: [] as string[],
      campaignAngle: "",
      targetTip: ""
    };

    if (niche === "luxury_property") {
      if (blocker === "social_strategy") {
        response.summary = "Luxury property buyers bypass standard promotional listings. A premium social strategy must focus on lifestyle narratives, off-market portfolio access, and developer design heritage.";
        response.hooks = [
          "Expose the design details: 'The 3 custom features inside this Palm Jumeirah villa that cost more than typical apartments.'",
          "The private access hook: 'How international family offices secure off-market penthouses before release.'"
        ];
        response.campaignAngle = "Run campaigns positioning your brand as private acquisition advisors rather than transactional brokers, steering traffic to private video walkthroughs.";
        response.targetTip = "Produce ultra-premium video tours showing structural craftsmanship (e.g. customized marble slabs, natural daylight angles).";
      } else if (blocker === "video_hooks") {
        response.summary = "High-net-worth individuals have low tolerance for loud sales pitches. Retention is captured through quiet, raw luxury and ambient audio walkthroughs.";
        response.hooks = [
          "What a $12 Million luxury villa in Dubai looks like at 6:00 AM (raw ambient sounds, no voiceover).",
          "The negative luxury filter: 'Why the new Bugatti Residences penthouses are deliberately unavailable to 95% of buyers.'"
        ];
        response.campaignAngle = "Utilize silent cinematic reels with minimalist serif text overlays to draw attention on visual feeds.";
        response.targetTip = "Focus on details. Shoot high-resolution close-ups of premium materials, private views, and architectural layouts.";
      } else { // meta_ads
        response.summary = "HNW real estate requires strict lead verification barriers. Standard campaigns attract unqualified clicks and spam leads.";
        response.hooks = [
          "How local real estate policy revisions are shifting high-ticket property trends.",
          "The off-market ledger: 'Analyzing the off-market penthouses yielding 8%+ net rental returns.'"
        ];
        response.campaignAngle = "Implement custom Meta lead forms requiring prospective buyers to select their planned investment timeline and minimum budget brackets.";
        response.targetTip = "Create high-value downloadable PDF dossiers (like 'Dubai Off-Market Penthouse Catalog') to filter for qualified buyers.";
      }
    } else if (niche === "couture_brand") {
      if (blocker === "social_strategy") {
        response.summary = "Couture fashion purchase decisions are entirely storytelling and craftsmanship driven. Social positioning must build designer prestige.";
        response.hooks = [
          "The heritage hook: 'The 48-hour hand-embroidery process behind this custom bridal silhouette.'",
          "Process transparency: 'Why our couture fitting diary requires a 3-month waitlist.'"
        ];
        response.campaignAngle = "Leverage behind-the-scenes fitting diaries, founder design sketches, and tactile fabric close-ups to justify premium pricing.";
        response.targetTip = "Maintain warm, studio lighting and focus heavily on fabric texture, stitching, and styling detail.";
      } else if (blocker === "video_hooks") {
        response.summary = "Couture video engagement relies on high-contrast fabric textures and emotional, process-driven bridal storytelling.";
        response.hooks = [
          "POV: You are stepping into a custom-tailored heritage bridal gown designed over 6 months.",
          "The designer's log: 'The stitching mistake that taught us how to handle premium silk.'"
        ];
        response.campaignAngle = "Target high-intent wedding registry, luxury fashion, and designer boutique interest cohorts.";
        response.targetTip = "Avoid standard corporate studios. Record in warm, organic, naturally lit showroom settings.";
      } else { // meta_ads
        response.summary = "Bespoke fashion requires visual prestige ads. Multi-image layouts displaying needlecraft detail perform best.";
        response.hooks = [
          "How we structure custom bridal silhouettes for heritage weddings.",
          "Bespoke consultation: 'What happens during a private 1-on-1 design blueprint session.'"
        ];
        response.campaignAngle = "Run multi-image carousel ads showcasing close-up handcraft, linking to a private calendar booker.";
        response.targetTip = "Focus ad copy entirely on exclusivity, design legacy, and custom fit rather than discounts.";
      }
    } else if (niche === "clinic_health") {
      if (blocker === "social_strategy") {
        response.summary = "Clinical and Ayurvedic authority is built on educational trust. Shift social strategy from generic clinic slogans to doctor-led science.";
        response.hooks = [
          "The clinical expose: 'Why typical detox treatments might be silently triggering gut inflammation.'",
          "The physiological truth: 'How chronic stress manifests in the skin (doctor explainer POV).'"
        ];
        response.campaignAngle = "Post detailed patient recovery diaries, case histories, and research summaries to validate treatment efficacy.";
        response.targetTip = "Add bold, high-contrast text overlays directly on explanation videos.";
      } else if (blocker === "video_hooks") {
        response.summary = "Clinical health video retention is driven by physiological revelations, clear science, and trust-vetted setups.";
        response.hooks = [
          "The physiological trigger behind chronic joint inflammation that most clinics ignore.",
          "POV: A therapeutic morning walkthrough inside our clinical Ayurveda treatment rooms."
        ];
        response.campaignAngle = "Publish educational reels showing doctors answering real patient questions in a clinical setting.";
        response.targetTip = "Optimize video thumbnails by using professional clinical backdrops, white coats, and bold labels.";
      } else { // meta_ads
        response.summary = "Clinic ads must build trust and target locally. Use radius-based campaigns to drive active local bookings.";
        response.hooks = [
          "Case study: How we restructured this patient's lifestyle plan to resolve chronic symptoms.",
          "Diagnostic blueprint: 'What to expect during your first diagnostic consultation.'"
        ];
        response.campaignAngle = "Run geographical radius campaigns around the clinic, serving educational carousel ads that link to a direct booking calendar.";
        response.targetTip = "Keep ad copy professional, compliance-friendly, and focused on symptom restoration and precise diagnostics.";
      }
    } else { // saas_b2b
      if (blocker === "social_strategy") {
        response.summary = "Enterprise B2B clients seek measurable efficiency gains and risk mitigation. Social content must feature raw systems and metrics.";
        response.hooks = [
          "The automation log: 'The 30-line shell script saving our engineering team 15 hours every week.'",
          "System leakage: 'Why standard B2B sales pipelines lose up to 40% of leads before contact.'"
        ];
        response.campaignAngle = "Share actual technical blueprints, database flows, and system architectures to prove engineering capabilities.";
        response.targetTip = "Use high-contrast dark mode images showing dashboard analytics, system logs, or clean code snippets.";
      } else if (blocker === "video_hooks") {
        response.summary = "B2B tech video hooks must focus on engineering productivity, workflow hacks, and developer tools.";
        response.hooks = [
          "How we automated competitive market intelligence tracking for B2B pricing.",
          "The direct comparison: 'Why standard outsourced agency models lead to pipeline decay.'"
        ];
        response.campaignAngle = "Deploy reels showing developers walking through live dashboards, database consoles, or integrations.";
        response.targetTip = "Record raw screen-shares showing product features and terminal consoles rather than talking heads.";
      } else { // meta_ads
        response.summary = "Meta B2B ads perform best when offering tangible tools (calculators, dashboards, templates) rather than generic consult calls.";
        response.hooks = [
          "Download the exact spreadsheet model we use to scale HNW buyer funnels.",
          "The B2B blueprint: 'The conversion infrastructure template for SaaS applications.'"
        ];
        response.campaignAngle = "Promote high-value downloadable tools or templates to capture B2B emails, piping them to sales channels.";
        response.targetTip = "Style ad creatives with clean, monospaced tech-inspired text highlights and dark themes.";
      }
    }

    setScanOutput(response);
  };

  const getStepText = (step: number) => {
    switch (step) {
      case 0:
        return "Initializing audit sandbox environment for client scope...";
      case 1:
        return "Analyzing meta pixels, query channels, and historical traffic models...";
      case 2:
        return "Parsing search competitiveness index and local cohort data...";
      case 3:
        return "Running AI predictive heuristic recommendation generator...";
      default:
        return "";
    }
  };

  return (
    <section id="ai" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Cybernetic Dot/Grid Effects */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1.5px)",
          backgroundSize: "20px 20px"
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              The Kronnex Edge
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-white leading-tight">
              Built AI-native.<br />
              <span className="italic text-neutral-400">Building growth products.</span>
            </h2>
            <p className="text-neutral-400 font-light mt-4 text-sm sm:text-base max-w-xl leading-relaxed">
              We aren't an agency pasting on AI as an empty buzzword. Intelligent systems are deeply integrated inside our daily playbook — from prompt-engineered thumbnails to competitive data harvesting.
            </p>
          </div>

          <div className="lg:col-span-5 bg-neutral-800/40 p-6 rounded-2xl border border-neutral-800 flex items-start gap-4">
            <Cpu className="w-8 h-8 text-neutral-300 shrink-0 mt-1" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
                System Efficiency
              </p>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Our bespoke workflows allow a concise, highly focused team to output comparable digital reach of a 25-person generalist agency.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Sandbox Audit Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Controls Form */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-neutral-800">
                <Brain className="w-5 h-5 text-neutral-300" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Audit Configuration Terminal
                </span>
              </div>

              {/* Step 1: Niche */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 block mb-2">
                  01. Choose Target Business Domain
                </label>
                <div className="flex flex-col gap-2">
                  {nichesList.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setNiche(n.id)}
                      className={`px-4 py-2 text-xs rounded-xl text-left font-medium border transition-all ${
                        niche === n.id
                          ? "bg-white border-white text-black font-semibold"
                          : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-500"
                      }`}
                    >
                      {n.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Blocker */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-400 block mb-2">
                  02. Primary Conversion Bottleneck
                </label>
                <select
                  value={blocker}
                  onChange={(e) => setBlocker(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-xs rounded-xl p-3 text-neutral-300 focus:outline-none focus:border-neutral-400 font-medium"
                >
                  {blockersList.map((bl) => (
                    <option key={bl.id} value={bl.id}>
                      {bl.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Run Button */}
            <div className="mt-8">
              <button
                onClick={handleRunAudit}
                disabled={isScanning}
                className="w-full bg-white text-black hover:bg-neutral-200 transition-colors font-medium text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {isScanning ? "Evaluating Funnels..." : "Assemble Growth Blueprint"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-[10px] text-neutral-500 font-mono text-center block mt-3">
                Calculated locally via system rule nodes.
              </span>
            </div>
          </div>

          {/* Render Output Console / Loading Screen */}
          <div className="lg:col-span-7 bg-black rounded-2xl border border-neutral-800 p-6 sm:p-8 flex flex-col min-h-[440px] justify-between relative overflow-hidden">
            {/* Console grid header */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                <span>stdout_log_stream://{niche}.env</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {/* STATE 0: Empty Idle State */}
                {!isScanning && !scanOutput && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 max-w-sm mx-auto"
                  >
                    <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                      <Terminal className="w-5 h-5 animate-pulse" />
                    </div>
                    <p className="text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold">
                      Sandbox Terminal Offline
                    </p>
                    <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                      Configure your company parameters in the left config board and click assemble to generate a targeted digital strategy instantly.
                    </p>
                  </motion.div>
                )}

                {/* STATE 1: Analyzing Loading Screen */}
                {isScanning && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Fake Loading Progress Bar */}
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-neutral-850 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2.5 }}
                          className="h-full bg-white"
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[9px] text-neutral-500">
                        <span>CALIBRATING META PARAMS</span>
                        <span>{Math.round((scanStep + 1) * 25)}%</span>
                      </div>
                    </div>

                    <div className="font-mono text-xs text-neutral-400 space-y-2 select-all">
                      <p className="text-[#a1a1aa]">&gt; {getStepText(0)}</p>
                      {scanStep >= 1 && <p className="text-neutral-500">&gt; {getStepText(1)}</p>}
                      {scanStep >= 2 && <p className="text-neutral-500">&gt; {getStepText(2)}</p>}
                      {scanStep >= 3 && <p className="text-white font-semibold">&gt; {getStepText(3)}</p>}
                    </div>
                  </motion.div>
                )}

                {/* STATE 2: Completed Report Screen */}
                {!isScanning && scanOutput && (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 border border-emerald-900 rounded-full mb-3">
                        <Sparkles className="w-3 h-3" /> Blueprint Ready
                      </div>
                      <h4 className="font-display font-medium text-lg tracking-tight text-white">
                        Prescription Strategy Report
                      </h4>
                      <p className="text-xs text-neutral-400 font-light mt-1.5">
                        {scanOutput.summary}
                      </p>
                    </div>

                    {/* Hooks list */}
                    <div className="border-t border-neutral-800 pt-4 space-y-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
                        Retention Hook-First Storyboards
                      </span>
                      <ul className="text-xs space-y-2 text-neutral-300 font-light">
                        {scanOutput.hooks.map((h: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-neutral-500 font-mono">0{i+1}.</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Campaign angles */}
                    <div className="border-t border-neutral-800 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
                          Meta Ad Campaign Angle
                        </span>
                        <p className="text-xs text-neutral-300 font-light mt-1 leading-relaxed">
                          {scanOutput.campaignAngle}
                        </p>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
                          Creative Asset Directive
                        </span>
                        <p className="text-xs text-neutral-300 font-light mt-1 leading-relaxed">
                          {scanOutput.targetTip}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Console Log status footer */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>SYSTEM_NODE: ACTIVE</span>
              <span>VERIFIED AD ENGINE © 2026</span>
            </div>
          </div>

        </div>

        {/* Product Roadmap Section */}
        <div className="border-t border-neutral-800 pt-16">
          <div className="max-w-xl mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2">
              Our Products Pipeline
            </span>
            <h3 className="font-display font-medium text-2xl tracking-tight text-white">
              Shaping internal tools into dynamic SaaS products.
            </h3>
            <p className="text-xs text-neutral-400 mt-2 font-light">
              We compile our proprietary prospecting, copy modeling, and audit scripts into unified web products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ROADMAP_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(selectedProduct === item.id ? null : item.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  selectedProduct === item.id
                    ? "bg-neutral-850 border-white text-white"
                    : "bg-neutral-900 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-display font-medium text-base text-white">
                    {item.title}
                  </h4>
                  <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                    item.status === "Beta Live" 
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-900"
                      : item.status === "In Development"
                        ? "bg-neutral-800 text-neutral-300 border border-neutral-700"
                        : "bg-neutral-900 text-neutral-500 border border-neutral-800"
                  }`}>
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sub roadmap pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-neutral-800">
                  {item.pills.map((pill, i) => (
                    <span key={i} className="text-[9px] font-mono text-neutral-500 bg-black/40 px-2 py-0.5 border border-neutral-850 rounded">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
