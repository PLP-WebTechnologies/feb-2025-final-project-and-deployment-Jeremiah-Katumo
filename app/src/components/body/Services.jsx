import React from 'react';
import '../../assets/css/main.css';

function Services() {
    const servicesData = [
        { title: "Banking", description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident", icon: "bi-briefcase" },
        { title: "Savings", description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata", icon: "bi-card-checklist" },
        { title: "Agribusiness Financing", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", icon: "bi-bar-chart" },
        { title: "Education Financing", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", icon: "bi-binoculars" },
        { title: "E - Channels", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque", icon: "bi-brightness-high" },
        { title: "Eiusmod Tempor", description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi", icon: "bi-calendar4-week" }
    ];

    return (
        <>
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="icon-box">
                                    <div className="icon"><i className={`bi ${service.icon}`}></i></div>
                                    <h4 className="title"><a href="title">{service.title}</a></h4>
                                    <p className="description">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
