import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Lock, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface SettingsModalProps {
  onLogout: () => void;
}

export default function SettingsModal({ onLogout }: SettingsModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    
    // Get current stored password (in a real app, this would be handled server-side)
    const storedPassword = localStorage.getItem("anniversary-password") || "ourlove2024";
    
    if (currentPassword !== storedPassword) {
      setMessage("Current password is incorrect");
      setMessageType("error");
      return;
    }
    
    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters");
      setMessageType("error");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setMessage("New passwords don't match");
      setMessageType("error");
      return;
    }
    
    // Save new password
    localStorage.setItem("anniversary-password", newPassword);
    setMessage("Password changed successfully!");
    setMessageType("success");
    
    // Clear form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setIsOpen(false);
      setMessage("");
      setMessageType("");
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("anniversary-access");
    onLogout();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-700 hover:text-deep-rose transition-colors"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-deep-rose flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Settings
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Change Password Section */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Change Password
            </h3>
            
            <form onSubmit={handleChangePassword} className="space-y-4">
              <Input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="border-rose-gold/30 focus:border-rose-gold"
              />
              <Input
                type="password"
                placeholder="New password (min 6 characters)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-rose-gold/30 focus:border-rose-gold"
              />
              <Input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-rose-gold/30 focus:border-rose-gold"
              />
              
              {message && (
                <motion.p
                  className={`text-sm ${messageType === "success" ? "text-green-600" : "text-red-500"}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message}
                </motion.p>
              )}
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-deep-rose to-rose-gold text-white"
                disabled={!currentPassword || !newPassword || !confirmPassword}
              >
                Change Password
              </Button>
            </form>
          </div>
          
          {/* Logout Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Account Access
            </h3>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout & Lock Website
            </Button>
            
            <p className="text-xs text-gray-500 mt-2">
              This will require the password to be entered again to access the website.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}