import React, { useState } from "react";
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
  ServerCog,
  CalendarDays,
  Link as LinkIcon,
  Cog,
  FileBarChart,
  Phone
} from "lucide-react";
import DemoModal from "@/components/demo-modal";
import { fadeInAnimation, pageTransition } from "@/utils/animations";
import heroBackground from "@/assets/woman-working-laptop-optimized.jpg";

// Helper function to render icons
const IconRenderer = ({ icon: Icon }: { icon: LucideIcon }) => {
  return <Icon className="h-8 w-8" />;
};

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
      <section className="relative overflow-hidden min-h-[650px] flex items-center pt-16">
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Professional woman working on laptop"
            className="w-full h-full object-cover object-top"
          />
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-gray-900/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left pt-8 md:pt-12">
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
              >
                <span className="text-white">Your Data Team,</span> <br/>
                <span className="text-white">Without the Overhead</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white mb-10 max-w-xl"
              >
                Rockam is your data team—automated and intelligent; a trusted partner for SMBs that want insights, not more headcount.
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
                    className="btn-gradient text-white font-semibold rounded-full px-8"
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
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer service-card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Data Analytics & Intelligence</h3>
              </motion.div>
              
              {/* Service Card 2 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer service-card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ServerCog className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Data Infrastructure & Engineering</h3>
              </motion.div>
              
              {/* Service Card 3 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer service-card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Governance & Automation</h3>
              </motion.div>
              
              {/* Service Card 4 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer service-card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Data Warehousing</h3>
              </motion.div>
              
              {/* Service Card 5 */}
              <motion.div 
                className="flex flex-col items-center p-5 hover:shadow-lg transition-all rounded-lg cursor-pointer service-card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-center">Predictive Analytics & ML</h3>
              </motion.div>
            </div>
          </div>
          
          <div className="text-center pb-8">
            <div className="inline-flex gap-2 items-center text-gray-500 text-sm mb-4">
              <span>Trusted by businesses across various industries</span>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/microsoft-power-bi.svg" alt="Power BI" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/azure-1.svg" alt="Azure" className="h-6" />
              <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" className="h-6" />
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
                <div className="text-primary font-medium mb-2">About Rockam</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Your Data Team, <span className="blue-purple-text">Without the Overhead</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Rockam is a data science and analytics outsourcing company that unlocks insights for your business by focusing on what matters most.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Database className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Our Mission</div>
                      <p className="text-gray-600 text-sm">To be the best-in-class innovative data science and analytics outsourcing company.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheck className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Our Purpose</div>
                      <p className="text-gray-600 text-sm">Innovate to help business' decision making better, operations leaner, and customers live better.</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  className="btn-gradient text-white rounded-full px-8 py-6"
                  asChild
                >
                  <ScrollLink to="/contact" className="flex items-center gap-2">
                    Contact Us
                  </ScrollLink>
                </Button>
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
              <span className="text-primary font-semibold">Our Services</span>
              <div className="h-px bg-primary/30 w-8 ml-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
              Every insight, every dashboard, every forecast—
              <br/><span className="blue-purple-text">without the cost of a full-house data team</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics & Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Interactive dashboards and forecasting models designed for clarity and aligned with your business KPIs.
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
                <ServerCog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Infrastructure & Engineering</h3>
              <p className="text-gray-600 mb-6">
                Scalable storage solutions and automated data pipelines for fast, reliable delivery of your business-critical data.
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
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Governance & Automation</h3>
              <p className="text-gray-600 mb-6">
                Ensuring data quality and automating repetitive tasks, saving you time while maintaining compliance and reducing risk.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="blue-purple-text">transform your data strategy?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're just getting started or buried in spreadsheets, Rockam is here to help. Schedule a free consultation with our data experts to discover how Rockam can help your business make better decisions, faster.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium">ADDRESS:</span> 31 Tippett Road, Ontario, M3H 0C8, Canada
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="btn-gradient text-white font-semibold rounded-full px-8"
                size="lg"
                asChild
              >
                <ScrollLink to="/contact">Contact Us</ScrollLink>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-800 rounded-full px-8 btn-outline-hover"
                asChild
              >
                <ScrollLink to="/services">Our Services</ScrollLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      
      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center">
              <div className="h-px bg-primary/30 w-8 mr-2"></div>
              <span className="text-primary font-semibold">Our Process</span>
              <div className="h-px bg-primary/30 w-8 ml-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've simplified the process to get you from data to decisions quickly
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Import howItWorks from content.ts */}
            {(() => {
              const howItWorks = [
                {
                  id: 1,
                  icon: CalendarDays,
                  title: "Book a Discovery Call"
                },
                {
                  id: 2,
                  icon: LinkIcon,
                  title: "Connect Data Sources"
                },
                {
                  id: 3,
                  icon: Cog,
                  title: "We Analyze, Build, Automate"
                },
                {
                  id: 4,
                  icon: PieChart,
                  title: "You Get Clear Reports & Insights"
                }
              ];
              
              return howItWorks.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
                    <IconRenderer icon={step.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  
                  {/* Step connector line (except for the last item) */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 border-t-2 border-dashed border-primary/30"></div>
                  )}
                </motion.div>
              ));
            })()}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button
              asChild
              className="btn-gradient text-white rounded-full px-8"
            >
              <Link href="/how-it-works">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real businesses getting real results with Rockam Data Services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Import testimonials from content.ts */}
            {(() => {
              const testimonials = [
                {
                  id: 1,
                  quote: "I didn't have to hire anyone. Rockam gave us all we needed.",
                  author: "John Smith",
                  position: "Clinic Operations Manager"
                },
                {
                  id: 2,
                  quote: "We finally understand what our numbers are saying, and what to do next.",
                  author: "Emma Brown",
                  position: "Fashion Retailer"
                },
                {
                  id: 3,
                  quote: "They feel like part of the team, but way more efficient. Rockam runs our numbers. We run the business.",
                  author: "Raj Patel",
                  position: "Marketing Agency Owner"
                }
              ];
              
              return testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white/10 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    {/* Quote mark */}
                    <svg
                      className="h-8 w-8 text-primary/70"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-100 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-gray-100">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </motion.div>
              ));
            })()}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button
              asChild
              className="btn-gradient text-white rounded-full px-8"
            >
              <Link href="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the <span className="blue-purple-text">Rockam Difference?</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Get started with a free consultation today. Our data experts are ready to discuss how we can transform your business data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                className="btn-gradient text-white rounded-full px-10 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                  Request a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-800 font-medium">Call us: <span className="text-primary font-semibold">(+1) 416-123-4567</span></span>
              </div>
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