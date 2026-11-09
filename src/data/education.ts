export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  faculty: string;
  period: string;
  status: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export const educationHistory: EducationItem[] = [
  {
    id: "sams-bsc",
    degree: "Bachelor of Science in Computer Science",
    major: "Cyber Security",
    faculty: "Faculty of Computers and Information (FCI)",
    institution: "Sadat Academy for Management Sciences",
    period: "2022 – 2026",
    status: "Graduating Class of 2026",
    location: "Cairo, Egypt",
    highlights: [
      "Specialized in Cyber Security, network defense mechanisms, and secure systems architecture.",
      "Senior Graduation Project: 'Smart Park — IoT Garden & Automated Ticketing System'.",
      "Completed hands-on laboratory courses in networking, database administration, and data mining.",
      "Active participant in academic technical presentations and software engineering workshops.",
    ],
    coursework: [
      "Information Security & Cryptography",
      "Computer Networks & Protocols",
      "Relational Database Systems",
      "Fundamentals of Data Mining",
      "Operating Systems & Architecture",
      "Algorithms & Data Structures",
      "Software Engineering Methodologies",
    ],
  },
];

