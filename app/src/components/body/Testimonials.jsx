import React, { useState, useEffect } from "react";
import '../../assets/css/main.css';
import testimonialOne from '../../assets/img/testimonials/testimonials-1.png';
import testimonialTwo from '../../assets/img/testimonials/testimonials-2.png';
import testimonialThree from '../../assets/img/testimonials/testimonials-3.png';
import testimonialFour from '../../assets/img/testimonials/testimonials-4.png';
import testimonialFive from '../../assets/img/testimonials/testimonials-3.png';

// Import testimonial images dynamically
// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => ( images[index] = r(item) ));
//     return images;
// }
// const testimonialImages = importAll(require.context('../../assets/img/testimonials', false, /\.(png|jpe?g|svg)$/));

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % testimonials.length;
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container position-relative" data-aos="fade-up">
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial, index) => (
                            <span key={index} className={`carousel-item swiper-slider ${index === currentIndex ? "active" : ""}`}>
                                <div className="testimonial-item" onClick={handleNext}>
                                    <img src={testimonial.image} className="testimonial-img" alt="" />
                                    <h3 className='testimonial-heading'>{testimonial.name}</h3>
                                    <h4>{testimonial.position}</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            {testimonial.quote}
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const testimonials = [
    { image: testimonialOne, name: "Saul Goodman", position: "Ceo & Founder", quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper." },
    { image: testimonialTwo, name: "Sara Wilsson", position: "Designer", quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa." },
    { image: testimonialThree, name: "Jena Karlis", position: "Store Owner", quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." },
    { image: testimonialFour, name: "Matt Brandon", position: "Freelancer", quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam." },
    { image: testimonialFive, name: "John Larson", position: "Entrepreneur", quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid." }
];

export default Testimonials;
