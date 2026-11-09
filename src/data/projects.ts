export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: "iot" | "software" | "data";
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isDetailsPending?: boolean;
  statusBadge: string;
  highlights: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "iot-smart-park",
    title: "IoT Garden & Ticketing System",
    subtitle: "Smart Park — Back to Nature",
    type: "University Graduation Project",
    category: "iot",
    description:
      "A comprehensive smart garden automation and automated ticketing system combining embedded IoT sensor hardware, RFID access gates, and full-stack web monitoring.",
    longDescription:
      "Engineered as a Senior Graduation Project at Sadat Academy for Management Sciences. The system bridges physical microcontroller hardware (Arduino, environmental soil moisture & ultrasonic sensors, servo gate barriers, automated water irrigation pumps) with an interactive web portal for ticket purchasing, QR/RFID gate scanning, live telemetry monitoring, and administrative audit logging.",
    technologies: [
      "IoT Architecture",
      "Arduino & C++",
      "Sensors & Actuators",
      "RFID Gate Access",
      "Web Dashboard",
      "Relational Database",
      "Telemetry & Audit Logs",
    ],
    features: [
      "Automated plant irrigation triggered by capacitive soil moisture sensors",
      "Ultrasonic visitor counting and entry barrier control via servo motors",
      "Web-based ticket reservation and digital QR code / RFID verification",
      "Live administrative telemetry dashboard with environmental monitoring",
      "Comprehensive audit logs and banned IP security safeguards",
    ],
    image: "/projects/smart-park/park-3d-map.jpg",
    gallery: [
      "/projects/smart-park/logo.png",
      "/projects/smart-park/hardware.jpg",
      "/projects/smart-park/telemetry.png",
      "/projects/smart-park/ticket-scanning.png",
      "/projects/smart-park/audit-logs.png",
    ],
    githubUrl: "https://github.com/yassaashraf", // Configurable
    isDetailsPending: false,
    statusBadge: "Graduation Project",
    highlights: ["Hardware-Software Co-Design", "Real-Time Telemetry", "Access Control"],
  },
  {
    id: "velora-travel",
    title: "Velora — Travel Agency Platform",
    subtitle: "Modern Digital Travel Exploration",
    type: "Software Development Project",
    category: "software",
    description:
      "A full-stack travel agency web application featuring destination catalogs, tour packaging, user-friendly reservation flows, and a sleek modern aesthetic.",
    longDescription:
      "Velora was developed to explore modern web architectures for travel discovery and itinerary booking. Built with high-performance responsive UI components, structured relational data handling for trips and accommodations, and modern branding assets.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma / Relational DB",
      "RESTful APIs",
    ],
    features: [
      "Curated travel destination catalog with visual imagery and dynamic filters",
      "Trip inquiry and customer reservation management interface",
      "Dark-themed futuristic aesthetic with animated interactive elements",
      "Mobile-first responsive architecture tested across diverse screen viewports",
    ],
    image: "/projects/velora/design.png",
    gallery: ["/projects/velora/logo.png", "/projects/velora/design.png"],
    githubUrl: "https://github.com/yassaashraf", // Configurable
    isDetailsPending: false,
    statusBadge: "Full-Stack Project",
    highlights: ["Responsive UI/UX", "Dynamic Itineraries", "Clean Architecture"],
  },
  {
    id: "data-analysis-collection",
    title: "Data Analysis Projects",
    subtitle: "Academic Data Mining & Predictive Modeling",
    type: "Academic Collection",
    category: "data",
    description:
      "A collection of academic data mining and machine learning projects exploring classification algorithms, anomaly detection, and distributed data processing.",
    longDescription:
      "Featured study: 'Phishing Email Detection — Orange vs PySpark'. A comparative analysis benchmark evaluating distributed data processing in PySpark against interactive visual machine learning workflows in Orange Data Mining. Focuses on feature extraction, TF-IDF vectorization, precision-recall trade-offs, and classification metrics across spam and phishing email corpora.",
    technologies: [
      "Python",
      "PySpark",
      "Orange Data Mining",
      "Pandas",
      "Machine Learning",
      "Confusion Matrix Analysis",
    ],
    features: [
      "Phishing Email Detection comparative benchmark (PySpark vs Orange)",
      "High-dimensional text feature engineering and tokenization",
      "Model evaluation using Precision, Recall, F1-Score, and ROC-AUC curves",
      "Exploratory Data Analysis (EDA) on structured datasets",
    ],
    image: "/projects/data-mining/phishing-detection.jpg",
    githubUrl: "https://github.com/yassaashraf", // Configurable
    isDetailsPending: false,
    statusBadge: "Research & Modeling",
    highlights: ["Distributed PySpark", "Visual Data Mining", "Security Analytics"],
  },
];
