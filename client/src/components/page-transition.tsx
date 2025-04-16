import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (prevLocation !== location) {
      // New page is being loaded
      setIsLoading(true);
      setPrevLocation(location);
      
      // Simulate loading time (remove this in production and replace with actual loading logic)
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timeout);
    }
  }, [location, prevLocation]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-t-4 border-primary border-opacity-50 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full border-r-4 border-primary animate-spin"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="h-2 w-2 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="page"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;