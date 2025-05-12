import React from "react";
import '../../assets/css/main.css';
import ValueOne from '../../assets/img/values-1.png';
import ValueTwo from '../../assets/img/values-2.png';
import ValueThree from '../../assets/img/values-3.png';
import ValueFour from '../../assets/img/values-4.png';

function Values() {
    // Information for each card
    const cardInfo = [
        {
            title: 'Our Mission',
            text: 'Empowering our members socio-economically by providing competitive financial solutions.',
            image: ValueOne
        },
        {
            title: 'Core Values',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.',
            image: ValueTwo
        },
        {
            title: 'Our Vision',
            text: 'To be: The trusted Sacco of Choice.',
            image: ValueThree
        },
        {
            title: 'Our Motto',
            text: '"Together, we grow".',
            image: ValueFour
        }
    ];

    return (
        <section id="values" className="values">
            <div className="container">
                <div className="row">
                    {cardInfo.map((card, index) => (
                        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" key={index}>
                            <div className="card" style={{backgroundImage: `url(${card.image})`}}>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="read-more"><a href="read-more"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values;
