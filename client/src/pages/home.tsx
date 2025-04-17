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
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-36 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)'
        }}>
        <Particles count={40} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
            <motion.div 
              variants={fadeInAnimation}
              className="mb-8"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                variants={fadeInAnimation}
              >
                <motion.span className="text-white block mb-2">
                  Smarter Decisions.
                </motion.span>
                <motion.span className="text-white block">
                  Simplified Data.
                </motion.span>
              </motion.h1>
              <motion.div 
                className="w-20 h-1 bg-primary mx-auto my-8"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.p
                className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Rockam is your data team—automated, intelligent, and affordable.
              </motion.p>
              <motion.p
                className="text-xl font-medium text-primary"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                ...Your Data Team, Without the Overhead.
              </motion.p>
              <motion.p
                className="text-base text-gray-300 mt-2 max-w-2xl mx-auto"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                The trusted partner for SMBs that want insights, not more headcount.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mt-6 justify-center"
              variants={fadeInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-lg px-8 py-6 text-lg"
                  asChild
                >
                  <ScrollLink to="/contact">Contact Us</ScrollLink>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:border-primary hover:text-primary px-8 py-6 text-lg"
                  onClick={() => setDemoModalOpen(true)}
                >
                  Get a Free Consultation
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 relative rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl"
            variants={fadeInAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-1">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Data analytics dashboard"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-1/3"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-800 bg-white/80 shadow-md backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">Performance Trends</span>
                    </div>
                  </div>
                  <div className="text-gray-800 bg-white/80 shadow-md backdrop-blur-sm rounded-lg px-3 py-2">
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
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Business professional reviewing data reports"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary rounded-full p-2 shadow-lg">
                      <Coffee className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                "I used to spend Mondays building reports."
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                "Now I read them over coffee."
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                We didn't need a full data department. We needed answers. 
                Rockam delivered both.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Your Data Team, Without the Overhead.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Michael Richardson</p>
                  <p className="text-gray-500 text-sm">CFO, TechVision Inc.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl p-8 md:p-10 text-center shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to transform your data strategy?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our data experts to discover how Rockam can help your business make better decisions, faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
                size="lg"
                asChild
              >
                <ScrollLink to="/contact">Contact Us</ScrollLink>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                asChild
              >
                <ScrollLink to="/services">Our Services</ScrollLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 bg-gray-900">
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
              className="bg-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Services</h3>
              <p className="text-gray-300 mb-6">
                Explore our comprehensive suite of data analytics and insights services
              </p>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                <ScrollLink to="/services">View Services</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Industries</h3>
              <p className="text-gray-300 mb-6">
                See how we serve different industries with specialized data solutions
              </p>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                <ScrollLink to="/industries">View Industries</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">How It Works</h3>
              <p className="text-gray-300 mb-6">
                Understand our process and how we help you get the most from your data
              </p>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                <ScrollLink to="/how-it-works">Learn More</ScrollLink>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              className="bg-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Case Studies</h3>
              <p className="text-gray-300 mb-6">
                See real-world examples of how we've helped our clients succeed
              </p>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                <ScrollLink to="/case-studies">View Case Studies</ScrollLink>
              </Button>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">About Us</h3>
              <p className="text-gray-300 mb-6">
                Learn about our team, mission, and why we're passionate about data
              </p>
              <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                <ScrollLink to="/about">About Rockam</ScrollLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-medium text-gray-600">Trusted by Industry Leaders</h2>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100"
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