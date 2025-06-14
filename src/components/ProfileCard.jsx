import React, { useState, useRef, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/ProfilePic.png';
import ThemeToggle from './ThemeToggle';

// Array of social links
const socialLinks = [
  {
    href: "mailto:ethanas1@uci.edu",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    hoverClass: "hover:text-red-600",
  },
  {
    href: "https://www.linkedin.com/in/ethanmadeit/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    label: "LinkedIn",
    hoverClass: "hover:text-[#0077b5]",
  },
  {
    href: "https://github.com/EthanSantos",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: "GitHub",
    hoverClass: "hover:text-gray-900",
  },
];

// Add status options
const statusOptions = [
  { id: 'online', label: 'Online', color: 'bg-green-500' },
  { id: 'idle', label: 'Idle', color: 'bg-yellow-500' },
  { id: 'busy', label: 'Busy', color: 'bg-red-500' },
  { id: 'offline', label: 'Offline', color: 'bg-gray-500' }
];

const ProfileCard = () => {
  // Add state for status and dropdown visibility
  const [status, setStatus] = useState('online');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowStatusDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get current status object
  const currentStatus = statusOptions.find(option => option.id === status);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Profile pic animation variants
  const profilePicVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.5
      }
    }
  };

  // Text content animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }
    }
  };

  // Social links container animation
  const socialsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
        duration: 0.5
      }
    }
  };

  // Individual social link animation
  const socialItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.header
      className="w-full bg-white dark:bg-[var(--bg-primary)] overflow-x-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-12 md:px-24 lg:px-36 pt-12 pb-4">
        {/* Theme toggle button */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 pb-2">
          {/* Image and Text Container */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Profile Picture with bounce animation and status indicator */}
            <motion.div
              className="shrink-0 relative"
              variants={profilePicVariants}
            >
              <div className="w-28 h-28 rounded-lg overflow-hidden">
                <img
                  src={profilePic}
                  alt="Ethan Santos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-0 right-0">
                <button
                  className={`${currentStatus.color} w-8 h-8 rounded-full border-4 border-white dark:border-[#242424] flex items-center justify-center cursor-pointer 
                  transform hover:scale-110 active:scale-95 transition-all duration-200 
                  shadow-lg hover:shadow-xl 
                  translate-x-1/4 translate-y-1/4
                  before:absolute before:inset-0 before:rounded-full before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity
                  after:absolute after:inset-0 after:rounded-full after:bg-black/5 dark:after:bg-white/5 after:opacity-0 hover:after:opacity-100 after:transition-opacity`}
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  aria-label="Change status"
                >
                  {status === 'online' && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  {status === 'idle' && <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div></div>}
                  {status === 'busy' && <div className="w-3.5 h-0.5 bg-white rounded-full"></div>}
                  {status === 'offline' && <div className="w-3 h-3 bg-white rounded-full opacity-0"></div>}
                </button>

                {/* Status dropdown */}
                {showStatusDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute bottom-0 left-full ml-3 bg-white shadow-lg rounded-md py-1 z-20 w-28"
                  >
                    {statusOptions.map(option => (
                      <button
                        key={option.id}
                        className="flex items-center w-full px-3 py-1.5 text-xs text-left hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setStatus(option.id);
                          setShowStatusDropdown(false);
                        }}
                      >
                        <span className={`${option.color} w-2 h-2 rounded-full mr-2`}></span>
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="text-center sm:text-left flex flex-col justify-center"
              variants={textVariants}
            >
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 leading-none">
                Ethan Santos
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-1 text-base leading-snug">Computer Science Major</p>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-snug">
                University of California, Irvine
              </p>
            </motion.div>
          </div>

          {/* Social Links with staggered animation */}
          <motion.div
            className="flex gap-6"
            variants={socialsContainerVariants}
          >
            {socialLinks.map(({ href, icon, label, hoverClass }, index) => (
              <SocialLink
                key={index}
                href={href}
                icon={icon}
                label={label}
                className={hoverClass}
                variants={socialItemVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

// Enhanced SocialLink component with hover animations
const SocialLink = ({ href, icon, label, className = '', variants }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-gray-500 transition-colors duration-200 ${className}`}
      variants={variants}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default ProfileCard;