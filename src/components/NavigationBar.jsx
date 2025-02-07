import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavigationBar = () => {
  // Track if the user has scrolled down past 50 pixels
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change threshold as needed
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use conditional classes based on scroll state
  const navContainerClass = `
    sticky top-0 z-50 w-full shadow-sm rounded-xl transition-all duration-300
    ${scrolled ? 'bg-white/70 backdrop-blur-sm py-2' : 'bg-white py-2'}
  `;

  const buttonClass = ({ isActive }) => `
    relative px-4 py-2 text-base
    transition-all duration-300 ease-in-out
    ${isActive ? 'font-bold text-black' : 'font-normal text-gray-600 hover:text-black'}
  `;

  return (
    <div className={navContainerClass}>
      <motion.nav
        className="max-w-2xl mx-auto px-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <ul className="flex justify-evenly items-center space-x-6">
          {[
            { path: '/about', label: 'about' },
            { path: '/projects', label: 'projects' },
            { path: '/experience', label: 'experience' },
            { path: '/resume', label: 'resume' },
          ].map(({ path, label }, index) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink to={path} className={(navData) => buttonClass(navData)}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {label}
                </motion.div>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default NavigationBar;
