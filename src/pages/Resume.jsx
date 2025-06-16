import React from 'react';
import resume from '../assets/resume.pdf';

const Resume = () => {
    const googleDriveLink = "https://drive.google.com/file/d/1elUV_Jl874FQzMBYh4ENbi62-qzR1oPv/view?usp=sharing";

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
                <object
                    data={resume}
                    type="application/pdf"
                    className="w-full h-full"
                    title="Resume"
                >
                    <p>
                        It appears your browser doesn't support PDFs. You can {" "}
                        <a 
                            href={resume} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            download the PDF
                        </a> {" "}
                        or {" "}
                        <a 
                            href={googleDriveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            view it on Google Drive
                        </a>.
                    </p>
                </object>
            </div>
        </div>
    );
};

export default Resume;