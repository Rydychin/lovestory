import { motion } from "framer-motion";
import { ArrowLeft, Zap, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const powerCouplePhotos = [
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Conquering challenges together",
    date: "Team unstoppable"
  },
  {
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Supporting each other's dreams",
    date: "Power partnership"
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Taking on the world together",
    date: "Dynamic duo"
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Celebrating our victories",
    date: "Success shared"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Motivating each other daily",
    date: "Strength in unity"
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    caption: "Making things happen together",
    date: "Unstoppable force"
  }
];

export default function PowerCouple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
            <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-orange-600 mb-4">
              Power Couple
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              When we're unstoppable together
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerCouplePhotos.map((photo, index) => (
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
                <p className="font-playfair text-lg font-semibold text-orange-600 mb-2">
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
            <Heart className="w-12 h-12 text-orange-400 mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-orange-600 mb-4">
              Together We're Invincible
            </h3>
            <p className="text-gray-600 text-lg">
              When we team up, there's nothing we can't accomplish. 
              You bring out the best in me, and together we're an unstoppable force.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}