import { useState } from "react";
import { Heart, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-rose-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="font-playfair font-semibold text-2xl text-deep-rose flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-6 h-6 text-rose-gold mr-2" fill="currentColor" />
            Our Story
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-deep-rose transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("letter")}
              className="text-gray-700 hover:text-deep-rose transition-colors"
            >
              Love Letter
            </button>
            <button 
              onClick={() => scrollToSection("memories")}
              className="text-gray-700 hover:text-deep-rose transition-colors"
            >
              Memories
            </button>
            <button 
              onClick={() => scrollToSection("timeline")}
              className="text-gray-700 hover:text-deep-rose transition-colors"
            >
              Our Journey
            </button>
          </div>
          
          <button 
            className="md:hidden text-deep-rose"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => scrollToSection("hero")}
              className="block text-gray-700 hover:text-deep-rose transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("letter")}
              className="block text-gray-700 hover:text-deep-rose transition-colors"
            >
              Love Letter
            </button>
            <button 
              onClick={() => scrollToSection("memories")}
              className="block text-gray-700 hover:text-deep-rose transition-colors"
            >
              Memories
            </button>
            <button 
              onClick={() => scrollToSection("timeline")}
              className="block text-gray-700 hover:text-deep-rose transition-colors"
            >
              Our Journey
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
