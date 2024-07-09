import { useState } from 'react'
import About from '../pages/About'
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
            <nav className="max-w-md mx-auto mt-8 mb-4">
                <ul className="flex justify-between items-center">
                    {['Projects', 'Experience', 'Resume', 'About'].map((page) => (
                        <li key={page}>
                            <button 
                                className={buttonClass(page.toLowerCase())}
                                onClick={() => handleClick(page.toLowerCase())}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="w-full">
                {currentPage === 'projects' && <Projects />}
                {currentPage === 'experience' && <Experience />}
                {currentPage === 'resume' && <Resume />}
                {currentPage === 'about' && <About />}
            </div>
        </div>
    )
}

export default NavigationBar