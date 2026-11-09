"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const contactCards = [
    {
      id: "email",
      label: "Direct Email",
      value: profileData.email,
      description: "Fastest way to reach me for inquiries & opportunities",
      icon: Mail,
      href: `mailto:${profileData.email}`,
      isExternal: false,
      ctaText: "Send Email",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/yassa-ashraf",
      description: "Connect for professional networking & career discussions",
      icon: Linkedin,
      href: profileData.socials.linkedin,
      isExternal: true,
      ctaText: "View Profile",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/yassaashraf",
      description: "Explore my source code, repositories & technical experiments",
      icon: Github,
      href: profileData.socials.github,
      isExternal: true,
      ctaText: "Explore Repos",
    },
    {
      id: "location",
      label: "Location",
      value: profileData.location,
      description: "Available for on-site roles in Cairo & remote opportunities",
      icon: MapPin,
      href: null,
      isExternal: false,
      ctaText: "Cairo, Egypt",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="10"
          subtitle="Let's Connect"
          title="Have an opportunity in mind?"
          description="I'm always interested in connecting with technology professionals, recruiters, and people working on interesting projects."
        />

        {/* 4 Responsive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const CardContent = (
              <Card
                key={card.id}
                cornerAccents
                className="h-full bg-card border-border hover:border-accent-primary/60 hover:shadow-[0_0_30px_rgba(22,119,255,0.15)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-secondary group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {card.href && (
                      <span className="text-text-muted group-hover:text-accent-secondary transition-colors">
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-accent-secondary font-semibold">
                    {card.label}
                  </span>
                  <h3 className="text-base font-semibold text-text-primary mt-1 mb-2 break-all group-hover:text-accent-secondary transition-colors">
                    {card.value}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-xs font-mono text-text-muted group-hover:text-text-primary transition-colors">
                  <span>{card.ctaText}</span>
                  {card.isExternal && (
                    <ExternalLink className="w-3 h-3 ml-1.5 opacity-60" />
                  )}
                </div>
              </Card>
            );

            if (card.href) {
              return (
                <a
                  key={card.id}
                  href={card.href}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`${card.label}: ${card.value}`}
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-xl"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={card.id} className="h-full">
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Final Professional Call to Action Banner */}
        <div className="relative rounded-2xl bg-gradient-to-r from-card via-background-secondary to-card border border-border/80 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-xs font-mono text-accent-secondary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Technical Roles & Collaborations</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary tracking-tight">
              Let&apos;s build something meaningful together.
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
              Whether you are looking for a dedicated engineer for cybersecurity operations, full-stack software development, IT systems, or data analytics — my inbox is always open.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href={`mailto:${profileData.email}`}>
                <Button variant="primary" size="lg" className="group">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span>Email Me Directly</span>
                </Button>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Linkedin className="w-4 h-4 mr-2 text-accent-secondary" />
                  <span>Connect on LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
