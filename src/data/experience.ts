export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent: boolean;
  isPending?: boolean;
  statusText?: string;
  type: "Part-Time" | "Freelance" | "Internship";
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "british-council",
    role: "Teaching Center Assistant",
    organization: "British Council — Egypt",
    location: "Cairo, Egypt",
    period: "June 2025 – Present",
    isCurrent: true,
    type: "Part-Time",
    responsibilities: [
      "Coordinating classroom operations and managing daily learning resources across educational sessions.",
      "Managing learning materials and daily logistics to ensure seamless, professional session delivery.",
      "Supporting inclusive educational delivery, working directly with students with special educational needs (SEN).",
      "Communicating proactively and professionally with instructors, administrative staff, and parents.",
      "Collaborating effectively in an agile, multicultural educational environment with strict safeguarding standards.",
    ],
    skills: ["Classroom Operations", "Cross-Cultural Communication", "Logistics", "Inclusive Education", "Team Coordination"],
  },
  {
    id: "freelance-dev",
    role: "Freelance Cybersecurity & Software Developer",
    organization: "Self-Employed",
    location: "Egypt",
    period: "2023 – Present",
    isCurrent: true,
    type: "Freelance",
    responsibilities: [
      "Developing custom relational database applications with secure schema architectures and parameterized operations.",
      "Designing responsive Python desktop interfaces tailored to client operational specifications.",
      "Integrating Python desktop applications with MySQL backend databases for real-time transactions.",
      "Digitizing manual inventory and sales management processes for two retail shops, replacing paper records.",
      "Automating stock tracking, quantity alerting, and item record lookups to minimize human error and downtime.",
    ],
    skills: ["Python", "MySQL", "Desktop GUI Design", "Database Administration", "Process Automation"],
  },
  {
    id: "cloudzlab-salesforce",
    role: "Salesforce Track Intern",
    organization: "Cloudzlab",
    location: "Egypt",
    period: "Upcoming / Pending Verification",
    isCurrent: false,
    isPending: true,
    statusText: "Details Pending Final Verification",
    type: "Internship",
    responsibilities: [
      "Engagement in enterprise Salesforce ecosystem, CRM customization, and cloud administration principles.",
      "Verified responsibilities, certification milestones, and program achievements will be published once officially confirmed.",
    ],
    skills: ["Salesforce CRM", "Cloud Architecture", "CRM Customization"],
  },
];
