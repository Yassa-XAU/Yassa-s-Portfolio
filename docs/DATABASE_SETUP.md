# Neon Serverless PostgreSQL Database Setup Guide

This guide provides complete instructions for provisioning, configuring, migrating, and connecting **Neon Serverless PostgreSQL** with this Next.js portfolio application using **Drizzle ORM** and `@neondatabase/serverless`.

---

## 1. Overview of Architecture

- **Database**: Neon Serverless PostgreSQL
- **ORM**: Drizzle ORM
- **Driver**: `@neondatabase/serverless` using the Neon HTTP connection (`drizzle-orm/neon-http`)
- **Schema**: Single source of truth in `src/db/schema.ts`
- **Migrations**: Auto-generated SQL files managed in `drizzle/`
- **Safety**: Lazy database client initialization (`src/db/index.ts`) ensures Next.js build never fails if database credentials are not present during build time.

---

## 2. Option A: Connect via Vercel Marketplace (Recommended)

When deploying to Vercel, the easiest method is connecting the official Neon integration:

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Navigate to your deployed project (or import this repository).
3. Click on the **Storage** tab.
4. Select **Connect Database** > choose **Neon**.
5. Follow the authorization prompt to link your Neon account and project.
6. Vercel automatically exposes the following environment variables across **Production**, **Preview**, and **Development** environments:
   - `DATABASE_URL` (Pooled serverless HTTP connection string)
   - `DATABASE_URL_UNPOOLED` (Direct migration connection string)

---

## 3. Option B: Create Neon Database Directly via Neon Console

If you prefer to create the database directly in Neon:

1. Sign up or log into [Neon Console](https://console.neon.tech).
2. Click **Create Project**.
3. Name your project (e.g., `yassa-portfolio-db`) and select a region close to your primary audience (e.g., `AWS eu-central-1` or `AWS us-east-2`).
4. Once created, your dashboard will display the **Connection Details**.
5. Ensure **Pooled connection** checkbox is checked for application runtime (`DATABASE_URL`).
6. Toggle to **Direct connection** to copy the unpooled connection string for schema migrations (`DATABASE_URL_UNPOOLED`).

---

## 4. Local Development Configuration

1. Copy the environment template into `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and paste your actual connection strings:
   ```env
   DATABASE_URL=postgresql://neondb_owner:YOUR_PASSWORD@ep-sample-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
   DATABASE_URL_UNPOOLED=postgresql://neondb_owner:YOUR_PASSWORD@ep-sample.us-east-2.aws.neon.tech/neondb?sslmode=require
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=yassa.ashraf.albir@gmail.com
   ```

3. Note: `.env.local` is included in `.gitignore` and must never be committed to git.

---

## 5. Executing Database Migrations

This repository uses Drizzle Kit to generate and apply migrations.

### Generate a migration (Schema changes):
If you modify `src/db/schema.ts`, run:
```bash
npm run db:generate
```
This generates standard SQL scripts inside the `drizzle/` directory.

### Push schema directly to database (Fast sync):
To immediately sync your schema with the database without running separate migration files:
```bash
npm run db:push
```

### Apply SQL migrations:
```bash
npm run db:migrate
```

### Launch Drizzle Studio (Database GUI):
To view, search, and manage submitted contact messages in a visual browser UI:
```bash
npm run db:studio
```

---

## 6. Vercel Production and Preview Setup

If not using the Vercel Marketplace one-click integration, configure variables manually in the Vercel Dashboard:

1. Go to **Project Settings** > **Environment Variables**.
2. Add:
   - `DATABASE_URL`: Your pooled Neon connection string. Select **Production**, **Preview**, and **Development**.
   - `DATABASE_URL_UNPOOLED`: Your direct unpooled Neon connection string.
   - `RESEND_API_KEY`: (Optional) Your Resend API key for automated email delivery.
   - `CONTACT_EMAIL`: (Optional) Destination email (`yassa.ashraf.albir@gmail.com`).
   - `NEXT_PUBLIC_SITE_URL`: Your custom production domain (e.g., `https://yassa-portfolio.vercel.app`).
3. Click **Save**. Trigger a redeploy from **Deployments** > **Redeploy**.

---

## 7. Testing Database Connectivity

To test whether your database is reachable and accepting insertions:

1. Start the local development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000/#contact`.
3. Fill out the contact form with a test message and click **Transmit Message**.
4. Check the browser response: A green confirmation banner indicates success.
5. In your terminal, run:
   ```bash
   npm run db:studio
   ```
   Open the Drizzle Studio link (usually `https://local.drizzle.studio`) to verify the record appears in the `contact_messages` table with status `'new'`.

---

## 8. Troubleshooting Connection Errors

### Error: `DATABASE_URL environment variable is missing`
- **Cause**: Environment variables are not loaded or misspelled.
- **Resolution**: Check `.env.local` locally or check the **Environment Variables** tab in your Vercel project settings. Ensure there are no surrounding quotes or whitespace in the connection string.

### Error: `Endpoint is paused`
- **Cause**: Free tier Neon databases automatically suspend compute after 5 minutes of inactivity to save resources.
- **Resolution**: The `@neondatabase/serverless` HTTP driver will automatically wake up the compute endpoint on the next incoming query (takes ~500ms). No manual intervention is needed.

### Error: `SSL connection required`
- **Cause**: Missing `?sslmode=require` query parameter.
- **Resolution**: Ensure your `DATABASE_URL` ends with `?sslmode=require`.

### Error: `Client-side leak warning`
- **Security Rule**: `DATABASE_URL` is never prefixed with `NEXT_PUBLIC_`. The Drizzle ORM client is strictly isolated to server contexts (`src/app/api/contact/route.ts` and `src/db/index.ts`). It is never bundled into client JavaScript.
