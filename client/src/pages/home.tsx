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
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-b from-gray-800 to-gray-950">
        <Particles count={40} />
        
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
                  Smarter Decisions.
                </motion.span>
                <motion.span className="text-white block">
                  Simplified Data.
                </motion.span>
              </motion.h1>
              <motion.p
                className="mt-6 text-xl text-gray-300 mb-6"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Rockam is your data team—automated, intelligent, and affordable.
              </motion.p>
              <motion.p
                className="text-lg font-medium text-primary"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                ...Your Data Team, Without the Overhead.
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mt-2"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                The trusted partner for SMBs that want insights, not more headcount.
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
                    className="bg-primary text-white font-semibold hover:bg-primary/90"
                    asChild
                  >
                    <ScrollLink to="/contact">Contact Us</ScrollLink>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-white hover:border-primary hover:text-primary"
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
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-1">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Governed, trustworthy analytics at scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hiring full-house analysts is expensive. Doing nothing is risky. Rockam is your in-between.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Data analytics dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Trustworthy analytics at scale</h3>
                <p className="text-gray-600">Analytics that grow with your business needs and deliver reliable insights.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Business insights dashboard"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Actionable insights</h3>
                <p className="text-gray-600">Insights you can understand and act on, not just data points and charts.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AI prediction model"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-powered forecasts</h3>
                <p className="text-gray-600">Predictive analytics that help you see what's coming and respond faster.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Data pipeline automation"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-end data engineering</h3>
                <p className="text-gray-600">Automated pipelines and processes that save time and reduce manual work.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Secure data infrastructure"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure infrastructure</h3>
                <p className="text-gray-600">Enterprise-grade security and compliance for your most valuable data assets.</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Pull Quote Banner */}
          <motion.div
            className="relative rounded-xl mb-16 shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Business meeting with data"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/80"></div>
            </div>
            <div className="relative z-10 p-10 md:p-16 text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                "Rockam runs our numbers. We run the business."
              </h3>
              <div className="w-16 h-1 bg-white mx-auto my-6"></div>
              <p className="text-lg text-white/90 italic">
                - From our satisfied clients
              </p>
            </div>
          </motion.div>

          {/* Quick Solution Highlight */}
          <motion.div
            className="text-center bg-white p-8 rounded-xl shadow-md mb-16 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Business growth"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Decision-Ready Clarity
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Rockam delivers decision-ready dashboards, forecasts, and reports—so you can grow with clarity.
            </p>
          </motion.div>
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
              className="bg-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Data services"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Services</h3>
                <p className="text-gray-300 mb-6">
                  Explore our comprehensive suite of data analytics and insights services
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                  <ScrollLink to="/services">View Services</ScrollLink>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Industry solutions"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Industries</h3>
                <p className="text-gray-300 mb-6">
                  See how we serve different industries with specialized data solutions
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                  <ScrollLink to="/industries">View Industries</ScrollLink>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="How it works"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">How It Works</h3>
                <p className="text-gray-300 mb-6">
                  Understand our process and how we help you get the most from your data
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                  <ScrollLink to="/how-it-works">Learn More</ScrollLink>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              className="bg-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Case studies"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Case Studies</h3>
                <p className="text-gray-300 mb-6">
                  See real-world examples of how we've helped our clients succeed
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                  <ScrollLink to="/case-studies">View Case Studies</ScrollLink>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, borderColor: 'rgba(0, 114, 206, 0.5)' }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="About us"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">About Us</h3>
                <p className="text-gray-300 mb-6">
                  Learn about our team, mission, and why we're passionate about data
                </p>
                <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-primary/20">
                  <ScrollLink to="/about">About Rockam</ScrollLink>
                </Button>
              </div>
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
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Citibank.svg/2560px-Citibank.svg.png" 
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