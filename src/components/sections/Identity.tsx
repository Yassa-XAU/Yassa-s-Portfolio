"use client";

import React from "react";
import { identityPillars } from "@/data/identity";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { ShieldAlert, CodeXml, ServerCog, BarChart3, ArrowRight } from "lucide-react";

const iconMap = {
  ShieldAlert: ShieldAlert,
  CodeXml: CodeXml,
  ServerCog: ServerCog,
  BarChart3: BarChart3,
};

export function Identity() {
  return (
    <section id="identity" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          subtitle="Core Disciplines"
          title="Technology Meets Problem Solving"
          description="A multidisciplinary mindset bridging proactive cyber defense, scalable software development, reliable IT systems, and data-driven analytical insights."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {identityPillars.map((pillar) => {
            const Icon = iconMap[pillar.iconName];

            return (
              <Card
                key={pillar.id}
                cornerAccents
                className="group flex flex-col justify-between h-full bg-card/70 hover:bg-card-hover transition-all duration-300"
              >
                <div>
                  {/* Icon & Index badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:shadow-electric transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted group-hover:text-accent-secondary transition-colors">
                      [0{pillar.id === "cybersecurity" ? "1" : pillar.id === "software-dev" ? "2" : pillar.id === "it-operations" ? "3" : "4"}]
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-accent-secondary/80 mt-1 mb-4">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Tags bar */}
                <div className="mt-6 pt-4 border-t border-border/70">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-background/80 border border-border/80 text-text-muted group-hover:border-accent-primary/30 group-hover:text-text-secondary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
