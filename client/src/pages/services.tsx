import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SolutionCard from "@/components/solution-card";
import { services } from "@/data/content";
import { pageTransition } from "@/utils/animations";

const Services = () => {
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
              What We Offer
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Every insight, every dashboard, every forecast—without the cost of a full-house data team.
            </p>
            <Button
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              size="lg"
              asChild
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How Our Services Deliver Value</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              We blend technical expertise with business insight to create data solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-background/30 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Increased Efficiency</h3>
              <p className="text-gray-300">
                Automated data processes save time and reduce manual work, letting your team focus on what matters.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background/30 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Better Decision Making</h3>
              <p className="text-gray-300">
                Clear, actionable insights enable faster and more confident business decisions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background/30 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>
              <p className="text-gray-300">
                Get enterprise-level data capabilities without the overhead of building an in-house team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Put Your Data to Work?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss your data challenges and discover how Rockam can help transform your business.
            </p>
            <Button
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              size="lg"
              asChild
            >
              <Link href="/contact">Request a Free Proposal</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;