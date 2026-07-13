"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Smartphone, Zap, ShieldAlert, Target, Heart, GraduationCap } from "lucide-react";

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Value</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Why Partner With Me? <br />
            <span className="text-gradient">Engineering Strengths</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] md:auto-rows-[220px]">
          
          {/* Card 1: Responsive Design & Clean UI (Col Span 2) */}
          <GlowCard className="md:col-span-2 md:row-span-1 flex flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <Smartphone className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Responsive UI & Adaptability</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                I translate designer specs into pixel-perfect, adaptive views for iPhones, tablets, and web interfaces. No layout breaks, no overflow issues.
              </p>
            </div>
            {/* Visual indicator (CSS layouts mock) */}
            <div className="hidden sm:flex flex-col gap-2 w-[180px] bg-neutral-950 border border-white/5 rounded-xl p-3 select-none">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-[8px] text-neutral-500 uppercase font-bold">Breakpoint: MD</span>
              </div>
              <div className="h-3 w-full bg-neutral-900 rounded-sm" />
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-neutral-900 rounded-sm" />
                <div className="h-6 bg-neutral-900 rounded-sm" />
                <div className="h-6 bg-neutral-900 rounded-sm" />
              </div>
            </div>
          </GlowCard>

          {/* Card 2: High Performance & Optimization (Row Span 2) */}
          <GlowCard className="md:col-span-1 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Zap className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">High Performance</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Committed to writing lightweight, modular code structures. Avoiding redundant re-renders, optimizing image/assets delivery, and managing asynchronous threads cleanly for smooth 60fps animations.
              </p>
            </div>
            {/* Speed Gauge Graphics */}
            <div className="bg-neutral-950 border border-white/5 rounded-xl p-3 flex flex-col gap-1 text-center font-mono mt-4">
              <span className="text-[20px] font-black text-green-400">99%</span>
              <span className="text-[8px] text-neutral-500 uppercase font-bold">Lighthouse Score</span>
            </div>
          </GlowCard>

          {/* Card 3: Firebase Integration & Secure Storage (Col Span 1) */}
          <GlowCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <ShieldAlert className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Firebase & Firestore</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Implementing real-time data sync, reactive snapshot listeners, cloud storage integrations, and secure document access rules.
            </p>
          </GlowCard>

          {/* Card 4: Business Insights & Communication (Col Span 2) */}
          <GlowCard className="md:col-span-2 md:row-span-1 flex flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Business-Driven Engineering</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                As a BBA Graduate, I bring business intelligence, communication competence, and strategic product positioning ideas straight to the codebase. I align engineering tasks directly with client business objectives.
              </p>
            </div>
            {/* Graphic BBA Card */}
            <div className="hidden sm:flex flex-col gap-2 w-[160px] bg-neutral-950 border border-white/5 rounded-xl p-3 text-center">
              <Target className="h-5 w-5 text-emerald-500 mx-auto" />
              <span className="text-[9px] text-white font-bold font-mono">BBA Degree</span>
              <span className="text-[7px] text-neutral-500">Business & Tech Alignment</span>
            </div>
          </GlowCard>

        </div>

      </div>
    </section>
  );
}
