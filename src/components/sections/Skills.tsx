"use client";

import React from "react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { ShieldAlert, CodeXml, ServerCog, BarChart3, Cloud, Check } from "lucide-react";

const iconMap = {
  ShieldAlert: ShieldAlert,
  CodeXml: CodeXml,
  ServerCog: ServerCog,
  BarChart3: BarChart3,
  Cloud: Cloud,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          subtitle="Competencies"
          title="Technical Capabilities"
          description="A structured overview of practical toolsets, programming stacks, security standards, and system proficiencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.iconName];
            const isFullSpan = group.id === "salesforce-cloud";

            return (
              <Card
                key={group.id}
                cornerAccents
                className={`bg-card/75 flex flex-col justify-between ${
                  isFullSpan ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/60">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-secondary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted">
                        {group.skills.length} Capabilities Verified
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-text-secondary leading-relaxed font-light mb-6">
                    {group.summary}
                  </p>

                  {/* Clean Skill Tags (No Fake %) */}
                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-background-secondary/80 border border-border/70 hover:border-accent-primary/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                          <span className="text-xs font-medium text-text-primary">
                            {skill.name}
                          </span>
                        </div>

                        {skill.level && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-card border border-border text-accent-secondary">
                            {skill.level}
                          </span>
                        )}
                      </div>
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

