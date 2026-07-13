"use client";

import React from "react";
import { Mail, Phone, Heart } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

const SOCIAL_LINKS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    href: "https://github.com/mvsharma0817",
    label: "GitHub",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  { icon: <Mail className="h-5 w-5" />, href: "mailto:mvsharma0817@gmail.com", label: "Email" },
  { icon: <Phone className="h-5 w-5" />, href: "tel:+919023685012", label: "Phone" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-neutral-950/40 py-12 md:py-16 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col gap-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Intro */}
          <div className="flex flex-col gap-2.5 max-w-sm">
            <a href="#home" className="text-xl font-bold text-white tracking-tight">
              MS<span className="text-blue-500">.</span>
            </a>
            <p className="text-sm text-neutral-400">
              Building premium, production-ready mobile and web applications with Flutter and modern frontend tech stacks.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyrights */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span>&copy; {currentYear} Mihir Sharma. All rights reserved.</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="flex items-center gap-1.5">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <Magnetic key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900/40 text-neutral-400 hover:bg-neutral-800 hover:text-white hover:border-white/20 transition-all duration-300 shadow-md shadow-black/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
