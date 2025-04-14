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
      <section className="relative py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About NovaCore
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate technologists dedicated to solving
              complex problems with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="NovaCore team working"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6">
                At NovaCore, we believe technology should empower organizations
                to achieve their fullest potential. Our mission is to deliver
                cutting-edge solutions that drive meaningful transformation and
                sustainable growth.
              </p>

              <h3 className="text-2xl font-semibold text-white mb-6 mt-10">
                Our Values
              </h3>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose NovaCore
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              What sets us apart from other technology providers in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Industry Expertise
              </h3>
              <p className="text-gray-300">
                Our team brings deep knowledge and experience across multiple
                industries, allowing us to understand your specific challenges.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-300">
                We stay at the forefront of technology innovation, ensuring our
                solutions are always modern, efficient, and future-ready.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Client Partnership
              </h3>
              <p className="text-gray-300">
                We view every engagement as a partnership, working closely with
                you to achieve your business objectives and long-term success.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Tailored Approach
              </h3>
              <p className="text-gray-300">
                No one-size-fits-all solutions here. We customize our services to
                address your unique requirements and business context.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">05</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Proven Results
              </h3>
              <p className="text-gray-300">
                Our track record of successful implementations speaks for itself,
                with measurable results and satisfied clients across industries.
              </p>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4">
                <span className="text-primary font-bold">06</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-300">
                We're committed to your long-term success, providing continuous
                support, updates, and optimization for all our solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Locations
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We maintain offices across the United States to better serve our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Headquarters
                  </h4>
                  <p className="text-gray-300">
                    100 Tech Plaza, Suite 300
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    East Coast Office
                  </h4>
                  <p className="text-gray-300">
                    500 Innovation Drive
                    <br />
                    Boston, MA 02110
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how NovaCore can help your
              organization achieve its technology goals.
            </p>
            <Button
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
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
