import React from 'react'
import LightBackground from './LightBackground'
import ProfileInformation from './ProfileInformation'
import Skills from './Skills'
import ProfileImage from './ProfileImage'

const Body = () => {
    return (
        <>
            <LightBackground />
            <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                    <div className="flex-1 space-y-6 lg:space-y-7">
                        <ProfileInformation />
                        <Skills />
                    </div>
                    <div className="flex-1 w-full">
                        <ProfileImage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
