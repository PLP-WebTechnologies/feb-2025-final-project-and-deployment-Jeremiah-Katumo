import React, { useEffect } from 'react';
import '../../assets/css/main.css';

function BackToTop() {
    useEffect(() => {
        const backToTop = document.querySelector('.back-to-top');
        
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        };
        
        window.addEventListener('load', toggleBackToTop);
        window.addEventListener('scroll', toggleBackToTop);
        
        return () => {
            window.removeEventListener('load', toggleBackToTop);
            window.removeEventListener('scroll', toggleBackToTop);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="back-to-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
            <i className="bi bi-arrow-up-short"></i>
        </button>
    );
}

export default BackToTop;
