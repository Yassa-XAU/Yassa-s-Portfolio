"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  cornerAccents?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glow = false,
  cornerAccents = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border bg-card/80 p-6 backdrop-blur-md transition-all duration-300",
        hoverEffect && "hover:border-accent-primary/50 hover:bg-card-hover/90 hover:shadow-card-hover hover:-translate-y-1",
        glow && "glow-electric border-accent-primary/40",
        className
      )}
      {...props}
    >
      {/* Optional technical corner marks */}
      {cornerAccents && (
        <>
          <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-accent-primary pointer-events-none rounded-tl-sm" />
          <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t-2 border-r-2 border-accent-primary pointer-events-none rounded-tr-sm" />
          <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b-2 border-l-2 border-accent-primary pointer-events-none rounded-bl-sm" />
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-accent-primary pointer-events-none rounded-br-sm" />
        </>
      )}

      {children}
    </div>
  );
}
