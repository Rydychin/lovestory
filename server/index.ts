import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Try different ports for local development
  const tryPort = (port: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      const serverInstance = server.listen({
        port,
        host: "0.0.0.0",
      }, () => {
        log(`serving on port ${port}`);
        console.log(`\n🎉 Anniversary website is running!`);
        console.log(`📍 Open in browser: http://localhost:${port}`);
        console.log(`🔑 Password: inthearena`);
        console.log(`\n❤️  Made with love for our 3-month anniversary\n`);
        resolve();
      });
      
      serverInstance.on('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
          reject(new Error(`Port ${port} is busy`));
        } else {
          reject(err);
        }
      });
    });
  };
  // Try ports 3000, 3001, 3002, etc. until we find one that works
  const startServer = async () => {
    const ports = [3000, 3001, 3002, 3003, 5000, 5001, 5002, 8000, 8080];
    
    for (const port of ports) {
      try {
        await tryPort(port);
        return;
      } catch (error) {
        console.log(`Port ${port} is busy, trying next...`);
      }
    }
    
    console.error('Could not find an available port. Please close other applications and try again.');
    process.exit(1);
  };
  await startServer();
})();
