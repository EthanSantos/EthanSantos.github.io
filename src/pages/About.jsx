import React from 'react';
import { motion } from 'framer-motion';
import Pill from '../components/Pill';
import uci from '../assets/uci.png';
import mtsac from '../assets/mtsac.png';
import GitHubCalendar from 'react-github-calendar';
import GithubCard from '../components/GithubCard';

const About = () => {
  const information = {
    About:
      "I'm a Computer Science major at University of California, Irvine with a deep passion for web development and game development. My programming journey began in late 2016, and since then, I have grown my skills and expertise across various technologies. In my free time, I love exercising daily - whether that's going to the gym, playing basketball or hiking with my friends. I also love cars, reading books, and playing chess.",
    Awards: [
      "1st place - Coinbase Onchain Summer Buildathon ($10,000 prize), 2024",
      "1st place - UCR BearHacks (Best Startup), 2024",
      "1st place - Best User Experience Award at Roblox x USC Game Jam ($1000 prize), 2024",
      "Dean's Honors List",
      "Mount San Antonio College Honors Program"
    ]
  };

  // Main container animation - faster stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05, // Faster stagger time
        duration: 0.4, // Reduced overall duration
        ease: "easeOut" // Changed to easeOut for faster initial appearance
      }
    }
  };

  // Heading animation - faster spring
  const headingVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500, // Higher stiffness for faster movement
        damping: 15,  // Lower damping for quicker settling
        mass: 0.8     // Lower mass for more responsive movement
      }
    }
  };

  // Content section animation - faster spring
  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400, // Higher stiffness
        damping: 20,    // Lower damping
        duration: 0.3   // Explicit shorter duration
      }
    }
  };

  // Education item animation - faster bounce
  const educationItemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 350, // Increased stiffness
        damping: 15,    // Reduced damping
        mass: 0.7       // Lower mass
      }
    }
  };

  // Award items animation - faster staggered appearance
  const awardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: index * 0.03 // Much faster stagger between awards
      }
    })
  };

  // Skills container animation - faster fade in
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Faster duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="text-gray-900">
      <motion.div
        className="container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            variants={headingVariants}
          >
            About Me
          </motion.h1>

          <motion.p
            className="mb-4 text-base text-gray-600"
            variants={contentVariants}
          >
            {information.About}
          </motion.p>

          <motion.div
            variants={contentVariants}
          >
            <h2 className="text-lg font-semibold">Game Development</h2>
            <p className="mb-4 text-base text-gray-600">
              I started developing games on the ROBLOX platform and created my first successful game during quarantine in 2020 called AIMSTARS. I am proud to share that the game has amassed over 9 million plays and generated over $30,000 in revenue. AIMSTARS still has 15,000 monthly active users today!
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
          >
            <h2 className="text-lg font-semibold">Web Development</h2>
            <p className="mb-8 text-base text-gray-600">
              I also have a lot of experience in web development, participating in multiple hackathons, where I currently have 4 wins under my belt. These experiences have sharpened my skills and fostered my creativity in building innovative projects.
            </p>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            variants={headingVariants}
          >
            Education
          </motion.h1>

          {/* Education Item: UCI */}
          <motion.div
            className="flex flex-col sm:flex-row items-start mb-4"
            variants={educationItemVariants}
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
            variants={educationItemVariants}
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
            variants={headingVariants}
          >
            Awards
          </motion.h1>

          <div className="mb-4 text-base text-gray-600 space-y-2">
            {information.Awards.map((award, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={awardVariants}
              >
                🥇 {award}
              </motion.p>
            ))}
          </div>

          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            variants={headingVariants}
          >
            Skills
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={skillsContainerVariants}
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
        <GithubCard />
      </motion.div>
    </div>
  );
};

export default About;