"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, ProjectItem } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ProjectModal } from "../ui/ProjectModal";
import { ExternalLink, Github, Eye, Layers } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "iot", label: "IoT & Hardware" },
    { id: "software", label: "Software Systems" },
    { id: "data", label: "Data Analytics" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          subtitle="Selected Engineering"
          title="Featured Projects"
          description="A curated showcase of university graduation engineering, software systems, and academic data mining research."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? "bg-accent-primary text-white border-accent-primary shadow-electric-sm font-semibold"
                  : "bg-card text-text-secondary border-border hover:border-accent-primary/40 hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            return (
              <Card
                key={project.id}
                cornerAccents
                className="group flex flex-col justify-between overflow-hidden p-0 bg-card border-border hover:border-accent-primary/60 transition-all duration-300"
              >
                <div>
                  {/* Project Screenshot Showcase with hover zoom */}
                  <div
                    className="relative w-full aspect-[16/10] overflow-hidden bg-background-secondary cursor-pointer"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />

                    {/* Status badge & category overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-background/85 border border-border text-accent-secondary backdrop-blur-sm">
                        {project.type}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-primary/20 text-accent-secondary border border-accent-primary/40 backdrop-blur-sm">
                        {project.statusBadge}
                      </span>
                    </div>

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-[2px]">
                      <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Eye className="w-4 h-4" />}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProject(project);
                        }}
                      >
                        Inspect Details
                      </Button>
                    </div>
                  </div>

                  {/* Project Info Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-accent-secondary/80 mt-1 mb-3">
                      {project.subtitle}
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-background/70 border border-border text-text-muted"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags & Action */}
                <div className="p-6 pt-0 border-t border-border/60 mt-4">
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-text-muted self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-accent-secondary hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Full Specs</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-text-primary p-2 rounded-lg hover:bg-card-hover transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Modal for full detail and screenshots */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}

