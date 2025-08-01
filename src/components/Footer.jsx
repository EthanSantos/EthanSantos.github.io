import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 bg-white dark:bg-[var(--bg-primary)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-300 dark:border-gray-700 mb-4"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                        COPYRIGHT © {new Date().getFullYear()} ETHAN SANTOS. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 md:mt-0 text-center md:text-right">
                        BUILT WITH REACT, TAILWINDCSS AND ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
