import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl h-64 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <img
        src={image}
        alt={`${title} industry`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
        <motion.div
          className="transform transition-all duration-500"
          whileHover={{ y: -16 }}
        >
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;
