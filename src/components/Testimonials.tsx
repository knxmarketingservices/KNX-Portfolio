import React, { useState } from "react";
import { CLIENT_TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCheck, Smartphone, MessageSquareCode, Search, Phone, Video, MoreVertical } from "lucide-react";
import ScrollingBackgroundText from "./ScrollingBackgroundText";

export default function Testimonials() {
  const [activeTestimonialId, setActiveTestimonialId] = useState<string>("t1");

  const testimonials = CLIENT_TESTIMONIALS;
  const activeChat = testimonials.find((t) => t.id === activeTestimonialId) || testimonials[0];

  return (
    <section id="words" className="py-24 bg-neutral-50 border-b border-neutral-100 relative overflow-hidden">
      <ScrollingBackgroundText text="CLIENT RECEIPTS" direction="right" speed={100} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title container */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2">
            Client Receipts
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-neutral-900">
            Real chats. Real trust.
          </h2>
          <p className="text-sm md:text-base text-neutral-500 mt-4 font-light leading-relaxed">
            Straight from the founders, corporate directors, and partners we collaborate with — authentic, unedited WhatsApp transcripts of historical progress.
          </p>
        </div>

        {/* WhatsApp Mock desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Left panel: Chat list selection */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col justify-start gap-2 shadow-sm min-h-[300px]">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-2">
              <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquareCode className="w-4 h-4 text-neutral-500" /> Incoming Messages
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full font-mono">
                {testimonials.length} CONVERSATIONS
              </span>
            </div>

            {/* Custom search head */}
            <div className="relative mb-4">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search archive..."
                disabled
                className="w-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-500 pl-9 pr-3 py-2 rounded-xl focus:outline-none"
              />
            </div>

            {/* Contacts lists */}
            <div className="space-y-1.5">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setActiveTestimonialId(t.id)}
                  className={`p-3.5 rounded-xl text-left cursor-pointer transition-all flex items-center justify-between group ${
                    activeTestimonialId === t.id
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {/* Circle avatar */}
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.clientName} className="w-9 h-9 rounded-full shrink-0 object-cover border border-neutral-200" />
                    ) : (
                      <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-bold text-xs select-none ${
                        activeTestimonialId === t.id ? "bg-white text-black" : "bg-neutral-200 text-neutral-700"
                      }`}>
                        {t.clientName.substring(0, 2)}
                      </div>
                    )}

                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold truncate">
                        {t.clientName}
                      </p>
                      <p className={`text-[10px] truncate ${
                        activeTestimonialId === t.id ? "text-neutral-400" : "text-neutral-500"
                      }`}>
                        {t.brand}
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono shrink-0 text-right opacity-70">
                    {t.date || "10:30"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Phone Messenger Frame Emulator */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 rounded-2xl bg-[#efeae2] h-full flex flex-col justify-between overflow-hidden shadow-md min-h-[420px] relative">
              {/* WhatsApp background pattern mesh */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                  backgroundSize: "cover"
                }}
              />

              {/* Chat Window header */}
              <div className="bg-neutral-900 text-white px-5 py-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  {activeChat.avatar ? (
                    <img src={activeChat.avatar} alt={activeChat.clientName} className="w-10 h-10 rounded-full object-cover border border-neutral-700" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-sm text-neutral-100 font-mono">
                      {activeChat.clientName.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-sans font-semibold text-xs truncate max-w-[170px]">
                        {activeChat.clientName}
                      </h4>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[10px] text-emerald-400 font-medium">
                      online &middot; verified contact
                    </p>
                  </div>
                </div>

                {/* WhatsApp header tools widgets */}
                <div className="flex items-center gap-4 text-neutral-400">
                  <Phone className="w-3.5 h-3.5 text-neutral-300 pointer-events-none" />
                  <Video className="w-3.5 h-3.5 text-neutral-300 pointer-events-none" />
                  <MoreVertical className="w-3.5 h-3.5 text-neutral-300 pointer-events-none" />
                </div>
              </div>

              {/* Inside chat container bubble messages */}
              <div className="flex-1 p-6 flex flex-col justify-end space-y-4 relative z-10">
                
                {/* Information badge */}
                <div className="self-center bg-white/90 border border-neutral-200/50 text-[10px] text-neutral-500 font-mono text-center rounded-lg px-3 py-1 scale-95 uppercase tracking-wider shadow-sm select-none">
                  🔒 Messages are unedited direct customer transcripts
                </div>

                {/* Client's Bubble (Left side) */}
                <motion.div
                  key={activeChat.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="max-w-[85%] self-start bg-white rounded-r-2xl rounded-bl-2xl p-4 shadow-sm border border-neutral-100 flex flex-col gap-1.5"
                >
                  <p className="text-xs font-light text-neutral-800 leading-relaxed font-sans">
                    “{activeChat.feedback}”
                  </p>
                  <div className="flex items-center justify-end gap-1 self-end">
                    <span className="text-[9px] font-mono text-neutral-400">
                      {activeChat.date || "12:15"}
                    </span>
                  </div>
                </motion.div>

                {/* Kronnex response bubble (Right side) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-[75%] self-end bg-[#d9fdd3] rounded-l-2xl rounded-br-2xl p-3.5 shadow-sm border border-emerald-100 flex flex-col gap-1"
                >
                  <p className="text-xs text-neutral-800 leading-relaxed">
                    Thank you so much! It was a pleasure working with you. The Kronnex team is absolutely thrilled, and we're ready whenever you are for the next phase.
                  </p>
                  <div className="flex items-center justify-end gap-1 self-end text-emerald-600">
                    <span className="text-[9px] font-mono text-neutral-500">
                      Read
                    </span>
                    <CheckCheck className="w-3.5 h-3.5" />
                  </div>
                </motion.div>

              </div>

              {/* Chat control input field */}
              <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-neutral-200 relative z-10 justify-between">
                <input
                  type="text"
                  placeholder="Ask Kronnex about their project results..."
                  disabled
                  className="bg-white border border-neutral-200 flex-1 px-4 py-2.5 rounded-full text-xs text-neutral-400 focus:outline-none focus:border-neutral-400 font-light"
                />
                <button
                  type="button"
                  disabled
                  className="bg-emerald-500 text-white p-2.5 rounded-full shrink-0 shadow-sm cursor-not-allowed opacity-75"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
