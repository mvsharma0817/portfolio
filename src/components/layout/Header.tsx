"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "../ui/Magnetic";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full px-6 py-2.5",
          isScrolled
            ? "glass-panel bg-neutral-950/70 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "border-transparent bg-transparent"
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl font-bold bg-clip-text text-white group-hover:text-blue-400 transition-colors">
            MS<span className="text-blue-500">.</span>
          </span>
          <span className="hidden sm:inline-block text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
            Mihir Sharma
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 relative">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 z-10"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.label}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-neutral-800/60 -z-10 border border-white/5"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Magnetic>
            <a
              href="#contact"
              className="group flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
            >
              Contact Me
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden items-center justify-center p-2 rounded-full border border-white/10 bg-neutral-900/65 text-neutral-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 z-40 rounded-3xl glass-panel bg-neutral-950/95 border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium rounded-2xl text-neutral-400 hover:text-white hover:bg-neutral-850 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
