import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  count?: number;
}

const Particles = ({ count = 50 }: ParticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear any existing particles
    container.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 6 + 2;
      const particle = document.createElement('div');
      
      particle.classList.add('absolute', 'rounded-full', 'bg-primary', 'bg-opacity-20', 'pointer-events-none');
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Apply animation
      particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [count]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default Particles;
