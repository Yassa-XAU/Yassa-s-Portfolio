"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Calendar, MapPin, CheckCircle, GraduationCap } from "lucide-react";

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
          {experiences.map((exp) => {
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    exp.isCurrent
                      ? "border-accent-primary bg-accent-primary/20 text-accent-secondary shadow-electric-sm"
                      : "border-border bg-card text-text-muted"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent
                        ? "bg-accent-primary animate-ping"
                        : "bg-accent-primary/60"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <Card
                  hoverEffect
                  className="relative bg-card/75 border-border hover:border-accent-primary/50 transition-all duration-300"
                >
                  {/* Top Meta Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border/60">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.role}
                        </h3>
                        <Badge
                          variant={exp.isCurrent ? "accent" : "default"}
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

                  {/* Summary Description if present */}
                  {exp.description && (
                    <p className="text-sm text-text-primary/90 leading-relaxed font-light mb-5 bg-background-secondary/60 p-3.5 rounded-lg border border-border/60">
                      {exp.description}
                    </p>
                  )}

                  {/* Training Areas (for Salesforce Internship) */}
                  {exp.trainingAreas && exp.trainingAreas.length > 0 && (
                    <div className="mb-5 p-4 rounded-lg bg-background-secondary/40 border border-border/60">
                      <div className="flex items-center gap-2 mb-2.5 text-xs font-mono uppercase tracking-wider text-accent-secondary font-semibold">
                        <GraduationCap className="w-4 h-4 text-accent-primary" />
                        <span>Training Areas</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                        {exp.trainingAreas.map((area, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary shrink-0" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                      Key Contributions & Learnings:
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
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-secondary hover:text-accent-secondary hover:border-accent-primary/40 transition-colors"
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
