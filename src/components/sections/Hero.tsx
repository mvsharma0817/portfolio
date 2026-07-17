"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Smartphone, MessageSquare } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";
import { cn } from "@/lib/utils";

const TYPING_ROLES = [
  "Flutter Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
  "Firebase Developer",
  "Problem Solver",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = TYPING_ROLES[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole((prev) => currentFullRole.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      <div className="mx-auto max-w-7xl w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content (Grid span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Greeting Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400 mb-6 w-fit backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Open for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Hello, I'm <br />
            <span className="text-gradient font-black">Mihir Sharma</span>
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-12 sm:h-16 flex items-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-300">
              A{" "}
              <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                {displayedRole}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            I build beautiful, scalable, and user-focused mobile applications using Flutter. 
            Passionate about clean architecture, responsive UI/UX, and creating delightful 
            digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <Magnetic>
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all hover:scale-[1.02] hover:shadow-blue-500/35"
              >
                Contact Me
                <MessageSquare className="h-4 w-4" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-6 py-3 text-sm font-semibold text-neutral-300 backdrop-blur-sm transition-all hover:text-white hover:bg-neutral-800 hover:border-white/20"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="/Mihir_Sharma_Resume.pdf"
                download
                className="group flex items-center gap-2 rounded-full border border-white/5 bg-neutral-950/40 px-6 py-3 text-sm font-semibold text-neutral-400 backdrop-blur-sm transition-all hover:text-white hover:bg-neutral-900"
              >
                Download Resume
                <Download className="h-4 w-4 " />
              </a>
            </Magnetic>
          </div>

          {/* Quick Socials */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Follow me</span>
            <div className="h-px bg-white/10 w-12" />
            <a
              href="https://github.com/mvsharma0817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right Interactive Mockups (Grid span 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Glowing backlights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[80px] -z-10" />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-cyan-500/10 blur-[60px] -z-10 animate-pulse-slow" />

          {/* Interactive Phone Mockup */}
          <div className="relative z-10 w-[270px] h-[540px] rounded-[42px] border-[8px] border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden group">
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[22px] rounded-full bg-neutral-900 z-30 flex items-center justify-around px-2 text-[8px] text-white/50 shadow-inner">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500/40" />
              <span className="h-1 w-1 rounded-full bg-neutral-800" />
            </div>

            {/* Mock Screen Content (Car Spa App UI Dashboard) */}
            <div className="h-full w-full bg-neutral-950 flex flex-col p-4 pt-8 text-left select-none">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div>
                  <span className="text-[9px] text-neutral-500 block">Car Spa Client</span>
                  <span className="text-xs font-bold text-white">Mihir Sharma</span>
                </div>
                <div className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-[9px] text-blue-400 font-bold">
                  MS
                </div>
              </div>

              {/* Billing Info Widget */}
              <div className="rounded-xl bg-neutral-900/80 border border-white/5 p-3 mb-3">
                <span className="text-[8px] text-neutral-500 uppercase font-semibold">Total revenue</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-black text-white">$14,250.00</span>
                  <span className="text-[9px] text-green-500 font-semibold">+18.5%</span>
                </div>
                {/* Micro Chart Mockup */}
                <div className="h-8 w-full mt-2 flex items-end gap-1">
                  {[40, 20, 60, 45, 80, 50, 95].map((h, i) => (
                    <div
                      key={i}
                      className="bg-blue-500/30 rounded-t-sm flex-1 hover:bg-blue-500 transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Services List */}
              <span className="text-[9px] text-neutral-500 uppercase font-semibold mb-2 block">Recent orders</span>
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[160px] no-scrollbar">
                {[
                  { name: "Executive Detail", desc: "Tesla Model S", price: "$180", status: "In Progress", color: "bg-blue-500/20 text-blue-400" },
                  { name: "Full Ceramic Wash", desc: "Porsche 911", price: "$95", status: "Queued", color: "bg-cyan-500/20 text-cyan-400" },
                  { name: "Interior Steam Clean", desc: "Audi e-tron", price: "$120", status: "Completed", color: "bg-green-500/20 text-green-400" },
                  { name: "Paint Protection", desc: "BMW M4", price: "$450", status: "Queued", color: "bg-cyan-500/20 text-cyan-400" },
                ].map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-neutral-900/50 border border-white/5 p-2 rounded-lg text-[10px]">
                    <div>
                      <span className="font-semibold text-neutral-200 block">{s.name}</span>
                      <span className="text-[8px] text-neutral-500">{s.desc}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-black text-white block">{s.price}</span>
                      <span className={cn("px-1.5 py-0.5 rounded-full text-[7px] font-medium inline-block", s.color)}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Nav Bar Mockup */}
              <div className="mt-auto border-t border-white/5 pt-2 flex justify-around text-neutral-600 text-[12px]">
                <span className="text-blue-500">◆</span>
                <span>●</span>
                <span>▲</span>
              </div>
            </div>
          </div>

          {/* Floating Flutter Logo */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-24 -left-12 z-20 h-14 w-14 rounded-2xl glass-panel border-white/10 flex items-center justify-center p-3 shadow-xl backdrop-blur-md"
          >
            {/* Flutter SVG */}
            <svg viewBox="0 0 24 24" className="h-full w-full text-blue-400 fill-current">
              <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM21.684 12.329l-3.684-3.684-12.01 12.01L9.67 24.3l12.014-11.971z" />
            </svg>
          </motion.div>

          {/* Floating Firebase Icon */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-28 -right-10 z-20 h-14 w-14 rounded-2xl glass-panel border-white/10 flex items-center justify-center p-3.5 shadow-xl backdrop-blur-md"
          >
            {/* Firebase SVG */}
            <svg viewBox="0 0 24 24" className="h-full w-full text-amber-500 fill-current">
              <path d="M3.89 15.75L2.1 6.55c-.15-.76.35-1.46 1.09-1.52.74-.06 1.38.41 1.54 1.15l1.96 8.12 3.52-6.73c-.36-.63-.23-1.42.34-1.92.57-.5 1.41-.42 1.88.19l9.31 15.93c.38.64.12 1.46-.57 1.77-.69.31-1.5-.01-1.8-.7L12 12.01l-1.96 3.74H3.89z" />
            </svg>
          </motion.div>

          {/* Animated Dart Code Window Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 -left-16 z-20 w-[240px] bg-neutral-950/90 border border-white/10 rounded-2xl p-4 font-mono text-[10px] text-neutral-400 backdrop-blur-md shadow-2xl hidden md:block"
          >
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[8px] text-neutral-600 ml-auto">car_spa_app.dart</span>
            </div>
            <div>
              <p><span className="text-pink-500">import</span> <span className="text-green-400">'package:flutter/material.dart'</span>;</p>
              <p className="mt-1"><span className="text-blue-400">class</span> <span className="text-yellow-400">CarSpaApp</span> <span className="text-blue-400">extends</span> <span className="text-yellow-400">StatelessWidget</span> &#123;</p>
              <p className="pl-3 text-neutral-500">@override</p>
              <p className="pl-3"><span className="text-yellow-400">Widget</span> <span className="text-blue-400">build</span>(<span className="text-yellow-400">BuildContext</span> context) &#123;</p>
              <p className="pl-6"><span className="text-pink-500">return</span> <span className="text-yellow-400">MaterialApp</span>(</p>
              <p className="pl-9">home: <span className="text-yellow-400">SpaDashboard</span>(),</p>
              <p className="pl-9">theme: <span className="text-yellow-400">ThemeData</span>.dark(),</p>
              <p className="pl-6">);</p>
              <p className="pl-3">&#125;</p>
              <p>&#125;</p>
            </div>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
}
