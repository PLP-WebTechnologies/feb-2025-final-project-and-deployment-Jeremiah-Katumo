import React, { useEffect } from 'react';
import '../../assets/css/main.css'

function Navigation() {
    useEffect(() => {
        const navbarlinks = document.querySelectorAll('#navbar .scrollto');
    
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                  let section = document.querySelector(navbarlink.hash);
                if (!section) return;
                if (
                  position >= section.offsetTop &&
                  position <= section.offsetTop + section.offsetHeight
                ) {
                  navbarlink.classList.add('active');
                } else {
                  navbarlink.classList.remove('active');
                }
            });
        };
    
        window.addEventListener('load', navbarlinksActive);
        window.addEventListener('scroll', navbarlinksActive);
    
        return () => {
            window.removeEventListener('load', navbarlinksActive);
            window.removeEventListener('scroll', navbarlinksActive);
        };
      }, []);


      useEffect(() => {
        const handleClick = (e) => {
          const navbar = document.getElementById('navbar');
    
          if (e.target.classList.contains('mobile-nav-toggle')) {
            navbar.classList.toggle('navbar-mobile');
            e.target.classList.toggle('bi-list');
            e.target.classList.toggle('bi-x');
          } else if (e.target.parentNode.classList.contains('dropdown')) {
            if (navbar.classList.contains('navbar-mobile')) {
              e.preventDefault();
              e.target.nextElementSibling.classList.toggle('dropdown-active');
            }
          } else if (e.target.classList.contains('scrollto')) {
            const hash = e.target.hash;
            const targetElement = document.querySelector(hash);
    
            if (targetElement) {
              e.preventDefault();
    
              if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                const navbarToggle = document.querySelector('.mobile-nav-toggle');
                navbarToggle.classList.toggle('bi-list');
                navbarToggle.classList.toggle('bi-x');
              }
    
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
              });
            }
          }
        };
    
        document.addEventListener('click', handleClick, true);
    
        return () => {
          document.removeEventListener('click', handleClick, true);
        };
      }, []);


    return (
        <>
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li className="dropdown"><a href="a"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                        <li><a href="a">Drop Down 1</a></li>
                        <li className="dropdown"><a href="a"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                                <li><a href="b">Deep Drop Down 1</a></li>
                                <li><a href="c">Deep Drop Down 2</a></li>
                                <li><a href="d">Deep Drop Down 3</a></li>
                                <li><a href="e">Deep Drop Down 4</a></li>
                                <li><a href="f">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="a">Drop Down 2</a></li>
                        <li><a href="b">Drop Down 3</a></li>
                        <li><a href="c">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        </>
    )
}

export default Navigation;