import React from 'react'
import Pill from '../components/Pill'

const Experience = () => {
    return (
        <div className="text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">Game Developer</h2>
                            <p className="text-base">Buzzy.gg</p>
                            <p className="mb-4 text-base text-gray-500">Description</p>
                            <Pill text={"Lua"} />
                            <Pill text={"Roblox Studio"} />
                            <Pill text={"Git"} />
                        </div>
                        <p className="text-base text-gray-600">Mar. 2024 – Present</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">Math Tutor</h2>
                            <p className="text-base">Mount San Antonio College</p>
                            <p className="mb-4 text-base text-gray-500">Description</p>
                            <Pill text={"Calculus"} />
                            <Pill text={"Algebra"} />
                            <Pill text={"Trigonometry"} />
                            <Pill text={"Teaching"} />
                        </div>
                        <p className="text-base text-gray-600">Aug. 2021 – June 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
