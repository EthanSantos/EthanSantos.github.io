import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-300 mb-4"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        COPYRIGHT © {new Date().getFullYear()} ETHAN SANTOS. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs text-gray-400 mt-2 md:mt-0">
                        Built with React, TailwindCSS and ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
