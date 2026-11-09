"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certifications, CertificationItem } from "@/data/certifications";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Award, Calendar, CheckCircle2, Eye, X } from "lucide-react";

export function Certifications() {
  const [previewCert, setPreviewCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="08"
          subtitle="Credentials & Accreditations"
          title="Professional Certifications"
          description="Specialized diplomas, industry certifications, and verified language proficiencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            return (
              <Card
                key={cert.id}
                cornerAccents
                className="group flex flex-col justify-between bg-card/75 hover:bg-card-hover transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/30 text-accent-secondary uppercase">
                      {cert.issuer}
                    </span>
                    {cert.gradeOrScore && (
                      <span className="text-[11px] font-mono font-semibold text-emerald-400">
                        {cert.gradeOrScore}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-secondary transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mb-4">
                    <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed font-light mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom verification & skills */}
                <div className="pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background/80 border border-border text-text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.image && (
                    <button
                      onClick={() => setPreviewCert(cert)}
                      className="w-full py-1.5 px-3 rounded-lg bg-background-secondary border border-border hover:border-accent-primary text-xs font-mono text-accent-secondary hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certificate Image Preview Modal */}
        {previewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <div
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
              onClick={() => setPreviewCert(null)}
            />
            <div className="relative max-w-3xl w-full max-h-[85vh] bg-card border border-border rounded-2xl p-6 shadow-2xl z-10 flex flex-col items-center">
              <button
                onClick={() => setPreviewCert(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 p-2 rounded-lg bg-background-secondary text-text-secondary hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-4 pr-10">
                <h4 className="text-lg font-bold text-text-primary">
                  {previewCert.title}
                </h4>
                <p className="text-xs font-mono text-accent-secondary">
                  {previewCert.issuer} • {previewCert.date}
                </p>
              </div>

              {previewCert.image && (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-background-secondary">
                  <Image
                    src={previewCert.image}
                    alt={previewCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

