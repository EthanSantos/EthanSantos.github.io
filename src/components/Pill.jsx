import React from 'react';
import { motion } from 'framer-motion';

const Pill = ({ text }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#E5E7EB", // Hover color similar to light gray
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            transition={{ duration: 0.2 }}
        >
            <span className="text-gray-700">{text}</span>
        </motion.div>
    );
};

export default Pill;
