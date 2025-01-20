import React from 'react';
import { motion } from 'framer-motion';
import Pill from '../components/Pill';

import { experiences } from '../components/ExperiencesData';

const Experience = () => {
    return (
        <div className="min-h-screen bg-white text-black py-12">
            <div className="container mx-auto px-4 lg:px-48">
                <div className="relative">
                    {/* Timeline vertical line (desktop) */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                    {/* Timeline vertical line (mobile/tablet) */}
                    <div className="lg:hidden absolute left-8 h-full border-l-2 border-gray-300"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="mb-8 flex justify-between items-start w-full lg:flex-row flex-col lg:relative"
                        >
                            {/* Logo circle (desktop) */}
                            <div
                                className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-gray-300 z-10"
                                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                            >
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                />
                            </div>

                            {/* Mobile/Tablet timeline layout */}
                            <div className="lg:hidden w-full flex">
                                {/* Logo circle (mobile/tablet) */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-gray-300 z-10 relative left-0">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-[90%] h-[90%] rounded-full object-cover m-auto mt-[5%]"
                                    />
                                </div>

                                {/* Content card (mobile/tablet) */}
                                <motion.div
                                    className="flex-grow ml-4 bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    {/* Arrow pointing to logo */}
                                    <div className="absolute left-0 top-[32px] transform -translate-x-full">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-300"></div>
                                    </div>

                                    <h2 className="text-lg font-bold">{exp.title}</h2>
                                    <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                    <p className="text-xs text-gray-400">{exp.date}</p>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {exp.description}
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {exp.technologies.map((tech, idx) => (
                                            <Pill key={idx} text={tech} />
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Desktop layout */}
                            {index % 2 === 0 ? (
                                <>
                                    {/* Right-side card (desktop) */}
                                    <div className="hidden lg:flex lg:w-[45%] justify-end lg:pr-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 w-full"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            {/* Arrow (right) */}
                                            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-300"></div>
                                            </div>

                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                {exp.technologies.map((tech, idx) => (
                                                    <Pill key={idx} text={tech} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className="hidden lg:block w-[45%]"></div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden lg:block w-[45%]"></div>
                                    {/* Left-side card (desktop) */}
                                    <div className="hidden lg:flex lg:w-[45%] justify-start lg:pl-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 w-full"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            {/* Arrow (left) */}
                                            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-300"></div>
                                            </div>

                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                {exp.technologies.map((tech, idx) => (
                                                    <Pill key={idx} text={tech} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;