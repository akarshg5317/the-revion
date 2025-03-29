
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HomePage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeVariants}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Navbar />
      <PageTransition>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CtaSection />
      </PageTransition>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
