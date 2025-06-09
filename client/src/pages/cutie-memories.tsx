import { motion } from "framer-motion";
import { ArrowLeft, Camera, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// These are placeholder images - replace with your actual photos
const cutiePhotos = [
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Your adorable sleepy face in the morning",
    date: "Every morning"
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "When you scrunch your nose thinking",
    date: "Daily cuteness"
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Your beautiful smile that lights up my world",
    date: "Always"
  },
  {
    src: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Being silly together",
    date: "Random Tuesday"
  },
  {
    src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Your cute laugh when I tell bad jokes",
    date: "Every day"
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "The way you look at me",
    date: "Heart melting moment"
  }
];

export default function CutieMemories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Camera className="w-16 h-16 text-rose-gold mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-deep-rose mb-4">
              My Cutie
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              All the adorable moments that make my heart melt
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cutiePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="font-playfair text-lg font-semibold text-deep-rose mb-2">
                  {photo.caption}
                </p>
                <p className="text-sm text-gray-500">{photo.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Heart className="w-12 h-12 text-rose-gold mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-deep-rose mb-4">
              You're My Daily Dose of Cute
            </h3>
            <p className="text-gray-600 text-lg">
              Every expression, every little gesture, every moment with you is absolutely adorable. 
              You have this incredible way of being cute without even trying.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}