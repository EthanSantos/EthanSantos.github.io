import React from 'react'
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import useDarkMode from '../hooks/useDarkMode';

// Light mode: more commits = darker green
const lightTheme = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

// Dark mode: more commits = lighter
const darkTheme = ['#2d2d2d', '#0e4429', '#006d32', '#26a641', '#39d353'];

const customTheme = { light: lightTheme, dark: darkTheme };

const GithubCard = () => {
    const [isDark] = useDarkMode();

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
    return (
        <motion.div
            className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"
            variants={contentVariants}
        >
            <motion.h1
                className="text-2xl sm:text-3xl font-bold mb-4 dark:text-gray-100"
                variants={headingVariants}
            >
                GitHub
            </motion.h1>

            <div
                className="overflow-x-auto bg-white dark:bg-[var(--bg-surface)] rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700 cursor-pointer"
                onClick={() => window.open('https://github.com/EthanSantos', '_blank')}
            >
                <GitHubCalendar
                    username="ethansantos"
                    year={new Date().getFullYear()}
                    theme={customTheme}
                    colorScheme={isDark ? 'dark' : 'light'}
                    hideColorLegend={false}
                    hideMonthLabels={false}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    labels={{
                        totalCount: '{{count}} contributions in {{year}}'
                    }}
                    renderLoading={() => (
                        <div className="flex justify-center items-center py-8">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                            <span className="ml-3 text-gray-600 dark:text-gray-300">Loading activity data...</span>
                        </div>
                    )}
                    renderError={(error) => (
                        <div className="text-center py-6 text-red-500 dark:text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <p>Could not load GitHub contribution data</p>
                            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">Please check your connection and try again</p>
                        </div>
                    )}
                />
            </div>

            <div className="mt-4 mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                Click on the calendar to view more details on GitHub
            </div>
        </motion.div>
    )
}

export default GithubCard
