import React from 'react';
import '../../assets/css/main.css';

function Gallery() {
    const portfolioItems = [
        { type: "filter-app", title: "App 1", category: "App", imgSrc: "assets/img/portfolio/portfolio-1.jpg" },
        { type: "filter-web", title: "Web 3", category: "Web", imgSrc: "assets/img/portfolio/portfolio-2.jpg" },
        { type: "filter-app", title: "App 2", category: "App", imgSrc: "assets/img/portfolio/portfolio-3.jpg" },
        { type: "filter-card", title: "Card 2", category: "Card", imgSrc: "assets/img/portfolio/portfolio-4.jpg" },
        { type: "filter-web", title: "Web 2", category: "Web", imgSrc: "assets/img/portfolio/portfolio-5.jpg" },
        { type: "filter-app", title: "App 3", category: "App", imgSrc: "assets/img/portfolio/portfolio-6.jpg" },
        { type: "filter-card", title: "Card 1", category: "Card", imgSrc: "assets/img/portfolio/portfolio-7.jpg" },
        { type: "filter-card", title: "Card 3", category: "Card", imgSrc: "assets/img/portfolio/portfolio-8.jpg" },
        { type: "filter-web", title: "Web 3", category: "Web", imgSrc: "assets/img/portfolio/portfolio-9.jpg" }
    ];

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {portfolioItems.map((item, index) => (
                            <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${item.type}`}>
                                <img src={item.imgSrc} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                    <a href={item.imgSrc} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery;
