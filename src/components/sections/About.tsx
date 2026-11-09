"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { GraduationCap, ShieldCheck, Database, Award, ArrowRight } from "lucide-react";

export function About() {
  const verifiedMilestones = [
    {
      icon: GraduationCap,
      title: "Sadat Academy for Management Sciences",
      detail: "B.Sc. in Computer Science — Cyber Security Major (2022–2026)",
    },
    {
      icon: ShieldCheck,
      title: "AMIT Cybersecurity Diploma (92%)",
      detail: "Practical SOC workflows, IBM QRadar SIEM, and Threat Analysis",
    },
    {
      icon: Database,
      title: "Python & MySQL Application Development",
      detail: "Building custom inventory systems and database solutions for retail businesses",
    },
    {
      icon: Award,
      title: "British Council Operations Support",
      detail: "Managing educational logistics and supporting inclusive learning delivery",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          subtitle="Biography & Philosophy"
          title="About Me"
          description="A dedicated Computer Science graduate with a strong foundation in system security, practical software programming, and IT operations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed font-light text-base sm:text-lg">
            <p>
              I am a Computer Science graduate from <span className="text-text-primary font-medium">Sadat Academy for Management Sciences</span> (Faculty of Computers and Information), where I majored in <span className="text-accent-secondary font-medium">Cyber Security</span> from 2022 to 2026.
            </p>

            <p>
              My academic and technical trajectory is defined by a passion for understanding how complex digital systems function under the hood—and how to effectively safeguard, develop, and optimize them. I have practical exposure in developing custom Python desktop applications backed by relational databases (MySQL), automating operational workflows, and digitizing manual processes.
            </p>

            <p>
              Beyond software and code, I value operational excellence and cross-functional communication. Through my role as a Teaching Center Assistant at the <span className="text-text-primary font-medium">British Council Egypt</span>, I have honed structured organizational skills, classroom logistics management, and direct experience supporting students with special educational needs in an international setting.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-accent-secondary">
                #CyberSecurity
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-accent-secondary">
                #PythonDevelopment
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-accent-secondary">
                #RelationalDatabases
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-mono text-accent-secondary">
                #SystemsOperations
              </span>
            </div>
          </div>

          {/* Right Column: Verified Milestones Grid */}
          <div className="lg:col-span-5 space-y-3.5">
            {verifiedMilestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/80 border border-border hover:border-accent-primary/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-secondary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1 font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

