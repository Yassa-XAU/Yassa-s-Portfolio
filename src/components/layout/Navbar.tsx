"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { profileData } from "@/data/profile";
import { Button } from "../ui/Button";
import { Menu, X, Shield, Terminal, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scroll spy for active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[#080D16]/85 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-accent-secondary group-hover:border-accent-primary group-hover:text-accent-primary transition-all duration-200 shadow-electric-sm">
              <Shield className="w-5 h-5 text-accent-primary" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-text-primary group-hover:text-accent-secondary transition-colors">
                {profileData.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                CS • CYBERSECURITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "text-accent-secondary bg-accent-primary/10 border border-accent-primary/30"
                      : "text-text-secondary hover:text-text-primary hover:bg-card/50"
                  )}
                >
                  <span className="text-[10px] text-accent-primary/70">{item.number}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Get In Touch
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-lg bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-primary/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-200">
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono transition-colors",
                      isActive
                        ? "bg-accent-primary/15 text-accent-secondary border border-accent-primary/30"
                        : "text-text-secondary hover:text-text-primary hover:bg-background-secondary"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-text-muted">{item.number}</span>
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
                <Link
                  href={profileData.cvPath}
                  target="_blank"
                  download
                  className="w-full"
                >
                  <Button variant="secondary" size="sm" className="w-full">
                    Download CV
                  </Button>
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="primary" size="sm" className="w-full">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
