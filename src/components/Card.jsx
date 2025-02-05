import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Pill from './Pill';

const Card = ({ imageSrc, title, skills, description, isVideo, link, githubLink }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <motion.div
            className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <motion.div
                className="relative m-0 overflow-hidden rounded-t-xl md:rounded-r-none md:rounded-l-xl bg-white bg-clip-border text-gray-700 aspect-w-16 aspect-h-9 md:aspect-w-40 md:aspect-h-10 w-full md:w-1/2"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.3 }}
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
                    className="mb-2 md:mb-4 flex items-center gap-2 text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-left"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {title}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black hover:text-gray-900 transition-colors"
                        >
                            <CodeBracketIcon className="h-4 w-4" />
                        </a>
                    )}
                </motion.h6>
                <motion.p
                    className="mb-4 block text-sm md:text-base font-normal leading-relaxed text-gray-500 antialiased text-left"
                    dangerouslySetInnerHTML={{ __html: description }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                ></motion.p>
                <div className="flex flex-wrap mb-4">
                    {skills.map((item, index) => (
                        <Pill key={index} text={item.text} />
                    ))}
                </div>
                <div className="mt-auto flex justify-end">
                    <motion.button
                        type="button"
                        onClick={handleLearnMore}
                        className="flex items-center gap-2 text-xs font-bold uppercase text-black transition-transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1 }}
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
