import React from 'react';
import { motion } from 'framer-motion';
import bluesocial from '../assets/bluesocial.png';
import fusion from '../assets/fusion.png';
import buzzy from '../assets/buzzy.png';
import bestbuy from '../assets/bestbuy.png';
import mtsac from '../assets/mtsac.png';
import Pill from '../components/Pill';
import Google from "../assets/Google.png";
import Zotbins from "../assets/Zotbins.svg"

import { experiences } from '../components/ExperiencesData';

const Experience = () => {
    return (
        <div className="min-h-screen bg-white text-black py-12">
            <div className="container mx-auto px-4 md:px-48">
                <div className="relative">
                    {/* Timeline vertical line (desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="mb-8 flex justify-between items-start w-full md:flex-row flex-col md:relative"
                        >
                            {/* Logo circle (desktop) */}
                            <div
                                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-gray-300 z-10"
                                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                            >
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                />
                            </div>

                            {/* Logo circle (mobile) */}
                            <div className="md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-300 mx-auto">
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                />
                            </div>

                            {index % 2 === 0 ? (
                                <>
                                    {/* Right-side card (desktop) */}
                                    <div className="md:w-[45%] flex justify-end md:pr-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 w-full mt-4 md:mt-0 md:relative"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            {/* Arrow (right) */}
                                            <div
                                                className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2"
                                            >
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-300"></div>
                                            </div>

                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            <div className="mt-2 flex flex-wrap">
                                                {exp.technologies.map((tech, idx) => (
                                                    <Pill key={idx} text={tech} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Empty space on the left side in desktop */}
                                    <div className="hidden md:block w-[45%]"></div>
                                </>
                            ) : (
                                <>
                                    {/* Empty space on the right side in desktop */}
                                    <div className="hidden md:block w-[45%]"></div>

                                    {/* Left-side card (desktop) */}
                                    <div className="md:w-[45%] flex justify-start md:pl-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 w-full mt-4 md:mt-0 md:relative"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            {/* Arrow (left) */}
                                            <div
                                                className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2"
                                            >
                                                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-300"></div>
                                            </div>

                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            <div className="mt-2 flex flex-wrap">
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