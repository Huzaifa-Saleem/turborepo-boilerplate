import express, { type Express, type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Logging middleware
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
  });
});

// API routes
app.get("/api", (_req: Request, res: Response) => {
  res.json({
    message: "Highbid API",
    version: "1.0.0",
  });
});

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested resource was not found",
  });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error:", err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    error: NODE_ENV === "production" ? "Internal Server Error" : err.message,
    ...(NODE_ENV === "development" && { stack: err.stack }),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`);
});

