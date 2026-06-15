import { CaseStudy, Testimonial, Capability, RoadmapItem, StatItem } from "./types";

export const STATS_DATA: StatItem[] = [
  { id: "reach", value: "350K+", label: "Reach Driven", metricLabel: "Impressions" },
  { id: "leads", value: "237", label: "Qualified Leads", metricLabel: "Verified Leads" },
  { id: "enquiries", value: "400+", label: "Enquiries Generated", metricLabel: "Active Chats" },
  { id: "brands", value: "5", label: "Brands Served", metricLabel: "Enterprise Clients" },
];

export const KRONNEX_WORK: CaseStudy[] = [
  {
    id: "gvr",
    clientName: "Golden Venture Realtor",
    category: "Creative · Social",
    tag: "Luxury Real Estate",
    location: "Dubai 🇦🇪",
    title: "High-End Dubai Launches",
    description: "Full creative direction for high-end Dubai launches including Bugatti Residences and Mercedes-Benz by Binghatti. Created a prestigious design system and executed a focused sprint that elevated engagement for high-net-worth audiences.",
    stats: [
      { value: "+260%", label: "Views Growth" },
      { value: "92%", label: "From Non-Followers" },
      { value: "+233%", label: "Reach Spurt" }
    ],
    showcaseImages: [
      { src: "/mercedes-post-1.png", label: "Mercedes-Benz Exterior Post 1" },
      { src: "/mercedes-post-2.png", label: "Mercedes-Benz Exterior Post 2" },
    ],
    captions: ["Bugatti Residences Campaign", "Mercedes-Benz by Binghatti Reveal", "Penthouse Collection Launch"],
    mockChartTitle: "Impressions Lift (Bugatti & Mercedes Campaigns)",
    mockChartData: [
      { period: "Sprint W1", metric: 25000 },
      { period: "Sprint W2", metric: 68000 },
      { period: "Sprint W3", metric: 145000 },
      { period: "Sprint W4", metric: 350000 },
    ]
  },
  {
    id: "hash",
    clientName: "Hash Bespoke & Clothing",
    category: "Brand · Video",
    tag: "Bridal Couture",
    location: "India 🇮🇳",
    title: "Bridal Couture Identity & Film",
    description: "Restructured product social assets into a cohesive premium brand identity. Scripted, directed, and filmed introducing the founder directly to prospective brides, shifting organic traffic into direct wedding inquiries.",
    stats: [
      { value: "+190%", label: "Video Views" },
      { value: "2.3K", label: "Highly-Targeted Leads" },
      { value: "3K+", label: "Organic Reach Growth" }
    ],
    captions: ["Wedding Trousseau Series", "More Than Just A Dress Lookbook", "Founder Core Story Film"],
    mockChartTitle: "Organic Video Engagement Curve",
    mockChartData: [
      { period: "Pre-Launch", metric: 1200 },
      { period: "Teaser W1", metric: 2800 },
      { period: "Story Reveal W2", metric: 4900 },
      { period: "Main Film W3", metric: 6400 },
    ]
  },
  {
    id: "sukriti",
    clientName: "Sukriti Ayur",
    category: "Content System · AI Creative",
    tag: "Health & Wellness",
    location: "Chennai 🇮🇳",
    title: "Repeatable Clinic Content Engine",
    description: "Designed a systematic clinical marketing framework. Included in-clinic doctor storyboards, Patient POV testimonials, and heavily prompt-engineered AI thumbnails to maximize click-through rate.",
    stats: [
      { value: "+172%", label: "Educational Impressions" },
      { value: "+797%", label: "Profile Interactive Rates" },
      { value: "+500%", label: "Website Link Clicks" }
    ],
    captions: ["Educational Treatment Carousels", "AI-Generated Concept Art", "In-Clinic Therapy Visuals"],
    mockChartTitle: "Monthly Link Tap Analytics",
    mockChartData: [
      { period: "Before KNX", metric: 120 },
      { period: "Month 1", metric: 310 },
      { period: "Month 2", metric: 490 },
      { period: "Month 3", metric: 720 },
    ]
  },
  {
    id: "pawan",
    clientName: "Pawan Castles",
    category: "Full Funnel · Meta Ads",
    tag: "Property Developer",
    location: "Chennai 🇮🇳",
    title: "Residential Funnel & Lead Gen",
    description: "An intensive end-to-end multi-channel growth system. Includes 12 customized static and video creative assets per month, hyper-targeted local Meta campaign management, custom print flyers distributed via 5,000 local newspaper copies, and structured conversion paths.",
    stats: [
      { value: "266K", label: "Active Reel Views" },
      { value: "237+", label: "Direct Meta Leads" },
      { value: "120-150", label: "Inbound Calls / Month" }
    ],
    captions: ["Villas Campaign Concept", "Distributed Print Leaflet", "Scripted Property Walkthroughs"],
    mockChartTitle: "Verified Leads Feed Dynamics",
    mockChartData: [
      { period: "Campaign Launch", metric: 35 },
      { period: "Optimization Phase", metric: 98 },
      { period: "Scaling Month 1", metric: 165 },
      { period: "Steady State W8+", metric: 237 },
    ]
  },
  {
    id: "image-innovation",
    clientName: "Image Innovation Technology",
    category: "Web Design · Brand Site",
    tag: "Web Design",
    location: "Chennai 🇮🇳",
    title: "Brand Website & High-Performance UI",
    description: "A full website, designed and built end to end — a clean, modern brand site for an established technology company. Custom UI, responsive across devices, and structured to convert visitors into enquiries.",
    stats: [
      { value: "100%", label: "Responsive Custom UI" },
      { value: "+45%", label: "Visitor Conversion Lift" },
      { value: "End-to-End", label: "Design & Coded" }
    ],
    captions: ["High-Fidelity UI Layout", "Vite & React Fast-Mesh Loading", "Dynamic Inquiry Pipeline"],
    mockChartTitle: "Inquiries Influx (Web Relaunch)",
    mockChartData: [
      { period: "Audits", metric: 14 },
      { period: "Beta Launch", metric: 38 },
      { period: "Launch W1", metric: 89 },
      { period: "Steady State", metric: 172 },
    ]
  }
];

export const FOUNDER_RECORD: CaseStudy[] = [
  {
    id: "srm",
    clientName: "SRM Admissions Revamp",
    category: "Web Revamp · UX",
    tag: "UX Design",
    location: "SRM Institute · Internship · India 🇮🇳",
    title: "SRM Admissions Page Redesign",
    description: "An internship at SRM: revamped the admissions landing page and reworked hero sections across the site — contributing UX direction and design inputs aimed at a clearer, higher-converting admissions journey.",
    stats: [
      { value: "UX Audited", label: "Full Intake Assessment" },
      { value: "+28%", label: "Conversion Rerouting" },
      { value: "Mobile Optimized", label: "Responsive Refactor" }
    ],
    captions: ["Admissions Landing Revamp", "Hero Section Concepts", "Department Navigation Split"],
    mockChartTitle: "Admissions Funnel Intent Tracking",
    mockChartData: [
      { period: "Pre-Audit", metric: 310 },
      { period: "Concept Slices", metric: 650 },
      { period: "Final Rollout", metric: 1240 },
    ]
  },
  {
    id: "uni",
    clientName: "A Tamil Nadu University",
    category: "Portfolio Optimization",
    tag: "Higher Education",
    location: "India 🇮🇳",
    title: "Higher-Ed Multi-School Intake",
    description: "Audited and restructured lead capture funnels across 294 distinct ad campaigns. Enhanced ad layouts and crafted micro-copy specific to targeted departments (Engineering, AI, Law, and Business School) to feed automated registrar pipelines.",
    stats: [
      { value: "607K", label: "Prospective Accounts Reached" },
      { value: "459+", label: "Verified Admissions Queries" },
      { value: "294", label: "Ad Sets Continuously Tuned" }
    ],
    captions: ["Optimized Admissions Landing", "Meta Lead Form Flow", "Targeted Analytics Funnel"],
    mockChartTitle: "Verified Admission Leads",
    mockChartData: [
      { period: "Adsets Audit", metric: 89 },
      { period: "Draft Rewrite", metric: 194 },
      { period: "Optimal Delivery", metric: 459 },
    ]
  },
  {
    id: "truck",
    clientName: "US Truck Tax Filing Corp",
    category: "Funnel & Campaign Ops",
    tag: "Fintech / Logistics",
    location: "USA 🇺🇸",
    title: "US Interstate Filing Funnel",
    description: "Assumed complete strategic ownership over creative scripting, landing copy, budget structures, and daily bid optimizations on Meta during critical IRS filing deadlines. Created immediate local visual authority within the owner-operator trucking community.",
    stats: [
      { value: "327K+", label: "Relevant Ad Impressions" },
      { value: "230K", label: "Target Demographics Reached" },
      { value: "90 Days", label: "Full Funnel Ingress Setup" }
    ],
    captions: ["Hero Tax Calculator Ad", "Penalty Prevention Copy", "Quick 3-Step Secure Filing"],
    mockChartTitle: "Reach Curve Over Deadlines",
    mockChartData: [
      { period: "Week 1", metric: 45000 },
      { period: "Week 4", metric: 110000 },
      { period: "Week 8", metric: 198000 },
      { period: "Deadline Week", metric: 327000 },
    ]
  }
];

export const CAPABILITIES: Capability[] = [
  {
    id: "perf",
    index: "01",
    title: "Meta Ads & Performance",
    description: "A disciplined testing protocol that isolates highest-value target buyers. From custom Lead Form workflows to rigorous landing copy refinement, we pipe ready-to-buy prospects into your internal sales teams."
  },
  {
    id: "creat",
    index: "02",
    title: "Creative Direction",
    description: "Distinctive design languages custom-built for high-ticket and luxury sectors. We construct aesthetics that command premium pricing, establishing strong market presence."
  },
  {
    id: "video",
    index: "03",
    title: "Editorial Video & Copy",
    description: "Directing storyboards that capture authority. Scripting natural founder stories, patient/client POVs, and highly educational guides that build immediate personal authority."
  },
  {
    id: "ai",
    index: "04",
    title: "AI Workflows & Automation",
    description: "Architecting bespoke solutions for research, competitor intelligence, and copy modeling. We use AI natively to move at high speed, now crafting them into automated SaaS components.",
    tag: "In Development"
  },
  {
    id: "print",
    index: "05",
    title: "Print & Ground-Level",
    description: "Direct-response flyer copy, localized print templates, and newspaper inserts distributed directly to local doorsteps. Bridging the gap between active pixels and absolute physical real estate."
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: "rm1",
    title: "Prospect Intelligence",
    description: "Scans corporate websites and search clusters to isolate priority expansion pipelines and formulate personalized outreach angles automatically.",
    pills: ["B2B Prospecting", "Automated Scraping", "Custom Prompt Vectors"],
    status: "Beta Live"
  },
  {
    id: "rm2",
    title: "Instant Audit Engine",
    description: "A comprehensive analysis program assessing local search authority, creative depth, social consistency, and active meta ad funnels in 60 seconds.",
    pills: ["Funnel Scraping", "Creative Audit", "SEO Pipeline"],
    status: "In Development"
  },
  {
    id: "rm3",
    title: "Content Pilot",
    description: "Converts educational papers, technical transcripts, and founder audio notes into high-performing script drafts optimized for quick hooks and retention.",
    pills: ["Audio To Script", "Conversion Optimizers", "Hook Library"],
    status: "In Development"
  },
  {
    id: "rm4",
    title: "Ad Strategist System",
    description: "Simulates competitor bid profiles, forecasts local cost-per-lead variations, and outputs structured copy setups to optimize ad spend.",
    pills: ["Meta Simulator", "Competitive Intelligence", "Copy Sandbox"],
    status: "Backlog"
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    via: "WhatsApp",
    clientName: "Mrs. Chandra",
    brand: "Partner",
    feedback: "The social media strategy was absolutely wonderful, and I really loved the designs you produced.",
    date: "14:12",
    avatar: "/Chandra.jpeg"
  },
  {
    id: "t2",
    via: "WhatsApp",
    clientName: "Mr. Sharan Dilli Babu",
    brand: "Founder",
    feedback: "We received wonderful ideations for the scripts and writings from the team. Great work capturing the right tone.",
    date: "18:45",
    avatar: "/Sharan Dilli Babu.jpeg"
  },
  {
    id: "t3",
    via: "WhatsApp",
    clientName: "Mrs. Priya Arun",
    brand: "Director",
    feedback: "A wonderful shooting experience in the studio! The whole team made it seamless, and the scripting part was just perfect.",
    date: "10:30",
    avatar: "/priya.jpeg"
  },
  {
    id: "t4",
    via: "WhatsApp",
    clientName: "Mr. M Veerappan",
    brand: "Owner",
    feedback: "You guys designed the website perfectly for us. The design structure is beautiful and really elevates our platform.",
    date: "16:20",
    avatar: "/veerappan.jpeg"
  }
];
