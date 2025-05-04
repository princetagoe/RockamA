import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations";
import ScrollLink from "@/components/scroll-link";
import { Button } from "@/components/ui/button";
import rockamLogo from "@/assets/logo-horizontal.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`relative w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-3 bg-white shadow-md" : "py-4 bg-white"
        }`}
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        {/* Removed Diagonal Shape for Brand Section - Using white background instead */}
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center z-10">
              <div className="flex-shrink-0">
                <ScrollLink to="/" className="flex items-center">
                  <div className="flex items-center">
                    <img 
                      src={rockamLogo} 
                      alt="Rockam Data Services" 
                      className="h-14 mr-2" 
                    />
                  </div>
                </ScrollLink>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-end flex-1">
              <div className="ml-10 flex items-center space-x-2">
                {navLinks.map((link, i) => (
                  <ScrollLink
                    key={i}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                      location === link.path
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </ScrollLink>
                ))}
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 rounded-full ml-4"
                >
                  <ScrollLink to="/contact">Get a quote now</ScrollLink>
                </Button>
              </div>
            </div>
            
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, i) => (
                <ScrollLink
                  key={i}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location === link.path
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="/contact"
                className="block px-3 py-2 mt-2 text-base font-medium bg-primary text-white rounded-md"
              >
                Contact Us
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
