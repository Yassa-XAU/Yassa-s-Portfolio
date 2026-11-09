# Yassa Ashraf Albir — Personal Technology Portfolio

A modern, high-performance personal technology portfolio for **Yassa Ashraf Albir**, Computer Science Graduate specializing in Cyber Security.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Neon Serverless PostgreSQL** with **Drizzle ORM**.

---

## 🚀 Key Features & Highlights

- **Aesthetic**: Premium futuristic dark theme (`#080D16`) with electric blue accents (`#1677FF`), glassmorphism cards, and subtle grid patterns.
- **Section Architecture**:
  1. **Hero**: Large bold typography, headline, verified portrait frame with glow effects, primary and secondary CTAs, and active status indicator.
  2. **Professional Identity**: "Technology Meets Problem Solving" — 4 core disciplines (Cybersecurity, Software Development, IT Operations, Data Analytics).
  3. **About Me**: Verified background at Sadat Academy for Management Sciences (2022–2026), British Council, and software engineering.
  4. **Professional Experience**: Interactive career timeline featuring British Council, freelance Python/MySQL development, and pending internship milestones.
  5. **Featured Projects**: Filterable project gallery with interactive modal inspection:
     - **Smart Park**: University graduation IoT garden and ticketing platform with hardware/software integration.
     - **Velora**: Travel agency platform with responsive UI and relational database structure.
     - **Data Analysis Academic Collection**: Phishing email detection comparative benchmark (PySpark vs Orange Data Mining).
  6. **Technical Skills**: Categorized capability cards without fabricated proficiency percentages.
  7. **Education**: Bachelor of Science in Computer Science (Major: Cyber Security) from Sadat Academy for Management Sciences.
  8. **Certifications**: AMIT Cybersecurity SOC Diploma (Grade: 92%), AUC English B2, ISSA CPT, Huawei HCIA.
  9. **Languages**: Arabic (Native), English (B2 Professional).
  10. **Contact Form**: Secure, working serverless contact form with Zod validation, rate limiting, honeypot spam protection, and Neon PostgreSQL persistence.

---

## 🔒 Security & Privacy Engineering

- **Parameterization**: All database transactions use Drizzle ORM parameterized queries.
- **Rate Limiting**: Sliding window rate limiter protects the API against spam and abuse.
- **Honeypot Protection**: Hidden fields trap automated bot submissions.
- **Secret Isolation**: No database credentials or email tokens are ever exposed to the client bundle.
- **Zero Trading Disclosures**: In strict compliance with privacy requirements, no personal trading activities, accounts, or automated financial strategies appear anywhere in the codebase or presentation layer.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: Neon Serverless PostgreSQL
- **ORM**: Drizzle ORM (`drizzle-orm/neon-http`)
- **Driver**: `@neondatabase/serverless`
- **Validation**: Zod
- **Notifications**: Resend (Optional)
- **Deployment**: Vercel

---

## 📦 Project Structure

```
├── docs/
│   └── DATABASE_SETUP.md          # Comprehensive Neon & Drizzle setup guide
├── drizzle/
│   └── 0000_orange_grandmaster.sql # Auto-generated PostgreSQL migration
├── public/
│   ├── certificates/              # Verified diplomas & certificates
│   ├── documents/                 # CV download file (PDF)
│   ├── images/                    # Professional portrait
│   └── projects/                  # Project screenshots & diagrams
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   # Secure contact form API endpoint
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
│   ├── db/
│   │   ├── index.ts               # Lazy Neon HTTP database connection
│   │   └── schema.ts              # Drizzle PostgreSQL table schema
│   └── lib/                       # Zod validation schema & rate limiter
├── drizzle.config.ts              # Drizzle Kit configuration
├── next.config.ts                 # Next.js configuration
├── package.json
├── tailwind.config.ts             # Electric blue custom color palette
└── tsconfig.json
```

---

## 💻 Local Development Setup

1. Clone or navigate to the repository directory:
   ```bash
   cd "My Portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *(Refer to `docs/DATABASE_SETUP.md` for connection string details).*

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available NPM Scripts

- `npm run dev`: Starts the Next.js local development server.
- `npm run build`: Builds the production application for deployment.
- `npm run start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint checks.
- `npm run db:generate`: Generates SQL migration files using Drizzle Kit.
- `npm run db:push`: Pushes schema definitions directly to the database.
- `npm run db:studio`: Launches Drizzle Studio in browser for inspecting data.

---

## 🚀 Deployment to Vercel

1. Push this repository to GitHub.
2. Import the repository into your [Vercel Dashboard](https://vercel.com).
3. Connect the **Neon** integration via Vercel Marketplace (or set `DATABASE_URL` in Project Settings).
4. Deploy! Vercel will automatically build and publish the website.
