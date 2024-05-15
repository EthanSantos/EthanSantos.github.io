import React from 'react';
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe src={resume} width="50%" height="1000px"></iframe>
        </div>
    );
};

export default Resume;