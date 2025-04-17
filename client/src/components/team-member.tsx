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
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a
            href="#"
            className="bg-white backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-primary transition duration-300 shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="bg-white backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-primary transition duration-300 shadow-md"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-primary font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;