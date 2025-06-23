import { motion } from "framer-motion";
import { ArrowLeft, Camera, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// These are placeholder images - replace with your actual photos
const cutiePhotos = [
  {
    src: "/photos/cutie/img1.jpeg",
    caption: "Your adorable sleepy face",
    date: "Every night"
  },
  {
    src: "/photos/cutie/img2.jpeg",
    caption: "When you scrunch your nose",
    date: "Daily cuteness"
  },
  {
    src: "/photos/cutie/img3.PNG",
    caption: "Your beautiful smile that lights up my world",
    date: "Always"
  },
  {
    src: "/photos/cutie/img4.jpeg",
    caption: "Being silly together",
    date: "Random photos"
  },
  {
    src: "/photos/cutie/img5.jpeg",
    caption: "Your cute laugh when I tell bad jokes",
    date: "Every day"
  },
  {
    src: "/photos/cutie/img6.jpeg",
    caption: "The way you look at me",
    date: "Heart melting moment"
  }
];

export default function CutieMemories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  style={{
                    objectFit: 'cover',
                    objectPosition: index === 1 ? 'center 75%' : index === 2 ? 'center 10%' : index === 3 ? 'center 50%' : index === 4 ? 'right 35%' : index === 5 ? 'center 40%' : 'center',
                    transform: index === 1 ? 'scale(1)' : index === 2 ? 'scale(1)' : index === 3 ? 'scale(1)' : index === 4 ? 'scale(1)' : index === 5 ? 'scale(1)' : 'none'
                  }}
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