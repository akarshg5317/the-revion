
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
              style={{
                background: i % 2 === 0 ? 'linear-gradient(180deg, #7937ed 0%, #0d8ddb 100%)' : 'linear-gradient(180deg, #0d8ddb 0%, #7937ed 100%)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
              }}
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm md:text-base font-semibold text-purple-600 uppercase tracking-wider"
            >
              Innovative Solutions for Modern Businesses
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-gradient leading-tight"
            >
              Empowering Growth Through <br className="hidden md:block" />
              Technology Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl"
            >
              TheRevion acts as your in-house tech team, providing tailored solutions, 
              strategic support, and continuous innovation to streamline operations 
              and enhance efficiency.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="btn-gradient">
                Book a Free Consultation
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                Explore Our Services
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-revion-500/20 rounded-2xl animate-blob"
                style={{ filter: 'blur(30px)' }}
              />
              <div className="relative glass-card rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-revion-500/10" />
                <div className="p-8 flex flex-col items-center justify-center h-full">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-revion-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
                    R
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {['Web', 'Data', 'AI', 'Apps', 'Cloud', 'DevOps', 'UI/UX', 'IoT', 'Secure'].map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                        className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium text-center"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
