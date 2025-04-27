import React from 'react'

const LightBackground = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-stone-500 dark:bg-stone-700 rounded-full blur-3xl opacity-30"></div>
        </div>
    )
}

export default LightBackground
