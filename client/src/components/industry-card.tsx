import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IndustryCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const IndustryCard = ({
  image,
  title,
  description,
  delay = 0,
}: IndustryCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="mb-6">
      <motion.div
        className={`relative overflow-hidden rounded-xl ${expanded ? 'h-72' : 'h-64'} group cursor-pointer transition-all duration-500`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setExpanded(!expanded)}
        layout="position"
      >
        <img
          src={image}
          alt={`${title} industry`}
          className={`w-full h-full object-cover transition-transform duration-500 ${expanded ? 'scale-105' : 'group-hover:scale-110'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
          <motion.div
            className="transform transition-all duration-500"
            whileHover={{ y: expanded ? 0 : -16 }}
            layout="position"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            {expanded ? (
              <p className="text-white font-medium text-sm bg-black/60 p-3 rounded-md">
                {description}
              </p>
            ) : (
              <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 p-2 rounded-md">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/5 backdrop-blur-sm p-6 rounded-b-xl -mt-2 border-t-0 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full">
                <h4 className="text-lg font-semibold mb-2 text-primary">Data Solutions for {title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Advanced Analytics</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Machine Learning</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Real-time Dashboards</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                className="text-sm text-primary hover:underline flex items-center"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndustryCard;
