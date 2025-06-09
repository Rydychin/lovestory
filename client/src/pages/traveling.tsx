import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Heart, Plane } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const travelDestinations = [
  {
    name: "Santa Monica, California",
    coordinates: [34.0195, -118.4912],
    description: "Beach walks and pier adventures",
    date: "Month 1",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    name: "Laguna Beach, California", 
    coordinates: [33.5427, -117.7854],
    description: "Romantic sunset dinners",
    date: "Month 2", 
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    name: "Disneyland, California",
    coordinates: [33.8121, -117.9190],
    description: "Magic and childhood dreams together",
    date: "Month 2",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    name: "Newport Beach, California",
    coordinates: [33.6189, -117.9298],
    description: "Luxury and relaxation by the ocean",
    date: "Month 3",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export default function Traveling() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
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
            <Plane className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Our Travel Adventures
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              All the places we've explored together around the world
            </p>
          </motion.div>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="font-playfair text-2xl font-bold text-blue-600 mb-6 text-center">
            Our Love Map
          </h2>
          
          {/* Simple SVG Map of California */}
          <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-8 h-96 overflow-hidden">
            <svg viewBox="0 0 400 600" className="w-full h-full">
              {/* California outline (simplified) */}
              <path
                d="M100 50 Q120 40 140 60 L160 80 Q180 100 200 140 L220 180 Q240 220 250 260 L260 300 Q250 340 240 380 L220 420 Q200 460 180 500 L160 540 Q140 580 120 590 L100 590 Q80 580 70 560 L60 520 Q50 480 60 440 L70 400 Q80 360 90 320 L100 280 Q90 240 95 200 L100 160 Q95 120 100 80 Z"
                fill="rgba(59, 130, 246, 0.2)"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="2"
              />
              
              {/* Destination markers */}
              {travelDestinations.map((destination, index) => (
                <g key={index}>
                  <circle
                    cx={120 + index * 30}
                    cy={200 + index * 60}
                    r="8"
                    fill="#ef4444"
                    className="animate-pulse"
                  />
                  <text
                    x={120 + index * 30}
                    y={220 + index * 60}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-blue-600"
                  >
                    {destination.name.split(',')[0]}
                  </text>
                </g>
              ))}
            </svg>
            
            <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Our Adventures</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {travelDestinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden h-48">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-blue-600">
                    {destination.name}
                  </h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {destination.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{destination.coordinates[0].toFixed(4)}, {destination.coordinates[1].toFixed(4)}</span>
                </div>
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
            <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-bold text-blue-600 mb-4">
              Every Journey Together
            </h3>
            <p className="text-gray-600 text-lg">
              From local adventures to distant dreams, every place becomes special when we explore it together. 
              Here's to many more stamps in our passport of love!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}