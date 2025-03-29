
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-revion-900 opacity-95"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Transform Your Business Together
              </h2>
              <p className="text-white/80 mb-8">
                Ready to leverage technology for growth? Partner with TheRevion to transform your 
                business operations and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                  Book a Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn How We Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-white font-semibold text-xl mb-6">Request Information</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white">
                    <option value="" className="text-gray-800">Select Service</option>
                    <option value="digital" className="text-gray-800">Digital Presence & Branding</option>
                    <option value="automation" className="text-gray-800">Business Automation</option>
                    <option value="data" className="text-gray-800">Data-Driven Decision Making</option>
                    <option value="security" className="text-gray-800">Cybersecurity & Infrastructure</option>
                    <option value="ai" className="text-gray-800">AI & Emerging Tech</option>
                    <option value="support" className="text-gray-800">IT Support & Managed Services</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-white text-purple-900 hover:bg-gray-100">
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
