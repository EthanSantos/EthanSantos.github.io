import Google from "../assets/Google.png";
import Zotbins from "../assets/Zotbins.svg"
import bluesocial from '../assets/bluesocial.png';
import fusion from '../assets/fusion.png';
import Amway from '../assets/Amway.png'

export const experiences = [
  
  {
    title: "Software Engineer Intern",
    company: "Amway",
    date: "May. 2025 – Sep. 2025",
    location: "Ada, MI",
    description: `
      Working on the Amway ID global authentication and authorization team as a Software Engineer.
    `,
    logo: Amway,
    technologies: ["Node.js", "TypeScript", "Fastify", "Prometheus", "Grafana", "Playwright", "Kafka", "Splunk"],
  },
  

  {
    title: "Software Engineer Intern",
    company: "Blue Social",
    date: "Jun. 2024 – May. 2025",
    location: "Riverside, CA",
    description: `
        At Blue Social, we participated in the Onchain Summer Coinbase Buildathon, where our project was selected as a winner in the Gaming Track, earning over $10,000. I integrated React Native into our iOS app, enabling cross-platform compatibility and utilizing Thirdweb's React hooks. Using the Thirdweb SDK, I set up secure wallet connections, real-time blockchain transactions, and developed features for earning cryptocurrency. I also created components to display user transactions and balances, and set up Thirdweb Smart Wallets for seamless login. This experience enhanced my skills in blockchain applications and bridging iOS native apps with React Native.
      `,
    logo: bluesocial,
    technologies: ["React Native", "JavaScript", "Swift", "Thirdweb", "Git"],
  },
  {
    title: "Web & Mobile Developer",
    company: "UCI ZotBins Research Team",
    date: "Oct. 2024 – Dec. 2025",
    location: "Irvine, CA",
    description: `
        An independent group of undergraduate researchers passionate about technology-based zero waste management. 
        `,
    logo: Zotbins,
    technologies: ["React Native", "TypeScript", "Firebase", "Git"],
  },
  {
    title: "FGN Mentorship Program",
    company: "Google",
    date: "Aug. 2024 – Dec. 2024",
    location: "Riverside, CA",
    description: `
        Selected as one of 80 students out of 200+ applicants for the Filipino Googler Network (FGN) Kapwa Mentorship Program.
        `,
    logo: Google,
    technologies: [],
  },
  {
    title: "Software Developer",
    company: "FUSION at UCI",
    date: "Apr. 2024 – Jun. 2025",
    location: "Irvine, CA",
    description: `
        I developed FUSION's club website using React, facilitating event coordination and communication for over 100 members. Collaborating with five designers, I implemented high-fidelity designs using Tailwind and DaisyUI, ensuring consistency across the site. Additionally, I integrated reusable components and custom hooks in React to streamline development and enhance code maintainability.
      `,
    logo: fusion,
    technologies: ["React", "TypeScript", "DaisyUI", "Git"],
  },
];