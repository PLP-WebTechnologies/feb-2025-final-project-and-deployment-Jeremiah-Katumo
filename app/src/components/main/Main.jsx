import React from 'react';
import '../../assets/css/main.css';
import Header from '../header/Header';
import TopBar from '../body/TopBar';
import Hero from '../header/Hero';
import Footer from '../footer/Footer';
import BackToTop from '../buttons/BackToTop';
import WhyUs from '../body/WhyUs';
import AboutUs from '../body/AboutUs';
import Values from '../body/Values';
import Services from '../body/Services';
import Testimonials from '../body/Testimonials';
import ContactUs from '../body/ContactUs';
import Gallery from '../body/Gallery';
import Team from '../body/Team';
import FAQ from '../body/Faqs';
import AOSInitializer from '../body/AOSInitialiser';

function Main() {
    return (
        <>
        <TopBar />
        <Header />
        <Hero />
        <main id='main'>
            <WhyUs />
            <AboutUs />
            <Services />
            <Values />
            <Testimonials />
            <Gallery />
            <Team />
            <FAQ />
            <ContactUs />
        </main>
        <Footer />
        <BackToTop />
        <AOSInitializer />
        </>
    )
}

export default Main;