export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  gradeOrScore?: string;
  credentialUrl?: string;
  image?: string;
  category: "cybersecurity" | "languages" | "professional" | "cloud";
  description: string;
  skills: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: "amit-soc-diploma",
    title: "Cybersecurity Diploma (SOC Analyst)",
    issuer: "AMIT Learning",
    date: "April 2024",
    gradeOrScore: "Grade: 92%",
    image: "/certificates/cyber-security-diploma.jpg",
    category: "cybersecurity",
    description:
      "Comprehensive professional diploma covering Security Operations Center (SOC) workflows, SIEM deployment with IBM QRadar, incident handling, network forensics, threat hunting, and log analysis.",
    skills: ["SIEM (IBM QRadar)", "Incident Response", "Network Forensics", "Threat Hunting", "Log Analysis"],
  },
  {
    id: "auc-english-b2",
    title: "English Proficiency — B2",
    issuer: "American University in Cairo (AUC)",
    date: "Certified",
    gradeOrScore: "CEFR Level B2",
    image: "/certificates/english-b2.jpg",
    category: "languages",
    description:
      "Verified professional English working proficiency in technical communication, academic writing, and cross-cultural presentation delivery.",
    skills: ["Technical Communication", "Professional Presentation", "Cross-Cultural Collaboration"],
  },
  {
    id: "huawei-hcia-security",
    title: "HCIA-Security V4.0",
    issuer: "Huawei",
    date: "Certified",
    image: "/certificates/huawei-hcia.png",
    category: "cybersecurity",
    description:
      "Network security concepts, security defense equipment, basic encryption technologies, firewall principles, and security management best practices.",
    skills: ["Firewall Administration", "Network Defense", "Encryption Standards"],
  },
  {
    id: "issa-cpt",
    title: "Certified Personal Trainer (CPT)",
    issuer: "International Sports Sciences Association (ISSA)",
    date: "2022 – 2024",
    image: "/certificates/cpt-issa.png",
    category: "professional",
    description:
      "Accredited certification reflecting discipline, physical wellness coaching, biomechanics, and structured goal tracking.",
    skills: ["Discipline", "Goal Setting", "Wellness Coaching"],
  },
];
