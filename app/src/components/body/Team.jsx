import React from "react";
import '../../assets/css/main.css';

function Team() {
    const teamMembers = [
        { name: "Walter White", role: "Chief Executive Officer", imgSrc: "assets/img/team/team-1.jpg" },
        { name: "Sarah Jhonson", role: "Product Manager", imgSrc: "assets/img/team/team-2.jpg" },
        { name: "William Anderson", role: "CTO", imgSrc: "assets/img/team/team-3.jpg" },
        { name: "Amanda Jepson", role: "Accountant", imgSrc: "assets/img/team/team-4.jpg" }
    ];

    return (
        <>
            <section id="team" className="team section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="member">
                                    <div className="member-img">
                                        <img src={member.imgSrc} className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href="twitter"><i className="bi bi-twitter"></i></a>
                                            <a href="fb"><i className="bi bi-facebook"></i></a>
                                            <a href="ig"><i className="bi bi-instagram"></i></a>
                                            <a href="linkedin"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
