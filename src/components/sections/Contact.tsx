"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../ui/GlowCard";
import { Mail, Phone, Copy, Check, Send, Download } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { Magnetic } from "../ui/Magnetic";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mvsharma0817@gmail.com");
    setCopied(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    
    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    toast.success("Thank you! Your message has been sent successfully.");
    setFormState({ name: "", email: "", subject: "", message: "" });
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

        {/* Layout: Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Details (Grid span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct contact info card */}
            <GlowCard className="bg-neutral-900/30 border border-white/5 p-6 flex flex-col gap-6 justify-between flex-1">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Details</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Have a mobile app concept, contract assignment, or full-time position you want to discuss? Feel free to reach out via form or direct channels.
                </p>
                
                {/* Details list */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-neutral-300">
                    <div className="h-10 w-10 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-center text-blue-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-semibold">Email</span>
                      <a href="mailto:mvsharma0817@gmail.com" className="text-sm font-bold hover:text-white transition-colors">
                        mvsharma0817@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-neutral-300">
                    <div className="h-10 w-10 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-center text-cyan-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 block uppercase font-semibold">Phone</span>
                      <a href="tel:+919023685012" className="text-sm font-bold hover:text-white transition-colors">
                        +91 90236 85012
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Magnetic>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 rounded-full bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors shadow-md"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                    Copy Email
                  </button>
                </Magnetic>

                <Magnetic>
                  <a
                    href="/Mihir_Sharma_Resume.pdf"
                    download
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/15"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Resume
                  </a>
                </Magnetic>
              </div>
            </GlowCard>

            {/* Social card */}
            <GlowCard className="bg-neutral-900/30 border border-white/5 p-6 flex flex-row items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Developer Networks</h4>
                <p className="text-[11px] text-neutral-500">Connect with me on social platforms.</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/mvsharma0817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </GlowCard>

          </div>

          {/* Right Column: Contact Form (Grid span 7) */}
          <div className="lg:col-span-7">
            <GlowCard className="bg-neutral-900/30 border border-white/5 p-8 sm:p-10 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-between">
                
                {/* Inputs wrapper */}
                <div className="flex flex-col gap-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
                    <p className="text-xs text-neutral-500">Typical response time: within 24 hours.</p>
                  </div>

                  {/* Row: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="name" className="text-xs font-semibold text-neutral-400">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-neutral-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="email" className="text-xs font-semibold text-neutral-400">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-neutral-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="subject" className="text-xs font-semibold text-neutral-400">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="App Development Concept"
                      className="bg-neutral-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="message" className="text-xs font-semibold text-neutral-400">Message *</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Hi Mihir, I'd love to chat about a Flutter application..."
                      className="bg-neutral-950 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit trigger button */}
                <div className="mt-8">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full sm:w-fit flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors disabled:opacity-50 shadow-lg shadow-blue-500/20"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>

              </form>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
}
