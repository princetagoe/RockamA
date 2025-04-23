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
  LayoutDashboard,
  SlidersHorizontal,
  LucideIcon,
  PieChart,
  ServerCog
} from "lucide-react";
import DemoModal from "@/components/demo-modal";
import { fadeInAnimation, pageTransition } from "@/utils/animations";

const Home = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <motion.div
      className="pt-0"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[650px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Professional team analyzing data"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
          
          {/* Diagonal Overlay */}
          <div className="absolute inset-0 bg-primary/80 clip-diagonal-reverse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-2 rounded-full inline-flex items-center mb-6"
              >
                <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold">We are IT service agency</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
              >
                Think Big. We make <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">IT, possible!</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-200 mb-10 max-w-xl"
              >
                We place you at the center of international networks to advance your strategic interests.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-primary text-white font-semibold hover:bg-primary/90 rounded-full px-8"
                    asChild
                  >
                    <ScrollLink to="/contact" className="flex items-center gap-2">
                      Our Team
                      <ArrowRight size={16} />
                    </ScrollLink>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional data analyst"
                className="max-w-md rounded-lg shadow-xl hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Similar to the inspiration */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center -mt-32 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white rounded-xl shadow-xl p-4 w-full max-w-5xl">
              {/* Service Card 1 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer"
                whileHover={{ y: -10, backgroundColor: "rgba(122, 54, 207, 0.05)" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">UI/UX Design Services</h3>
              </motion.div>
              
              {/* Service Card 2 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer"
                whileHover={{ y: -10, backgroundColor: "rgba(122, 54, 207, 0.05)" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <SlidersHorizontal className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Business Consultation</h3>
              </motion.div>
              
              {/* Service Card 3 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer"
                whileHover={{ y: -10, backgroundColor: "rgba(122, 54, 207, 0.05)" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ServerCog className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Website Development</h3>
              </motion.div>
              
              {/* Service Card 4 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer"
                whileHover={{ y: -10, backgroundColor: "rgba(122, 54, 207, 0.05)" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Support Management</h3>
              </motion.div>
              
              {/* Service Card 5 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer"
                whileHover={{ y: -10, backgroundColor: "rgba(122, 54, 207, 0.05)" }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PieChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Market Research</h3>
              </motion.div>
            </div>
          </div>
          
          <div className="text-center pb-8">
            <div className="inline-flex gap-2 items-center text-gray-500 text-sm mb-4">
              <span>Join over +35,000 happy clients</span>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <img src="https://cdn.worldvectorlogo.com/logos/envato.svg" alt="Envato" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt="Slack" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" alt="Figma" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" alt="Sketch" className="h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary/10 rounded-lg w-32 h-32 -z-10"></div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-primary font-medium mb-2">About Our Company</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Choose The Best IT Service Company
                </h2>
                <p className="text-gray-600 mb-6">
                  At Rockam Data Services, we operate with the mission of making data accessible to all sizes of businesses. We're like a plumber who fixes your pipes. That's what our team is designed to do.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Database className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Moneyback Guarantee</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Technical Support</div>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6"
                  asChild
                >
                  <ScrollLink to="/contact" className="flex items-center gap-2">
                    Contact Us
                  </ScrollLink>
                </Button>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="text-gray-800 font-semibold">Call Us Today:</div>
                  <div className="text-primary font-bold text-xl">+1 123 456 7890</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-white angled-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center">
              <div className="h-px bg-primary/30 w-8 mr-2"></div>
              <span className="text-primary font-semibold">Our Awesome Services</span>
              <div className="h-px bg-primary/30 w-8 ml-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
              We Are <span className="text-primary">Dedicated</span> To Serve <br/>You All Time.
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                We're wildly passionate about crafting beautiful interfaces that help tell your story.
              </p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <SlidersHorizontal className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Planning</h3>
              <p className="text-gray-600 mb-6">
                Our customers get exclusive business opportunities created for their projects.
              </p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ServerCog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Management</h3>
              <p className="text-gray-600 mb-6">
                Our global consultants are always looking for the next opportunity.
              </p>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cyber Security</h3>
              <p className="text-gray-600 mb-6">
                We know our networks are secure and we are putting our expertise to work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl p-8 md:p-12 text-center shadow-xl border border-gray-100"
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
                className="bg-primary text-white font-semibold hover:bg-primary/90 rounded-full px-8"
                size="lg"
                asChild
              >
                <ScrollLink to="/contact">Contact Us</ScrollLink>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-800 hover:border-primary hover:text-primary rounded-full px-8"
                asChild
              >
                <ScrollLink to="/services">Our Services</ScrollLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-medium text-gray-600">Trusted By Leading Companies</h2>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                alt="Shopify" 
                className="max-h-10 w-auto" 
              />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://cdn.worldvectorlogo.com/logos/asana-logo.svg"
                alt="Asana" 
                className="max-h-10 w-auto" 
              />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://cdn.worldvectorlogo.com/logos/atlassian-1.svg"
                alt="Atlassian" 
                className="max-h-10 w-auto" 
              />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                alt="Slack" 
                className="max-h-8 w-auto" 
              />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://cdn.worldvectorlogo.com/logos/hubspot.svg"
                alt="Hubspot" 
                className="max-h-10 w-auto" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </motion.div>
  );
};

export default Home;