import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Identity } from "@/components/sections/Identity";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent-primary/30">
      {/* Sticky futuristic blurred navigation */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="flex-1">
        {/* SECTION 01 — HERO */}
        <Hero />

        {/* SECTION 02 — PROFESSIONAL IDENTITY */}
        <Identity />

        {/* SECTION 03 — ABOUT ME */}
        <About />

        {/* SECTION 04 — PROFESSIONAL EXPERIENCE */}
        <Experience />

        {/* SECTION 05 — FEATURED PROJECTS */}
        <Projects />

        {/* SECTION 06 — TECHNICAL SKILLS */}
        <Skills />

        {/* SECTION 07 — EDUCATION */}
        <Education />

        {/* SECTION 08 — CERTIFICATIONS */}
        <Certifications />

        {/* SECTION 09 — LANGUAGES */}
        <Languages />

        {/* SECTION 10 — CONTACT */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}

