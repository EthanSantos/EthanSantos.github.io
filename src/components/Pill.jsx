import React from 'react';

const Pill = ({ text }) => {
    return (
        <div
            className="inline-block bg-gray-200 dark:bg-[#3a3c41] rounded-md px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-100 mr-2 mb-2 
                       hover:scale-105 hover:shadow-lg hover:bg-gray-300 dark:hover:bg-[#4b4d53] transition-transform duration-200 ease-in-out
                       active:scale-95"
        >
            <span className="text-gray-700 dark:text-gray-100">{text}</span>
        </div>
    );
};

export default Pill;
