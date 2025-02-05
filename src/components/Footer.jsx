import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 text-center">
            <div className="container mx-auto max-w-xlg">
                <div className="border-t border-gray-300 mb-4"></div>
                <p className="text-sm text-gray-500">
                    COPYRIGHT © {new Date().getFullYear()} ETHAN SANTOS. ALL RIGHTS RESERVED.
                </p>
                <p className="text-xs text-gray-400 mt-2">
                    Built with React and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
