import { Router } from "express";
import healthRouter from "./health.js";
import apiRouter from "./api.js";

const router: Router = Router();

// Mount routes
router.use("/", healthRouter);
router.use("/api", apiRouter);

export default router;
