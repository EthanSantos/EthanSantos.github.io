import { useState } from 'react';
import { motion } from 'framer-motion';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Experience from '../pages/Experience';

const NavigationBar = () => {
    const [currentPage, setCurrentPage] = useState("about");

    const handleClick = (tab) => {
        setCurrentPage(tab);
    };

    const buttonClass = (page) => `
        relative px-2 py-2 text-lg
        transition-all duration-300 ease-in-out
        ${currentPage === page ? 'font-bold' : 'font-normal hover:font-bold'}
    `;

    return (
        <div className="w-full">
            <motion.nav 
                className="max-w-md mx-auto mt-8 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <ul className="flex justify-between items-center">
                    {['about', 'projects', 'experience', 'resume'].map((page, index) => (
                        <motion.li 
                            key={page}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.button 
                                className={buttonClass(page.toLowerCase())}
                                onClick={() => handleClick(page.toLowerCase())}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {page}
                            </motion.button>
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {currentPage === 'about' && <About />}
                {currentPage === 'projects' && <Projects />}
                {currentPage === 'experience' && <Experience />}
                {currentPage === 'resume' && <Resume />}
            </motion.div>
        </div>
    );
};

export default NavigationBar;
