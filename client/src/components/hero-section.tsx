import { motion } from "framer-motion";
import { Heart, Mail, Image, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Romantic couple silhouette" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-24 h-24 text-rose-gold mx-auto mb-8" fill="currentColor" />
          </motion.div>
          
          <motion.h1 
            className="font-playfair text-5xl md:text-7xl font-bold text-deep-rose mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Three Months of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-gold to-warm-purple">
              Pure Love
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A celebration of our beautiful journey together
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button 
              onClick={() => scrollToSection("letter")}
              className="bg-gradient-to-r from-deep-rose to-rose-gold text-white px-8 py-4 rounded-full font-medium shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Read My Heart
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection("memories")}
              className="bg-white/80 backdrop-blur text-deep-rose px-8 py-4 rounded-full font-medium shadow-lg border border-rose-gold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image className="w-5 h-5" />
              Our Memories
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-deep-rose"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
