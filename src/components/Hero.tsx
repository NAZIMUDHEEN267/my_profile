import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              NAZIMUDHEEN TI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Full-Stack Web & App Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, functional, and user-centric digital experiences from concept to deployment. I specialize in building scalable web applications and intuitive mobile interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
                href="https://github.com/NAZIMUDHEEN267/my_profile/blob/main/src/assets/resume.pdf"
                download="Nazimudheenti_Resume.pdf"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                📄 Resume
              </motion.a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-lg transition-all hover:bg-white/5"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden md:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;