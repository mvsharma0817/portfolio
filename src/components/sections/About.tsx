"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Sparkles, Code, Smartphone, Zap, Flame, Award } from "lucide-react";

const ABOUT_CARDS = [
  {
    icon: <Smartphone className="h-6 w-6 text-blue-400" />,
    title: "Mobile Focus",
    description: "Creating native, high-performance apps with Flutter for iOS & Android.",
  },
  {
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    title: "Clean Code",
    description: "Enforcing SOLID design principles, modular structure, and robust typing.",
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-400" />,
    title: "Responsive UI",
    description: "Designing pixel-perfect layouts that adapt fluidly across all screen sizes.",
  },
  {
    icon: <Flame className="h-6 w-6 text-red-400" />,
    title: "Firebase Integrations",
    description: "Deploying secure, real-time database backends using Firebase & Firestore.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-400" />,
    title: "UI Focus & Animations",
    description: "Crafting delightful user journeys with subtle micro-interactions and smooth transitions.",
  },
  {
    icon: <Award className="h-6 w-6 text-emerald-400" />,
    title: "BBA Background",
    description: "Combining business intelligence and marketing knowledge to build market-ready apps.",
  },
];

export function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Title */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2">About Me</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Crafting Digital Solutions <br />
            <span className="text-gradient">With Business Insight</span>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-400 text-base sm:text-lg leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white">Flutter Developer</strong> with a business background, holding a Bachelor of Business Administration (BBA) degree. This unique combination allows me to approach mobile application development not just through code, but with a deep understanding of user behavior, product-market fit, and business logic.
            </p>
            <p>
              My expertise lies in building responsive, scalable mobile applications. I specialize in state management, asynchronous REST API integrations, clean architecture implementation, and secure cloud storage utilizing Firebase.
            </p>
            <p>
              I thrive in collaborative, team-centric settings and pride myself on my ability to learn new technologies rapidly, decompose complex requirements, and translate abstract wireframes into clean, maintainable Flutter codebases.
            </p>
          </div>

          {/* Right Visual Portrait Placeholder Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing decorative gradient backplane */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10 animate-pulse-slow" />
            
            {/* Portrait Card */}
            <div className="w-full max-w-[340px] aspect-[4/5] rounded-3xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col items-center justify-between text-center backdrop-blur-md shadow-2xl relative overflow-hidden group">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#09090b_90%)] -z-10" />

              {/* Developer Avatar Mockup */}
              <div className="relative mt-8">
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[3px] shadow-lg shadow-blue-500/20 group-hover:scale-[1.03] transition-transform duration-500">
                  <div className="h-full w-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                    {/* Glowing Flutter Code Graphic */}
                    <span className="font-mono text-2xl text-blue-400 font-bold animate-pulse">&lt;/&gt;</span>
                  </div>
                </div>
                {/* Micro badge */}
                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center p-1.5 shadow-md">
                  <svg viewBox="0 0 24 24" className="h-full w-full text-blue-400 fill-current">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM21.684 12.329l-3.684-3.684-12.01 12.01L9.67 24.3l12.014-11.971z" />
                  </svg>
                </div>
              </div>

              {/* Taglines */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Mihir Sharma</h3>
                <p className="text-xs text-blue-400 font-medium mt-1">Flutter & Dart Developer</p>
                <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                  <span className="px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-[9px] text-neutral-400">Mobile Architect</span>
                  <span className="px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-[9px] text-neutral-400">BBA Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Attributes Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ABOUT_CARDS.map((card, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlowCard className="h-full">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{card.description}</p>
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
