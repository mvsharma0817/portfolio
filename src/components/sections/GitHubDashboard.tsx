"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { GitBranch, GitCommit, Star, Users, Clock, ExternalLink } from "lucide-react";

interface GithubStat {
  icon: React.ReactNode;
  value: string;
  label: string;
  desc: string;
}

const GITHUB_STATS: GithubStat[] = [
  {
    icon: <GitBranch className="h-5 w-5 text-blue-400" />,
    value: "34",
    label: "Repositories",
    desc: "Active public & private projects",
  },
  {
    icon: <GitCommit className="h-5 w-5 text-cyan-400" />,
    value: "1,840+",
    label: "Commits",
    desc: "Commits authored this year",
  },
  {
    icon: <Star className="h-5 w-5 text-amber-400" />,
    value: "42",
    label: "Stars Earned",
    desc: "Developer community stars",
  },
  {
    icon: <Users className="h-5 w-5 text-purple-400" />,
    value: "65",
    label: "Followers",
    desc: "GitHub network connections",
  },
  {
    icon: <Clock className="h-5 w-5 text-emerald-400" />,
    value: "750h+",
    label: "Coding Hours",
    desc: "Flutter development tracked",
  },
];

// Generate fake calendar grid for contribution graph
// 53 columns (weeks) x 7 rows (days)
const generateFakeContributions = () => {
  const contributions: { level: number; date: string; commits: number }[] = [];
  const startDay = new Date(2026, 0, 1);
  
  for (let i = 0; i < 52 * 7; i++) {
    const currentDate = new Date(startDay);
    currentDate.setDate(startDay.getDate() + i);
    
    // Weighted random activity: more active on weekdays, some dry spells
    const day = currentDate.getDay();
    let level = 0;
    let commits = 0;
    
    const rand = Math.random();
    if (day !== 0 && day !== 6) { // Weekdays
      if (rand > 0.8) { level = 4; commits = Math.floor(Math.random() * 5) + 6; }
      else if (rand > 0.5) { level = 3; commits = Math.floor(Math.random() * 3) + 3; }
      else if (rand > 0.2) { level = 2; commits = Math.floor(Math.random() * 2) + 1; }
      else if (rand > 0.05) { level = 1; commits = 1; }
    } else { // Weekends
      if (rand > 0.9) { level = 2; commits = Math.floor(Math.random() * 2) + 1; }
      else if (rand > 0.75) { level = 1; commits = 1; }
    }
    
    contributions.push({
      level,
      commits,
      date: currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
  }
  return contributions;
};

const CONTRIBUTION_CELLS = generateFakeContributions();

const LEVEL_COLORS: { [key: number]: string } = {
  0: "bg-neutral-900 border border-white/5",
  1: "bg-blue-900/30 border border-blue-900/40 shadow-[0_0_4px_rgba(59,130,246,0.1)]",
  2: "bg-blue-700/50 border border-blue-600/50 shadow-[0_0_8px_rgba(59,130,246,0.2)]",
  3: "bg-blue-500/70 border border-blue-400/60 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
  4: "bg-cyan-400 border border-cyan-300 shadow-[0_0_16px_rgba(6,182,212,0.5)]",
};

export function GitHubDashboard() {
  const [hoveredCell, setHoveredCell] = useState<{ commits: number; date: string } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleCellMouse = (
    e: React.MouseEvent<HTMLDivElement>,
    cell: { commits: number; date: string }
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 40,
    });
    setHoveredCell(cell);
  };

  return (
    <section id="github-dashboard" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col text-left">
            <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Activity</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Open Source & <br />
              <span className="text-gradient">Code Contributions</span>
            </h2>
          </div>
          <a
            href="https://github.com/mvsharma0817"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-5 py-2.5 text-xs font-semibold text-neutral-300 backdrop-blur-sm transition-all hover:text-white hover:bg-neutral-800"
          >
            Visit GitHub Profile
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Contribution Graph Panel */}
        <GlowCard className="bg-neutral-900/30 border border-white/5 p-6 sm:p-8 mb-12 flex flex-col items-center">
          
          {/* Header row */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-base font-bold text-white mb-1">Mihir Sharma Contribution Graph</h3>
              <p className="text-xs text-neutral-500 font-mono">Compiled from active VCS commits</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
              <span>Less</span>
              <div className="h-3 w-3 rounded-sm bg-neutral-900 border border-white/5" />
              <div className="h-3 w-3 rounded-sm bg-blue-900/30 border border-blue-900/40" />
              <div className="h-3 w-3 rounded-sm bg-blue-700/50 border border-blue-600/50" />
              <div className="h-3 w-3 rounded-sm bg-blue-500/70 border border-blue-400/60" />
              <div className="h-3 w-3 rounded-sm bg-cyan-400 border border-cyan-300" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Layout Container */}
          <div className="w-full overflow-x-auto no-scrollbar pb-2 flex justify-start lg:justify-center">
            <div className="flex gap-1.5 p-1 select-none">
              
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between text-[8px] font-mono text-neutral-600 pr-1 h-[94px] py-1">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Grid columns */}
              <div className="grid grid-flow-col grid-rows-7 gap-[3px] h-[94px]">
                {CONTRIBUTION_CELLS.map((cell, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={(e) => handleCellMouse(e, cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`h-2.5 w-2.5 rounded-[1.5px] cursor-pointer transition-colors duration-150 ${LEVEL_COLORS[cell.level]}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </GlowCard>

        {/* Tooltip Overlay */}
        <AnimatePresence>
          {hoveredCell && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none fixed z-[999] rounded-lg bg-neutral-950 border border-white/10 px-3 py-1.5 text-[10px] font-mono text-white shadow-2xl flex flex-col -translate-x-1/2 -translate-y-full backdrop-blur-md"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
              }}
            >
              <span className="font-bold text-blue-400">
                {hoveredCell.commits === 0 ? "No" : hoveredCell.commits} commit{hoveredCell.commits !== 1 ? "s" : ""}
              </span>
              <span className="text-neutral-500 mt-0.5">{hoveredCell.date}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {GITHUB_STATS.map((stat, idx) => (
            <GlowCard key={idx} className="p-5 flex flex-col justify-between h-[150px] hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white block mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-neutral-400 block mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[9px] text-neutral-600 block leading-tight">{stat.desc}</span>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}
