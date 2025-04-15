import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember = ({
  name,
  position,
  bio,
  image,
  delay = 0,
}: TeamMemberProps) => {
  return (
    <motion.div
      className="glass-effect rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a
            href="#"
            className="bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-primary transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-300">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;