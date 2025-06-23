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
          
          
          <div className="font-playfair text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
            <motion.p 
              className="text-deep-rose font-semibold text-2xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My one and only,
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Happy 3 months ❤️
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              It feels both surreal and so natural that we've already spent three months together. Surreal because time has flown and I still remember how nervous and excited I was when things first began. And yet, it feels so natural because being with you feels like coming home. There's a kind of comfort in us that I've never experienced before like we just fit.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Every moment we've shared has added something beautiful to my life. Whether we're out making memories on little trips, cuddling during our slow days, or just laughing over something dumb on FaceTime, it all means something to me. Our cuddles, the way you look at me, how we fall asleep side by side,it's all become part of the rhythm of my days, and I wouldn't trade that for anything.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              You've shown me what it feels like to be loved in a way that's gentle, steady, and real. And I hope I've made you feel that too, even if I know I don't always say the right things. I know I struggle sometimes to express how I feel in the moment, especially when I get overwhelmed. But please know this: my love for you is constant, and so is my commitment to learning how to love you better with more patience, more honesty, and more intention.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              You've taught me how special it is to be fully present with someone to listen, to care, to grow together. And ever since we've been together, I've realized how much I want to keep growing with you. I look forward to every new chapter,more cuddles, more late night talks, more silly moments and serious ones. More of us.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              Thank you for letting me into your heart and into your world. You mean so much to me baby. I love you in a way that feels peaceful, passionate, and lasting.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
            >
              Here's to everything we've shared so far, and everything we've yet to discover.
            </motion.p>
            
            <motion.p 
              className="text-right font-semibold text-deep-rose text-2xl mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              viewport={{ once: true }}
            >
              Yours truly,<br />
              <span className="font-playfair text-3xl">Rydy</span>
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
