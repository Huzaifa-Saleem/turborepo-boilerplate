// Utility functions
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === "development";
};
