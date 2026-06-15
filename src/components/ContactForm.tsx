import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState("Luxury Housing");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form handle
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Simulate database receipt
    setIsSubmitted(true);
  };

  // Compile pre-filled text for WhatsApp
  const baseWaNumber = "97455283706";
  const messageText = `Hi Kronnex team! My name is ${name}. I operate in ${niche} (Email: ${email}). ${
    message ? `Project detail: ${message}` : "I would like to explore structuring a growth campaign with you."
  }`;
  const encodedWaLink = `https://wa.me/${baseWaNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-sm">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block mb-1">
                Consultation Request Form
              </span>
              <h3 className="font-display font-medium text-2xl text-neutral-950">
                Let's scope your funnel parameters.
              </h3>
            </div>

            {/* Field: Name */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="client-name" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Your Full Name *
              </label>
              <input
                id="client-name"
                type="text"
                required
                placeholder="Ashwin Hari"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl p-3.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black placeholder-neutral-400 font-medium"
              />
            </div>

            {/* Field: Email */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="client-email" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Corporate Email Address *
              </label>
              <input
                id="client-email"
                type="email"
                required
                placeholder="ashwin@yourbrand.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl p-3.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black placeholder-neutral-400 font-medium"
              />
            </div>

            {/* Field: Domain */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="client-domain" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Target Business Domain
              </label>
              <select
                id="client-domain"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl p-3.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black font-semibold"
              >
                <option value="Luxury Housing">Luxury Housing / Real Estate</option>
                <option value="Bridal & Bridalwear">Bridal Couture &amp; Accessories</option>
                <option value="Ayurveda & Clinical">Ayurveda Clinic &amp; Medical Consultation</option>
                <option value="Product Tech & SaaS">Tech Enterprise &amp; SaaS</option>
                <option value="Consumer / Lifestyle">Consumer Direct / Other</option>
              </select>
            </div>

            {/* Field: Body message */}
            <div className="space-y-1.5 text-left">
              <label htmlFor="client-msg" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block font-normal">
                Brief details on target reach / core blockages (Optional)
              </label>
              <textarea
                id="client-msg"
                placeholder="E.g., We have been distributing printed flyers in Chennai, looking to build an structured online lead form to capture HNW investors."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-black rounded-xl p-3.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-black placeholder-neutral-400 font-light"
              />
            </div>

            {/* Action Group */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-800 transition-colors py-4 rounded-xl font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-black/5"
              >
                Process Consultation Blueprint
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-center py-8"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display font-medium text-2xl text-black">
                Form processed, {name}!
              </h3>
              <p className="text-xs text-neutral-500 font-light max-w-sm mx-auto mt-2 leading-relaxed">
                We have registered your parameters in our local sandbox. To accelerate scheduling and receive your instant audit draft, choose an instant transport below.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {/* WhatsApp direct compiled link */}
              <a
                href={encodedWaLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25d366]/10 border border-[#25d366]/20 text-[#128c7e] hover:bg-[#25d366]/20 transition-all py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-[#128c7e] text-transparent" /> Send pre-filled message on WhatsApp
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Direct email backup */}
              <a
                href={`mailto:knxmarketing@gmail.com?subject=Growth Campaign - ${niche}&body=${encodeURIComponent(messageText)}`}
                className="w-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 transition-all py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> fallback to email dispatch
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
              }}
              className="text-[10px] text-neutral-400 font-mono hover:underline"
            >
              Start over / submit a separate inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
