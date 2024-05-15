import React from 'react'

const Footer = () => {
    return (
        <footer className="py-4 text-center">
            <div className="container mx-auto">
                <p className="text-sm">
                    Copyright © {new Date().getFullYear()} Ethan Santos. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer
