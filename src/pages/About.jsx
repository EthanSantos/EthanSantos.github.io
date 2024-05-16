import React from 'react'
import Pill from '../components/Pill'


const About = () => {
    return (
        <div className="text-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl font-bold mb-4">About Me</h1>
                    <p className="mb-4 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla porttitor massa id neque. Ut lectus arcu bibendum at varius vel pharetra. Nec nam aliquam sem et tortor consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam at lectus urna duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien. At risus viverra adipiscing at in tellus integer feugiat. Vivamus at augue eget arcu dictum varius duis at consectetur. Ac feugiat sed lectus vestibulum mattis ullamcorper velit.</p>
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
                    <h1 className="text-2xl font-bold mb-4">Skills</h1>
                    <Pill text={"C++"} />
                    <Pill text={"Java"} />
                    <Pill text={"JavaScript"} />
                    <Pill text={"Python"} />
                    <Pill text={"Lua"} />
                    <Pill text={"SQL"} />
                </div>
            </div>
        </div>
    )
}

export default About
