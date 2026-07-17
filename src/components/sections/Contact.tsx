"use client";

import React, { useState } from "react";
import { GlowCard } from "../ui/GlowCard";
import { Mail, Phone, Copy, Check, Download } from "lucide-react";
import { toast } from "sonner";
import { Magnetic } from "../ui/Magnetic";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mvsharma0817@gmail.com");
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Connect</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Start A Project & <br />
            <span className="text-gradient">Get In Touch</span>
          </h2>
        </div>

        {/* Layout: Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Details (Grid span 7/8) */}
          <GlowCard className="bg-neutral-900/30 border border-white/5 p-8 flex flex-col gap-6 justify-between h-full md:col-span-7 lg:col-span-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Contact Details</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                Have a mobile app concept, contract assignment, or full-time position you want to discuss? Feel free to reach out via direct channels.
              </p>
              
              {/* Details list */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="h-12 w-12 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-semibold tracking-wider mb-0.5">Email</span>
                    <a href="mailto:mvsharma0817@gmail.com" className="text-base font-bold hover:text-white transition-colors">
                      mvsharma0817@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-neutral-300">
                  <div className="h-12 w-12 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-semibold tracking-wider mb-0.5">Phone</span>
                    <a href="tel:+919023685012" className="text-base font-bold hover:text-white transition-colors">
                      +91 90236 85012
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Magnetic>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 rounded-full bg-neutral-950 border border-white/10 px-5 py-3 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors shadow-md"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                  Copy Email
                </button>
              </Magnetic>

              <Magnetic>
                <a
                  href="/Mihir_Sharma_Resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/15"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </a>
              </Magnetic>
            </div>
          </GlowCard>

          {/* Right Column: Developer Networks (Grid span 5/4) */}
          <GlowCard className="bg-neutral-900/30 border border-white/5 p-8 flex flex-col justify-between h-full md:col-span-5 lg:col-span-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Developer Networks</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                Connect with me on digital platforms. Let's build something amazing together or discuss professional opportunities.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              <Magnetic>
                <a
                  href="https://github.com/mvsharma0817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 p-4 text-sm font-semibold text-neutral-300 hover:text-white transition-all shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                    <span>GitHub Profile</span>
                  </div>
                  <span className="text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all text-xs">→</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 p-4 text-sm font-semibold text-neutral-300 hover:text-white transition-all shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all text-xs">→</span>
                </a>
              </Magnetic>
            </div>
          </GlowCard>

        </div>

      </div>
    </section>
  );
}

