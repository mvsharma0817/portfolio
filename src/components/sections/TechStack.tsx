"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";

interface TechItem {
  name: string;
  level: string;
  percent: number;
  color: string;
  glow: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "Flutter",
    level: "Advanced",
    percent: 95,
    color: "from-blue-500 to-sky-400",
    glow: "rgba(59, 130, 246, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-blue-400 fill-current">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM21.684 12.329l-3.684-3.684-12.01 12.01L9.67 24.3l12.014-11.971z" />
      </svg>
    ),
  },
  {
    name: "Dart",
    level: "Advanced",
    percent: 90,
    color: "from-cyan-500 to-blue-400",
    glow: "rgba(6, 182, 212, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-cyan-400 fill-current">
        <path d="M0 8.7L5.3 14 12 2.3h-4.3zM12 2.3l4.3 4.3 5.3-5.3h-4.3zM5.3 14L12 24.3l12-12-5.3-5.3z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    level: "Intermediate-Advanced",
    percent: 85,
    color: "from-amber-500 to-orange-400",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-500 fill-current">
        <path d="M3.89 15.75L2.1 6.55c-.15-.76.35-1.46 1.09-1.52.74-.06 1.38.41 1.54 1.15l1.96 8.12 3.52-6.73c-.36-.63-.23-1.42.34-1.92.57-.5 1.41-.42 1.88.19l9.31 15.93c.38.64.12 1.46-.57 1.77-.69.31-1.5-.01-1.8-.7L12 12.01l-1.96 3.74H3.89z" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    level: "Advanced",
    percent: 88,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-emerald-400">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    level: "Advanced",
    percent: 85,
    color: "from-purple-500 to-indigo-400",
    glow: "rgba(168, 85, 247, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-purple-400">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Next.js 15",
    level: "Intermediate",
    percent: 75,
    color: "from-neutral-200 to-neutral-400",
    glow: "rgba(255, 255, 255, 0.15)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white fill-current">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.275 18.232l-5.617-7.247v7.247h-1.637v-9.918h1.493l5.377 6.945v-6.945h1.638v9.918h-1.254z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    percent: 75,
    color: "from-blue-600 to-blue-400",
    glow: "rgba(37, 99, 235, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-blue-400 fill-current">
        <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm-9 17.5c0 .35-.07.6-.21.75-.14.15-.36.23-.65.23H10.1v-5.64h2.04c.29 0 .51.08.65.23.14.15.21.4.21.75v3.68zm7 1h-2.04V14.1h2.04V18.5zm0-5.5h-2.04v-1.64h2.04V13zm-8-3h-2v1.64h2V10zM3.46 7.42h3.18V8.9H5.05v7.68H3.46V7.42zm7.1 8.9V9.75h1.9c.55 0 .97.13 1.25.4.28.27.42.66.42 1.18 0 .52-.14.91-.42 1.18-.28.27-.7.4-1.25.4h-.31v3.41H10.56zm5.82-5.83h2.36V8.9H16.38V7.42h2.36V5.94H14.8v10.4h3.94v-1.48H16.38v-4.4z" />
      </svg>
    ),
  },
  {
    name: "Responsive UI",
    level: "Advanced",
    percent: 92,
    color: "from-pink-500 to-rose-400",
    glow: "rgba(236, 72, 153, 0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-pink-400">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

export function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative z-10 w-full py-20 bg-neutral-950/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Title */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Technical Stack & <br />
            <span className="text-gradient">Core Capabilities</span>
          </h2>
        </div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TECH_ITEMS.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <GlowCard
                glowColor={tech.glow}
                className="h-full hover:border-white/20 transition-all duration-300"
              >
                {/* Upper row: Icon & level tooltip */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center justify-center shadow-md">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-neutral-400 bg-neutral-900 border border-white/5 px-2 py-0.5 rounded-md">
                    {tech.level}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-white mb-4">{tech.name}</h3>

                {/* Progress bar */}
                <div className="mt-auto flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">Proficiency</span>
                    <span className="font-bold text-neutral-300">{tech.percent}%</span>
                  </div>
                  {/* Outer Track */}
                  <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                    {/* Glowing Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                    />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
