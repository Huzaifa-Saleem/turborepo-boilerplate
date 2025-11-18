import { Router, type Request, type Response } from "express";

const router: Router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Highbid API",
    version: "1.0.0",
    status: "operational",
  });
});

export default router;
