import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub, FaMediumM } from "react-icons/fa";
import { fadeInAnimation } from "@/utils/animations";

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
              <span className="text-primary font-bold text-xl mr-1">Nova</span>
              <span className="text-white font-bold text-xl">Core</span>
            </div>
            <p className="text-gray-400 mb-6">
              Innovative technology solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition duration-300"
                aria-label="Medium"
              >
                <FaMediumM />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Custom Development
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} NovaCore Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
