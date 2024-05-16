import React from 'react';
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe className = "pdf"
                src={resume}
                style={{ backgroundColor: 'transparent', width: 1000, height: '85%' }}
                title="Resume"
            ></iframe>
        </div>
    );
};

export default Resume;