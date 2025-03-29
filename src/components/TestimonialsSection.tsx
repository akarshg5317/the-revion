
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "TheRevion transformed our business operations completely. Their custom software solution eliminated manual processes and increased our efficiency by 40%.",
    author: "Sarah Johnson",
    position: "CEO, TechSolutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&w=200"
  },
  {
    id: 2,
    quote: "Working with TheRevion on our e-commerce platform was exceptional. They delivered a beautiful, user-friendly store that's increased our conversion rate by 35%.",
    author: "Michael Chen",
    position: "Founder, StyleFusion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=200"
  },
  {
    id: 3,
    quote: "The data analytics dashboard TheRevion built has revolutionized our decision-making process. We now have real-time insights that have helped us cut costs by 25%.",
    author: "Amanda Rodriguez",
    position: "COO, HealthPlus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80&w=200"
  }
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  const testimonialIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection: number) => {
    setAutoplay(false);
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [page, autoplay]);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it — hear from some of our satisfied clients 
            about their experience working with TheRevion.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-6 left-0 text-purple-200 opacity-50 z-0">
            <Quote size={80} />
          </div>
          
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full flex flex-col items-center justify-center"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center max-w-3xl">
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200 mr-4">
                      <img 
                        src={testimonials[testimonialIndex].image} 
                        alt={testimonials[testimonialIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">
                        {testimonials[testimonialIndex].author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[testimonialIndex].position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => {
                    setAutoplay(false);
                    setPage([i, i > testimonialIndex ? 1 : -1]);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    i === testimonialIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
