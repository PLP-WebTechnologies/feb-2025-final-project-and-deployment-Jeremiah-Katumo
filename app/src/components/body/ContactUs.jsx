import React from "react";
import '../../assets/css/main.css';


function InfoBox({ icon, title, content, delay }) {
    return (
        <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay={delay}>
            <div className="info-box">
                <i className={icon}></i>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </div>
    );
}

function ContactUsInfo() {
    const infoItems = [
        { icon: "bx bi-map", title: "Our Address", content: "Charo Wa Mae Street, Close to KCH", delay: 0 },
        { icon: "bx bi-envelope", title: "Email Us", content: "imarika@info.com<br/>contact@imarika.com", delay: 100 },
        { icon: "bx bi-phone", title: "Call Us", content: "+1 5589 55488 55<br/>+1 6678 254445 41", delay: 200 }
    ];

    return (                  
                <div className="row justify-content-center">
                    {infoItems.map((item, index) => (
                        <InfoBox key={index} icon={item.icon} title={item.title} content={item.content} delay={item.delay} />
                    ))}
                </div>
    );
}

function ContactUs() {

    return (
        <>
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2 data-aos="fade-up">Contact</h2>
                    <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <ContactUsInfo />

                <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                <div class="col-xl-9 col-lg-12 mt-4">
                    <form method="post" className="php-email-form">
                        <div class="row">
                            <div class="col-md-6 form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div class="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div class="my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
        </>
    )
}

export default ContactUs;