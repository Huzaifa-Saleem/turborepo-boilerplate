import type { Request, Response, NextFunction } from "express";
import { CustomError } from "./errorHandler.js";

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const error = new CustomError(`Not Found - ${_req.originalUrl}`, 404);
  next(error);
};
