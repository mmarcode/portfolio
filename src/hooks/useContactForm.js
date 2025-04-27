import { useState } from 'react'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

export const useContactForm = (values, resetForm, t, closeModal) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (isFormValid) => async (e) => {
        e.preventDefault();
        if(!isFormValid()) return;

        setIsSubmitting(true);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };

        try {
            const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
            console.log('SUCCESS!', response.status, response.text);
            toast(t('contact.success'), {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#17191f',
                    color: '#fff',
                },
            });
            resetForm();
            closeModal();
        } catch (error) {
            console.error('FAILED...', error);
            toast(t('contact.failed'), {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#17191f',
                    color: '#fff',
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        handleSubmit,
    };
};
