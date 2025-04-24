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

      {/* Mission & Values */}
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
              <div className="mb-10">
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

              <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
                  Our Foundation
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-primary mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To be the best-in-class innovative data science and analytics outsourcing 
                    company, delivering actionable insights that drive meaningful transformation
                    and sustainable growth.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-medium text-primary mb-2">Our Purpose</h4>
                  <p className="text-gray-600">
                    Innovate to help businesses make better decisions, create leaner operations, 
                    and enable customers to live better through the power of data.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium text-primary mb-2">Our Values</h4>
                  <p className="text-gray-600 mb-4">
                    To fulfill our purpose and achieve our mission, we live by these essential values 
                    which make up the foundation of our business:
                  </p>
                  <div className="space-y-4">
                    {values.map((value) => (
                      <ValueCard
                        key={value.id}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                Excellence
              </h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from the quality of our analytics 
                to the insights we deliver, ensuring you receive the highest standard of service.
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
                Customer-Focus
              </h3>
              <p className="text-gray-300">
                Your business needs and goals are at the center of everything we do. 
                We listen, understand, and deliver solutions that address your specific challenges.
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
                Agility
              </h3>
              <p className="text-gray-300">
                Business conditions change rapidly. We adapt quickly to new challenges and 
                opportunities, ensuring your data strategy stays ahead of the curve.
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
                Accountability
              </h3>
              <p className="text-gray-300">
                We take responsibility for our work and stand by our results. 
                You can count on us to deliver on our promises with transparency and integrity.
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
