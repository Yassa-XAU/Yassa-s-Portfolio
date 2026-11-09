"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Briefcase, Calendar, MapPin, CheckCircle, Clock, AlertCircle } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          subtitle="Career Timeline"
          title="Professional Experience"
          description="A chronological record of verified roles, practical client development, and institutional operations."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => {
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    exp.isPending
                      ? "border-amber-500/60 bg-card text-amber-400"
                      : exp.isCurrent
                      ? "border-accent-primary bg-accent-primary/20 text-accent-secondary shadow-electric-sm"
                      : "border-border bg-card text-text-muted"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.isPending
                        ? "bg-amber-400"
                        : exp.isCurrent
                        ? "bg-accent-primary animate-ping"
                        : "bg-text-muted"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <Card
                  hoverEffect={!exp.isPending}
                  className={`relative ${
                    exp.isPending
                      ? "border-dashed border-amber-500/30 bg-card/40"
                      : "bg-card/75"
                  }`}
                >
                  {/* Top Meta Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border/60">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        <Badge
                          variant={exp.isPending ? "warning" : exp.isCurrent ? "accent" : "default"}
                          size="sm"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="text-base font-medium text-accent-secondary">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-text-secondary gap-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pending Notice (for Cloudzlab Salesforce) */}
                  {exp.isPending && (
                    <div className="mb-4 p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 flex items-center gap-2.5 text-xs text-amber-300">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>
                        {exp.statusText}: Verified responsibilities and certification details will be updated once official documentation is completed.
                      </span>
                    </div>
                  )}

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                      Key Contributions & Responsibilities:
                    </h4>
                    <ul className="space-y-2 text-sm text-text-secondary leading-relaxed font-light">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
