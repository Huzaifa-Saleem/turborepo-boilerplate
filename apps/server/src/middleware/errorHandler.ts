import type { Request, Response, NextFunction } from "express";
import { logger } from "../config/logger.js";
import { env } from "../config/env.js";

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class CustomError extends Error implements AppError {
  statusCode: number;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational !== false;

  // Log error
  if (statusCode >= 500) {
    logger.error("Server error", {
      error: err.message,
      stack: err.stack,
      statusCode,
      isOperational,
    });
  } else {
    logger.warn("Client error", {
      error: err.message,
      statusCode,
      isOperational,
    });
  }

  // Send error response
  res.status(statusCode).json({
    error:
      isOperational || env.NODE_ENV !== "production"
        ? err.message
        : "Internal Server Error",
    ...(env.NODE_ENV === "development" && { stack: err.stack }),
    timestamp: new Date().toISOString(),
  });
};
