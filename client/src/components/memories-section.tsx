import { motion } from "framer-motion";

const memories = [
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Our First Date",
    description: "The day everything began. Nervous smiles and endless conversation."
  },
  {
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Hand in Hand",
    description: "Finding comfort and strength in your touch."
  },
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Endless Laughter",
    description: "You make every day brighter with your beautiful smile."
  },
  {
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Adventures Together",
    description: "Every journey becomes magical when you're by my side."
  },
  {
    image: "https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Little Notes",
    description: "Sweet messages that make my heart skip a beat."
  },
  {
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    title: "Celebrating Us",
    description: "Every milestone deserves to be cherished forever."
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
          {memories.map((memory, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg photo-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="overflow-hidden">
                <motion.img 
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-deep-rose mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
