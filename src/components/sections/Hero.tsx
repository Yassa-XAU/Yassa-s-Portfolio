"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Button } from "../ui/Button";
import {
  Shield,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Cpu,
  Lock,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-radial"
    >
      {/* Background Tech Grid & Geometric Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic floating tech accents */}
      <div className="absolute top-32 left-10 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/60 border border-border/80 text-xs font-mono text-text-muted backdrop-blur-sm animate-float">
        <Lock className="w-3.5 h-3.5 text-accent-primary" />
        <span>SYS.DEFENSE: ACTIVE</span>
      </div>
      <div className="absolute bottom-32 right-12 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/60 border border-border/80 text-xs font-mono text-text-muted backdrop-blur-sm animate-float" style={{ animationDelay: "2s" }}>
        <Cpu className="w-3.5 h-3.5 text-accent-secondary" />
        <span>STACK: NEXT.JS & POSTGRES</span>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-card border border-border text-accent-secondary mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-text-secondary">SYSTEM STATUS:</span>
              <span className="text-text-primary font-semibold">
                {profileData.statusBadge}
              </span>
            </div>

            {/* Candidate Name - Large Bold Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
              {profileData.name.toUpperCase()}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-secondary mt-2">
                {profileData.title}
              </span>
            </h1>

            {/* Specialization Tags Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-mono text-text-secondary">
              {profileData.specializations.map((spec, index) => (
                <React.Fragment key={spec}>
                  <span className="px-2.5 py-1 rounded-md bg-card/80 border border-border text-accent-secondary font-medium">
                    {spec}
                  </span>
                  {index < profileData.specializations.length - 1 && (
                    <span className="text-border hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Professional Introduction */}
            <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed font-light max-w-2xl">
              {profileData.introduction}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto font-semibold"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>
              </Link>

              <a
                href={profileData.cvPath}
                target="_blank"
                download
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  leftIcon={<Download className="w-4 h-4 text-accent-primary" />}
                >
                  Download My CV
                </Button>
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="mt-10 pt-6 border-t border-border/80 flex items-center gap-4 text-text-secondary">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Connect:
              </span>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent-primary hover:text-accent-secondary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent-primary hover:text-accent-secondary transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.email}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-card border border-border hover:border-accent-primary hover:text-accent-secondary transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-text-muted ml-2 hidden sm:inline">
                {profileData.location}
              </span>
            </div>
          </div>

          {/* Right Column: Profile Photograph Frame with Electric Blue Accents */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-primary via-accent-secondary to-blue-900 opacity-60 blur-xl animate-pulse-subtle" />

              {/* High-tech border frame */}
              <div className="relative rounded-3xl border-2 border-border bg-card p-3 shadow-2xl backdrop-blur-xl">
                {/* Tech corner marks */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-secondary rounded-tl-sm pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-secondary rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-secondary rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-secondary rounded-br-sm pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-background-secondary border border-border/80">
                  <Image
                    src={profileData.imagePath}
                    alt={profileData.fullName}
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 400px"
                    className="object-cover object-top filter contrast-[1.03] transition-all duration-500 hover:scale-[1.02]"
                  />

                  {/* Subtle gradient lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* High-tech bottom banner */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-card/90 border border-border/90 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-text-primary">
                        {profileData.fullName}
                      </div>
                      <div className="text-[10px] font-mono text-accent-secondary">
                        Sadat Academy • Cyber Security
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center text-accent-primary">
                      <Shield className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

