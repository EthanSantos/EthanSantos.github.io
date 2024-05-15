import { useState } from 'react'
import About from '../pages/About'
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const NavigationBar = () => {
    const [currentPage, setCurrentPage] = useState("about");

    const handleClick = (tab) => {
        setCurrentPage(tab);

    };

    return (
        <div>
            <div className="max-w-md mx-auto overflow-hidden mt-8 flex justify-center">
                <button className="mx-4 relative text-lg font-semibold text-black group" onClick={() => handleClick('projects')}>
                    Projects
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:bg-black"></span>
                </button>
                <button className="mx-4 relative text-lg font-semibold text-black group" onClick={() => handleClick('resume')}>
                    Resume
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:bg-black"></span>
                </button>
                <button className="mx-4 relative text-lg font-semibold text-black group" onClick={() => handleClick('about')}>
                    About
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:bg-black"></span>
                </button>
            </div>
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'resume' && <Resume />}
            {currentPage === 'about' && <About />}
        </div>
    )
}

export default NavigationBar
