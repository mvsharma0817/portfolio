"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  borderColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.15)",
  borderColor = "rgba(59, 130, 246, 0.3)",
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl transition-all duration-500 glass-panel flex flex-col p-6 w-full group overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Border Glow Tracking Mouse */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 80%)`,
        }}
      />

      {/* Inner Glow Tracking Mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Inner Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {children}
      </div>
    </div>
  );
}
