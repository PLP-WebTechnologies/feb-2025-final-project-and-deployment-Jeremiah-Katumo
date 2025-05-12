import React from "react";
import '../../assets/css/main.css';

function WhyUs() {
    // Define data for icon boxes
    const iconBoxData = [
        {
            icon: "bx bx-receipt",
            title: "Corporis voluptates sit",
            description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
        },
        {
            icon: "bx bx-cube-alt",
            title: "Ullamco laboris ladore pan",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
        },
        {
            icon: "bx bx-images",
            title: "Labore consequatur",
            description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
        }
    ];

    // Render icon boxes
    const renderIconBoxes = () => {
        return iconBoxData.map((box, index) => (
            <div key={index} className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="icon-box mt-4 mt-xl-0">
                    <i className={box.icon}></i>
                    <h4>{box.title}</h4>
                    <p>{box.description}</p>
                </div>
            </div>
        ));
    };

    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                        <div className="content">
                            <h3>Why Choose Imarika?</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                            </p>
                            <div className="text-center">
                                <a href="more" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 d-flex">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                {renderIconBoxes()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
