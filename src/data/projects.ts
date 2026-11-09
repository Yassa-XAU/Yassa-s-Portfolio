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
      "Engineered as a Senior Graduation Project at Sadat Academy for Management Sciences (Faculty of Computers and Information). The project couples physical microcontroller hardware (Arduino Uno, capacitive soil moisture sensor, DHT11 temp/humidity, ultrasonic sensors, SG90 servo gate barriers, automated irrigation relay pumps) with an administrative web application featuring live telemetry streams via WebSockets, optical QR ticket scanning, RFID gate authentication, and cybersecurity audit logs.",
    technologies: [
      "IoT Architecture",
      "Arduino Uno & C++",
      "MFRC522 RFID",
      "Sensors & Actuators",
      "WebSockets Telemetry",
      "Node.js Backend",
      "React Dashboard",
      "Cybersecurity Audit Logs",
    ],
    features: [
      "Automated plant irrigation triggered by soil moisture and ambient DHT11 temperature telemetry",
      "Ultrasonic visitor proximity detection and entry barrier control via SG90 servo motors",
      "Web-based ticket reservation with digital QR code generation and optical camera scanning",
      "Hardware RFID badge verification with hardcoded authorization lists and access rejection",
      "Live administrative telemetry dashboard with real-time hardware status indicators and security logs",
    ],
    image: "/projects/smart-park/hardware.jpg",
    gallery: [
      "/projects/smart-park/hardware.jpg",
      "/projects/smart-park/telemetry.png",
      "/projects/smart-park/ticket-scanning.png",
      "/projects/smart-park/schematic.png",
      "/projects/smart-park/audit-logs.png",
    ],
    githubUrl: "https://github.com/yassaashraf",
    statusBadge: "Graduation Project",
    highlights: ["Physical Hardware Prototype", "Real-Time Telemetry", "Access Control"],
  },
  {
    id: "velora-travel",
    title: "Velora — Travel Agency Platform",
    subtitle: "Modern Digital Travel Exploration",
    type: "Software Development Project",
    category: "software",
    description:
      "A modern travel agency web platform featuring interactive destination showcases, smart travel packages, and NFC/QR-enabled physical touchpoint integration.",
    longDescription:
      "Velora was developed to provide seamless digital exploration and customer onboarding for international tourism. Built with modern responsive UI components, trip itinerary browsing, and physical marketing touchpoints using custom NFC tap cards and QR desk stands to bridge in-person agency consultation with instant web exploration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NFC & QR Integration",
      "Responsive UI/UX",
      "Brand Identity Design",
    ],
    features: [
      "Curated travel destination catalog with visual trip itineraries and package exploration",
      "NFC smart keychain and interactive QR desk stand touchpoint integration",
      "Dark-themed futuristic aesthetic with sleek card interactions and gold-orange branding",
      "Mobile-first responsive architecture tested across diverse screen viewports",
    ],
    image: "/projects/velora/design.png",
    gallery: [
      "/projects/velora/design.png",
      "/projects/velora/desk-stand.png",
      "/projects/velora/keychain.png",
      "/projects/velora/logo.png",
    ],
    githubUrl: "https://github.com/yassaashraf",
    statusBadge: "Full-Stack Project",
    highlights: ["Responsive UI/UX", "NFC Touchpoints", "Brand Architecture"],
  },
  {
    id: "data-analysis-collection",
    title: "Data Analysis Projects",
    subtitle: "Academic Data Mining & Predictive Modeling",
    type: "Academic Research Project",
    category: "data",
    description:
      "A comparative academic machine learning benchmark evaluating distributed data processing in PySpark against interactive visual classification workflows in Orange Data Mining.",
    longDescription:
      "Featured academic research: 'Phishing Email Detection — Orange vs PySpark'. Conducted at Sadat Academy for Management Sciences under the Fundamentals of Data Mining course. The project benchmarked multiple machine learning algorithms (Random Forest, Support Vector Machines, Neural Networks, Decision Trees, and Naive Bayes) on email feature vectors. Includes complete workflow pipelines, model comparison matrices (AUC, Classification Accuracy, F1-Score, Precision, Recall), ROC analysis, and PySpark distributed dataset scatter plots.",
    technologies: [
      "Orange Data Mining",
      "Apache PySpark",
      "Python",
      "Random Forest & SVM",
      "Neural Networks",
      "ROC & AUC Analysis",
      "Confusion Matrices",
    ],
    features: [
      "Visual classification workflow in Orange with automated preprocessing and 10-fold cross validation",
      "Comprehensive model evaluation matrix comparing AUC, CA, F1-Score, Precision, and Recall",
      "Receiver Operating Characteristic (ROC) curve analysis comparing classifier sensitivity and specificity",
      "Random Forest confusion matrix evaluating true positives, false positives, and misclassification rates",
      "PySpark distributed pipeline implementation for large-scale email text analysis",
    ],
    image: "/projects/data-mining/orange-workflow.png",
    gallery: [
      "/projects/data-mining/orange-workflow.png",
      "/projects/data-mining/models-results.png",
      "/projects/data-mining/roc-analysis.png",
      "/projects/data-mining/confusion-matrix-rf.png",
      "/projects/data-mining/phishing-detection.jpg",
    ],
    githubUrl: "https://github.com/yassaashraf",
    statusBadge: "Data Mining Project",
    highlights: ["Orange Workflows", "PySpark Distributed Pipelines", "Model Evaluation"],
  },
];
