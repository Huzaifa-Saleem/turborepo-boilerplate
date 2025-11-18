import { Router, type Request, type Response } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { testDatabaseConnection } from "../config/database.js";
import { env } from "../config/env.js";
import type { HealthCheckResponse } from "@repo/types";

const router: Router = Router();

router.get(
  "/health",
  asyncHandler(async (_req: Request, res: Response) => {
    const dbConnected = await testDatabaseConnection();

    const healthStatus: HealthCheckResponse = {
      status: dbConnected ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      environment: env.NODE_ENV,
      database: dbConnected ? "connected" : "disconnected",
      uptime: process.uptime(),
    };

    res.status(dbConnected ? 200 : 503).json(healthStatus);
  })
);

export default router;
