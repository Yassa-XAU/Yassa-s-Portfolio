"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl z-10 text-text-primary p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg bg-card-muted text-text-secondary hover:text-text-primary hover:bg-border transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-accent-secondary uppercase tracking-wider">
              {project.type}
            </span>
            <span className="text-border">•</span>
            <span className="text-xs font-mono text-text-muted">
              {project.statusBadge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-accent-secondary mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Image Showcase Gallery */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-border bg-background-secondary mb-6 group">
          <Image
            src={allImages[activeImageIndex]}
            alt={`${project.title} preview ${activeImageIndex + 1}`}
            fill
            className="object-contain transition-all duration-300 bg-background/60"
            sizes="(max-width: 1024px) 100vw, 850px"
          />

          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-white hover:bg-accent-primary transition-all opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-white hover:bg-accent-primary transition-all opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeImageIndex ? "w-5 bg-accent-primary" : "bg-text-secondary/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal Description */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
              Architecture & Overview
            </h4>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                Key Features & Capabilities
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary bg-background-secondary/60 p-2.5 rounded-lg border border-border/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2.5">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="accent" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" leftIcon={<Github className="w-4 h-4" />}>
                  View Repository
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" leftIcon={<ExternalLink className="w-4 h-4" />}>
                  Live Demo
                </Button>
              </a>
            )}
            <Button variant="ghost" size="sm" onClick={onClose} className="ml-auto">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

