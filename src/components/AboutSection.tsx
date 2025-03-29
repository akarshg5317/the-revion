
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Trusted Expertise',
    description: 'With years of industry experience, we deliver solutions that work.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Fast Implementation',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Dedicated Support',
    description: 'Our team is always available to help with any issues that arise.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Future-Proof Solutions',
    description: 'We build with scalability and future technologies in mind.',
  },
];

const stats = [
  { value: '100+', label: 'Clients Served' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '96%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Industry Experts' },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-1/3 h-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-100">
          <path fill="currentColor" d="M39.9,-65.7C51.5,-58.4,61,-47.6,69.5,-35.1C78,-22.6,85.4,-8.3,82.9,4.3C80.4,16.9,68,27.8,57.4,39.9C46.9,52,38.2,65.4,26.2,70.9C14.1,76.4,-1.4,74.1,-16.9,70.4C-32.4,66.8,-47.9,61.9,-58.9,51.4C-69.9,41,-76.4,24.9,-77.3,8.3C-78.2,-8.2,-73.6,-25.3,-64.4,-38.9C-55.2,-52.5,-41.5,-62.7,-27.8,-68.6C-14.1,-74.4,-0.3,-76.1,12,-73.4C24.3,-70.8,28.3,-73,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">We're More Than Just a Tech Provider</h2>
            <p className="text-gray-600 mb-6">
              TheRevion serves as your dedicated in-house tech team, delivering tailored solutions that 
              align with your business goals. We're committed to your success and provide ongoing 
              support beyond project completion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-revion-500" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-bold text-lg mb-3">Our Partners & Certifications</h3>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="bg-white p-4 rounded-lg flex items-center justify-center"
                  >
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
