import React from 'react'
import Pill from '../components/Pill'

const Experience = () => {
    return (
        <div className="text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Work Experience</h1>

                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex justify-between items-baseline w-full">
                                <h2 className="text-lg font-semibold">Game Developer</h2>
                                <p className="text-base">Mar. 2024 – Present</p>
                            </div>
                            <p className="mb-2 text-base">Buzzy.gg</p>
                            <p className="mb-4 text-base text-gray-500">
                                I developed a game builder that significantly impacted thousands of students in classrooms through CodeCamp. I created a global server search system using TeleportService, which enabled players to join any user-created game instance seamlessly. Additionally, I integrated HTTP JSON protocols to send data about players’ games to a reserve server, enhancing data accuracy by 20%. I also established and configured a comprehensive database system to track likes, allowing players to rate user-created games effectively.
                            </p>
                            <Pill text={"Lua"} />
                            <Pill text={"Roblox Studio"} />
                            <Pill text={"Git"} />
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex justify-between items-baseline w-full">
                                <h2 className="text-lg font-semibold">Founder/Developer</h2>
                                <p className="text-base">Jun. 2020 – Present</p>
                            </div>
                            <p className="mb-2 text-base">AIMSTARS</p>
                            <p className="mb-4 text-base text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Ut lectus arcu bibendum at varius vel pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam at lectus urna duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien. At risus viverra adipiscing at in tellus integer feugiat. Vivamus at augue eget arcu dictum varius duis at consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit.
                            </p>
                            <Pill text={"Lua"} />
                            <Pill text={"Roblox Studio"} />
                            <Pill text={"Git"} />
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex justify-between items-baseline w-full">
                                <h2 className="text-lg font-semibold">Math Tutor</h2>
                                <p className="text-base">Aug. 2021 – June 2023</p>
                            </div>
                            <p className="mb-2 text-base">Mount San Antonio College</p>
                            <p className="mb-4 text-base text-gray-500">
                                As a dedicated Math Tutor, I have extensive experience in both drop-in tutoring and personalized one-on-one appointments. I was assigned to work closely with students for an entire semester, providing tutoring sessions that lasted up to 2-3 hours. My teaching covered subjects such as Calculus, Pre-Calculus, and Trigonometry. To enhance the students' learning experience, I created personalized problems tailored to their specific needs. I also carefully communicated with students to ensure the best possible learning outcomes, demonstrating patience and addressing any challenges that arose during tutoring sessions.
                            </p>
                            <Pill text={"Calculus"} />
                            <Pill text={"Pre-Calculus"} />
                            <Pill text={"Trigonometry"} />
                            <Pill text={"Teaching"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
