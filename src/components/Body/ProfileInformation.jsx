import React from 'react'
import Contact from '../../components/Contact'
import { useTranslation } from 'react-i18next'

const VitaeButton = ({ description }) => (
    <a href="https://cv-mmarcode.vercel.app/" aria-label="curriculum-vitae" target="_blank" rel="noopener noreferrer"
        className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-gradient-to-r from-violet-800 to-blue-700 
        hover:from-violet-900 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-neutral-900/20
        dark:hover:shadow-violet-500/20 flex items-center justify-center transition group"
    >
        <i className="bx bx-notepad mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
        <span>{ description }</span>
    </a>
)

const ProfileInformation = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center">
                    <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                        {t('occupation')}
                    </p>
                </div>
                <h1 className="xs:text-3xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight 
                    text-neutral-600 dark:text-white">
                    <span className="block mb-1">
                        {t('greeting')}
                    </span>
                    <span className="xs:text-3xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent 
                        bg-gradient-to-r from-violet-700 via-violet-800 to-blue-800">
                        {t('name')}
                    </span>
                </h1>
                <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                    {t('paragraph1')}
                </p>
                <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                    {t('paragraph2')}
                </p>
                <div className="flex gap-3 items-center">
                    <div className="h-px bg-secondary dark:bg-secondary-dark w-12"></div>
                    <p className="uppercase xs:text-xs text-xs tracking-widest text-secondary dark:text-secondary-dark font-light">
                        {t('motto')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4">
                <VitaeButton description={ t('cv') } />
                <Contact />
            </div>
        </>
    )
}

export default ProfileInformation