import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface Location {
  name: string;
  completed: boolean;
}

const initialLocations: Location[] = [
  { name: "Beach", completed: true },
  { name: "Hot Tub", completed: false },
  { name: "Pool", completed: false },
  { name: "Shower", completed: true },
  { name: "Dressing Room", completed: false },
  { name: "Kitchen", completed: false },
  { name: "Futon", completed: true },
  { name: "Bean Bag", completed: true },
  { name: "Car", completed: false },
  { name: "Airplane", completed: false },
  { name: "Hotel", completed: true },
  { name: "Park", completed: false },
  { name: "Rain", completed: false },
  { name: "Hiking Trail", completed: false },
  { name: "Restaurant", completed: false },
  { name: "Bathroom", completed: false },
  { name: "Elevator", completed: false },
  { name: "Library", completed: false },
  { name: "Lecture Hall", completed: false },
  { name: "Aldrich Park", completed: false },
  { name: "Balcony", completed: false },
  { name: "Shaina's House", completed: false },
  { name: "Ryan's House", completed: true },
  { name: "Desk", completed: false },
  { name: "IKEA", completed: false },
  { name: "Department Store", completed: false },
  { name: "Concert", completed: false },
  { name: "Movie", completed: false },
  { name: "Amusement Park", completed: false }
];

export default function SpicyAtlas() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("spicy-atlas-locations");
    if (saved) {
      setLocations(JSON.parse(saved));
    } else {
      setLocations(initialLocations);
    }
  }, []);

  const toggleLocation = (index: number) => {
    const newLocations = [...locations];
    newLocations[index].completed = !newLocations[index].completed;
    setLocations(newLocations);
    localStorage.setItem("spicy-atlas-locations", JSON.stringify(newLocations));
  };

  const completedCount = locations.filter(loc => loc.completed).length;
  const totalCount = locations.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
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
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" fill="currentColor" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-red-600 mb-4">
              The Spicy Love Atlas
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Our adventurous love map - places we've conquered together
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-700">Progress</span>
                <span className="text-2xl font-bold text-red-500">{completedCount}/{totalCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-gradient-to-r from-red-400 to-pink-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">{progressPercentage.toFixed(1)}% completed</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-4 rounded-xl shadow-md cursor-pointer transition-all duration-200 ${
                location.completed
                  ? "bg-gradient-to-br from-red-400 to-pink-500 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => toggleLocation(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                  location.completed
                    ? "border-white bg-white"
                    : "border-gray-300"
                }`}>
                  {location.completed && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ✓
                    </motion.div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className={`w-4 h-4 ${location.completed ? "text-white" : "text-gray-400"}`} />
                  <span className={`font-medium ${location.completed ? "text-white" : "text-gray-700"}`}>
                    {location.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Heart className="w-12 h-12 text-rose-gold mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-deep-rose mb-4">
              Every Adventure With You
            </h3>
            <p className="text-gray-600 text-lg">
              Each place we explore together becomes a special memory. 
              Here's to checking off every location on our spicy adventure list!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}