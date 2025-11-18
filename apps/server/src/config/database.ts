import { db, sql } from "@repo/db";
import { logger } from "./logger.js";

export const testDatabaseConnection = async (): Promise<boolean> => {
  try {
    // Simple query to test connection
    await db.execute(sql`SELECT 1`);
    logger.info("Database connection established successfully");
    return true;
  } catch (error) {
    logger.error("Database connection failed", { error });
    return false;
  }
};

export { db };
