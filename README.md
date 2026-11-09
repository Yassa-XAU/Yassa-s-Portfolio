# Yassa Ashraf Albir — Personal Technology Portfolio

A modern, high-performance personal technology portfolio for **Yassa Ashraf Albir**, Computer Science Graduate specializing in Cyber Security.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for zero-dependency static deployment on **Vercel** with maximum performance, instant page loads, and verified professional assets.

---

## 🚀 Key Features & Highlights

- **Aesthetic**: Premium futuristic dark theme (`#080D16`) with electric blue accents (`#1677FF`), glassmorphism cards, subtle grid patterns, and accessible typography.
- **Section Architecture**:
  1. **Hero**: Bold typography, professional headline, verified portrait frame with electric-blue glow, primary CTA ("Explore My Work"), secondary CTA ("Download My CV"), and direct professional links.
  2. **Professional Identity**: "Technology Meets Problem Solving" — 4 core disciplines (Cybersecurity, Software Development, IT Operations, Data Analytics).
  3. **About Me**: Academic background at Sadat Academy for Management Sciences (2022–2026), British Council operations, and software development foundations.
  4. **Professional Experience**: Chronological career timeline:
     - **British Council — Egypt**: Teaching Center Assistant (June 2025 – Present).
     - **Freelance Developer**: Cybersecurity & Software Developer (2023 – Present).
     - **Cloudzlab**: Salesforce Intern (July 2026) featuring dedicated **Training Areas** (Salesforce Platform, Data Modeling, Lightning Customization, Data Management, Mobile App, User Engagement, Reports & Dashboards).
  5. **Featured Projects**: Filterable project gallery with modal inspection and 100% authentic project assets:
     - **IoT Garden & Automated Ticketing System (Smart Park)**: Physical Arduino Uno hardware prototype, environmental sensors, servo gate barriers, WebSocket live telemetry matrix, optical QR ticket scanner, Cirkit Designer breadboard schematics, and cybersecurity audit logs.
     - **Velora Travel Platform**: Digital travel platform with physical NFC keychain and interactive QR desk stand touchpoints.
     - **Data Analysis Academic Research**: Comparative machine learning benchmark (Orange Data Mining vs Apache PySpark) evaluating 5 classifiers with model comparison matrices, ROC curves, Random Forest confusion matrices, and university presentation defense media.
  6. **Technical Skills**: Categorized capability cards without fabricated proficiency percentages.
  7. **Education**: Bachelor of Science in Computer Science (Major: Cyber Security) from Sadat Academy for Management Sciences.
  8. **Certifications**: AMIT Cybersecurity SOC Diploma (Grade: 92%), AUC English B2, ISSA CPT, Huawei HCIA.
  9. **Languages**: Arabic (Native), English (B2 Professional).
  10. **Let's Connect**: Clean, modern direct-communication section with 4 interactive cards:
      - **Direct Email**: `yassa.ashraf7890@gmail.com` (mailto link)
      - **LinkedIn**: `linkedin.com/in/yassa-ashraf` (secure external tab)
      - **GitHub**: `github.com/yassaashraf` (secure external tab)
      - **Location**: Cairo, Egypt (Local & Remote availability)
      - **Closing CTA**: *"Let's build something meaningful together."*

---

## 🔒 Security & Privacy Standards

- **Static Zero-Database Architecture**: Eliminates attack surfaces, SQL injection risks, and third-party database downtime by serving static optimized bundles via Vercel Edge CDN.
- **Privacy First**: No personal phone numbers, private home addresses, or confidential tokens are exposed.
- **Strict Financial Privacy**: In full accordance with professional portfolio standards, zero personal trading accounts, trading strategies, or financial market activities are included.
- **Content Security**: All external links are secured with `rel="noopener noreferrer"`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Hosting & CDN**: Vercel Serverless Edge
- **Source Control**: GitHub (`https://github.com/Yassa-XAU/Yassa-s-Portfolio.git`)

---

## 📦 Project Structure

```
├── public/
│   ├── certificates/              # Verified diplomas & certifications
│   ├── documents/                 # CV download file (PDF)
│   ├── images/                    # Professional portrait
│   └── projects/
│       ├── data-mining/           # Orange workflows, ROC curves, confusion matrices
│       ├── smart-park/            # Hardware prototype, telemetry, scanner, schematics
│       └── velora/                # NFC desk stand, keychain, brand logo
├── src/
│   ├── app/
│   │   ├── globals.css            # Electric blue theme & custom scrollbars
│   │   ├── layout.tsx             # Root layout with SEO and OpenGraph
│   │   ├── page.tsx               # Single-page portfolio application
│   │   ├── robots.ts              # SEO crawlers configuration
│   │   └── sitemap.ts             # Dynamic sitemap generator
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/              # 10 modular sections
│   │   └── ui/                    # Button, Card, Badge, SectionHeading, ProjectModal
│   ├── data/                      # Clean structured TypeScript data files
│   └── lib/                       # Utility functions
```

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment to Vercel

The application is pre-configured for automatic deployment on Vercel:

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**. No external database provisioning or API keys required.
