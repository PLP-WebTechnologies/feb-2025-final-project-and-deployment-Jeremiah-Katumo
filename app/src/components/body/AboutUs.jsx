import React from 'react';
import '../../assets/css/main.css';

function AboutUs() {

    return (
        <section id="about" className="about section-bg">
            <div className="container">

                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right">
                        <a href='youtube.com' className="glightbox play-btn mb-4" > </a>
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h4 data-aos="fade-up">About us</h4>
                        <h3 data-aos="fade-up">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p data-aos="fade-up">Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                        <div className="icon-box" data-aos="fade-up">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title"><a href="title">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>

                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title"><a href="title">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>

                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="bx bx-atom"></i></div>
                            <h4 className="title"><a href="title">Dine Pad</a></h4>
                            <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;