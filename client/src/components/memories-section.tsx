import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, MapPin, List, Camera, Moon, Zap } from "lucide-react";

const memories = [
  {
    icon: Camera,
    title: "My Cutie",
    description: "All the adorable moments that make my heart melt",
    color: "bg-rose-gold",
    route: "/memories/cutie"
  },
  {
    icon: Moon,
    title: "Sleeping Beauty",
    description: "Peaceful moments and cozy times together",
    color: "bg-warm-purple",
    route: "/memories/sleeping-beauty"
  },
  {
    icon: Zap,
    title: "Power Couple",
    description: "When we're unstoppable together",
    color: "bg-deep-rose",
    route: "/memories/power-couple"
  },
  {
    icon: Heart,
    title: "The Spicy Love Atlas",
    description: "Our adventurous love map checklist",
    color: "bg-gradient-to-br from-red-400 to-pink-500",
    route: "/memories/spicy-atlas"
  },
  {
    icon: MapPin,
    title: "Traveling",
    description: "All the places we've explored together",
    color: "bg-gradient-to-br from-blue-400 to-purple-500",
    route: "/memories/traveling"
  },
  {
    icon: List,
    title: "Bucket List",
    description: "Dreams and adventures we want to share",
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    route: "/memories/bucket-list"
  }
];

export default function MemoriesSection() {
  return (
    <section id="memories" className="py-20 px-6 bg-gradient-to-br from-soft-pink to-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-rose mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-gray-700 mb-8">Every moment with you is a treasure</p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-gold to-warm-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            return (
              <Link key={index} href={memory.route}>
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg photo-hover cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`${memory.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <Icon className="w-16 h-16 text-white relative z-10" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-deep-rose mb-2">
                      {memory.title}
                    </h3>
                    <p className="text-gray-600">{memory.description}</p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
