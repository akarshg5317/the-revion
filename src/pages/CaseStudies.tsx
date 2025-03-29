
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MessageCircle, BarChart2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Retailer',
    industry: 'Retail & E-commerce',
    problem: 'Struggling with low conversion rates and poor website performance.',
    solution: 'Implemented a redesigned website with optimized UX, mobile responsiveness, and SEO enhancements.',
    results: [
      '150% increase in online sales',
      '65% improvement in page load speed',
      '42% higher conversion rate',
      '86% increase in mobile transactions'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&q=80&w=800',
    tag: 'Digital Presence'
  },
  {
    title: 'Operational Efficiency',
    client: 'Manufacturing Company',
    industry: 'Manufacturing',
    problem: 'Manual processes causing delays, errors, and increased operational costs.',
    solution: 'Developed custom software for inventory management, order processing, and production planning.',
    results: [
      '35% reduction in operational costs',
      '48% increase in productivity',
      '72% decrease in processing errors',
      '29% improvement in delivery times'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80&w=800',
    tag: 'Business Automation'
  },
  {
    title: 'Data-Driven Decision Making',
    client: 'Healthcare Provider',
    industry: 'Healthcare',
    problem: 'Inability to utilize vast amounts of patient and operational data effectively.',
    solution: 'Implemented BI dashboards and analytics tools with customized reporting capabilities.',
    results: [
      'Improved resource allocation efficiency by 40%',
      'Enhanced patient outcomes tracking with real-time metrics',
      '25% reduction in average patient wait times',
      'Identified key areas for cost savings of $1.2M annually'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&q=80&w=800',
    tag: 'Data Analytics'
  },
  {
    title: 'Cybersecurity Enhancement',
    client: 'Financial Services Firm',
    industry: 'Finance',
    problem: 'Vulnerable systems and lack of comprehensive security protocols.',
    solution: 'Conducted security audit and implemented multi-layered security approach with employee training.',
    results: [
      '98% reduction in security incidents',
      'Achieved regulatory compliance with industry standards',
      'Enhanced data protection with end-to-end encryption',
      'Improved employee security awareness by 87%'
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&q=80&w=800',
    tag: 'Cybersecurity'
  },
  {
    title: 'AI-Powered Customer Service',
    client: 'Telecommunications Provider',
    industry: 'Telecommunications',
    problem: 'Overwhelmed customer service team and long resolution times.',
    solution: 'Designed and deployed AI chatbot with natural language processing capabilities.',
    results: [
      '67% of customer inquiries resolved without human intervention',
      '82% reduction in average response time',
      '45% decrease in operational costs',
      '92% positive customer feedback on support experience'
    ],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&q=80&w=800',
    tag: 'AI Integration'
  },
  {
    title: 'Cloud Migration & Infrastructure',
    client: 'Educational Institution',
    industry: 'Education',
    problem: 'Outdated on-premise infrastructure causing scalability and accessibility issues.',
    solution: 'Planned and executed complete cloud migration with optimized architecture.',
    results: [
      '52% reduction in IT infrastructure costs',
      'Improved system uptime from 95% to 99.9%',
      'Enhanced remote accessibility for staff and students',
      'Scalable architecture supporting 3x growth in users'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&q=80&w=800',
    tag: 'IT Infrastructure'
  }
];

const testimonials = [
  {
    quote: "TheRevion transformed our business operations completely. Their technical expertise and strategic approach helped us reduce costs while improving our customer experience dramatically.",
    author: "Sarah Johnson",
    position: "COO, Fashion Retailer",
    image: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
    quote: "Working with TheRevion has been a game-changer for our manufacturing processes. Their automation solutions have increased our productivity beyond what we thought possible.",
    author: "Michael Chen",
    position: "Operations Director, Manufacturing Co.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The data analytics platform implemented by TheRevion has revolutionized how we make decisions. We now have insights we never had access to before, improving both patient care and our bottom line.",
    author: "Dr. Emma Rodriguez",
    position: "CTO, Healthcare Provider",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
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

const CaseStudies = () => {
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
                  Case Studies
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600"
                >
                  Success stories of businesses transformed through our solutions
                </motion.p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
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
                      <div className="absolute bottom-4 left-4 text-white z-20">
                        <p className="text-sm font-medium">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-sm font-medium text-purple-600 mb-3">{study.client}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Challenge:</h4>
                        <p className="text-sm text-gray-600">{study.problem}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Results:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {study.results.slice(0, 2).map((result, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <BarChart2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="inline-flex items-center text-primary font-medium mt-2">
                        Read full case study 
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Testimonials Section */}
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
                  Client Testimonials
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  Hear from our clients about their experience working with us
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md relative"
                  >
                    <div className="absolute top-6 right-6 text-purple-200">
                      <MessageCircle size={48} />
                    </div>
                    <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
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
                  Want to Achieve Similar Results?
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
                    Get a Free Consultation
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default CaseStudies;
