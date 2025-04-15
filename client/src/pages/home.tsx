import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ScrollLink from "@/components/scroll-link"; 
import {
  Brain,
  Cloud,
  ShieldCheck,
  Code,
} from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM } from "react-icons/fa";
import Particles from "@/components/particles";
import SolutionCard from "@/components/solution-card";
import IndustryCard from "@/components/industry-card";
import DemoModal from "@/components/demo-modal";
import LearnMoreModal from "@/components/learn-more-modal";
import { solutions, industries } from "@/data/content";
import { fadeInAnimation, pageTransition, floatAnimation } from "@/utils/animations";
import { scrollToTop } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [learnMoreModalOpen, setLearnMoreModalOpen] = useState(false);
  const { toast } = useToast();
  
  // Handle social media link clicks
  const handleSocialClick = (platform: string) => {
    toast({
      title: `${platform} clicked`,
      description: `This would normally navigate to NovaCore's ${platform} profile.`
    });
  };
  
  return (
    <motion.div
      className="pt-16"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
        <Particles count={75} />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-primary/10"
            animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-primary/5"
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              variants={fadeInAnimation}
            >
              <motion.span 
                className="text-white inline-block"
                whileHover={{ scale: 1.05, color: "#f0f0f0", transition: { duration: 0.2 } }}
              >
                Advanced Technology
              </motion.span>
              <br />
              <motion.span 
                className="text-primary inline-block"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(80, 250, 123, 0.7)", transition: { duration: 0.2 } }}
              >
                for Tomorrow's Solutions
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 mx-auto max-w-2xl text-xl text-gray-300"
              variants={fadeInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Transform your business with our cutting-edge tech solutions. From
              AI integration to custom software, we power your digital future.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
                  onClick={() => setDemoModalOpen(true)}
                >
                  Book a Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:border-primary hover:text-primary"
                  onClick={() => setLearnMoreModalOpen(true)}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-20 relative"
            variants={fadeInAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-[90%] h-[90%] rounded-full bg-primary/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Advanced technology visualization"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl mx-auto shadow-lg shadow-primary/20"
            />
            <div className="absolute inset-0 gradient-overlay rounded-xl"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <Brain className="text-primary mr-2 h-5 w-5" />
                  <span>AI & Machine Learning</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <Cloud className="text-primary mr-2 h-5 w-5" />
                  <span>Cloud Solutions</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1 }}
                >
                  <ShieldCheck className="text-primary mr-2 h-5 w-5" />
                  <span>Cybersecurity</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1.5 }}
                >
                  <Code className="text-primary mr-2 h-5 w-5" />
                  <span>Custom Development</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Solutions
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We provide end-to-end technology solutions designed to tackle your
              most complex business challenges.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.slice(0, 3).map((solution, index) => (
              <SolutionCard
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                link={solution.link}
                image={solution.image}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:border-primary hover:text-primary"
              asChild
            >
              <ScrollLink to="/solutions">View All Solutions</ScrollLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our tailored solutions address the unique challenges of various
              industries, driving innovation and growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((industry, index) => (
              <IndustryCard
                key={industry.id}
                title={industry.title}
                description={industry.description}
                image={industry.image}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:border-primary hover:text-primary"
              asChild
            >
              <ScrollLink to="/industries">Explore All Industries</ScrollLink>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-5"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="glass-effect rounded-xl p-8 md:p-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how NovaCore's technology solutions can help you
              overcome challenges, seize opportunities, and achieve your goals.
            </p>
            <Button
              size="lg"
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              asChild
            >
              <ScrollLink to="/contact">Get Started</ScrollLink>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.h2>
            <motion.div
              className="flex justify-center space-x-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleSocialClick('LinkedIn'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleSocialClick('Twitter'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleSocialClick('GitHub'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleSocialClick('Medium'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="Medium"
              >
                <FaMediumM size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
      <LearnMoreModal open={learnMoreModalOpen} onOpenChange={setLearnMoreModalOpen} />
    </motion.div>
  );
};

export default Home;
