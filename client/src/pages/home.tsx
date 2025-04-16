import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ScrollLink from "@/components/scroll-link"; 
import {
  BarChart3,
  Database,
  ShieldCheck,
  FileBarChart,
  LineChart,
} from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Particles from "@/components/particles";
import SolutionCard from "@/components/solution-card";
import IndustryCard from "@/components/industry-card";
import DemoModal from "@/components/demo-modal";
import LearnMoreModal from "@/components/learn-more-modal";
import { services, industries, values, testimonials } from "@/data/content";
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
      description: `This would normally navigate to Rockam's ${platform} profile.`
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
                  onClick={() => setDemoModalOpen(true)}
                >
                  Get a Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:border-primary hover:text-primary"
                  asChild
                >
                  <ScrollLink to="/services">Explore Services</ScrollLink>
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

      {/* Problem Framing Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Rockam is your in-between
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              You've outgrown basic analytics tools, but you're not ready for expensive in-house data teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background/30 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-red-500">✕</span>
                  </span>
                  <span className="text-gray-300">Creating reports is too manual and time-consuming</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-red-500">✕</span>
                  </span>
                  <span className="text-gray-300">Your data lives in multiple places with no single source of truth</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-red-500">✕</span>
                  </span>
                  <span className="text-gray-300">You can't afford a full data team but need professional analytics</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background/30 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary">✓</span>
                  </span>
                  <span className="text-gray-300">Automated data pipelines that save hours of manual work</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary">✓</span>
                  </span>
                  <span className="text-gray-300">Unified dashboards with real-time insights across all your data</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary">✓</span>
                  </span>
                  <span className="text-gray-300">Fractional data team at a fraction of the cost, scale as you grow</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              Our Services
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Every insight, every dashboard, every forecast—without the cost of a full-house data team.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <SolutionCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                image={service.image}
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
              <ScrollLink to="/services">Learn More About Our Services</ScrollLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Success Stories
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              "Rockam runs our numbers. We run the business."
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-background/30 p-6 rounded-lg relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-2 text-5xl text-primary opacity-30">"</div>
                <p className="text-gray-300 mb-4 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:border-primary hover:text-primary"
              asChild
            >
              <ScrollLink to="/case-studies">View All Case Studies</ScrollLink>
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
              We Work Where Data Matters
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our industry-specific solutions address unique data challenges with tailored approaches.
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

      {/* Summary Box */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-effect rounded-xl p-8 md:p-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Decision-Ready Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileBarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Dashboards</h3>
                <p className="text-gray-300 text-sm">
                  Interactive visualizations that give you the full picture at a glance
                </p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Forecasts</h3>
                <p className="text-gray-300 text-sm">
                  AI-powered predictions to help you plan ahead with confidence
                </p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">Reports</h3>
                <p className="text-gray-300 text-sm">
                  Detailed analysis delivered automatically when and where you need it
                </p>
              </div>
            </div>
          </motion.div>
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
              Let's Unlock Your Data
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how Rockam can transform your business data into a competitive advantage.
            </p>
            <Button
              size="lg"
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              asChild
            >
              <ScrollLink to="/contact">Get a Free Proposal</ScrollLink>
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
                onClick={(e) => { e.preventDefault(); handleSocialClick('Facebook'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleSocialClick('Instagram'); }}
                className="bg-background w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
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
