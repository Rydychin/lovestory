import { motion } from "framer-motion";
import { ArrowLeft, Zap, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const powerCouplePhotos = [
  {
    src: "/photos/power-couple/img13.jpeg",
    caption: "Conquering challenges together",
    date: "Team unstoppable"
  },
  {
    src: "/photos/power-couple/img14.jpeg",
    caption: "Supporting each other's dreams",
    date: "Power partnership"
  },
  {
    src: "/photos/power-couple/img15.jpeg",
    caption: "Taking on the world together",
    date: "Dynamic duo"
  },
  {
    src: "/photos/power-couple/img16.jpeg",
    caption: "Celebrating our victories",
    date: "Success shared"
  },
  {
    src: "/photos/power-couple/img17.jpeg",
    caption: "Motivating each other daily",
    date: "Strength in unity"
  },
  {
    src: "/photos/power-couple/img18.jpeg",
    caption: "Making things happen together",
    date: "Unstoppable force"
  }
];

export default function PowerCouple() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  style={{
                    objectFit: 'cover',
                    objectPosition: index === 0 ? 'center 50%' : 
                                  index === 1 ? 'center 35%' : 
                                  index === 2 ? 'center 50%' : 
                                  index === 3 ? 'center 50%' : 
                                  index === 4 ? 'center 70%' : 
                                  index === 5 ? 'center 30%' : 'center',
                    transform: index === 0 ? 'scale(1)' : 
                             index === 1 ? 'scale(1)' : 
                             index === 2 ? 'scale(1)' : 
                             index === 3 ? 'scale(1)' : 
                             index === 4 ? 'scale(1)' : 
                             index === 5 ? 'scale(1)' : 'none'
                  }}
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