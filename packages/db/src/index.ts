import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "drizzle-orm";
import postgres from "postgres";
import * as schema from "./schema/index.js";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create the connection
const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
});

// Create and export the database instance
export const db = drizzle(client, { schema });

// Export schema for use in other packages
export * from "./schema/index.js";

// Export sql for raw queries
export { sql };

// Export types
export type Database = typeof db;
