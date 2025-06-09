import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LoveLetterSection() {
  return (
    <section id="letter" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-rose mb-4">
            A Letter From My Heart
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-gold to-warm-purple mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="love-letter-bg rounded-3xl p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Vintage letter decoration */}
          <div className="absolute top-6 right-6 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150" 
              alt="Vintage love letter" 
              className="w-32 h-24 object-cover rounded-lg" 
            />
          </div>
          
          <div className="font-playfair text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
            <motion.p 
              className="text-deep-rose font-semibold text-2xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My Dearest Love,
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Three months ago, you walked into my life and turned everything upside down—in the most beautiful way possible. I never knew that 90 days could hold so much joy, laughter, and pure happiness until I started counting them with you.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Every morning I wake up with a smile because I know I get to talk to you. Every sunset reminds me of the golden glow in your eyes when you laugh at my terrible jokes. You've made me believe in love songs, in fairy tales, and in the magic that happens when two hearts decide to dance together.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              I love the way you scrunch your nose when you're thinking, how you always steal my hoodies (and look infinitely better in them), and how you make even the simplest moments feel like adventures. You've taught me that love isn't just a feeling—it's a choice we make every day, and I choose you, always.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              These three months have been the beginning of something extraordinary. I can't wait to create a million more memories with you, to laugh until our stomachs hurt, to hold your hand through every season of life.
            </motion.p>
            
            <motion.p 
              className="text-deep-rose font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Thank you for being my person, my safe place, my greatest adventure.
            </motion.p>
            
            <motion.p 
              className="text-right font-semibold text-deep-rose text-2xl mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              All my love,<br />
              <span className="font-playfair text-3xl">Your devoted heart ❤️</span>
            </motion.p>
          </div>
          
          {/* Decorative hearts */}
          <div className="absolute -top-4 -left-4 text-rose-gold text-3xl opacity-60">
            <Heart fill="currentColor" />
          </div>
          <div className="absolute -bottom-4 -right-4 text-warm-purple text-2xl opacity-60">
            <Heart fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
