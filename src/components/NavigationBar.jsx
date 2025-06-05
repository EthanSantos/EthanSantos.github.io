import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from '@heroicons/react/24/outline';

const navItems = [
  { path: '/about', label: 'about' },
  { path: '/projects', label: 'projects' },
  { path: '/experience', label: 'experience' },
  { path: '/resume', label: 'resume' },
];

const itemVariants = {
  hidden: { 
    y: -30, 
    opacity: 0,
    rotateX: -10
  },
  visible: (i) => ({ 
    y: 0, 
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 300,
      damping: 6,
      mass: 0.8,
      velocity: 3
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

const containerVariants = {
  hidden: { 
    opacity: 0,
    y: -20,
    scale: 0.97
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 8,
      mass: 1,
      staggerChildren: 0.07,
      delayChildren: 0.15
    }
  }
};

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className={navContainerClass}>
      <motion.nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-2xl mx-auto px-3 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex justify-end sm:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
            className="p-2 rounded focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <motion.ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex justify-evenly items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0`}
        >
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