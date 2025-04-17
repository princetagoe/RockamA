import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ScrollLink from "@/components/scroll-link"; 
import {
  BarChart3,
  Database,
  ShieldCheck,
  LineChart,
  ArrowRight,
  Coffee,
} from "lucide-react";
import Particles from "@/components/particles";
import DemoModal from "@/components/demo-modal";
import { fadeInAnimation, pageTransition, floatAnimation } from "@/utils/animations";

const Home = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <motion.div
      className="pt-16"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <Particles count={50} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <motion.div 
              className="md:w-1/2 lg:w-3/5"
              variants={fadeInAnimation}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                variants={fadeInAnimation}
              >
                <motion.span className="text-white block mb-2">
                  Rockam runs our
                </motion.span>
                <motion.span className="text-white block mb-2">
                  numbers.
                </motion.span>
                <motion.span className="text-white block">
                  We run the business.
                </motion.span>
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-300 mb-2"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <span className="text-lg font-medium text-primary">...Your Data Team, Without the Overhead.</span>
              </motion.p>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-primary text-background font-semibold hover:bg-primary/90"
                    asChild
                  >
                    <ScrollLink to="/contact">Contact Us</ScrollLink>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:border-primary hover:text-primary"
                    onClick={() => setDemoModalOpen(true)}
                  >
                    Get a Free Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 md:mt-0 md:w-1/2 lg:w-2/5"
              variants={fadeInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Data analytics dashboard"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-1/3"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center">
                    <div className="text-white bg-primary/30 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center">
                        <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">Performance Trends</span>
                      </div>
                    </div>
                    <div className="text-white bg-primary/30 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm font-medium">View Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Business professional reviewing data reports"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary rounded-full p-2">
                      <Coffee className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white text-sm font-medium">
                      Data-driven decisions, simplified
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                "I used to spend Mondays building reports."
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                "Now I read them over coffee."
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                We didn't need a full data department. We needed answers. 
                Rockam delivered both.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Your Data Team, Without the Overhead.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Michael Richardson</p>
                  <p className="text-gray-400 text-sm">CFO, TechVision Inc.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect rounded-xl p-8 md:p-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your data strategy?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our data experts to discover how Rockam can help your business make better decisions, faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-primary text-background font-semibold hover:bg-primary/90"
                size="lg"
                asChild
              >
                <ScrollLink to="/contact">Contact Us</ScrollLink>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:border-primary hover:text-primary"
                asChild
              >
                <ScrollLink to="/services">Our Services</ScrollLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Explore Rockam Data Services
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Discover how we can help transform your data into actionable insights
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="glass-effect rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Services</h3>
              <p className="text-gray-300 mb-6">
                Explore our comprehensive suite of data analytics and insights services
              </p>
              <Button asChild variant="outline" className="w-full">
                <ScrollLink to="/services">View Services</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Industries</h3>
              <p className="text-gray-300 mb-6">
                See how we serve different industries with specialized data solutions
              </p>
              <Button asChild variant="outline" className="w-full">
                <ScrollLink to="/industries">View Industries</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">How It Works</h3>
              <p className="text-gray-300 mb-6">
                Understand our process and how we help you get the most from your data
              </p>
              <Button asChild variant="outline" className="w-full">
                <ScrollLink to="/how-it-works">Learn More</ScrollLink>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              className="glass-effect rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Case Studies</h3>
              <p className="text-gray-300 mb-6">
                See real-world examples of how we've helped our clients succeed
              </p>
              <Button asChild variant="outline" className="w-full">
                <ScrollLink to="/case-studies">View Case Studies</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">About Us</h3>
              <p className="text-gray-300 mb-6">
                Learn about our team, mission, and why we're passionate about data
              </p>
              <Button asChild variant="outline" className="w-full">
                <ScrollLink to="/about">About Rockam</ScrollLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-medium text-gray-400">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Citi.svg/1200px-Citi.svg.png" 
                  alt="Citibank" 
                  className="h-12 w-auto object-contain" 
                />
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png" 
                  alt="Coca-Cola" 
                  className="h-10 w-auto object-contain" 
                />
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" 
                  alt="Microsoft" 
                  className="h-8 w-auto object-contain" 
                />
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png" 
                  alt="BMW" 
                  className="h-14 w-auto object-contain" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </motion.div>
  );
};

export default Home;