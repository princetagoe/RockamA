import { Link } from "wouter";
import { scrollToTop } from "@/lib/utils";
import { ReactNode } from "react";

// Create a simple wrapper component around Link that scrolls to top
const ScrollLink = ({ 
  children, 
  to,
  ...props 
}: {
  children: ReactNode;
  to: string;
  [key: string]: any;
}) => {
  return (
    <Link 
      to={to} 
      onClick={() => scrollToTop()}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;