import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin } from "lucide-react";
import ValueCard from "@/components/value-card";
import TeamMember from "@/components/team-member";
import { values, teamMembers } from "@/data/content";
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
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Rockam
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate data experts dedicated to helping businesses
              make better decisions through powerful analytics.
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At Rockam, we believe data should empower organizations
                to achieve their fullest potential. Our mission is to deliver
                actionable insights that drive meaningful transformation and
                sustainable growth.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
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
              What sets us apart from other data analytics providers in the industry.
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
                Industry Expertise
              </h3>
              <p className="text-gray-300">
                Our team brings deep knowledge and experience across multiple
                industries, allowing us to understand your specific data challenges.
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
                Advanced Analytics
              </h3>
              <p className="text-gray-300">
                We leverage cutting-edge analytics tools and techniques, ensuring our
                insights are always accurate, actionable, and future-ready.
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
                Client Partnership
              </h3>
              <p className="text-gray-300">
                We view every engagement as a partnership, working closely with
                you to achieve your business objectives and long-term success.
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
                Tailored Approach
              </h3>
              <p className="text-gray-300">
                No one-size-fits-all solutions here. We customize our analytics to
                address your unique requirements and business context.
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
                Proven Results
              </h3>
              <p className="text-gray-300">
                Our track record of successful implementations speaks for itself,
                with measurable results and satisfied clients across industries.
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
                Ongoing Support
              </h3>
              <p className="text-gray-300">
                We're committed to your long-term success, providing continuous
                support, updates, and optimization for all our data solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in data analytics, 
              innovation, and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
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
              Our Locations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain offices across the United States to better serve our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    Headquarters
                  </h4>
                  <p className="text-gray-600">
                    100 Tech Plaza, Suite 300
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">
                    East Coast Office
                  </h4>
                  <p className="text-gray-600">
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
              className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
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
