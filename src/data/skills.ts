export interface SkillGroup {
  id: string;
  category: string;
  iconName: "ShieldAlert" | "CodeXml" | "ServerCog" | "BarChart3" | "Cloud";
  summary: string;
  skills: {
    name: string;
    level?: string; // Descriptive tag, e.g. "Practical Exposure", "Academic / Lab", NOT fake %
    description?: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "cybersecurity-soc",
    category: "Cybersecurity & SOC Operations",
    iconName: "ShieldAlert",
    summary:
      "Security monitoring, incident analysis, and defense strategies grounded in academic labs and diploma training.",
    skills: [
      { name: "SIEM Architecture", level: "Core Focus" },
      { name: "IBM QRadar", level: "SOC Diploma" },
      { name: "SOAR Principles", level: "Trained" },
      { name: "Threat Detection & Response", level: "Practical" },
      { name: "Vulnerability Assessment", level: "Hands-on" },
      { name: "Malware Analysis Fundamentals", level: "Academic" },
      { name: "Network Security & Firewalls", level: "Applied" },
    ],
  },
  {
    id: "software-dev",
    category: "Software Development & Databases",
    iconName: "CodeXml",
    summary:
      "Building practical desktop solutions, relational data models, and backend application integrations.",
    skills: [
      { name: "Python", level: "Primary Language" },
      { name: "MySQL", level: "Relational DB" },
      { name: "Desktop GUI Design", level: "Tkinter / CustomTkinter" },
      { name: "Database Schema Management", level: "Applied" },
      { name: "Parameterized SQL Queries", level: "Security-First" },
      { name: "C / C++ Basics", level: "Embedded / Academic" },
      { name: "Git & Version Control", level: "Daily Workflow" },
    ],
  },
  {
    id: "it-systems",
    category: "IT & Systems Operations",
    iconName: "ServerCog",
    summary:
      "Deploying connected systems, managing network infrastructure, and supporting organizational operations.",
    skills: [
      { name: "Computer Networking", level: "TCP/IP & Subnetting" },
      { name: "IoT Systems & Microcontrollers", level: "Arduino & ESP32" },
      { name: "Hardware Integration & Sensors", level: "Embedded" },
      { name: "IT Operations & Troubleshooting", level: "Practical" },
      { name: "Microsoft Office Suite", level: "Proficient" },
      { name: "Cisco Packet Tracer", level: "Lab Simulation" },
    ],
  },
  {
    id: "data-analytics",
    category: "Data Analytics & Mining",
    iconName: "BarChart3",
    summary:
      "Exploratory analysis, feature extraction, and comparative machine learning pipelines.",
    skills: [
      { name: "PySpark", level: "Distributed Processing" },
      { name: "Orange Data Mining", level: "Visual Workflows" },
      { name: "Pandas & Data Wrangling", level: "Kaggle Certified" },
      { name: "Exploratory Data Analysis (EDA)", level: "Academic" },
      { name: "Model Evaluation & Confusion Matrix", level: "Applied" },
    ],
  },
  {
    id: "salesforce-cloud",
    category: "Salesforce & Cloud Exposure",
    iconName: "Cloud",
    summary:
      "Enterprise cloud concepts, CRM data flows, and introductory administration.",
    skills: [
      { name: "Salesforce Fundamentals", level: "Internship Exposure" },
      { name: "CRM Data Architecture", level: "Conceptual" },
      { name: "Trailhead Learning Track", level: "Ongoing" },
    ],
  },
];
