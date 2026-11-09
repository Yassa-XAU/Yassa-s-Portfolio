"use client";

import React from "react";
import { languages } from "@/data/languages";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Globe, CheckCircle2 } from "lucide-react";

export function Languages() {
  return (
    <section id="languages" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="09"
          subtitle="Communication"
          title="Languages"
          description="Linguistic capabilities supporting cross-cultural engineering collaboration and international teamwork."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {languages.map((lang) => (
            <Card
              key={lang.id}
              cornerAccents
              className="bg-card/80 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-secondary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-accent-primary/15 border border-accent-primary/30 text-accent-secondary font-semibold">
                    {lang.proficiency}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-text-primary">
                    {lang.language}
                  </h3>
                  <span className="text-sm font-light text-text-muted">
                    ({lang.nativeName})
                  </span>
                </div>

                <div className="text-xs font-mono text-accent-secondary mb-3">
                  {lang.level}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {lang.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Working Fluency</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

