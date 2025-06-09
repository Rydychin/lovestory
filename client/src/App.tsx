import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PasswordGate from "@/components/password-gate";

function Router({ onLogout }: { onLogout: () => void }) {
  return (
    <Switch>
      <Route path="/">
        <Home onLogout={onLogout} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already entered the correct password
    const accessGranted = localStorage.getItem("anniversary-access");
    if (accessGranted === "granted") {
      setHasAccess(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  const handleLogout = () => {
    setHasAccess(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-rose-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-deep-rose font-playfair text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <PasswordGate onAccessGranted={handleAccessGranted} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router onLogout={handleLogout} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
