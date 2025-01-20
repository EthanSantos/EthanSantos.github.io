import React from 'react';
import resume from '../assets/resume.pdf';

const Resume = () => {
    const googleDriveLink = "https://drive.google.com/file/d/1F8ezWbh7f0K_3xq633s-822cDaxrRffY/view?usp=sharing"; // Replace with your Google Drive link

    return (
        <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-start items-center p-24">
            {/* Display link for mobile */}
            <div className="block sm:hidden text-center mb-4">
                <a
                    href={googleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-150"
                >
                    View Resume
                </a>
            </div>

            {/* Display iframe for larger screens */}
            <div className="hidden sm:block max-w-2xl mx-auto w-full h-full">
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
