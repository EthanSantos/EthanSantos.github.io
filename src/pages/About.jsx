import React from 'react'
import Pill from '../components/Pill'
import uci from '../assets/uci.png'
import mtsac from '../assets/mtsac.png'

const About = () => {

    const information = {
        About: "I'm a Computer Science major at University of California, Irvine with a deep passion for web development and game development. My programming journey began in late 2016, and since then, I have grown my skills and expertise across various technologies. In my free time, I love exercising daily - whether that's going to the gym, playing basketball or hiking with my friends. I am also a car enthusiast, amateur chess player, and avid book reader.",
        Awards: "Coinbase Onchain Summer Buildathon - GAMING with thirdweb, Best Startup at BearHacks (UC Riverside), Best User Experience Award at Roblox x USC Game Jam, Dean’s Honors List, Mount San Antonio College Honors Program"
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
                        <p className="mb-8 text-base text-gray-600">I also have a lot of experience in web development, participating in multiple hackathons, where I currently have 4 wins under my belt. These experiences have sharpened my skills and fostered my creativity in building innovative projects.</p>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Education</h1>

                    <div className="flex items-start mb-4">
                        <img src={uci} alt="UCI Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">University of California, Irvine</h2>
                                <p className="text-base">Sep. 2023 – December 2025</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-base text-gray-600" >Bachelor of Science in Computer Science</p>
                                <p className="text-sm">Irvine, CA</p>
                            </div>
                            <p className="text-base text-gray-600">GPA: 3.9 / 4.0</p>
                        </div>
                    </div>


                    <div className="flex items-start mb-4">
                        <img src={mtsac} alt="MtSac Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Mount San Antonio College</h2>
                                <p className="text-base">Aug. 2021 – June 2023</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-base text-gray-600" >Computer Science Transfer</p>
                                <p className="text-sm">Walnut, CA</p>
                            </div>
                            <p className="text-base text-gray-600">GPA: 3.94 / 4.0</p>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Awards</h1>
                    <p className="mb-4 text-base text-gray-600">{information.Awards}</p>
                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    <Pill text={"React"} />
                    <Pill text={"React Native"} />
                    <Pill text={"C++"} />
                    <Pill text={"Swift"} />
                    <Pill text={"Java"} />
                    <Pill text={"JavaScript"} />
                    <Pill text={"TypeScript"} />
                    <Pill text={"Python"} />
                    <Pill text={"Lua"} />
                    <Pill text={"SQL"} />
                    <Pill text={"HTML"} />
                    <Pill text={"CSS"} />
                    <Pill text={"Flask"} />
                    <Pill text={"TailwindCSS"} />
                    <Pill text={"Bootstrap"} />
                    <Pill text={"MaterialUI"} />
                </div>
            </div>
        </div>
    )
}

export default About
