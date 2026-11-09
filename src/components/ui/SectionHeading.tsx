"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      {/* Section index indicator */}
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-3 bg-card border border-border text-accent-secondary",
          isCenter && "justify-center"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
        <span>SECTION {number}</span>
        {subtitle && (
          <>
            <span className="text-border">|</span>
            <span className="text-text-secondary">{subtitle}</span>
          </>
        )}
      </div>

      {/* Bold typography heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>

      {/* Narrative descriptive text */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed font-light">
          {description}
        </p>
      )}

      {/* Subtle futuristic bottom accent line */}
      <div
        className={cn(
          "mt-6 flex items-center gap-2",
          isCenter && "justify-center"
        )}
      >
        <div className="h-0.5 w-12 bg-accent-primary rounded-full" />
        <div className="h-0.5 w-3 bg-accent-secondary/60 rounded-full" />
        <div className="h-0.5 w-1.5 bg-border rounded-full" />
      </div>
    </div>
  );
}
