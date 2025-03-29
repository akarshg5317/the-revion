
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Retailer',
    description: 'Boosted online sales by 150% through website optimization and digital marketing strategies.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&q=80&w=800',
    tag: 'Digital Presence'
  },
  {
    title: 'Operational Efficiency',
    client: 'Manufacturing Company',
    description: 'Automated manual processes, reducing operational costs by 35% and increasing productivity.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80&w=800',
    tag: 'Business Automation'
  },
  {
    title: 'Data-Driven Decision Making',
    client: 'Healthcare Provider',
    description: 'Implemented BI dashboards that improved resource allocation and patient outcomes.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&q=80&w=800',
    tag: 'Data Analytics'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-auto text-gray-50 opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M46.5,-59.5C58.9,-45.7,67.2,-30.2,71.8,-13C76.5,4.2,77.5,22.2,69.8,35.7C62.2,49.1,45.8,58,29,64.4C12.2,70.8,-5,74.6,-23.1,72.3C-41.2,70,-60.3,61.5,-70.1,46.8C-79.8,32.1,-80.2,11.1,-76,-7.7C-71.8,-26.5,-63,-43.1,-49.7,-56.9C-36.4,-70.6,-18.2,-81.5,-0.6,-80.7C16.9,-80,33.8,-67.6,46.5,-59.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Impact on Businesses</h2>
          <p className="text-gray-600">
            We've helped numerous businesses transform their operations, increase revenue, 
            and achieve sustainable growth through technology.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20">
                  {study.tag}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-sm font-medium text-purple-600 mb-3">{study.client}</p>
                <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                
                <Link to="/case-studies" className="inline-flex items-center text-primary font-medium">
                  Read case study 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link to="/case-studies">
            <Button size="lg" className="btn-gradient">
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
