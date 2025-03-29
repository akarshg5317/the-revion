
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, BarChart2, CheckCircle2, Clock, MessageSquare, Target, X } from 'lucide-react';

interface CaseStudyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    client: string;
    industry: string;
    problem: string;
    solution: string;
    results: string[];
    image: string;
    tag: string;
  } | null;
}

const CaseStudyDetailModal = ({ isOpen, onClose, caseStudy }: CaseStudyDetailModalProps) => {
  if (!caseStudy) return null;
  
  // Additional detailed information for the case study
  const approach = [
    "Conducted comprehensive analysis of existing systems and processes",
    "Identified key pain points and bottlenecks in current workflows",
    "Developed tailored solution based on client's specific requirements",
    "Implemented phased rollout approach to minimize business disruption",
    "Provided extensive training and documentation for client team"
  ];

  const timeline = [
    { phase: "Discovery", duration: "2 weeks", description: "In-depth analysis of business needs and challenges" },
    { phase: "Planning", duration: "3 weeks", description: "Solution design, architecture, and roadmap creation" },
    { phase: "Development", duration: "8 weeks", description: "Implementation of core functionality and integrations" },
    { phase: "Testing", duration: "2 weeks", description: "Comprehensive QA, security testing, and optimization" },
    { phase: "Deployment", duration: "1 week", description: "Phased rollout with continuous monitoring" },
    { phase: "Support", duration: "Ongoing", description: "Continuous improvements and technical support" }
  ];

  const testimonials = [
    { 
      text: "TheRevion transformed our business operations completely. Their technical expertise and strategic approach helped us reduce costs while improving our customer experience dramatically.", 
      author: "John Smith", 
      position: `CEO, ${caseStudy.client}`
    },
    { 
      text: "Working with TheRevion's team was a pleasure from start to finish. They understood our challenges and delivered a solution that exceeded our expectations.", 
      author: "Sarah Johnson", 
      position: `CTO, ${caseStudy.client}`
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
        <div className="sticky top-0 z-10 bg-white border-b">
          <div className="relative h-48 md:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20">
              {caseStudy.tag}
            </div>
            
            <DialogClose className="absolute right-4 top-4 rounded-sm bg-black/20 p-1 text-white opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            
            <div className="absolute bottom-4 left-4 text-white z-20">
              <DialogTitle className="text-2xl md:text-3xl font-bold mb-1">{caseStudy.title}</DialogTitle>
              <DialogDescription className="text-white/90 text-sm md:text-base">
                {caseStudy.client} · {caseStudy.industry}
              </DialogDescription>
            </div>
          </div>
        </div>
        
        <ScrollArea className="h-[calc(90vh-256px)] md:h-[calc(90vh-316px)]">
          <div className="p-6 space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary" />
                Challenge
              </h3>
              <p className="text-gray-700">
                {caseStudy.problem}
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                Solution
              </h3>
              <p className="text-gray-700 mb-6">
                {caseStudy.solution}
              </p>
              
              <h4 className="font-semibold mb-3">Our Approach:</h4>
              <ul className="space-y-2 mb-4">
                {approach.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Project Timeline
              </h3>
              <div className="space-y-4">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex border-l-2 border-primary pl-4 pb-4 relative">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold">{phase.phase}</h4>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-gray-50">
                    <BarChart2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Client Testimonials
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <blockquote className="text-gray-700 italic mb-3">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Need similar results for your business?</h3>
              <p className="mb-6">
                Our team can help you achieve similar transformative results for your business.
                Contact us today to discover how we can address your specific challenges.
              </p>
              <Button size="lg" className="w-full">
                Request a Free Consultation
              </Button>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDetailModal;
