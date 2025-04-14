import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SolutionCard from "@/components/solution-card";
import { solutions } from "@/data/content";
import { pageTransition } from "@/utils/animations";

const Solutions = () => {
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
              Our Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cutting-edge solutions designed to transform your business and
              drive sustainable growth in a digital world.
            </p>
            <Button
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              size="lg"
              asChild
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background" id="solutions-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                link={solution.link}
                delay={index}
              />
            ))}
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
              Looking for a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We understand that every business has unique needs. Contact our
              team to discuss how we can develop a tailored solution for your
              specific challenges.
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

export default Solutions;
