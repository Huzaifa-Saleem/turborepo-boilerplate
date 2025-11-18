import express, { type Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { morganStream } from "./config/logger.js";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFound.js";

export const createApp = (): Express => {
  const app = express();

  // Security middleware
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: env.CLIENT_URL,
      credentials: true,
    })
  );

  // Logging middleware
  if (env.NODE_ENV === "development") {
    app.use(morgan("dev", { stream: morganStream }));
  } else {
    app.use(morgan("combined", { stream: morganStream }));
  }

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use(routes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
