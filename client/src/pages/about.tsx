import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import ValueCard from "@/components/value-card";
import { values } from "@/data/content";
import { pageTransition } from "@/utils/animations";

const About = () => {
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover object-top"
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-left max-w-3xl pt-8 md:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-shadow">
              <span className="text-backdrop">About Rockam</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl text-shadow bg-black/20 p-4 rounded-lg">
              We unlock your ability to generate life-changing insights by focusing on 
              what matters most for your business and your customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Rockam team working"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-600 mb-4">
                  Rockam Data Services Ltd is a data science and analytics outsourcing company 
                  that unlocks your ability to generate life-changing insights by focusing on 
                  what matters most for your business and your customers.
                </p>
                <p className="text-gray-600 mb-4">
                  Our areas of expertise include data processing and management, analytics, 
                  AI-driven process automation, dashboard reporting, and insight generation
                  for medium and small-scale businesses.
                </p>
                <p className="text-gray-600 font-medium">
                  Ultimately, our goal is to enable you to make data-driven decisions, 
                  <span className="text-primary font-semibold"> Without the Overhead!</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Purpose & Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              What Drives Us
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission, purpose and values are the foundation of everything we do at Rockam
            </p>
          </motion.div>

          {/* Mission & Purpose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 14v8"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                To be the best-in-class innovative data science and analytics outsourcing 
                company, delivering actionable insights that drive meaningful transformation
                and sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Our Purpose
              </h3>
              <p className="text-gray-600 text-center">
                Innovate to help businesses make better decisions, create leaner operations, 
                and enable customers to live better through the power of data.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Our Values
            </h3>
            <p className="text-gray-600 mb-8 text-center">
              To fulfill our purpose and achieve our mission, we live by these essential values 
              which make up the foundation of our business:
            </p>
            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              {values.map((value) => (
                <ValueCard
                  key={value.id}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Rockam
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Enable data-driven decisions without the overhead – that's our promise to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Actionable Insights
              </h3>
              <p className="text-gray-300">
                We deliver clear, practical intelligence that drives real business decisions, not just fancy charts.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Forecasting
              </h3>
              <p className="text-gray-300">
                Our predictive models help you see what's coming, so you can plan better and react faster.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Engineering
              </h3>
              <p className="text-gray-300">
                We build reliable data pipelines and infrastructure that grow with your business needs.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Infrastructure
              </h3>
              <p className="text-gray-300">
                Your data's safety is our priority with enterprise-grade security and compliance standards.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">05</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Expertise
              </h3>
              <p className="text-gray-300">
                Our team specializes in data processing, analytics, AI-driven automation,
                and insightful dashboard reporting for small and medium-sized businesses.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 rounded-xl p-6 border border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">06</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Overhead
              </h3>
              <p className="text-gray-300">
                Our outsourcing model enables you to access high-quality data services 
                without the burden of building and maintaining your own analytics team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our office in Ontario, Canada to learn more about our services.
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">
                    Headquarters
                  </h4>
                  <p className="text-gray-600 text-lg">
                    31 Tippett Road
                    <br />
                    Ontario, M3H 0C8
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how Rockam can help your
              organization make better decisions through data analytics.
            </p>
            <Button
              className="btn-gradient text-white font-semibold rounded-full px-8 py-6"
              size="lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
