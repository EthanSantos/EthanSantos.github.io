import React from 'react'
import Card from '../components/Card'
import { motion } from 'framer-motion'
import nagaguard from '../assets/nagaguard.png'
import spacetro from '../assets/spacetro.png'
import pharmascan from '../assets/PharmaScan.png'
import pyroAI from '../assets/pyroai.png'

const Projects = () => {
  // Container animation for the entire projects section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  // Card animation with springy effect - load in only
  const cardVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        mass: 0.8
      }
    }
  }

  return (
    <motion.div 
      className="flex flex-col items-center gap-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={cardVariants}>
        <Card
          imageSrc={"https://www.youtube.com/embed/W1Ry2lBVVzo"}
          title={"AIMSTARS"}
          skills={[{ text: "Lua" }, { text: "Roblox Studio" }, { text: "Git" }]}
          description={"In 2020, I developed <strong>AIMSTARS</strong>, a first-person shooter aim training game on <strong>Roblox</strong>, which became my most successful project with over <strong>9.2 million plays</strong>, <strong>15,000 monthly active users</strong>, and <strong>$30,000 in revenue</strong>. I coded the game in <strong>Lua</strong>, handling all aspects of production, including 3D modeling and UI design. Key features included sophisticated bots with human-like movement patterns, a global leaderboard system, and a multiplayer mode that boosted engagement by <strong>40%</strong>. I also created in-game products that contributed significantly to revenue and actively marketed the game through trailers and ads. This multi-year project honed my programming skills and deepened my understanding of game development, marketing, and user engagement."}
          isVideo={true}
          link="/projects/aimstars"
        />
      </motion.div>
      
      <motion.div variants={cardVariants}>
        <Card
          imageSrc={pyroAI}
          title={"Pyro.AI"}
          skills={[
            { text: "NextJS" },
            { text: "Flask" },
            { text: "TypeScript" },
            { text: "Python" },
            { text: "YOLOv8" },
            { text: "Tensorflow" },
            { text: "Tailwind" },
            { text: "ShadCN" },
            { text: "OpenRouteService" },
            { text: "GeminiAI" },
            { text: "Vercel" }
          ]}
          description={`Inspired by the devastating January 2025 wildfires in Los Angeles, we built <strong>Pyro.AI</strong> for <strong>TreeHacks 2025</strong>—a centralized wildfire monitoring dashboard that combines <strong>real-time fire detection</strong> using YOLOv8, <strong>automated evacuation planning</strong> with optimized routing via OpenRouteService, and an <strong>intelligent chat system</strong> powered by <strong>Google Gemini</strong> for actionable safety insights. We built this in under 30 hours to help people react faster, stay informed, and make better decisions during wildfires.`}
          link="/pyroai"
          githubLink="https://github.com/EthanSantos/Pyro-AI"
        />
      </motion.div>
      
      <motion.div variants={cardVariants}>
        <Card
          imageSrc={pharmascan}
          title={"PharmaScan"}
          skills={[{ text: "React" }, { text: "Flask" }, { text: "YOLOv8" }, { text: "AWS S3" }, { text: "Supabase" }, { text: "Firebase" }]}
          description={`<strong>PharmaScan</strong> is an AI-powered medication identification system developed at <strong>IrvineHacks</strong>. <strong>Problem:</strong> Pharmacists often rely on manual pill identification based on shape and color, leading to errors and inefficiencies. Our solution integrates <strong>YOLOv8</strong> for computer vision and <strong>ChatGPT-4o</strong> for AI-driven analysis, enabling real-time medication verification. We built a <strong>full-stack web app</strong> using <strong>React, Flask, AWS S3, Supabase, and Firebase</strong> to ensure secure authentication and cloud storage for pill images. By automating pill identification, PharmaScan enhances workflow efficiency and reduces human error in pharmacy operations.`}
          link="/projects/pharmascan"
          githubLink="https://github.com/EthanSantos/PharmaScan"
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card
          imageSrc={nagaguard}
          title={"NagaGuard"}
          skills={[{ text: "React" }, { text: "Flask" }, { text: "MySQL" }, { text: "Bootstrap" }, { text: "JavaScript" }, { text: "Python" }]}
          description={`My team won <strong>Best Startup</strong> at BearHack at <strong>University of California, Riverside</strong>. <strong>Problem:</strong> Local clinics and hospitals spend almost <strong>50%</strong> of management funds on manually coding patient data. This process takes several hours daily. Since all clinics and hospitals use the same coding system, we found that Google's <strong>Gemini AI</strong> was familiar with this system and could encode medical reports with <strong>90% accuracy</strong>. We built <strong>NagaGuard</strong>, an AI web app that uses Gemini to input pages of medical reports and encode them in <strong>SECONDS</strong>! Patients could then review their appointment records instantly.`}
          link="/nagaguard"
          githubLink="https://github.com/EthanSantos/NagaGuard"
        />
      </motion.div>
      
      <motion.div variants={cardVariants}>
        <Card
          imageSrc={spacetro}
          title={"SpaceTro"}
          skills={[{ text: "React" }, { text: "Flask" }, { text: "PostgresSQL" }, { text: "Supabase" }, { text: "TailwindCSS" }, { text: "GeminiAI" }]}
          description={"At a 24-hour hackathon at <strong>UC Irvine</strong>, I developed <strong>Spacetro</strong>, an educational full-stack web app designed to inspire people to explore astronomy, particularly young women. I fine-tuned SQL queries to minimize latency, achieving response times under <strong>200ms</strong> for data retrieval. I integrated the <strong>Gemini API</strong> with custom prompt engineering to generate educational articles and quizzes, enhancing the learning experience with interactive content. Additionally, I implemented a real-time leaderboard using <strong>Supabase</strong> to rank users based on quiz scores, fostering a competitive and engaging environment. I also set up RESTful API endpoints to handle user authentication, profile data storage, and quiz scoring."}
          link="/spacetro"
          githubLink="https://github.com/EthanSantos/SpaceTro"
        />
      </motion.div>
      
      <motion.div variants={cardVariants}>
        <Card
          imageSrc={"https://tr.rbxcdn.com/180DAY-f64d1ed8f77ce6a28d3c57ed20aa080b/768/432/Image/Webp/noFilter"}
          title={"Guess the Build"}
          skills={[{ text: "Lua" }, { text: "Roblox Studio" }, { text: "Git" }]}
          description={"I developed a multiplayer guessing game on <strong>Roblox</strong>, achieving over <strong>150,000 plays</strong> worldwide, where players guess items constructed by an assigned builder. Utilizing <strong>Roblox Raycasting</strong>, I implemented a dynamic block-building system for precise and interactive gameplay. To handle player data and leaderboards, I used <strong>ProfileService</strong>, ensuring secure and reliable data storage. The game features an in-game shop system managed through <strong>MarketplaceService</strong>, contributing to a revenue of <strong>$3,000</strong>. Additionally, I enhanced player engagement by incorporating daily rewards and a feedback system connected via <strong>Discord webhooks</strong>, allowing direct player communication and continual game improvement based on user input."}
          link="/guess-the-build"
        />
      </motion.div>
    </motion.div>
  )
}

export default Projects