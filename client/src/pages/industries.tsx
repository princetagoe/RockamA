import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IndustryCard from "@/components/industry-card";
import { industries } from "@/data/content";
import { pageTransition } from "@/utils/animations";
import teamMeetingImg from "@/assets/images/team-meeting.jpg";

const Industries = () => {
  return (
    <motion.div
      className="pt-16"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={teamMeetingImg} 
            alt="Team meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Specialized solutions designed to address the unique challenges
              faced by businesses across different industries.
            </p>
            <Button
              className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
              size="lg"
              asChild
            >
              <Link href="/contact">Discuss Your Industry</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across various sectors to address unique industry challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                title={industry.title}
                description={industry.description}
                image={industry.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Industry Approach
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              We believe that effective technology solutions must be tailored to
              the specific needs and challenges of each industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Industry Analysis
              </h3>
              <p className="text-gray-600">
                We conduct thorough research to understand your industry's
                specific challenges, regulations, and opportunities.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                Our team develops customized technology solutions that address
                your industry's unique requirements and pain points.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Continuous Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of industry trends to ensure our solutions remain
                cutting-edge and deliver long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl shadow-xl p-8 md:p-10 text-center border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expertise extends beyond the industries listed. Contact us to
              discuss how we can help your specific business sector.
            </p>
            <Button
              className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
              size="lg"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Industries;
