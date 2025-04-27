import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useFormValidation = () => {
    const {t} = useTranslation();
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validators = {
        name: (value) => {
            if(value.trim() === '') return `${t('contact.errors.name.required')}`;
            if(value.length < 3) return `${t('contact.errors.name.minLength')}`;
            if(value.length > 70) return `${t('contact.errors.name.maxLength')}`;
            if(!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/.test(value)) return `${t('contact.errors.name.onlyLetters')}`;
            return '';
        },
        email: (value) => {
            if(value.trim() === '') {
                return `${t('contact.errors.email.required')}`;
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailRegex.test(value)) return `${t('contact.errors.email.invalid')}`;
            }
            return '';
        },
        message: (value) => {
            if(value.trim() === '') return `${t('contact.errors.message.required')}`;
            if(value.length < 10) return `${t('contact.errors.message.minLength')}`;
            if (value.length > 500) return `${t('contact.errors.message.maxLength')}`;
            return '';
        }
    };

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setValues((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: validators[field](value) }));
    };

    const resetForm = () => {
        setValues({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
    };

    const isFormValid = () => {
        return (
            values.name.trim() !== '' &&
            values.email.trim() !== '' &&
            values.message.trim() !== '' &&
            errors.name === '' &&
            errors.email === '' &&
            errors.message === ''
        );
    };

    return {
        values,
        errors,
        handleChange,
        resetForm,
        isFormValid,
    };
};
