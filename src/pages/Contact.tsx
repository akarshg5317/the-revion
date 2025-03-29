
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We primarily serve small and medium-sized businesses across various industries including retail, healthcare, manufacturing, professional services, and technology. Our solutions are tailored to fit the specific needs and budget constraints of SMBs."
  },
  {
    question: "How do your pricing models work?",
    answer: "We offer flexible pricing structures including project-based, monthly retainer, and pay-as-you-go models. After understanding your specific needs during our initial consultation, we provide transparent pricing proposals with no hidden costs."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on scope and complexity. Small website projects might take 2-4 weeks, while complex enterprise software implementations can take 3-6 months or more. During our consultation, we'll provide a detailed timeline for your specific project."
  },
  {
    question: "What support do you provide after project completion?",
    answer: "We offer comprehensive post-launch support including maintenance, updates, troubleshooting, and user training. We provide various support packages to ensure your technology solutions continue to function optimally and adapt to your evolving business needs."
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "We implement industry-leading security practices and adhere to relevant regulatory standards (GDPR, HIPAA, etc.). Our solutions incorporate strong encryption, secure authentication, regular security audits, and comprehensive data protection measures to safeguard your sensitive information."
  }
];

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email Us",
    value: "contact@therevion.com",
    link: "mailto:contact@therevion.com"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Visit Us",
    value: "123 Innovation Way, Tech Valley, CA 95123",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    businessSize: 'small'
  });
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        businessSize: 'small'
      });
    }, 1500);
  };

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
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
                  Contact Us
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600"
                >
                  Let's discuss how we can help transform your business
                </motion.p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="businessSize" className="block text-sm font-medium text-gray-700 mb-1">Business Size</label>
                      <select
                        id="businessSize"
                        name="businessSize"
                        value={formData.businessSize}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="small">Small (1-10 employees)</option>
                        <option value="medium">Medium (11-50 employees)</option>
                        <option value="large">Large (51-200 employees)</option>
                        <option value="enterprise">Enterprise (201+ employees)</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-gradient" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
                
                {/* Contact Info & Map */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 rounded-lg p-8 mb-8"
                  >
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.label}</h3>
                            <a 
                              href={item.link} 
                              className="text-purple-600 hover:underline"
                              target={item.label === "Visit Us" ? "_blank" : undefined}
                              rel={item.label === "Visit Us" ? "noopener noreferrer" : undefined}
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-50 rounded-lg p-8"
                  >
                    <div className="flex items-center space-x-2 mb-6">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                      <h2 className="text-2xl font-bold">Live Chat</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Need immediate assistance? Our support team is available via live chat during business hours.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Start Chat
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
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
                  Frequently Asked Questions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  Find answers to common questions about our services
                </motion.p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleQuestion(index)}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <span className={`transform transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${activeQuestion === index ? 'max-h-96 p-5' : 'max-h-0'}`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mt-12"
              >
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button>
                  Contact Our Support Team
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Contact;
