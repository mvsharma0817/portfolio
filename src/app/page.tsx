import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Process } from "@/components/sections/Process";
import { GitHubDashboard } from "@/components/sections/GitHubDashboard";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. About Section */}
      <About />
      
      {/* 3. Tech Stack Section */}
      <TechStack />
      
      {/* 4. Featured Projects Section */}
      <Projects />
      
      {/* 5. Professional Experience Timeline */}
      <Experience />
      
      {/* 6. Why Hire Me Bento Grid */}
      <WhyHireMe />
      
      {/* 7. Development Process Timeline */}
      <Process />
      
      {/* 8. Open Source Contribution Graph & Stats */}
      <GitHubDashboard />
      
      {/* 9. Professional Testimonials */}
      <Testimonials />
      
      {/* 10. Interactive Contact Form */}
      <Contact />
    </div>
  );
}
