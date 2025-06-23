import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PasswordGate from "@/components/password-gate";
import SpicyAtlas from "@/pages/spicy-atlas";
import CutieMemories from "@/pages/cutie-memories";
import SleepingBeauty from "@/pages/sleeping-beauty";
import PowerCouple from "@/pages/power-couple";
import Traveling from "@/pages/traveling";
import BucketList from "@/pages/bucket-list";

function Router({ onLogout }: { onLogout: () => void }) {
  return (
    <Switch>
      <Route path="/">
        <Home onLogout={onLogout} />
      </Route>
      <Route path="/memories/spicy-atlas">
        <SpicyAtlas />
      </Route>
      <Route path="/memories/cutie">
        <CutieMemories />
      </Route>
      <Route path="/memories/sleeping-beauty">
        <SleepingBeauty />
      </Route>
      <Route path="/memories/power-couple">
        <PowerCouple />
      </Route>
      <Route path="/memories/traveling">
        <Traveling />
      </Route>
      <Route path="/memories/bucket-list">
        <BucketList />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first load of the website
    const isFirstLoad = !sessionStorage.getItem("hasLoadedBefore");
    if (isFirstLoad) {
      // First time loading the website, require password
      setHasAccess(false);
      sessionStorage.setItem("hasLoadedBefore", "true");
    } else {
      // Not first load, check if we have access
      const accessGranted = localStorage.getItem("anniversary-access");
      if (accessGranted === "granted") {
        setHasAccess(true);
      }
    }
    setIsLoading(false);
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
    localStorage.setItem("anniversary-access", "granted");
  };

  const handleLogout = () => {
    setHasAccess(false);
    localStorage.removeItem("anniversary-access");
    sessionStorage.removeItem("hasLoadedBefore");
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
