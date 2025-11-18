/**
 * API types and interfaces
 * Common types used across server and client
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  error: string;
  message?: string;
  timestamp: string;
  stack?: string;
}

export interface HealthCheckResponse {
  status: "ok" | "degraded" | "error";
  timestamp: string;
  environment: string;
  database: "connected" | "disconnected";
  uptime?: number;
}
