import React from 'react'

const ProfileImage = () => {
    return (
        <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-stone-500 to-stone-700 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <div className="items-center justify-center h-156 md:h-164 lg:h-150 xl:h162 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                    <img src="/images/me.webp" loading="lazy" decoding="async" alt="Me" className="w-full h-full object-cover object-left-top"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage
