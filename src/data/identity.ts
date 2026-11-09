export interface IdentityPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "ShieldAlert" | "CodeXml" | "ServerCog" | "BarChart3";
  tags: string[];
  gradient: string;
}

export const identityPillars: IdentityPillar[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity & Defense",
    subtitle: "Security Monitoring & Threat Analysis",
    description:
      "Deeply interested in SOC operations, vulnerability assessment, SIEM alerting, and system defense architecture to safeguard applications and infrastructure.",
    iconName: "ShieldAlert",
    tags: ["SIEM", "IBM QRadar", "SOC Operations", "Threat Analysis", "Network Security"],
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "software-dev",
    title: "Software Development",
    subtitle: "Robust Logic & Relational Architecture",
    description:
      "Practical experience building Python applications, desktop GUI interfaces, and relational database systems (MySQL/PostgreSQL) that streamline operational workflows.",
    iconName: "CodeXml",
    tags: ["Python", "MySQL", "GUI Architecture", "Database Design", "Full-Stack Concepts"],
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "it-operations",
    title: "IT & Systems Operations",
    subtitle: "Reliable Infrastructure & Connectivity",
    description:
      "Hands-on exposure to network protocols, connected IoT hardware devices, logistics coordination, and mission-critical IT infrastructure management.",
    iconName: "ServerCog",
    tags: ["Networking", "IoT Systems", "IT Support", "Hardware Integration", "Operations"],
    gradient: "from-sky-600/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    subtitle: "Patterns, Exploration & Insights",
    description:
      "Exploring datasets to uncover behavioral trends, identify system anomalies, and build predictive analytical pipelines using modern data mining tools.",
    iconName: "BarChart3",
    tags: ["Data Mining", "PySpark", "Orange Data Mining", "Relational Queries", "Pattern Detection"],
    gradient: "from-blue-700/20 via-sky-500/10 to-transparent",
  },
];
