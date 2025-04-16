import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { testimonials } from "@/data/content";
import { pageTransition } from "@/utils/animations";
import { ExternalLink } from "lucide-react";

const CaseStudies = () => {
  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Retail Chain Cuts Waste by 18%",
      client: "National Pharmacy Chain",
      industry: "Retail",
      challenge: "Struggling with inventory management and product expiration leading to significant waste",
      solution: "Custom inventory forecasting system with expiration tracking",
      results: [
        "18% reduction in expired product waste",
        "32% improvement in inventory turnover",
        "Estimated $2.3M annual savings across 120 locations"
      ],
      image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Healthcare Provider Optimizes Scheduling",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Inefficient patient scheduling leading to long wait times and staff overtime",
      solution: "Predictive analytics platform for patient flow and resource allocation",
      results: [
        "37% reduction in patient wait times",
        "22% decrease in scheduling-related complaints",
        "15% increase in patient satisfaction scores"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Logistics Company Improves Delivery Accuracy",
      client: "TransCargo Logistics",
      industry: "Logistics",
      challenge: "Poor delivery time predictions leading to customer dissatisfaction",
      solution: "Machine learning-based delivery time prediction system with real-time updates",
      results: [
        "94% accuracy in delivery time predictions",
        "47% reduction in customer service calls",
        "28% increase in on-time deliveries"
      ],
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    }
  ];

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
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results from businesses that trusted Rockam with their data challenges.
            </p>
            <Button
              className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
              size="lg"
              asChild
            >
              <Link href="/contact">Become a Success Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={study.id}
                className="bg-card rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 h-64 lg:h-auto relative">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-primary/70 text-background py-2 px-4 m-4 rounded-md font-medium">
                      {study.industry}
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                        <p className="text-primary font-medium mb-4">{study.client}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <ExternalLink className="h-4 w-4 mr-1" /> Full Case Study
                      </Button>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                              <span className="h-2 w-2 bg-primary rounded-full"></span>
                            </span>
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - here's what our clients have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-background/30 p-6 rounded-lg relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-2 text-5xl text-primary opacity-30">"</div>
                <p className="text-gray-300 mb-4 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Let's Write Your Success Story
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and see how Rockam can transform your data into a competitive advantage.
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

export default CaseStudies;