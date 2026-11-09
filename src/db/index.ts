import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let dbInstance: NeonHttpDatabase<typeof schema> | null = null;

/**
 * Returns the lazily-initialized Drizzle ORM client using the Neon HTTP driver.
 * Will safely return null if DATABASE_URL is not configured, preventing build-time crashes.
 */
export function getDb(): NeonHttpDatabase<typeof schema> | null {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    return null;
  }

  if (!dbInstance) {
    const client: NeonQueryFunction<boolean, boolean> = neon(connectionString);
    dbInstance = drizzle(client, { schema });
  }

  return dbInstance;
}

/**
 * Checks whether database credentials are configured in the current environment.
 */
export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
