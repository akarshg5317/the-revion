
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ServiceDetailModal from '@/components/ServiceDetailModal';

const serviceCategories = [
  {
    title: "Digital Presence & Branding",
    description: "Establish and enhance your online presence with professional websites, branding, and digital marketing.",
    icon: "🌐",
    services: [
      "Website Development & Optimization",
      "UI/UX Design & Branding",
      "E-commerce Development",
      "SEO & Digital Marketing",
      "Social Media Management & Content Creation"
    ]
  },
  {
    title: "Business Automation & Operational Efficiency",
    description: "Streamline operations, reduce manual work, and boost productivity with smart automation solutions.",
    icon: "⚙️",
    services: [
      "Custom Software Development",
      "ERP & CRM Implementation",
      "AI-Powered Chatbots & Virtual Assistants",
      "Workflow Automation & RPA",
      "DevOps & CI/CD Pipeline Implementation",
      "Cloud Migration & Optimization"
    ]
  },
  {
    title: "Data-Driven Decision Making",
    description: "Convert raw data into actionable insights for better strategic business decisions.",
    icon: "📊",
    services: [
      "Business Intelligence & Analytics",
      "Data Engineering & ETL Solutions",
      "IoT Data Integration & Monitoring",
      "AI/ML Model Development & Deployment",
      "Data Warehousing & Visualization Dashboards"
    ]
  },
  {
    title: "Cybersecurity & IT Infrastructure",
    description: "Protect your business from cyber threats and build scalable, secure IT environments.",
    icon: "🔒",
    services: [
      "Cybersecurity Audits & Penetration Testing",
      "Network & IT Infrastructure Setup",
      "Identity & Access Management (IAM)",
      "Cloud Security & Compliance",
      "Disaster Recovery & Backup Solutions",
      "Training Programme for Employees"
    ]
  },
  {
    title: "AI & Emerging Tech Integration",
    description: "Future-proof your business with cutting-edge technologies and AI-driven solutions.",
    icon: "🤖",
    services: [
      "AI-driven Business Automation",
      "LLM & Generative AI Solutions",
      "Augmented & Virtual Reality (AR/VR) Solutions",
      "Blockchain & Smart Contracts Development",
      "Metaverse & Web3 Solutions"
    ]
  },
  {
    title: "IT Support & Managed Services",
    description: "Get reliable ongoing IT support and expert technical guidance for your business.",
    icon: "🛠️",
    services: [
      "IT Helpdesk & Support Services",
      "SaaS Management & Third-Party Integrations",
      "Tech Consultation & Strategy Advisory",
      "End-to-End IT Outsourcing"
    ]
  }
];

const whyChooseUsPoints = [
  {
    title: "Technical Expertise",
    description: "Our team of experts brings years of experience across various technologies and industries."
  },
  {
    title: "Custom Solutions",
    description: "We develop tailored solutions that address your specific business challenges."
  },
  {
    title: "Scalable Approach",
    description: "Our solutions grow with your business, providing long-term value and adaptability."
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous technical support and strategic guidance beyond project completion."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageTransition>
        <main>
          {/* Header Banner */}
          <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  Our Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600"
                >
                  Comprehensive technology solutions tailored to your business needs
                </motion.p>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      
                      <div className="mt-6 space-y-3">
                        {category.services.slice(0, 3).map((service, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                        {category.services.length > 3 && (
                          <div className="text-sm text-purple-600 mt-2">
                            +{category.services.length - 3} more services
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6">
                        <button 
                          onClick={() => openServiceModal(category)}
                          className="inline-flex items-center text-primary font-medium"
                        >
                          Learn more 
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Why Work With Us?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  TheRevion serves as your dedicated tech partner, delivering solutions that drive real business growth
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUsPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Need a Tailored Solution?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl mb-8"
                >
                  Let's discuss how we can help transform your business with technology
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Request a Free Consultation
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={isModalOpen}
        onClose={closeServiceModal}
        service={selectedService}
      />
      
      <Footer />
    </div>
  );
};

export default Services;
