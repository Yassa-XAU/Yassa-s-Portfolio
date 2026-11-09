import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profileData } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: "#080D16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yassa-portfolio.vercel.app"
  ),
  title: `${profileData.fullName} — ${profileData.title} | Portfolio`,
  description: profileData.introduction,
  keywords: [
    "Yassa Ashraf",
    "Yassa Ashraf Albir",
    "Cybersecurity Graduate",
    "Computer Science Portfolio",
    "SOC Analyst",
    "Python Developer",
    "Sadat Academy for Management Sciences",
    "Cairo Egypt",
    "Network Security",
    "IoT Systems",
    "Data Analytics",
  ],
  authors: [{ name: profileData.fullName, url: profileData.socials.linkedin }],
  creator: profileData.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${profileData.fullName} — ${profileData.title}`,
    description: profileData.introduction,
    siteName: `${profileData.fullName} Portfolio`,
    images: [
      {
        url: "/images/yassa-profile.jpg",
        width: 1200,
        height: 630,
        alt: profileData.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.fullName} — ${profileData.title}`,
    description: profileData.introduction,
    images: ["/images/yassa-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-text-primary antialiased font-sans selection:bg-accent-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
