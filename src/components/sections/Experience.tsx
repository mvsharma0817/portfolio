"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Calendar, MapPin, Award, CheckCircle } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  skills: string[];
}

const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    role: "Flutter Development Training",
    company: "CEC Nikol Ahmedabad",
    location: "Ahmedabad, Gujarat, India",
    duration: "3 Months (Intensive)",
    description: "Participated in an industry-oriented Flutter and Dart development program, mastering the building blocks of mobile development and publishing clean application flows.",
    bullets: [
      "Built multi-screen cross-platform applications featuring responsive layout guidelines.",
      "Learned state management principles, routing, and lifecycle states in Flutter.",
      "Implemented networking layers using REST APIs, handling async/await and JSON deserialization.",
      "Mastered local storage, Firestore integration, and Firebase authentication protocols.",
      "Utilized Git & GitHub workflows for collaborative code management and reviews.",
    ],
    skills: ["Flutter", "Dart", "REST APIs", "Firebase", "State Management", "Git & GitHub"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full py-20 bg-neutral-950/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Journey</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Professional Experience & <br />
            <span className="text-gradient">Training History</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-white/10 flex flex-col gap-12">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Pulsing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-4 w-4 rounded-full bg-neutral-950 border-2 border-blue-500 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping absolute inset-0" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              </div>

              {/* Experience Card */}
              <GlowCard className="bg-neutral-900/30 border border-white/5 p-6 sm:p-8 hover:border-white/10 transition-colors">
                
                {/* Upper info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">{item.role}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-400 font-medium">
                      <span className="text-blue-400 font-semibold">{item.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-neutral-500" /> {item.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-900 border border-white/5 px-3 py-1.5 rounded-full font-mono">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {item.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements Checklist */}
                <div className="flex flex-col gap-3 mb-8">
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-500">Key achievements</span>
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used tags */}
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-500 block mb-3">Skills applied</span>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-neutral-900/80 border border-white/5 text-[10px] font-mono text-neutral-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
