import { useState } from "react";
import { motion } from "framer-motion";
import IndustryDetailModal from "./industry-detail-modal";

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
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <motion.div
        className="relative overflow-hidden rounded-xl h-64 group cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setModalOpen(true)}
      >
        <img
          src={image}
          alt={`${title} industry`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
          <motion.div
            className="transform transition-all duration-500"
            whileHover={{ y: -16 }}
          >
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 p-2 rounded-md">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Detail modal */}
      <IndustryDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={title}
        description={description}
        image={image}
      />
    </>
  );
};

export default IndustryCard;
