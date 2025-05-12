import React, { useEffect, useState } from 'react';
import '../../assets/css/main.css';
// import './css/hero.css';
import imageOne from '../../assets/img/slider/blaque.png';
import imageTwo from '../../assets/img/slider/burandt.png';
import imageThree from '../../assets/img/slider/wheeler.png';

function Hero() {
    const carouselImages = [
        {img: imageOne, caption: "Welcome to Imarika", text: "I'am ..."}, 
        {img: imageTwo, caption: "Welcome to Imarika", text: "I'am okay"}, 
        {img: imageThree, caption: "Welcome to Imarika", text: "I'am fine"}
    ];
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState+1);
            }

            return () => clearTimeout(timer);
        }, 5000)
    }, [currentState])

    const goToNext = () => {
        setCurrentState(currentState);
    }

    const bgImageStyles = {
        backgroundImage: `url(${carouselImages[currentState].img})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        height: '800px',
        // width: '80%'
    };

    return (
        <>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container" data-aos="fade-up">
                <div className="position-relative h-100">
                    <div className="slides-1 portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">

                            <div style={bgImageStyles}></div>
                            <div className="carousel-inner">
                                {carouselImages.map((slide, index) => (
                                    <div key={index} className={`carousel-item fade${index === 0 ? "active" : ""}`}>
                                        <img className="d-block w-100" onClick={() => goToNext(currentState)} src={slide.img} alt='' />
                                    
                                        <div className="text">
                                            <h1 className={`text fade${index === 0 ? ' active' : ''}`}>{slide.caption}</h1>
                                            <h2>{slide.text}</h2>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {carouselImages.map((_, index) => (
                                <span key={index} className={`dot${index === 0 ? ' active' : ''}`}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;