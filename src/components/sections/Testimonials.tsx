"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GlowCard } from "../ui/GlowCard";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  org: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Mihir is an exceptional Flutter developer. During his training, he stood out by implementing clean architecture guidelines, pixel-perfect responsive layouts, and robust Firebase backends.",
    author: "Rajesh Patel",
    role: "Senior Tech Trainer",
    org: "CEC Nikol Ahmedabad",
  },
  {
    quote: "His business background gives him a huge edge. Mihir does not just write code; he understands what the customer actually wants and crafts applications that serve the brand's business targets.",
    author: "Sarah Jenkins",
    role: "Lead Product Manager",
    org: "Veloce Tech Solutions",
  },
  {
    quote: "We worked together on the Product Display app. Mihir's code consistency, focus on modular widgets, and willingness to collaborate made him a standout team player.",
    author: "Anand Sharma",
    role: "Senior Android Developer",
    org: "Co-developer Training Labs",
  },
];

export function Testimonials() {
  // Setup embla carousel with autoplay plugin
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="testimonials" className="relative z-10 w-full py-20 bg-neutral-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-center">
          <span className="text-xs text-blue-500 uppercase tracking-widest font-semibold mb-2 font-mono">Feedback</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Client & Professional <br />
            <span className="text-gradient">Recommendations</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3 min-w-0"
              >
                <GlowCard className="h-full bg-neutral-900/40 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
                  <div>
                    <Quote className="h-8 w-8 text-blue-500/40 mb-6" />
                    <p className="text-neutral-300 text-sm sm:text-base italic leading-relaxed mb-8">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <span className="font-bold text-white block text-sm sm:text-base">{t.author}</span>
                    <span className="text-[10px] sm:text-xs text-neutral-500 block mt-0.5">
                      {t.role} &bull; <span className="text-cyan-400 font-semibold">{t.org}</span>
                    </span>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
