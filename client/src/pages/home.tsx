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
import heroBackground from "@/assets/hero-background.jpg";
import teamImage from "@/assets/team-image.jpg";
import aboutImage from "@/assets/about-image.jpg";

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
            src={heroBackground} 
            alt="Data analytics professional"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-1 rounded-full inline-flex items-center mb-6 shadow-md"
              >
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Data Analytics & Intelligence</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 mb-6"
              >
                Your Data Team, <br/>
                <span className="blue-purple-text">Without the Overhead</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 max-w-xl"
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
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={teamImage} 
                alt="Professional data team"
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
                  src={aboutImage}
                  alt="Professional reviewing data reports"
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
                  Rockam Data Services Ltd is a data science and analytics outsourcing company, that unlocks your ability to generate life-changing insights through focusing on what matters most for your business, and your customers.
                </p>
                <p className="text-gray-600 mb-6">
                  Our areas of expertise are data processing and management, analytics, AI driven process automation, dashboard reporting and insight generation, for medium and small-scale businesses.
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
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="text-gray-800 font-semibold">Email Us:</div>
                  <div className="text-primary font-bold text-xl">info@rockam.ai</div>
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
                Clean, decision-ready interactive dashboards in Power BI, Tableau, or Excel—designed for clarity, not confusion.
              </p>
              <p className="text-gray-600 mb-6">
                We forecast trends, optimize pricing, and reduce churn through advanced modeling that aligns with your KPIs.
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
                Centralized, scalable storage solutions for fast and reliable reporting across cloud or hybrid environments.
              </p>
              <p className="text-gray-600 mb-6">
                We design robust pipelines to automate the flow, transformation, and delivery of your business-critical data.
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
                We enforce structure, quality, and compliance across your data ecosystem, ensuring trust in every number.
              </p>
              <p className="text-gray-600 mb-6">
                From weekly reports to cross-tool syncs, we automate the manual and repetitive, saving you time and reducing risk.
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