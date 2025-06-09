import { motion } from "framer-motion";
import { Heart, Star, Crown } from "lucide-react";

const timelineItems = [
  {
    date: "March 8th",
    title: "Made It Official",
    icon: Heart,
    color: "bg-rose-gold",
    description: "The day we became official and started our beautiful journey together",
    side: "left"
  },
  {
    date: "Month 1",
    title: "First Month Magic",
    icon: Star,
    color: "bg-warm-purple",
    description: "First sparks, nervous butterflies, and the beginning of something magical",
    side: "right"
  },
  {
    date: "Month 2",
    title: "Growing Closer",
    icon: Star,
    color: "bg-warm-purple",
    description: "Growing closer, sharing dreams, and falling deeper in love",
    side: "left"
  },
  {
    date: "Month 3",
    title: "Three Month Anniversary",
    icon: Crown,
    color: "bg-deep-rose",
    description: "Celebrating our love and looking forward to forever together",
    side: "right"
  }
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-6 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-rose mb-4">
            Our Love Timeline
          </h2>
          <p className="text-xl text-gray-700">Three months of beautiful milestones</p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-gold to-warm-purple mx-auto mt-4"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-gold to-warm-purple"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-playfair text-2xl font-semibold text-deep-rose mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 mb-2">{item.date}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                      <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${item.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" fill="currentColor" />
                      </div>
                      <div className="w-1/2 pl-8">
                        {/* Empty space for balance */}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8">
                        {/* Empty space for balance */}
                      </div>
                      <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${item.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" fill="currentColor" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <h3 className="font-playfair text-2xl font-semibold text-deep-rose mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 mb-2">{item.date}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
