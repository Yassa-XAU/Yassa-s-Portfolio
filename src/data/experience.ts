export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: "Part-Time" | "Freelance" | "Internship";
  description?: string;
  trainingAreas?: string[];
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
    role: "Salesforce Intern",
    organization: "Cloudzlab",
    location: "Cairo, Egypt",
    period: "July 2026",
    isCurrent: false,
    type: "Internship",
    description:
      "Participated in a Salesforce-focused internship, developing familiarity with the Salesforce ecosystem, CRM concepts, platform administration and Lightning Experience through guided learning and practical training.",
    trainingAreas: [
      "Salesforce Platform Fundamentals",
      "Data Modeling",
      "Lightning Experience Customization",
      "Data Management",
      "Salesforce Mobile App",
      "User Engagement",
      "Reports and Dashboards",
    ],
    responsibilities: [
      "Completed hands-on guided modules across core Salesforce CRM administration and data architecture principles.",
      "Built custom data models using standard and custom objects, fields, and relational lookups.",
      "Configured Lightning record pages, page layouts, and user interface components to match operational requirements.",
      "Implemented data validation rules, security access controls, and object-level permissions.",
      "Generated structured reports and analytical dashboards to track CRM key performance indicators.",
    ],
    skills: [
      "Salesforce Platform",
      "Data Modeling",
      "Lightning Experience",
      "CRM Administration",
      "Reports & Dashboards",
      "Data Management",
    ],
  },
];
