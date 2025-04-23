import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { howItWorks } from "@/data/content";
import { pageTransition } from "@/utils/animations";

const HowItWorks = () => {
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
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="How Our Process Works"
            className="w-full h-full object-cover"
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
              <span className="text-backdrop">From Raw Data to Results—Fast</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl text-shadow bg-black/20 p-4 rounded-lg">
              Our process is simple, human, and fast. You don't need to know data science—we do.
            </p>
            <Button
              className="btn-gradient text-white font-semibold rounded-full px-8 py-6"
              size="lg"
              asChild
            >
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make data insights accessible for any business, regardless of your technical expertise.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-20 relative">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div 
                    key={step.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                        <div className="relative">
                          {/* Step number badge */}
                          <div className="absolute top-0 left-0 -mt-4 -ml-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                            {step.id}
                          </div>
                          
                          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
                            <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connector dot visible on md screens and above */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-md"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Common questions about our data services process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How long does the process take?</h3>
              <p className="text-gray-600">
                Most clients see their first insights within 2-3 weeks of our initial meeting, depending on the complexity of your data sources and specific requirements.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do I need to have existing data infrastructure?</h3>
              <p className="text-gray-600">
                Not at all. We can work with your data in any format and help establish efficient data pipelines if needed.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How do you ensure data security?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security protocols and comply with all relevant data protection regulations. Your data is always kept secure and confidential.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do I need technical expertise to use your dashboards?</h3>
              <p className="text-gray-600">
                Absolutely not. We design our dashboards to be intuitive and user-friendly. We also provide training to ensure you can easily interpret and use the insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-white rounded-xl shadow-xl p-8 md:p-10 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Start Your Data Journey?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage your data to make smarter business decisions and drive growth.
            </p>
            <Button
              className="btn-gradient text-white font-semibold rounded-full px-8 py-6"
              size="lg"
              asChild
            >
              <Link href="/contact">Book Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;