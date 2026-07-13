"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden bg-neutral-950">
      {/* Base Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-noise" />

      {/* Radial overlay to fade grid around borders */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030303_95%)]" />

      {/* Floating Animated Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[45vw] w-[45vw] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Interactive Cursor Glow Blobs (Fades in slightly near the cursor) */}
      <motion.div
        className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/5 blur-[80px] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 175,
          y: mousePosition.y - 175,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 0.5 }}
      />
    </div>
  );
}
