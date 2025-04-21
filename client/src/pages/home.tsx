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
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Professional team analyzing data"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <motion.div 
              variants={fadeInAnimation}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
                variants={fadeInAnimation}
              >
                Your Data Team, Without the Overhead
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-10"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Rockam delivers data-driven insights to help businesses make smarter decisions.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
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
          </div>
        </div>
      </section>

      {/* Services Section - Moved up as requested */}
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
              Our Data Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data solutions to help you make smarter decisions with your business data.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Data Analytics & Intelligence"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analytics & Intelligence</h3>
                <p className="text-gray-600 mb-4">Turn your raw data into actionable insights with our advanced analytics services.</p>
                <Button variant="outline" size="sm" asChild>
                  <ScrollLink to="/services" className="w-full">Learn More</ScrollLink>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Data Infrastructure & Engineering"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Infrastructure & Engineering</h3>
                <p className="text-gray-600 mb-4">Build robust data pipelines and infrastructure to handle your business data efficiently.</p>
                <Button variant="outline" size="sm" asChild>
                  <ScrollLink to="/services" className="w-full">Learn More</ScrollLink>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Governance & Automation"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Governance & Automation</h3>
                <p className="text-gray-600 mb-4">Ensure data quality and compliance while automating repetitive data processing tasks.</p>
                <Button variant="outline" size="sm" asChild>
                  <ScrollLink to="/services" className="w-full">Learn More</ScrollLink>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
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
            <h2 className="text-xl font-medium text-gray-600">Trusted by Growing Businesses</h2>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300 bg-white p-4 rounded-lg shadow-sm w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-10 flex items-center justify-center text-blue-600 font-bold text-lg">
                  MIT Labs
                </div>
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300 bg-white p-4 rounded-lg shadow-sm w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-10 flex items-center justify-center text-emerald-600 font-bold text-lg">
                  Greenpeace
                </div>
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300 bg-white p-4 rounded-lg shadow-sm w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-10 flex items-center justify-center text-purple-600 font-bold text-lg">
                  Khan Academy
                </div>
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300 bg-white p-4 rounded-lg shadow-sm w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-10 flex items-center justify-center text-red-500 font-bold text-lg">
                  TED Talks
                </div>
              </motion.div>
              <motion.div 
                className="grayscale hover:grayscale-0 transition-all duration-300 bg-white p-4 rounded-lg shadow-sm w-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-10 flex items-center justify-center text-teal-600 font-bold text-lg">
                  Coursera
                </div>
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