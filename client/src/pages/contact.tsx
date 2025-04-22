import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pageTransition } from "@/utils/animations";
import { contactInfo, locations } from "@/data/content";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Parse the service from URL if present
  const getInterestFromService = (service?: string) => {
    if (!service) return "";
    
    const serviceMap: Record<string, string> = {
      'dashboard-reporting': 'analytics',
      'predictive-analytics': 'ai',
      'insight-as-a-service': 'analytics',
      'data-warehousing': 'cloud',
      'data-engineering': 'development',
      'cloud-management': 'cloud',
      'data-governance': 'security',
      'process-automation': 'development'
    };
    
    return serviceMap[service] || '';
  };
  
  // Get service from URL parameter
  const urlService = window.location.search.includes('service=') 
    ? window.location.search.split('service=')[1].split('&')[0]
    : '';
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: getInterestFromService(urlService),
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent",
        description: "Your message has been received and would be sent to info@rockam.ai in a production environment.",
      });
      console.log("Contact form submission:", response);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or ready to transform your data strategy? Reach out to our team
              today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white shadow-xl rounded-xl p-8 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-white border-gray-300 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            className="bg-white border-gray-300 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Area of Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-gray-300 focus:ring-primary">
                              <SelectValue placeholder="Select your interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ai">
                              AI & Machine Learning
                            </SelectItem>
                            <SelectItem value="cloud">
                              Cloud Infrastructure
                            </SelectItem>
                            <SelectItem value="security">
                              Cybersecurity
                            </SelectItem>
                            <SelectItem value="development">
                              Custom Development
                            </SelectItem>
                            <SelectItem value="analytics">
                              Data Analytics
                            </SelectItem>
                            <SelectItem value="mobile">
                              Mobile Solutions
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="bg-white border-gray-300 focus:border-primary"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-primary rounded-xl p-8 mb-8 shadow-lg text-white">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Our Locations
                </h3>

                <div className="space-y-6">
                  {locations.map((location) => (
                    <div key={location.id} className="flex items-start">
                      <div className="bg-white/20 rounded-full p-2 mr-4 mt-0.5">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">
                          {location.title}
                        </h4>
                        <p className="text-blue-100">
                          {location.address}
                          <br />
                          {location.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Connect With Us
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-700 hover:text-primary transition duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-gray-700 hover:text-primary transition duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-gray-700">{contactInfo.hours}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition duration-300 shadow-sm border border-gray-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition duration-300 shadow-sm border border-gray-200"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition duration-300 shadow-sm border border-gray-200"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition duration-300 shadow-sm border border-gray-200"
                      aria-label="Medium"
                    >
                      <FaMediumM />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Visit Our Offices
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0952123206644!2d-122.39633072405955!3d37.79133111459036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858061cbb5a467%3A0x3ed6b05f41229f9c!2sEmbarcadero%20Center%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1659463264075!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Rockam Data Services Headquarters Map"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-white/30 rounded-xl"></div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 h-[400px] flex flex-col shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Office Hours & Information
              </h3>
              
              <div className="grid gap-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Business Hours</h4>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Phone Support</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                    <p className="text-gray-500 text-sm">For urgent inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Email</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  className="w-full bg-primary text-white font-semibold hover:bg-primary/90 shadow-md"
                  asChild
                >
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Schedule a Meeting
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
