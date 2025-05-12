import React, { useEffect } from 'react';
import '../../assets/css/main.css';
import Navigation from './Navigation';

const Header = () => {
    useEffect(() => {
        const header = document.querySelector('#header');
        const nextElement = header.nextElementSibling;
        const headerOffset = header.offsetTop;
    
        const headerFixed = () => {
            header.classList.toggle('fixed-top', headerOffset - window.scrollY <= 0);
            nextElement.classList.toggle('scrolled-offset', headerOffset - window.scrollY <= 0);
        };
    
        window.addEventListener('load', headerFixed);
        window.addEventListener('scroll', headerFixed);
    
        return () => {
            window.removeEventListener('load', headerFixed);
            window.removeEventListener('scroll', headerFixed);
        };
    }, []);
                
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="/">Imarika DT </a></h1>
                </div>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
