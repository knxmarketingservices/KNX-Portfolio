import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Selected Work", href: "#work" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "AI Edge", href: "#ai" },
    { name: "Client Receipts", href: "#words" },
    { name: "Founder's Track", href: "#founder" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-black/10 bg-white/80 backdrop-blur-md py-4"
            : "border-b border-transparent bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center group"
            aria-label="Kronnex Home"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img src="/NEW_LOGO.png" alt="Kronnex Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-500 hover:text-black hover:line-through transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="text-xs font-semibold tracking-wider uppercase bg-black text-white hover:bg-neutral-800 transition-colors px-5 py-2.5 rounded-full flex items-center gap-1.5"
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-black hover:text-neutral-600 transition-colors"
            id="mobile-menu-trigger"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden"
            id="mobile-menu-overlay"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white px-6 py-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-neutral-100">
                  <span className="font-display font-bold text-lg tracking-widest">
                    KRONNEX
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-black hover:bg-neutral-100 rounded-full transition-colors"
                    id="mobile-menu-close"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-neutral-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-black text-white py-3.5 rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors"
                >
                  Start a project
                </a>
                <p className="text-center font-mono text-[10px] text-neutral-400 mt-4">
                  Growth Partner · Chennai, India © 2026
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
