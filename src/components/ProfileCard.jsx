import React from 'react';
import { Mail } from 'lucide-react';
import profilePic from '../assets/ProfilePic.png';

// Array of social links
const socialLinks = [
  {
    href: "mailto:ethanas1@uci.edu",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    hoverClass: "hover:text-red-600",
  },
  {
    href: "https://www.linkedin.com/in/ethanmadeit/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    label: "LinkedIn",
    hoverClass: "hover:text-[#0077b5]",
  },
  {
    href: "https://github.com/EthanSantos",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: "GitHub",
    hoverClass: "hover:text-gray-900",
  },
];

const ProfileCard = () => (
  <header className="w-full bg-white overflow-x-hidden">
    <div className="max-w-8xl mx-auto px-6 sm:px-12 md:px-24 lg:px-36 pt-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img
                src={profilePic}
                alt="Ethan Santos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Ethan Santos
            </h1>
            <p className="text-gray-600 mb-1">Computer Science Major</p>
            <p className="text-gray-500">
              University of California, Irvine
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          {socialLinks.map(({ href, icon, label, hoverClass }, index) => (
            <SocialLink
              key={index}
              href={href}
              icon={icon}
              label={label}
              className={hoverClass}
            />
          ))}
        </div>
      </div>
    </div>
  </header>
);

const SocialLink = ({ href, icon, label, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`text-gray-500 transition-colors duration-200 ${className}`}
  >
    {icon}
  </a>
);

export default ProfileCard;
