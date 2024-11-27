import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Pill from './Pill';

const Card = ({ imageSrc, title, skills, description, isVideo, link }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        if (link) {
            navigate(link); // Navigate to the specified route
        }
    };

    return (
        <motion.div
            className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="relative m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 aspect-w-20 aspect-h-10 md:aspect-w-40 md:aspect-h-10 md:w-1/2"
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
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                )}
            </motion.div>
            <div className="p-4 md:p-6 flex flex-col justify-start w-full md:w-1/2 relative">
                <motion.h6
                    className="mb-2 md:mb-4 block text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-left"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {title}
                </motion.h6>
                <motion.p
                    className="mb-4 block text-sm md:text-base font-normal leading-relaxed text-gray-500 antialiased text-left"
                    dangerouslySetInnerHTML={{ __html: description }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                </motion.p>
                <div className="flex flex-wrap mb-4">
                    {skills.map((item, index) => (
                        <Pill key={index} text={item.text} />
                    ))}
                </div>
                <div className="absolute bottom-0 right-0 mb-4 mr-6 md:mr-4">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all"
                        type="button"
                        onClick={handleLearnMore}
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;