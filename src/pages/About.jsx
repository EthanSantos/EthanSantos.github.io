import React from 'react';
import { motion } from 'framer-motion';
import Pill from '../components/Pill';
import uci from '../assets/uci.png';
import mtsac from '../assets/mtsac.png';

const About = () => {
  const information = {
    About:
      "I'm a Computer Science major at University of California, Irvine with a deep passion for web development and game development. My programming journey began in late 2016, and since then, I have grown my skills and expertise across various technologies. In my free time, I love exercising daily - whether that's going to the gym, playing basketball or hiking with my friends. I also love cars, reading books, and playing chess.",
    Awards: [
      "1st place - Coinbase Onchain Summer Buildathon ($10,000 prize), 2024",
      "1st place - UCR BearHacks (Best Startup), 2024",
      "1st place - Best User Experience Award at Roblox x USC Game Jam ($1000 prize), 2024",
      "Dean’s Honors List",
      "Mount San Antonio College Honors Program"
    ]
  };

  return (
    <div className="text-gray-900">
      <motion.div
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="mb-4 text-base text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {information.About}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold">Game Development</h2>
            <p className="mb-4 text-base text-gray-600">
              I started developing games on the ROBLOX platform and created my first successful game during quarantine in 2020 called AIMSTARS. I am proud to share that the game has amassed over 9 million plays and generated over $30,000 in revenue. AIMSTARS still has 15,000 monthly active users today!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold">Web Development</h2>
            <p className="mb-8 text-base text-gray-600">
              I also have a lot of experience in web development, participating in multiple hackathons, where I currently have 4 wins under my belt. These experiences have sharpened my skills and fostered my creativity in building innovative projects.
            </p>
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Education
          </motion.h1>

          {/* Education Item: UCI */}
          <motion.div
            className="flex flex-col sm:flex-row items-start mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src={uci}
              alt="UCI Icon"
              className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                <h2 className="text-lg font-semibold">
                  University of California, Irvine
                </h2>
                <p className="text-base">Sep. 2023 – December 2025</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                <p className="text-base text-gray-600">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-sm">Irvine, CA</p>
              </div>
            </div>
          </motion.div>

          {/* Education Item: Mt. SAC */}
          <motion.div
            className="flex flex-col sm:flex-row items-start mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <img
              src={mtsac}
              alt="MtSac Icon"
              className="w-12 h-12 mb-2 sm:mb-0 sm:mr-4"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                <h2 className="text-lg font-semibold">
                  Mount San Antonio College
                </h2>
                <p className="text-base">Aug. 2021 – June 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                <p className="text-base text-gray-600">
                  Computer Science Transfer
                </p>
                <p className="text-sm">Walnut, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Awards
          </motion.h1>
          <motion.div
            className="mb-4 text-base text-gray-600 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {information.Awards.map((award, index) => (
              <p key={index}>🥇 {award}</p>
            ))}
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Skills
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {[
              "React",
              "React Native",
              "C++",
              "Swift",
              "Java",
              "JavaScript",
              "TypeScript",
              "Python",
              "Lua",
              "SQL",
              "HTML",
              "CSS",
              "Flask",
              "Fastify",
              "Express",
              "AWS",
              "Docker",
              "TailwindCSS",
              "Bootstrap",
              "MaterialUI"
            ].map((skill, index) => (
              <Pill key={index} text={skill} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
