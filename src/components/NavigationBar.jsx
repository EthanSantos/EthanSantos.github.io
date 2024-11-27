import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    const buttonClass = ({ isActive }) => `
        relative px-2 py-2 text-lg
        transition-all duration-300 ease-in-out
        ${isActive ? 'font-bold' : 'font-normal hover:font-bold'}
    `;

    return (
        <div className="w-full">
            <motion.nav 
                className="max-w-md mx-auto mt-4 mb-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <ul className="flex justify-between items-center">
                    {[
                        { path: "/about", label: "about" },
                        { path: "/projects", label: "projects" },
                        { path: "/experience", label: "experience" },
                        { path: "/resume", label: "resume" },
                    ].map(({ path, label }, index) => (
                        <motion.li 
                            key={label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <NavLink 
                                to={path}
                                className={(navData) => buttonClass(navData)}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                    whileTap={{ scale: 0.9 }}
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