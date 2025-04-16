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
      
      // Use an extremely short loading time for near-instant transitions
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 100);
      
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
            transition={{ duration: 0.1 }}
          >
            <div className="relative">
              <div className="loader-ring"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loader-ring-inner"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="loader-dot"></div>
              </div>
              <motion.div 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                Loading...
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="page"
            className="w-full"
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ 
              type: "tween", 
              ease: "easeOut", 
              duration: 0.1,
              staggerChildren: 0.02
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;