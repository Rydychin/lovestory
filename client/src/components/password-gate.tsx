import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PasswordGateProps {
  onAccessGranted: () => void;
}

export default function PasswordGate({ onAccessGranted }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // You can change this password to whatever you want
  const correctPassword = "inthearena";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    // Simulate a brief loading time for better UX
    setTimeout(() => {
      // Get the stored password or use default
      const storedPassword = localStorage.getItem("anniversary-password") || correctPassword;
      
      if (password === storedPassword) {
        onAccessGranted();
      } else {
        setIsError(true);
        setPassword("");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-6">
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl border border-rose-gold/20"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-16 h-16 text-rose-gold mx-auto mb-4" fill="currentColor" />
          </motion.div>
          
          <h1 className="font-playfair text-3xl font-bold text-deep-rose mb-2">
            Shaina and Ryan's Private Space
          </h1>
          <p className="text-gray-600">
            Enter the password to access our love story
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`pl-12 pr-12 py-3 text-lg border-2 transition-colors ${
                isError 
                  ? "border-red-300 focus:border-red-500" 
                  : "border-rose-gold/30 focus:border-rose-gold"
              }`}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {isError && (
            <motion.p
              className="text-red-500 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Incorrect password. Try again loser! 💕
            </motion.p>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-deep-rose to-rose-gold text-white py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading || !password.trim()}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-5 h-5" />
              </motion.div>
            ) : (
              "Enter Our World"
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Made for the love of my life 💖
          </p>
        </div>
      </motion.div>

      {/* Floating hearts in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Heart className="w-6 h-6" fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}