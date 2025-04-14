import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const SolutionCard = ({
  icon: Icon,
  title,
  description,
  link,
  delay = 0,
}: SolutionCardProps) => {
  return (
    <motion.div
      className="glass-effect rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-14 w-14 rounded-full bg-background flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="text-primary text-2xl" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-5">{description}</p>
      <Button
        variant="link"
        className="p-0 text-primary font-medium flex items-center group-hover:gap-2 transition-all"
        asChild
      >
        <a href={link}>
          Learn more{" "}
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </a>
      </Button>
    </motion.div>
  );
};

export default SolutionCard;
