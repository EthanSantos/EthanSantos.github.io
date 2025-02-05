import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/ProfilePic.png';

const ProfileCard = () => {
    return (
        <motion.div
            className="max-w-lg mx-auto bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden mt-8 flex"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ y: -10 }}
        >
            <div className="px-4 py-8 flex-1">
                <div className="text-left">
                    <motion.h1
                        className="text-2xl font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Ethan Santos
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Computer Science Major
                    </motion.p>
                    <motion.p
                        className="text-gray-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        University of California, Irvine
                    </motion.p>
                    <div className="flex">
                        <EmailButton />
                        <LinkedInButton />
                        <GithubButton />
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 flex-none">
                <motion.div
                    className="rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={profilePic} className="h-40 w-40 mx-auto object-cover" alt="Profile Picture" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const EmailButton = () => {
    return (
        <motion.a
            href="mailto:ethanas1@uci.edu"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            aria-label="Send Email"
        >
            <motion.button
                type="button"
                className="mb-2 rounded bg-[#ea4335] w-10 h-10 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.05 }}
            >
                <FaEnvelope className="w-5 h-5" />
            </motion.button>
        </motion.a>
    );
};

const LinkedInButton = () => {
    return (
        <motion.a
            href="https://www.linkedin.com/in/ethanmadeit/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            aria-label="LinkedIn Profile"
        >
            <motion.button
                type="button"
                className="mb-2 ml-2 rounded bg-[#0077b5] w-10 h-10 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.05 }}
            >
                <FaLinkedin className="w-5 h-5" />
            </motion.button>
        </motion.a>
    );
};

const GithubButton = () => {
    return (
        <motion.a
            href="https://github.com/EthanSantos"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            aria-label="GitHub Profile"
        >
            <motion.button
                type="button"
                className="mb-2 ml-2 rounded bg-[#333] w-10 h-10 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.05 }}
            >
                <FaGithub className="w-5 h-5" />
            </motion.button>
        </motion.a>
    );
};

export default ProfileCard;