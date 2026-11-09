"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { Shield, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background-secondary pt-16 pb-12 text-text-secondary overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Brand & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center p-1.5 shadow-electric-sm">
                <svg className="w-full h-full" viewBox="0 0 1812 1000" fill="none">
                  <path fill="#1677FF" d="M 100,100 L 275,100 L 544,490 L 812,100 L 987,100 L 625,620 L 625,900 L 462,900 L 462,620 Z"/>
                  <path fill="#54A6FF" fillRule="evenodd" d="M 1087,100 L 1275,100 L 1712,900 L 1562,900 L 1416,670 L 944,670 L 787,900 L 625,900 Z M 1181,260 L 1014,570 L 1348,570 Z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-text-primary tracking-tight">
                {profileData.fullName}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md font-light">
              {profileData.shortBio}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-card border border-border text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.statusBadge}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent-secondary transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent-primary/60">{item.number}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-primary mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-secondary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent-primary" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-secondary transition-colors"
                >
                  <Github className="w-4 h-4 text-accent-primary" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.email}
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-primary" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js, TypeScript & Neon PostgreSQL</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

