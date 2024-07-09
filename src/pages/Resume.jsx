import React from 'react';
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center p-4">
            <div className="max-w-2xl mx-auto w-full h-full">
                <iframe 
                    className="w-full h-full"
                    src={`${resume}#view=FitH`}
                    title="Resume"
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;