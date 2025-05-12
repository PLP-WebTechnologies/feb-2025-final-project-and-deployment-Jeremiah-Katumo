import React from "react";
import '../../assets/css/main.css';

const Footer = () => {
  // Contact Info
  const contactInfo = {
    address: "A108 Adam Street",
    city: "New York, NY 535022",
    country: "United States",
    phone: "+1 5589 55488 55",
    email: "info@example.com"
  };

  // Useful Links
  const usefulLinks = [
    { text: 'Home', href: '#hero' },
    { text: 'About us', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Terms of service', href: '#termsofservice' },
    { text: 'Privacy policy', href: '#privacypolicy' }
  ];

  // Our Services
  const ourServices = [
    { text: 'Banking', href: '#web' },
    { text: 'Savings', href: '#web' },
    { text: 'Agribusiness Financing', href: '#product' },
    { text: 'Education Financing', href: '#marketing' },
    { text: 'E Channels', href: '#graphic' }
  ];

  return (
    <>
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h3><a href="#topbar">Imarika</a></h3>
                        <p>{contactInfo.address}<br />
                            {contactInfo.city}<br />
                            {contactInfo.country}<br />
                            <strong>Phone:</strong> {contactInfo.phone}<br />
                            <strong>Email:</strong> {contactInfo.email}<br />
                        </p>
                    </div>

                    {[usefulLinks, ourServices].map((links, index) => (
                        <div key={index} className={`col-lg-${index === 0 ? '2' : '3'} col-md-6 footer-links`}>
                            <h4>{index === 0 ? 'Useful Links' : 'Our Services'}</h4>
                            <ul>
                                {links.map((item, idx) => (
                                    <li key={idx}><i className="bx bx-chevron-right"></i> <a href={item.href}>{item.text}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container d-lg-flex py-4">
            <div className="me-lg-auto text-center text-lg-start">
                <div className="copyright">
                    &copy; Copyright <strong><span>Imarika</span></strong>.
                    All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="jereny.com/">JKatush</a>
                </div>
            </div>
            <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
                <a href="http://twitter.com" className="twitter"><i className="bx bi-twitter"></i></a>
                <a href="http://facebook.com" className="facebook"><i className="bx bi-facebook"></i></a>
                <a href="http://instagram.com" className="instagram"><i className="bx bi-instagram"></i></a>
                <a href="linkedin.com" className="linkedin"><i className="bx bi-linkedin"></i></a>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
