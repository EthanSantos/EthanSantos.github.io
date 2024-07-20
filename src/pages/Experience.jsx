import React from 'react';
import Pill from '../components/Pill';
import bluesocial from '../assets/bluesocial.png'
import mtsac from '../assets/mtsac.png'
import buzzy from '../assets/buzzy.png'
import bestbuy from '../assets/bestbuy.png'

const Experience = () => {
    return (
        <div className="text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Work Experience</h1>

                    {/* Blue Social Experience */}
                    <div className="flex items-start mb-8">
                        <img src={bluesocial} alt="Blue Social Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Software Engineer Intern</h2>
                                <p className="text-base">Jun. 2024 – Present</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="mb-2 text-base">Blue Social</p>
                                <p className="text-sm">Riverside, CA</p>
                            </div>
                            <p className="mb-4 text-base text-gray-500">
                                At Blue Social, we participated in the Onchain Summer Coinbase Buildathon, where we integrated Web3 functionality into our iOS app. I was tasked with integrating React Native into the existing app, which enabled cross-platform compatibility and allowed for the use of Thirdweb's React hooks. Using the Thirdweb SDK, I set up secure wallet connections and real-time blockchain transactions, developed features for earning cryptocurrency, and interacted with Socialize-to-Earn smart contracts. I also created components to display user transactions and balances and set up Thirdweb Smart Wallets via email for seamless login. These features allowed for gamified social interactions by implementing tokenized rewards - users earned tokens for participating in events, meeting new people, and contributing positively to the community, which could be used for exclusive benefits. This experience was a significant learning opportunity, enhancing my skills in blockchain applications, working with React Native, and bridging the gap between iOS native apps and React Native.
                            </p>
                            <div className="flex flex-wrap">
                                <Pill text={"React Native"} />
                                <Pill text={"Swift"} />
                                <Pill text={"Web3"} />
                                <Pill text={"Thirdweb"} />
                            </div>
                        </div>
                    </div>

                    {/* Buzzy.gg Experience */}
                    <div className="flex items-start mb-8">
                        <img src={buzzy} alt="Buzzy.gg Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Game Developer</h2>
                                <p className="text-base">Mar. 2024 – Present</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="mb-2 text-base">Buzzy.gg</p>
                                <p className="text-sm">Remote</p>
                            </div>
                            <p className="mb-4 text-base text-gray-500">
                                I developed a game builder that has impacted thousands of students in classrooms through CodeCamp. I created a global server search system using TeleportService, which enabled players to join any user-created game instance seamlessly. Additionally, I integrated HTTP JSON protocols to send data about players’ games to a reserve server, enhancing data accuracy by 20%. I also established and configured a comprehensive database system to track likes, allowing players to rate user-created games effectively.
                            </p>
                            <div className="flex flex-wrap">
                                <Pill text={"Lua"} />
                                <Pill text={"Roblox Studio"} />
                                <Pill text={"Git"} />
                            </div>
                        </div>
                    </div>

                    {/* AIMSTARS Experience */}
                    <div className="flex items-start mb-8">
                        <img src="https://tr.rbxcdn.com/ca184ff37987fb414f2c8ad4d0bbd0a8/150/150/Image/Webp" alt="AIMSTARS Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Founder/Developer</h2>
                                <p className="text-base">Jun. 2020 – Present</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="mb-2 text-base">AIMSTARS</p>
                                <p className="text-sm">Remote</p>
                            </div>
                            <p className="mb-4 text-base text-gray-500">
                                I developed AIMSTARS, a first-person shooter aim training game on Roblox, amassing over 9 million plays and 15,000 monthly active users, generating $30,000 in revenue. I coded the game in Lua, managing all aspects of production, including 3D modeling and UI design. I implemented bots with human-like movement using the Pathfinding service, developed a global leaderboard with ProfileService, and added a multiplayer mode that increased engagement by 40%. Additionally, I utilized MarketplaceService to create in-game products, significantly boosting the game's revenue.
                            </p>
                            <div className="flex flex-wrap">
                                <Pill text={"Lua"} />
                                <Pill text={"Roblox Studio"} />
                                <Pill text={"Git"} />
                            </div>
                        </div>
                    </div>

                    {/* Math Tutor Experience */}
                    <div className="flex items-start mb-8">
                        <img src={mtsac} alt="Math Tutor Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Math Tutor</h2>
                                <p className="text-base">Sep. 2022 – Jul. 2023</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="mb-2 text-base">Mount San Antonio College</p>
                                <p className="text-sm">Walnut, CA</p>
                            </div>
                            <p className="mb-4 text-base text-gray-500">
                                As a dedicated Math Tutor, I have extensive experience in both drop-in tutoring and personalized one-on-one appointments. I was assigned to work closely with students for an entire semester, providing tutoring sessions that lasted up to 2-3 hours. My teaching covered subjects such as Calculus, Pre-Calculus, and Trigonometry. To enhance the students' learning experience, I created personalized problems tailored to their specific needs. I also carefully communicated with students to ensure the best possible learning outcomes, demonstrating patience and addressing any challenges that arose during tutoring sessions.
                            </p>
                            <div className="flex flex-wrap">
                                <Pill text={"Calculus"} />
                                <Pill text={"Pre-Calculus"} />
                                <Pill text={"Trigonometry"} />
                                <Pill text={"Teaching"} />
                            </div>
                        </div>
                    </div>

                    {/* Best Buy Experience */}
                    <div className="flex items-start mb-8">
                        <img src={bestbuy} alt="Best Buy Icon" className="w-12 h-12 mr-4" />
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-lg font-semibold">Product Flow Specialist</h2>
                                <p className="text-base">Aug. 2021 - Apr. 2022</p>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <p className="mb-2 text-base">Best Buy</p>
                                <p className="text-sm">West Covina, CA</p>
                            </div>
                            <p className="mb-4 text-base text-gray-500">
                                I efficiently managed product shipments by organizing inventory and preparing the sales floor to meet customer demand. I quickly packaged items for shipment and coordinated with carriers to ensure timely delivery. I provided exemplary customer service by assisting customers with the loading of heavy products into their vehicles and offering attentive service on the sales floor. Additionally, I handled the fulfillment of online orders, focusing on prompt and accurate product retrieval to enhance customer satisfaction.
                            </p>
                            <div className="flex flex-wrap">
                                <Pill text={"Team Collaboration"} />
                                <Pill text={"Warehouse Operations"} />
                                <Pill text={"Customer Service"} />
                                <Pill text={"Logistics and Shipping"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
