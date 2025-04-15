import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToTop } from "@/lib/utils";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled beyond 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => scrollToTop()}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/80 backdrop-blur-sm text-background hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;