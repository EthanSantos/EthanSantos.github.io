import React from 'react';
import { Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = ({ className = '' }) => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={() => setIsDark(!isDark)}
      className={`relative flex items-center justify-center w-11 h-11 sm:w-9 sm:h-9 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors duration-200
        hover:bg-gray-200 dark:hover:bg-gray-700/60 ${className}`}
    >
      <Sun
        className={`absolute transition-opacity duration-300 w-5 h-5 ${isDark ? 'opacity-0' : 'opacity-100 text-yellow-400'}`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute transition-opacity duration-300 w-5 h-5 ${isDark ? 'opacity-100 text-gray-300' : 'opacity-0'}`}
        aria-hidden="true"
      />
    </button>
  );
};

export default ThemeToggle; 