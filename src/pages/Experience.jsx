import React from 'react';
import { motion } from 'framer-motion';
import bluesocial from '../assets/bluesocial.png';
import fusion from '../assets/fusion.png';
import buzzy from '../assets/buzzy.png';
import bestbuy from '../assets/bestbuy.png';
import mtsac from '../assets/mtsac.png';
import Pill from '../components/Pill';

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Blue Social",
        date: "Jun. 2024 – Present",
        location: "Riverside, CA",
        description: `
        At Blue Social, we participated in the Onchain Summer Coinbase Buildathon, where our project was selected as a winner in the Gaming Track, earning over $10,000. I integrated React Native into our iOS app, enabling cross-platform compatibility and utilizing Thirdweb's React hooks. Using the Thirdweb SDK, I set up secure wallet connections, real-time blockchain transactions, and developed features for earning cryptocurrency. I also created components to display user transactions and balances, and set up Thirdweb Smart Wallets for seamless login. This experience enhanced my skills in blockchain applications and bridging iOS native apps with React Native.
      `,
        logo: bluesocial,
        technologies: ["React Native", "JavaScript", "Swift", "Thirdweb", "Git"],
    },
    {
        title: "Software Developer",
        company: "FUSION at UCI",
        date: "Apr. 2024 – Present",
        location: "Irvine, CA",
        description: `
        I developed FUSION's club website using React, facilitating event coordination and communication for over 100 members. Collaborating with five designers, I implemented high-fidelity designs using Tailwind and DaisyUI, ensuring consistency across the site. Additionally, I integrated reusable components and custom hooks in React to streamline development and enhance code maintainability.
      `,
        logo: fusion,
        technologies: ["React", "TypeScript", "DaisyUI", "Git"],
    },
    {
        title: "Game Developer",
        company: "Buzzy.gg",
        date: "Mar. 2024 – Present",
        location: "Remote",
        description: `
        I developed a game builder that has impacted thousands of students in classrooms through CodeCamp. I created a global server search system using TeleportService, which enabled players to join any user-created game instance seamlessly. Additionally, I integrated HTTP JSON protocols to send data about players’ games to a reserve server, enhancing data accuracy by 20%. I also established and configured a comprehensive database system to track likes, allowing players to rate user-created games effectively.
      `,
        logo: buzzy,
        technologies: ["Lua", "Roblox Studio", "Git"],
    },
    {
        title: "Technical Founder",
        company: "AIMSTARS",
        date: "Jun. 2020 – Present",
        location: "Remote",
        description: `
        I developed AIMSTARS, a first-person shooter aim training game on Roblox, amassing over 9 million plays and 15,000 monthly active users, generating $30,000 in revenue. I coded the game in Lua, managing all aspects of production, including 3D modeling and UI design. I implemented bots with human-like movement using the Pathfinding service, developed a global leaderboard with ProfileService, and added a multiplayer mode that increased engagement by 40%. Additionally, I utilized MarketplaceService to create in-game products, significantly boosting the game's revenue.
      `,
        logo: "https://tr.rbxcdn.com/ca184ff37987fb414f2c8ad4d0bbd0a8/150/150/Image/Webp",
        technologies: ["Lua", "Roblox Studio", "Git"],
    },
    {
        title: "Math Tutor",
        company: "Mount San Antonio College",
        date: "Sep. 2022 – Jul. 2023",
        location: "Walnut, CA",
        description: `
        As a dedicated Math Tutor, I have extensive experience in both drop-in tutoring and personalized one-on-one appointments. I was assigned to work closely with students for an entire semester, providing tutoring sessions that lasted up to 2-3 hours. My teaching covered subjects such as Calculus, Pre-Calculus, and Trigonometry. To enhance the students' learning experience, I created personalized problems tailored to their specific needs. I also carefully communicated with students to ensure the best possible learning outcomes, demonstrating patience and addressing any challenges that arose during tutoring sessions.
      `,
        logo: mtsac,
        technologies: ["Calculus", "Pre-Calculus", "Trigonometry", "Teaching"],
    },
    {
        title: "Product Flow Specialist",
        company: "Best Buy",
        date: "Aug. 2021 - Apr. 2022",
        location: "West Covina, CA",
        description: `
        I efficiently managed product shipments by organizing inventory and preparing the sales floor to meet customer demand. I quickly packaged items for shipment and coordinated with carriers to ensure timely delivery. I provided exemplary customer service by assisting customers with the loading of heavy products into their vehicles and offering attentive service on the sales floor. Additionally, I handled the fulfillment of online orders, focusing on prompt and accurate product retrieval to enhance customer satisfaction.
      `,
        logo: bestbuy,
        technologies: [
            "Team Collaboration",
            "Warehouse Operations",
            "Customer Service",
            "Logistics and Shipping",
        ],
    },
];

const Experience = () => {
    return (
        <div className="min-h-screen bg-white text-black py-12">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="mb-8 flex justify-between items-center w-full md:flex-row flex-col md:relative"
                        >
                            <div
                                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-300 z-10"
                                style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                            >
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                />
                            </div>

                            <div className="md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-300 mx-auto">
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-[90%] h-[90%] rounded-full object-cover"
                                />
                            </div>

                            {index % 2 === 0 ? (
                                <>
                                    <div className="md:w-5/12 flex justify-end md:pr-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-300 w-full mt-4 md:mt-0 md:relative"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            {/* Technologies */}
                                            <div className="mt-2 flex flex-wrap">
                                                {exp.technologies.map((tech, idx) => (
                                                    <Pill key={idx} text={tech} />
                                                ))}
                                            </div>
                                        </motion.div>

                                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-300"></div>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-5/12"></div>
                                </>
                            ) : (
                                <>
                                    <div className="hidden md:block w-5/12"></div>

                                    <div className="md:w-5/12 flex justify-start md:pl-2 relative">
                                        <motion.div
                                            className="bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-300 w-full mt-4 md:mt-0 md:relative"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                        >
                                            <h2 className="text-lg font-bold">{exp.title}</h2>
                                            <h3 className="text-sm text-gray-500">{exp.company}</h3>
                                            <p className="text-xs text-gray-400">{exp.date}</p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {exp.description}
                                            </p>
                                            {/* Technologies */}
                                            <div className="mt-2 flex flex-wrap">
                                                {exp.technologies.map((tech, idx) => (
                                                    <Pill key={idx} text={tech} />
                                                ))}
                                            </div>
                                        </motion.div>

                                        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-300"></div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;