import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Pill from './Pill';

const Card = ({ imageSrc, title, skills, description, isVideo, link, githubLink }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    if (link) {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white dark:bg-[#313338] bg-clip-border text-gray-700 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -3,
        boxShadow: '0px 12px 20px rgba(0, 0, 0, 0.15)',
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1], // a gentle, ease-out-like curve
      }}
    >
      <motion.div
        className="relative m-0 overflow-hidden rounded-t-xl md:rounded-r-none md:rounded-l-xl bg-white dark:bg-[#1e1f22] bg-clip-border text-gray-700 dark:text-gray-100 aspect-w-16 aspect-h-9 md:aspect-w-40 md:aspect-h-10 w-full md:w-1/2"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
      >
        {isVideo ? (
          <iframe
            src={imageSrc}
            title={title}
            className="h-full w-full object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>
      <div className="p-4 md:p-6 flex flex-col w-full md:w-1/2 relative">
        <motion.h6
          className="mb-2 md:mb-4 text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black dark:text-gray-100 antialiased text-left"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
        >
          {title}
        </motion.h6>
        <motion.p
          className="mb-4 text-sm md:text-base font-normal leading-relaxed text-gray-500 dark:text-gray-300 antialiased text-left"
          dangerouslySetInnerHTML={{ __html: description }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        ></motion.p>
        <div className="flex flex-wrap mb-4">
          {skills.map((item, index) => (
            <Pill key={index} text={item.text} />
          ))}
        </div>
        {/* Footer with GitHub link and Learn More button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="min-w-[120px]">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase text-gray-700 dark:text-gray-100 cursor-pointer"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <FaGithub className="h-4 w-4" />
                View Code
              </motion.a>
            )}
          </div>
          <motion.button
            type="button"
            onClick={handleLearnMore}
            className="flex items-center gap-2 text-xs font-bold uppercase text-gray-700 dark:text-gray-100 cursor-pointer"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
