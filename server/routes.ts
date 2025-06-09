import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // No API routes needed for the anniversary website
  // All functionality is handled client-side

  const httpServer = createServer(app);

  return httpServer;
}
