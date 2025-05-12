import React, { useState } from 'react';
import '../../assets/css/main.css';

function FAQ() {
  const [hoveredQuestion, setHoveredQuestion] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredQuestion(index);
  };

  const handleMouseLeave = () => {
    setHoveredQuestion(null);
  };

  const faqData = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc?',
      answer:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit?',
      answer:
        'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.',
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      answer:
        'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.',
    },
    {
      question: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
      answer:
        'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.',
    },
  ];

  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="faq-list">
          <ul>
            {faqData.map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <i className="bx bi-help-circle icon-help"></i> {item.question}
                <i className={`bx ${hoveredQuestion === index ? 'bx-chevron-up' : 'bx-chevron-down'} icon-toggle`}></i>
                {hoveredQuestion === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
