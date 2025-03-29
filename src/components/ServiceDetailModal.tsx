
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
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: string;
    services: string[];
  } | null;
}

const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  if (!service) return null;
  
  // Sample detailed benefits and process for each service
  const benefits = [
    "Increased operational efficiency by up to 40%",
    "Reduced manual workload through automation",
    "Enhanced data security and compliance",
    "Improved customer satisfaction and engagement",
    "Better decision making through data insights",
    "Scalable solutions that grow with your business"
  ];

  const process = [
    { step: 1, title: "Discovery & Analysis", description: "We begin by understanding your business needs, challenges, and goals through in-depth consultations." },
    { step: 2, title: "Strategy Development", description: "Our team creates a tailored strategy and solution blueprint specific to your requirements." },
    { step: 3, title: "Implementation", description: "We implement the solution with regular check-ins and adjustments based on feedback." },
    { step: 4, title: "Testing & Optimization", description: "Rigorous testing ensures everything works perfectly before launch." },
    { step: 5, title: "Deployment & Training", description: "We deploy the solution and provide comprehensive training for your team." },
    { step: 6, title: "Ongoing Support", description: "Our relationship continues with regular maintenance and support to ensure long-term success." }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
        <div className="sticky top-0 z-10 bg-white border-b pt-6 px-6">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogHeader>
            <div className="text-4xl mb-4">{service.icon}</div>
            <DialogTitle className="text-3xl font-bold">{service.title}</DialogTitle>
            <DialogDescription className="text-lg">
              {service.description}
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <ScrollArea className="h-[calc(90vh-140px)] p-6">
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.services.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-gray-50">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-gray-50">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                {process.map((step) => (
                  <div key={step.step} className="flex border rounded-lg p-4 bg-white shadow-sm">
                    <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4">Why Choose TheRevion</h3>
              <p className="mb-4">
                Our team of experts brings years of experience in {service.title.toLowerCase()} to help your business
                achieve its goals. We focus on delivering tailored solutions that address your specific challenges
                and drive measurable results.
              </p>
              <p className="mb-6">
                With a client-centered approach, we ensure that our services align perfectly with your business
                objectives, providing ongoing support and strategic guidance throughout our partnership.
              </p>
              <Button className="w-full">
                Request a Free Consultation
              </Button>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
