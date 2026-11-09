export interface LanguageItem {
  id: string;
  language: string;
  nativeName: string;
  proficiency: string;
  level: string;
  description: string;
}

export const languages: LanguageItem[] = [
  {
    id: "arabic",
    language: "Arabic",
    nativeName: "العربية",
    proficiency: "Native",
    level: "First Language",
    description: "Mother tongue; full mastery in verbal, written, and technical contexts.",
  },
  {
    id: "english",
    language: "English",
    nativeName: "English",
    proficiency: "Professional Proficiency",
    level: "CEFR Level B2",
    description: "Professional working proficiency; verified by the American University in Cairo (AUC).",
  },
];

