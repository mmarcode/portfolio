import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFormValidation } from '../hooks/useFormValidation'
import { useModal } from '../hooks/useModal'
import { useContactForm } from '../hooks/useContactForm'

const Contact = () => {
    const {t} = useTranslation();
    const {values, errors, handleChange, resetForm, isFormValid} = useFormValidation();
    const {isOpen, setIsOpen, toggleModal, modalRef} = useModal(resetForm);
    const {isSubmitting, handleSubmit} = useContactForm(values, resetForm, t, () => setIsOpen(false));

    return (
        <>
            <button onClick={toggleModal} className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-300
                dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white
                font-medium flex items-center transition group">
                <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>{t('buildSomething')}</span>
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div ref={modalRef} className="relative bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-lg border border-white/20 text-white">
                        <h2 className="text-2xl font-semibold text-center">{t('contact.title')}</h2>
                        <h2 className="text-2xl font-semibold mb-4 text-center">{t('contact.subtitle')}</h2>
                        <form onSubmit={handleSubmit(isFormValid)} className="space-y-4">
                            <div className="relative mb-2">
                                <div className="relative">
                                    <i className='bx bxs-face absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60'></i>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder={<i className='bx bxs-user-circle'></i> && t('contact.placeholder.name')}
                                        maxLength="70"
                                        value={values.name}
                                        onChange={handleChange('name')}
                                        className={`w-full mt-1 pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-1 
                                            ${errors.name ? 'focus:ring-red-500' : 'focus:ring-violet-800'}`}
                                        autoComplete="off"
                                    />
                                </div>
                                {errors.name && <p className="text-red-400 font-extrabold dark:text-red-500 dark:font-bold text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div className="relative mb-2">
                                <div className="relative">
                                    <i className='bx bx-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60'></i>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder={t('contact.placeholder.email')}
                                        maxLength="70"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        className={`w-full mt-1 pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-1 
                                            ${errors.email ? 'focus:ring-red-500' : 'focus:ring-violet-800'}`}
                                        autoComplete="off"
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 font-extrabold dark:text-red-500 dark:font-bold text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    rows={9}
                                    placeholder={t('contact.placeholder.message')}
                                    maxLength="500"
                                    value={values.message}
                                    onChange={handleChange('message')}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-1 
                                        ${errors.message ? 'focus:ring-red-500' : 'focus:ring-violet-800'}`}
                                    autoComplete="off"
                                ></textarea>
                                {errors.message && <p className="text-red-400 font-extrabold dark:text-red-500 dark:font-bold text-sm mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={!isFormValid() || isSubmitting}
                                className={`w-full px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg 
                                ${isFormValid() && !isSubmitting ? 'bg-gradient-to-r from-violet-800 to-blue-700 hover:from-violet-900 hover:to-blue-800' : 'bg-gradient-to-r from-violet-900 to-blue-900 hover:from-violet-950 hover:to-blue-950 cursor-not-allowed'} 
                                text-white font-medium shadow-lg flex items-center justify-center transition group`}
                            >
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                ) : (
                                    <span>{t('contact.send')}</span>
                                )}
                            </button>
                        </form>
                        <button onClick={toggleModal} className="absolute top-3 right-3 text-white hover:text-red-400 text-xl cursor-pointer">
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact