"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "success" | "warning";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantStyles = {
    default:
      "bg-card/90 text-text-secondary border border-border hover:border-accent-primary/40 transition-colors",
    accent:
      "bg-accent-primary/15 text-accent-secondary border border-accent-primary/30",
    outline:
      "bg-transparent text-text-secondary border border-border hover:text-text-primary",
    success:
      "bg-emerald-950/40 text-emerald-300 border border-emerald-700/40",
    warning:
      "bg-amber-950/40 text-amber-300 border border-amber-700/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded-md tracking-tight select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}

