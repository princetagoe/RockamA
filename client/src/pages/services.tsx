import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { services } from "@/data/content";
import { pageTransition } from "@/utils/animations";
import { BarChart3, Database, ShieldCheck, ChevronRight } from "lucide-react";

const Services = () => {
  const [, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.div
      className="pt-16"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero */}
      <section className="relative py-20 pt-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Rockam Services"
            className="w-full h-full object-cover object-top"
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-left max-w-3xl pt-8 md:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-shadow">
              <span className="text-backdrop">What We Offer</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl text-shadow bg-black/20 p-4 rounded-lg">
              Every insight, every dashboard, every forecast—without the cost of a full-house data team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="btn-gradient text-white font-semibold rounded-full"
                size="lg"
                onClick={() => document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Data Analytics
              </Button>
              <Button
                className="bg-white text-primary font-semibold hover:bg-gray-100 shadow-md rounded-full border border-primary/20"
                size="lg"
                onClick={() => document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Data Infrastructure
              </Button>
              <Button
                className="bg-gray-800/80 backdrop-blur-sm text-white font-semibold hover:bg-gray-700 shadow-md rounded-full"
                size="lg"
                onClick={() => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Governance
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete suite of data solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Data Analytics & Intelligence Section */}
      <section id="analytics" className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Data Analytics & Intelligence</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mb-8">
              Transform raw data into strategic insights that drive revenue growth, operational efficiency, and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Processing & Dashboard Reporting</h3>
                <p className="text-gray-600 mb-6">
                  Clean, decision-ready interactive dashboards in Power BI, Tableau, or Excel—designed for clarity, not confusion.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Predictive Analytics & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  We forecast trends, optimize pricing, and reduce churn through advanced modeling that aligns with your KPIs.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Insight-as-a-Service</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing performance reviews, strategy updates, actionable insights, optimization tips and business-friendly reports delivered monthly or bi-weekly.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Infrastructure & Engineering Section */}
      <section id="infrastructure" className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Data Infrastructure & Engineering</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mb-8">
              Build robust data foundations with scalable pipelines, storage solutions, and integration systems tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Warehousing</h3>
                <p className="text-gray-600 mb-6">
                  Centralized, scalable storage solutions for fast and reliable reporting across cloud or hybrid environments.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Engineering</h3>
                <p className="text-gray-600 mb-6">
                  We design robust pipelines to automate the flow, transformation, and delivery of your business-critical data.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Management & Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Migrations, integration, and monitoring on AWS, Azure, or GCP—with low-maintenance, high-security setups.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance & Automation Section */}
      <section id="governance" className="py-16 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Governance & Automation</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mb-8">
              Ensure data quality, security, and compliance while automating routine processes to save time and reduce errors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Governance</h3>
                <p className="text-gray-600 mb-6">
                  We enforce structure, quality, and compliance across your data ecosystem, ensuring trust in every number.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-6">
                  From weekly reports to cross-tool syncs, we automate the manual and repetitive, saving you time and reducing risk.
                </p>
              </div>
              <Button
                className="w-full btn-gradient text-white hover:shadow-lg transition-all mt-auto"
                onClick={handleContactClick}
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#0047fc]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How Our Services Deliver Value</h2>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
              We blend technical expertise with business insight to create data solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Increased Efficiency</h3>
              <p className="text-gray-600">
                Automated data processes save time and reduce manual work, letting your team focus on what matters.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Better Decision Making</h3>
              <p className="text-gray-600">
                Clear, actionable insights enable faster and more confident business decisions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cost Effective</h3>
              <p className="text-gray-600">
                Get enterprise-level data capabilities without the overhead of building an in-house team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-gray-50 rounded-xl shadow-xl p-8 md:p-10 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Put Your Data to Work?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss your data challenges and discover how Rockam can help transform your business.
            </p>
            <Button
              className="btn-gradient text-white font-semibold rounded-full px-8 py-6"
              size="lg"
              onClick={handleContactClick}
            >
              Request a Free Proposal
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;