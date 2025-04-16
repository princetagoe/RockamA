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
                Smarter Decisions.
              </motion.span>
              <br />
              <motion.span 
                className="text-primary inline-block"
                whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(0, 114, 206, 0.7)", transition: { duration: 0.2 } }}
              >
                Simplified Data.
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-6 mx-auto max-w-2xl text-xl text-gray-300"
              variants={fadeInAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Rockam is your data team—automated, intelligent, and affordable.
              <span className="block mt-2 text-lg font-medium text-primary">Your Data Team, Without the Overhead.</span>
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
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Data visualization dashboard"
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
                  <BarChart3 className="text-primary mr-2 h-5 w-5" />
                  <span>Actionable Insights</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <LineChart className="text-primary mr-2 h-5 w-5" />
                  <span>AI Forecasting</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1 }}
                >
                  <Database className="text-primary mr-2 h-5 w-5" />
                  <span>Data Engineering</span>
                </motion.div>
                <motion.div
                  className="glass-effect p-4 rounded-lg flex items-center"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1.5 }}
                >
                  <ShieldCheck className="text-primary mr-2 h-5 w-5" />
                  <span>Secure Infrastructure</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
                className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
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
                <Link href="/about">About Rockam</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </motion.div>
  );
};

export default Home;