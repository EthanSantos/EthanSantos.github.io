import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/about', label: 'about' },
  { path: '/projects', label: 'projects' },
  { path: '/experience', label: 'experience' },
  { path: '/resume', label: 'resume' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
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

  // Use template literals to conditionally apply styles
  const navContainerClass = `
    sticky top-0 z-50 w-full shadow-sm rounded-xl transition-all duration-300 py-2
    ${scrolled ? 'bg-white/70 backdrop-blur-sm' : 'bg-white'}
  `;

  // Function that returns the classes for each NavLink based on its active state
  const linkClass = ({ isActive }) => `
    relative px-4 py-2 text-base transition-all duration-300 ease-in-out
    ${isActive ? 'font-bold text-black' : 'font-normal text-gray-600 hover:text-black'}
  `;

  return (
    <div className={navContainerClass}>
      <motion.nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-2xl mx-auto px-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ul className="flex justify-evenly items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              custom={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default NavigationBar;
