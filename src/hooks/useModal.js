import { useState, useEffect, useRef } from 'react'

export const useModal = (resetForm) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const toggleModal = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen) resetForm();
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if(isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return {
        isOpen,
        setIsOpen,
        toggleModal,
        modalRef
    };
};
