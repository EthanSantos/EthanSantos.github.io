import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/about', label: 'about' },
  { path: '/projects', label: 'projects' },
  { path: '/experience', label: 'experience' },
  { path: '/resume', label: 'resume' },
];

// Enhanced item variants with initial loading animation
const itemVariants = {
  hidden: { 
    y: -20, 
    opacity: 0 
  },
  visible: (i) => ({ 
    y: 0, 
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 15,
    }
  }),
  hover: { 
    scale: 1.1, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    } 
  },
  tap: { 
    scale: 0.95, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 15
    } 
  },
};

// Nav container initial load animation
const containerVariants = {
  hidden: { 
    y: -20, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerClass = `
    sticky top-0 z-50 w-full transition-all duration-300
    ${scrolled ? 'bg-white/70 backdrop-blur-sm py-6 shadow-lg' : 'bg-white py-8 shadow-sm'}
  `;

  const linkClass = ({ isActive }) => `
    relative px-4 py-2 text-base transition-colors duration-300 ease-in-out
    ${isActive ? 'font-bold text-black' : 'font-normal text-gray-600 hover:text-black'}
  `;

  const handleNavClick = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={navContainerClass}>
      <motion.nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-2xl mx-auto px-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.ul className="flex justify-evenly items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              custom={i}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink to={item.path} className={linkClass} onClick={handleNavClick}>
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default NavigationBar;