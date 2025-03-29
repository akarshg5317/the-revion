
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, CheckCircle, Award, Users, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Alex Morgan",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in tech leadership, Alex founded TheRevion to help SMBs leverage technology for growth.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Samantha Chen",
    position: "CTO",
    bio: "Samantha brings extensive expertise in cloud architecture, AI, and software development to lead our technical initiatives.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Rodriguez",
    position: "Director of Operations",
    bio: "David ensures smooth delivery of all client projects and manages our internal processes for maximum efficiency.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Emily Jackson",
    position: "Head of Client Success",
    bio: "Emily works closely with clients to understand their needs and ensure our solutions deliver measurable business value.",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const values = [
  {
    title: "Client-Focused",
    description: "We prioritize understanding our clients' unique challenges and delivering solutions that create real business value.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Innovation",
    description: "We continuously explore emerging technologies and methodologies to provide cutting-edge solutions.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Quality",
    description: "We maintain the highest standards in our work, focusing on reliability, security, and performance.",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Long-term Partnership",
    description: "We build lasting relationships, providing ongoing support and strategic guidance beyond project completion.",
    icon: <Clock className="h-6 w-6" />
  }
];

const certifications = [
  "ISO 27001 Certified",
  "GDPR Compliant",
  "AWS Advanced Consulting Partner",
  "Microsoft Gold Partner",
  "Google Cloud Partner"
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

const About = () => {
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
                  About Us
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-600"
                >
                  Learn about our mission, vision, and the team behind TheRevion
                </motion.p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    TheRevion's mission is to democratize technology access for small and medium businesses, 
                    empowering them with enterprise-grade solutions tailored to their specific needs and budgets. 
                    We believe that technological innovation should not be limited to large corporations with 
                    massive resources.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg">
                    By serving as your dedicated technology partner, we aim to bridge the technology gap, 
                    providing strategic guidance, implementation expertise, and ongoing support to help 
                    businesses thrive in an increasingly digital world.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&q=80&w=1000" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
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
                  Our Approach
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  We function as your in-house technology team, providing comprehensive support
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Understand",
                    description: "We begin by deeply understanding your business, challenges, and goals"
                  },
                  {
                    step: "2",
                    title: "Strategize",
                    description: "We develop a tailored technology roadmap aligned with your business objectives"
                  },
                  {
                    step: "3",
                    title: "Implement",
                    description: "Our experts build and deploy solutions with minimal disruption to your operations"
                  },
                  {
                    step: "4",
                    title: "Support",
                    description: "We provide ongoing maintenance, optimization, and strategic guidance"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md relative"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Our Values
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  The core principles that guide our work and relationships
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 bg-purple-100 p-3 rounded-lg text-purple-600">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet the Team */}
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
                  Meet Our Leadership
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-gray-600"
                >
                  The experts driving innovation and excellence at TheRevion
                </motion.p>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold mb-4"
                >
                  Our Certifications & Compliance
                </motion.h2>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-gray-50 px-6 py-3 rounded-full text-gray-700 font-medium border border-gray-200"
                  >
                    {cert}
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
                  Ready to Work With Us?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl mb-8"
                >
                  Let's start a conversation about how we can help your business grow
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                      Book a Free Consultation
                    </Button>
                  </Link>
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

export default About;
