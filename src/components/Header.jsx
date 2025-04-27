
import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { useLanguage } from '../hooks/useLanguage'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'
import LanguageIcon from '../icons/LanguageIcon'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { changeLanguage } = useLanguage();

    return (
        <header className="top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8 relative">
                <button className="flex items-center justify-center text-neutral-800 dark:text-neutral-100 transition-all duration-200">
                    <i className={`bx ${darkMode ? "bxs-planet" : "bx-planet"} text-lg lg:text-xl`}></i>
                </button>
                <div className="flex items-center gap-2">
                    <button onClick={toggleDarkMode}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-transparent text-neutral-800 dark:text-neutral-100
                        hover:bg-gray-400/20 dark:hover:bg-gray-100/10 transition-all duration-200">
                        <MoonIcon className="block dark:hidden" />
                        <SunIcon className="hidden dark:block" />
                    </button>
                    <button onClick={changeLanguage}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-transparent text-neutral-800 dark:text-neutral-100
                        hover:bg-gray-400/20 dark:hover:bg-gray-100/10 transition-all duration-200">
                        <LanguageIcon />
                    </button>
                    <GithubIcon className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-800 dark:text-neutral-100
                        hover:bg-gray-400/20 dark:hover:bg-gray-100/10 transition-all duration-200 cursor-pointer"
                    />
                    <LinkedinIcon className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-800 dark:text-neutral-100
                        hover:bg-gray-400/20 dark:hover:bg-gray-100/10 transition-all duration-200 cursor-pointer"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header