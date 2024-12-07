import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Banner from '../Banner/Banner';
import RunningCampaigns from '../RunningCampaigns/RunningCampaigns';
import ContributorStories from '../ContributorStories/ContributorStories';
import FrequentlyAskedQuestion from '../FrequentlyAskedQuestion/FrequentlyAskedQuestion';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load theme from localStorage or default to light
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle Theme Handler
    const handleToggleTheme = () => {
        setIsDarkMode((prev) => !prev);

        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Theme Toggle */}
            <header className="flex justify-end p-4">
                <label className="flex cursor-pointer gap-2 items-center">
                    {/* Sun Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    {/* Toggle Switch */}
                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller"
                        checked={isDarkMode}
                        onChange={handleToggleTheme}
                    />
                    {/* Moon Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </header>

            {/* Content */}
            <section className="mb-8">
                <Zoom><Banner /></Zoom>
            </section>
            <section>
                <RunningCampaigns />
            </section>
            <section>
                <ContributorStories />
            </section>
            <section>
                <FrequentlyAskedQuestion />
            </section>
        </div>
    );
};

export default Home;
