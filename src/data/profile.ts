export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  headline: string;
  specializations: string[];
  introduction: string;
  shortBio: string;
  email: string;
  location: string;
  availableForWork: boolean;
  statusBadge: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  cvPath: string;
  imagePath: string;
}

export const profileData: ProfileData = {
  name: "Yassa Ashraf",
  fullName: "Yassa Ashraf Albir",
  title: "Computer Science Graduate",
  headline: "Cybersecurity | Software Development | IT Operations | Data Analytics",
  specializations: [
    "Cybersecurity",
    "Software Development",
    "IT Operations",
    "Data Analytics",
  ],
  introduction:
    "Computer Science graduate specializing in Cyber Security, with practical experience in cybersecurity concepts, Python development, relational databases, and IT systems. Interested in building practical technology solutions, understanding complex systems, and using technology to solve real-world problems.",
  shortBio:
    "Dedicated to engineering reliable technology solutions, securing systems against emerging vulnerabilities, and analyzing data to solve complex real-world challenges.",
  email: "yassa.ashraf.albir@gmail.com",
  location: "Cairo, Egypt",
  availableForWork: true,
  statusBadge: "Available for Technical Roles & Projects",
  socials: {
    github: "https://github.com/yassaashraf",
    linkedin: "https://www.linkedin.com/in/yassa-ashraf/",
    email: "mailto:yassa.ashraf.albir@gmail.com",
  },
  cvPath: "/documents/Yassa-Ashraf-CV.pdf",
  imagePath: "/images/yassa-profile.jpg",
};
