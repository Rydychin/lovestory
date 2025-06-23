import { motion } from "framer-motion";
import { ArrowLeft, Moon, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const sleepingPhotos = [
  {
    src: "/photos/sleeping/img7.jpeg",
    caption: "Sweet dreams together",
    date: "afternoon cuddles"
  },
  {
    src: "/photos/sleeping/img8.jpeg",
    caption: "Morning light on your face",
    date: "Early sunrise"
  },
  {
    src: "/photos/sleeping/img9.jpeg",
    caption: "Afternoon nap time",
    date: "Lazy weekends"
  },
  {
    src: "/photos/sleeping/img10.jpeg",
    caption: "Sleepy night time",
    date: "Cozy evenings"
  },
  {
    src: "/photos/sleeping/img11.jpeg",
    caption: "Peaceful slumber",
    date: "Sweet moments"
  },
  {
    src: "/photos/sleeping/img12.jpeg",
    caption: "Dreaming together",
    date: "Perfect nights"
  }
];

export default function SleepingBeauty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
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
            <Moon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              Sleeping Beauty
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Peaceful moments and cozy times together
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sleepingPhotos.map((photo, index) => (
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
                    objectPosition: index === 0 ? 'center 70%' : 
                                  index === 1 ? 'center 60%' : 
                                  index === 2 ? 'center 90%' : 
                                  index === 3 ? 'center 45%' : 
                                  index === 4 ? 'center 75%' : 
                                  index === 5 ? 'center 70%' : 'center',
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
                <p className="font-playfair text-lg font-semibold text-purple-600 mb-2">
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
            <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-purple-600 mb-4">
              My Peaceful Princess
            </h3>
            <p className="text-gray-600 text-lg">
              There's something magical about watching you sleep peacefully. 
              These quiet, cozy moments together are some of my most treasured memories.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}