import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations";
import ScrollLink from "@/components/scroll-link";
import ThemeToggle from "@/components/theme-toggle";

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
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeInAnimation}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ScrollLink to="/" className="flex items-center">
                <span className="text-primary font-bold text-xl mr-1">Nova</span>
                <span className="text-foreground font-bold text-xl">Core</span>
              </ScrollLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, i) => (
                <ScrollLink
                  key={i}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    location === link.path
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
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
          className="md:hidden glass-effect"
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
                    ? "text-primary bg-muted"
                    : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="flex items-center px-3 py-2">
              <span className="text-sm font-medium text-foreground/80 mr-2">Toggle Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
