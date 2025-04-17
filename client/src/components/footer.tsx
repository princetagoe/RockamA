import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { fadeInAnimation } from "@/utils/animations";
import ScrollLink from "@/components/scroll-link";
import { contactInfo } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-background py-12"
      variants={fadeInAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-5">
              <span className="text-primary font-bold text-xl mr-1">Rockam</span>
              <span className="text-white font-bold text-xl">Data</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming your data into actionable insights for smarter decisions.
            </p>
            <div className="flex space-x-4">
              <a
                href={contactInfo.socialMedia.linkedin}
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href={contactInfo.socialMedia.facebook}
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="/services"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Data Analytics & Intelligence
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/services"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Data Infrastructure & Engineering
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/services"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Governance & Automation
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Industries</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Retail
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Healthcare
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Travel
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Logistics
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Energy
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="/about"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/case-studies"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Case Studies
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/how-it-works"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  How It Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Rockam Data Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <ScrollLink
              to="/privacy-policy"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Privacy Policy
            </ScrollLink>
            <ScrollLink
              to="/terms-of-service"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Terms of Service
            </ScrollLink>
            <ScrollLink
              to="/cookie-policy"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Cookie Policy
            </ScrollLink>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;