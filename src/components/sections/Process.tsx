"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Lightbulb, Search, PenTool, Layout, Code2, ShieldCheck, Rocket, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Idea & Brainstorm",
    icon: <Lightbulb className="h-5 w-5" />,
    description: "Defining the core product mission and scope.",
    details: [
      "Defining target audience and core product value proposition.",
      "Analyzing project requirements, budgets, and milestones.",
      "Framing key application workflows.",
    ],
  },
  {
    id: 2,
    title: "Market Research",
    icon: <Search className="h-5 w-5" />,
    description: "Competitor reviews and validation metrics.",
    details: [
      "Evaluating competing mobile and web solutions.",
      "Identifying UX bottlenecks in contemporary products.",
      "Drafting features list.",
    ],
  },
  {
    id: 3,
    title: "Wireframing",
    icon: <PenTool className="h-5 w-5" />,
    description: "Sketching skeleton structures of screen layouts.",
    details: [
      "Creating low-fidelity layout skeletons.",
      "Decomposing navigation hierarchies and routing.",
      "Validating basic user journeys and screen actions.",
    ],
  },
  {
    id: 4,
    title: "UI Design",
    icon: <Layout className="h-5 w-5" />,
    description: "Defining color assets, design system, and mockup.",
    details: [
      "Establishing design guidelines (Material, iOS).",
      "Crafting high-fidelity UI views with modern accents.",
      "Designing responsive layouts for all target devices.",
    ],
  },
  {
    id: 5,
    title: "Flutter Development",
    icon: <Code2 className="h-5 w-5" />,
    description: "Writing clean, modular Dart codebases.",
    details: [
      "Writing reusable widgets and enforcing clean file structures.",
      "Implementing state management frameworks (Riverpod).",
      "Connecting secure REST API networking layers.",
    ],
  },
  {
    id: 6,
    title: "Testing & QA",
    icon: <ShieldCheck className="h-5 w-5" />,
    description: "Inspecting error boundary cases and responsiveness.",
    details: [
      "Running simulator rendering audits on different devices.",
      "Verifying edge case API handlers and slow internet responses.",
      "Testing UI state updates and navigation paths.",
    ],
  },
  {
    id: 7,
    title: "Deployment",
    icon: <Rocket className="h-5 w-5" />,
    description: "Releasing app packages to PlayStore & AppStore.",
    details: [
      "Configuring package bundles and environment variables.",
      "Generating dynamic test distributions.",
      "Releasing stable bundles to production.",
    ],
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="relative z-10 w-full py-20 bg-neutral-950/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Workflow</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            My Productive <br />
            <span className="text-gradient">Development Process</span>
          </h2>
        </div>

        {/* Process Interaction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Step Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden group",
                    isActive
                      ? "bg-blue-600/10 border-blue-500/30 text-white shadow-lg shadow-blue-500/5"
                      : "bg-neutral-900/30 border-white/5 text-neutral-400 hover:text-neutral-200 hover:border-white/10"
                  )}
                >
                  {/* Step ID badge */}
                  <div
                    className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center font-bold text-xs border transition-colors",
                      isActive
                        ? "bg-blue-600 border-blue-400 text-white"
                        : "bg-neutral-950 border-white/5 text-neutral-500 group-hover:text-neutral-300"
                    )}
                  >
                    0{step.id}
                  </div>

                  {/* Icon */}
                  <div className={isActive ? "text-blue-400" : "text-neutral-500 group-hover:text-neutral-400"}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <span className="font-semibold text-sm sm:text-base flex-1">{step.title}</span>

                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isActive ? "translate-x-0 text-blue-400" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-neutral-500"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-7 h-full min-h-[340px]">
            <AnimatePresence mode="wait">
              {PROCESS_STEPS.map((step) => {
                if (step.id !== activeStep) return null;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full"
                  >
                    <GlowCard className="bg-neutral-900/40 border border-white/5 p-8 sm:p-10 h-full flex flex-col justify-between hover:border-blue-500/20">
                      <div>
                        {/* Upper display */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-12 w-12 rounded-xl bg-blue-600 border border-blue-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/25">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">Step 0{step.id} of 07</span>
                            <h3 className="text-xl sm:text-2xl font-black text-white">{step.title}</h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-300 text-base mb-8 leading-relaxed font-medium">
                          {step.description}
                        </p>

                        {/* List bullets */}
                        <div className="flex flex-col gap-4">
                          <span className="text-xs uppercase font-mono tracking-wider font-semibold text-neutral-500">Key Focus Tasks</span>
                          {step.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3.5 text-neutral-400 text-sm sm:text-base leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Micro background grid decoration */}
                      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
                        <span className="font-mono font-black text-[120px] text-white leading-none">0{step.id}</span>
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
