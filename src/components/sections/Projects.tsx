"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { ExternalLink, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  caseStudy: string;
  uiMockup: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    title: "Car Spa Management System",
    description: "A comprehensive Flutter application designed for managing high-volume car wash businesses. Features customer billing, real-time Firestore analytics, dashboard reports, expense tracking, and advanced client search.",
    tags: ["Flutter", "Firebase", "Firestore", "Material Design"],
    github: "https://github.com/mvsharma0817",
    live: "#",
    caseStudy: "#",
    uiMockup: (
      <div className="w-full h-full bg-neutral-950 flex flex-col p-4 font-sans text-left">
        {/* Mock App Header */}
        <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
          <span className="text-[10px] font-bold text-white">Car Spa Pro</span>
          <span className="h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[7px] text-blue-400 font-bold">CP</span>
        </div>
        {/* Small Dashboard Widgets */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-lg bg-neutral-900 border border-white/5 p-2 flex flex-col">
            <span className="text-[7px] text-neutral-500 uppercase">Sales</span>
            <span className="text-xs font-black text-white">$4,850</span>
          </div>
          <div className="rounded-lg bg-neutral-900 border border-white/5 p-2 flex flex-col">
            <span className="text-[7px] text-neutral-500 uppercase">Cars Cleaned</span>
            <span className="text-xs font-black text-blue-400">142</span>
          </div>
        </div>
        {/* Dynamic Billing Queue List */}
        <div className="flex flex-col gap-1.5 overflow-hidden">
          <div className="flex justify-between items-center bg-neutral-900/40 border border-white/5 p-1.5 rounded text-[8px]">
            <span className="font-medium text-neutral-300">Model 3 Wash</span>
            <span className="px-1 py-0.2 rounded-full bg-blue-500/10 text-blue-400 text-[6px]">Active</span>
          </div>
          <div className="flex justify-between items-center bg-neutral-900/40 border border-white/5 p-1.5 rounded text-[8px]">
            <span className="font-medium text-neutral-300">Cayenne Detail</span>
            <span className="px-1 py-0.2 rounded-full bg-green-500/10 text-green-400 text-[6px]">Completed</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Product Display Application",
    description: "A modern Flutter e-commerce application focusing on product showcases. Implements clean reusable widgets, complex animations, state-driven responsive grid structures, and unified application navigation routes.",
    tags: ["Flutter", "Dart", "Responsive Design", "State Management"],
    github: "https://github.com/mvsharma0817",
    live: "#",
    caseStudy: "#",
    uiMockup: (
      <div className="w-full h-full bg-neutral-950 p-4 flex flex-col font-sans text-left">
        {/* Mock E-commerce header */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black text-white">SHOP.INC</span>
          <span className="text-[8px] text-neutral-500">🛒 Cart (2)</span>
        </div>
        {/* Category tags */}
        <div className="flex gap-1 mb-3">
          <span className="px-1.5 py-0.5 rounded bg-blue-500 text-white text-[7px]">Featured</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-500 text-[7px]">Tech</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-900 text-neutral-500 text-[7px]">Apparel</span>
        </div>
        {/* Product Grid Mockup */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="rounded-lg border border-white/5 bg-neutral-900/60 p-1.5 flex flex-col justify-between">
            <div className="h-10 w-full rounded bg-neutral-950 flex items-center justify-center text-[8px] text-neutral-600">Image</div>
            <div className="mt-1">
              <span className="text-[8px] font-bold text-neutral-200 block truncate">Minimalist Watch</span>
              <span className="text-[7px] text-blue-400 font-semibold">$199.00</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/5 bg-neutral-900/60 p-1.5 flex flex-col justify-between">
            <div className="h-10 w-full rounded bg-neutral-950 flex items-center justify-center text-[8px] text-neutral-600">Image</div>
            <div className="mt-1">
              <span className="text-[8px] font-bold text-neutral-200 block truncate">Leather Backpack</span>
              <span className="text-[7px] text-blue-400 font-semibold">$249.00</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Restaurant Website UI",
    description: "An elegant, premium responsive restaurant landing page and online menu application. Emphasizes modern layout mechanics, visual depth, high-quality typography, micro-animations, and fast page speeds.",
    tags: ["Next.js", "React", "Tailwind CSS", "UX Design"],
    github: "https://github.com/mvsharma0817",
    live: "#",
    caseStudy: "#",
    uiMockup: (
      <div className="w-full h-full bg-neutral-950 p-4 flex flex-col font-sans text-left">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[8px] font-bold text-white tracking-widest uppercase">Gusto Bistro</span>
          <span className="h-3.5 w-12 rounded bg-white text-neutral-950 text-[6px] font-bold flex items-center justify-center">Reserve</span>
        </div>
        {/* Hero Area */}
        <div className="my-auto text-center flex flex-col gap-1">
          <span className="text-[12px] font-black text-white leading-tight">Taste the Fine Art of Culinary</span>
          <span className="text-[6px] text-neutral-400">Experience gourmet meals created by master chefs.</span>
        </div>
        {/* Menu items row */}
        <div className="mt-auto flex gap-1.5">
          <div className="flex-1 rounded border border-white/5 bg-neutral-900 p-1 flex items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-neutral-950" />
            <span className="text-[6px] font-bold text-neutral-300">Wagyu Steak</span>
          </div>
          <div className="flex-1 rounded border border-white/5 bg-neutral-900 p-1 flex items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-neutral-950" />
            <span className="text-[6px] font-bold text-neutral-300">Truffle Pasta</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Featured Projects & <br />
            <span className="text-gradient">Case Studies</span>
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard className="border border-white/5 bg-neutral-900/30 p-0 flex-col lg:flex-row overflow-hidden hover:border-white/10 transition-colors duration-500">
                {/* Left Side: Text Details (Grid span 7 equivalent) */}
                <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Top tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full border border-white/5 bg-neutral-900 text-[10px] font-semibold text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key features indicators */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2.5 mb-8">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        Clean Architecture
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                        Responsive UI Layouts
                      </div>
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-wrap gap-4 items-center mt-auto">
                    <Magnetic>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-white/10 px-5 py-2.5 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-white/20 transition-all shadow-md"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub Code
                      </a>
                    </Magnetic>

                    <Magnetic>
                      <a
                        href={project.live}
                        className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] shadow-md"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Magnetic>

                    <Magnetic>
                      <a
                        href={project.caseStudy}
                        className="group inline-flex items-center gap-2 rounded-full bg-neutral-950/80 border border-white/5 px-5 py-2.5 text-xs font-bold text-neutral-400 hover:text-neutral-200 transition-all"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Case Study
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* Right Side: Interactive CSS UI Mockup (Grid span 5 equivalent) */}
                <div className="w-full lg:w-[400px] xl:w-[440px] aspect-[4/3] bg-neutral-950 border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center p-8 relative group overflow-hidden">
                  {/* Decorative glowing gradient behind mockup */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Mockup Frame Container */}
                  <div className="w-full h-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                    {project.uiMockup}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
