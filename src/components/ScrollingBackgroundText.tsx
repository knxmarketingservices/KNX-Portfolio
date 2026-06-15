import React from "react";
import { motion } from "motion/react";

export default function ScrollingBackgroundText({ text, direction = "left", speed = 40 }: { text: string, direction?: "left" | "right", speed?: number }) {
  // We duplicate the text many times so it seamlessly loops
  const repeatedText = `${text} \u00A0 \u00A0 `.repeat(10);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-[0.03]">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap font-display font-black text-[12rem] sm:text-[20rem] md:text-[30rem] tracking-tighter leading-none"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
}
