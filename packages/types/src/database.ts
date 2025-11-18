/**
 * Database schema types
 * Re-exported from @repo/db for use across the monorepo
 */

// Re-export all schema types from the database package
export type { User, NewUser } from "@repo/db";

// Re-export schema tables if needed
export { users } from "@repo/db";
