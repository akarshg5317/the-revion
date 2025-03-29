
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
                TheRevion
              </Link>
              <p className="text-gray-400 mb-6">
                Empowering small and medium businesses with cutting-edge technology to drive growth and scalability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </motion.div>
          </div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Digital Presence & Branding</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Business Automation</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Data-Driven Decision Making</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cybersecurity & IT Infrastructure</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI & Emerging Tech Integration</Link></li>
              </ul>
            </motion.div>
          </div>
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail size={18} className="mt-1 text-gray-400" />
                  <span>contact@therevion.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone size={18} className="mt-1 text-gray-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-1 text-gray-400" />
                  <span>123 Innovation Way, Tech Valley, CA 95123</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TheRevion. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
