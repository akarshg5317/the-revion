
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  ShoppingCart, 
  Search, 
  MessageSquare, 
  Code, 
  Users, 
  Bot, 
  Workflow, 
  GitBranch,
  Cloud,
  BarChart,
  Database,
  Monitor,
  Brain,
  LineChart,
  ShieldCheck,
  Network,
  Key,
  FileCheck,
  HardDrive,
  GraduationCap,
  Cpu,
  Speech,
  Glasses,
  Blocks,
  Headphones,
  LayoutGrid,
  Zap,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const serviceCategories = [
  {
    title: "Digital Presence & Branding",
    description: "Build and enhance your online identity",
    icon: <Globe className="h-8 w-8" />,
    color: "from-blue-500 to-purple-500",
    services: [
      { name: "Website Development & Optimization", icon: <Globe className="h-6 w-6" /> },
      { name: "UI/UX Design & Branding", icon: <Palette className="h-6 w-6" /> },
      { name: "E-commerce Development", icon: <ShoppingCart className="h-6 w-6" /> },
      { name: "SEO & Digital Marketing", icon: <Search className="h-6 w-6" /> },
      { name: "Social Media Management", icon: <MessageSquare className="h-6 w-6" /> }
    ]
  },
  {
    title: "Business Automation",
    description: "Streamline operations and boost efficiency",
    icon: <Code className="h-8 w-8" />,
    color: "from-teal-500 to-green-500",
    services: [
      { name: "Custom Software Development", icon: <Code className="h-6 w-6" /> },
      { name: "ERP & CRM Implementation", icon: <Users className="h-6 w-6" /> },
      { name: "AI-Powered Chatbots", icon: <Bot className="h-6 w-6" /> },
      { name: "Workflow Automation & RPA", icon: <Workflow className="h-6 w-6" /> },
      { name: "DevOps & CI/CD Implementation", icon: <GitBranch className="h-6 w-6" /> },
      { name: "Cloud Migration & Optimization", icon: <Cloud className="h-6 w-6" /> }
    ]
  },
  {
    title: "Data-Driven Decision Making",
    description: "Transform data into actionable insights",
    icon: <BarChart className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    services: [
      { name: "Business Intelligence & Analytics", icon: <BarChart className="h-6 w-6" /> },
      { name: "Data Engineering & ETL Solutions", icon: <Database className="h-6 w-6" /> },
      { name: "IoT Data Integration & Monitoring", icon: <Monitor className="h-6 w-6" /> },
      { name: "AI/ML Model Development", icon: <Brain className="h-6 w-6" /> },
      { name: "Data Warehousing & Visualization", icon: <LineChart className="h-6 w-6" /> }
    ]
  },
  {
    title: "Cybersecurity & IT Infrastructure",
    description: "Secure and optimize your tech environment",
    icon: <ShieldCheck className="h-8 w-8" />,
    color: "from-purple-500 to-indigo-500",
    services: [
      { name: "Cybersecurity Audits", icon: <ShieldCheck className="h-6 w-6" /> },
      { name: "Network & IT Infrastructure", icon: <Network className="h-6 w-6" /> },
      { name: "Identity & Access Management", icon: <Key className="h-6 w-6" /> },
      { name: "Cloud Security & Compliance", icon: <FileCheck className="h-6 w-6" /> },
      { name: "Disaster Recovery & Backup", icon: <HardDrive className="h-6 w-6" /> },
      { name: "Security Training for Employees", icon: <GraduationCap className="h-6 w-6" /> }
    ]
  },
  {
    title: "AI & Emerging Tech Integration",
    description: "Future-proof with cutting-edge technology",
    icon: <Cpu className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
    services: [
      { name: "AI-driven Business Automation", icon: <Cpu className="h-6 w-6" /> },
      { name: "LLM & Generative AI Solutions", icon: <Speech className="h-6 w-6" /> },
      { name: "AR & VR Solutions", icon: <Glasses className="h-6 w-6" /> },
      { name: "Blockchain & Smart Contracts", icon: <Blocks className="h-6 w-6" /> },
      { name: "Metaverse & Web3 Solutions", icon: <Blocks className="h-6 w-6" /> }
    ]
  },
  {
    title: "IT Support & Managed Services",
    description: "Reliable ongoing technical assistance",
    icon: <Headphones className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    services: [
      { name: "IT Helpdesk & Support Services", icon: <Headphones className="h-6 w-6" /> },
      { name: "SaaS Management", icon: <LayoutGrid className="h-6 w-6" /> },
      { name: "Tech Consultation & Strategy", icon: <Zap className="h-6 w-6" /> },
      { name: "End-to-End IT Outsourcing", icon: <Settings className="h-6 w-6" /> }
    ]
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
    transition: { duration: 0.5 }
  }
};

const ServiceCard = ({ category, index }: { category: any, index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} rounded-bl-3xl opacity-10`}></div>
      <div className={`bg-gradient-to-br ${category.color} text-white p-3 rounded-lg inline-block mb-4`}>
        {category.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      
      <ul className="space-y-2 mb-6">
        {category.services.slice(0, 3).map((service: any, idx: number) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <div className="text-primary">{service.icon}</div>
            <span>{service.name}</span>
          </motion.li>
        ))}
        {category.services.length > 3 && (
          <li className="text-sm text-gray-500 italic">+ {category.services.length - 3} more services</li>
        )}
      </ul>
      
      <Button variant="outline" size="sm" className="w-full">
        Learn More
      </Button>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Tech Solutions</h2>
          <p className="text-gray-600">
            From digital presence to AI integration, we provide end-to-end technology services 
            tailored to your business needs.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link to="/services">
            <Button size="lg" className="btn-gradient">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
