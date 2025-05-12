import React from 'react';
import '../../assets/css/main.css';

function TopBar() {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@imarika.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                </div>

                <div className="cta d-none g-sm d-md-flex align-items-center">
                    <div><a href="/signup" className="scrollto">SignUp</a></div>
                    <div><a href="/signin" className="scrollto">SignIn</a></div>
                </div>
            </div>
        </section>
    )
}

export default TopBar;