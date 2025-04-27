import React from 'react'
import { useTranslation } from 'react-i18next'

const icons = [
  "bxs-data",
  "bxl-git",
  "bxl-docker",
  "bxl-nodejs",
  "bxl-react",
  "bxl-python",
  "bxl-django"
]

const Skills = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-300 dark:border-neutral-800">
            <div className="flex -space-x-3">
                {icons.map((icon, i) => (
                    <div key={i} className="w-9 h-9 lg:w-10 lg:h-10 bg-neutral-600 rounded-full border-2 border-white 
                        dark:border-neutral-900 dark:bg-neutral-600 text-white flex items-center justify-center 
                        text-xl lg:text-2xl object-cover 
                        hover:bg-gradient-to-br from-violet-800 to-blue-700 
                        hover:from-violet-800 hover:to-blue-700 
                        dark:from-violet-800 dark:to-blue-700 dark:hover:from-violet-800 dark:hover:to-blue-700">
                        <i className={`bx ${icon}`}></i>
                    </div>
                ))}
            </div>
            <div className="space-y-1">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {t('technologies')}
                </p>
            </div>
        </div>
    )
}

export default Skills
