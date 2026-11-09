"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrors({});

    // Client-side validation using Zod
    const clientValidation = contactFormSchema.safeParse(formData);
    if (!clientValidation.success) {
      const fieldErrors: Record<string, string> = {};
      clientValidation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message || "Thank you! Your message has been received."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Unable to send message. Please check the fields and try again."
        );
        if (data.details) {
          const serverErrors: Record<string, string> = {};
          for (const key of Object.keys(data.details)) {
            if (Array.isArray(data.details[key])) {
              serverErrors[key] = data.details[key][0];
            }
          }
          setErrors(serverErrors);
        }
      }
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage("Network error occurred. Please try again or email directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="10"
          subtitle="Initiate Dialogue"
          title="Get In Touch"
          description="Whether you have an inquiry regarding technical roles, engineering collaboration, or projects, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Card cornerAccents className="bg-card">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light mb-6">
                I am actively considering opportunities in cybersecurity operations, software engineering, IT infrastructure, and data analytics.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-secondary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">Direct Email</div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-accent-secondary transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-secondary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">LinkedIn Network</div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-accent-secondary transition-colors">
                      linkedin.com/in/yassa-ashraf
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-secondary shrink-0 group-hover:bg-accent-primary group-hover:text-white transition-all">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">GitHub Repositories</div>
                    <div className="text-sm font-medium text-text-primary group-hover:text-accent-secondary transition-colors">
                      github.com/yassaashraf
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-background-secondary border border-border">
                  <div className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-text-secondary shrink-0">
                    <MapPin className="w-4 h-4 text-accent-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-text-muted">Location</div>
                    <div className="text-sm font-medium text-text-primary">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="mt-6 pt-4 border-t border-border/60 text-xs text-text-muted leading-relaxed font-light">
                🔒 Privacy guaranteed: Submitted messages are securely stored in a private Neon PostgreSQL instance and forwarded directly to my inbox. Personal phone numbers are kept private.
              </div>
            </Card>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <Card cornerAccents className="bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-text-muted mb-6">
                All fields validated with Zod • Rate-limited and spam protected
              </p>

              {/* Success Notification */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-emerald-200">Message Delivered</div>
                    <p className="text-xs text-emerald-300/90 mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-rose-200">Submission Alert</div>
                    <p className="text-xs text-rose-300/90 mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website (Leave empty)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5"
                    >
                      Your Name <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg bg-background-secondary border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                        errors.name ? "border-rose-500" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5"
                    >
                      Email Address <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg bg-background-secondary border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                        errors.email ? "border-rose-500" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    Subject <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Engineering Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg bg-background-secondary border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all ${
                      errors.subject ? "border-rose-500" : "border-border"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    Message <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Provide details about your role, inquiry, or project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-background-secondary border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all resize-none ${
                      errors.message ? "border-rose-500" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-[11px] font-mono text-text-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-secondary" />
                    <span>Average reply within 24 hours</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isLoading}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Transmit Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
