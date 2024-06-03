import React from 'react'
import Pill from '../components/Pill'


const About = () => {

    const information = {
        About: "I'm a third-year Computer Science major at University of California, Irvine with a deep passion for web development and game development. My programming journey began in late 2016, and since then, I've grown my skills and expertise across various technologies.",
        Awards: "Best Startup at BearHacks"
    }
    return (
        <div className="text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">About Me</h1>
                    <p className="mb-4 text-base text-gray-600">{information.About}</p>
                    <div>
                        <h2 className="text-lg font-semibold">Game Development</h2>
                        <p className="mb-4 text-base text-gray-600">I started developing games on the ROBLOX platform and created my first successful game during quarantine in 2020 called AIMSTARS. I am proud to share that the game has amassed over 9 million plays and generated over $30,000 in revenue. AIMSTARS still has 15,000 monthly active users today!</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Web Development</h2>
                        <p className="mb-8 text-base text-gray-600">I also have a lot of experience in web development, participating in multiple hackathons, where I currently have 3 wins under my belt. These experiences have sharpened my skills and fostered my creativity in building innovative projects.</p>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Education</h1>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">University of California, Irvine</h2>
                            <p className="text-base text-gray-600">Bachelor of Science in Computer Science</p>
                            <p className="mb-4 text-base text-gray-600">GPA: 3.9 / 4.0</p>
                        </div>
                        <p className="text-base text-gray-600">Sep. 2023 – June 2025</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">Mount San Antonio College</h2>
                            <p className="text-base text-gray-600">Computer Science Transfer</p>
                            <p className="mb-4 text-base text-gray-600">GPA: 3.94 / 4.0</p>
                        </div>
                        <p className="text-base text-gray-600">Aug. 2021 – June 2023</p>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Awards</h1>
                    <p className="mb-2 text-base text-gray-600">{information.Awards}</p>
                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    <Pill text={"C++"} />
                    <Pill text={"Java"} />
                    <Pill text={"JavaScript"} />
                    <Pill text={"TypeScript"} />
                    <Pill text={"Python"} />
                    <Pill text={"Lua"} />
                    <Pill text={"SQL"} />
                    <Pill text={"HTML/CSS"} />
                    <Pill text={"React"} />
                    <Pill text={"Flask"} />
                    <Pill text={"TailwindCSS"} />
                    <Pill text={"MaterialUI"} />
                </div>
            </div>
        </div>
    )
}

export default About
