"use client";

import React from "react";
import { educationHistory } from "@/data/education";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from "lucide-react";

export function Education() {
  const edu = educationHistory[0];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          subtitle="Academic Foundation"
          title="Education"
          description="Formal academic qualification in computer science and cyber defense methodologies."
        />

        <div className="relative">
          {/* Distinctive Graduation Milestone Callout Box */}
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-accent-primary/15 via-accent-primary/5 to-transparent border border-accent-primary/30 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-primary flex items-center justify-center text-white shadow-electric-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary">
                  Graduation Milestone Completed (2022 – 2026)
                </div>
                <div className="text-xs text-accent-secondary font-mono">
                  Sadat Academy for Management Sciences • Senior Year Capstone Finished
                </div>
              </div>
            </div>
            <Badge variant="accent" size="md">
              Class of 2026
            </Badge>
          </div>

          {/* Education Card */}
          <Card cornerAccents className="bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Degree & Institution */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent-primary/10 border border-accent-primary/30 text-accent-secondary">
                    {edu.major} Major
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  {edu.degree}
                </h3>

                <div className="text-base text-accent-secondary font-medium">
                  {edu.faculty}
                </div>

                <div className="text-sm text-text-primary font-medium">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-text-muted pt-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-border/60 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    Academic Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-text-secondary leading-relaxed font-light">
                    {edu.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-primary font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Relevant Coursework */}
              <div className="lg:col-span-6 bg-background-secondary/70 p-6 rounded-xl border border-border/80">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <BookOpen className="w-4 h-4 text-accent-primary" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold">
                    Core Coursework & Lab Focus
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2.5 rounded-lg bg-card border border-border/60 text-xs text-text-secondary flex items-center gap-2 hover:border-accent-primary/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

