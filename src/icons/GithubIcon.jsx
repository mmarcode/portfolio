import React from 'react'

const GithubIcon = (props) => (
    <a href="https://github.com/mmarcode" target="_blank" rel="noopener noreferrer"
        aria-label="mmarcode Github"
        className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-800 dark:text-neutral-100
        hover:bg-gray-400/20 dark:hover:bg-gray-100/10 transition-all duration-200 cursor-pointer" {...props}>
        <i className="bx bxl-github text-xl"></i>
    </a>
)

export default GithubIcon
