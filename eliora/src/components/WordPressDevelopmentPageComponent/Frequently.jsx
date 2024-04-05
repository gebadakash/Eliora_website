import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
        {
            "question": "Why should I choose WordPress for my website development?",
            "answer": "WordPress is user-friendly, flexible, and has a large community of developers, making it easy to find support and extend its functionality through plugins and themes."
          },
          {
            "question": "What about responsive design? Will my website be mobile-friendly?",
            "answer": "Absolutely! All websites we develop are optimized for mobile devices, ensuring a seamless user experience across various screen sizes."
          },
          {
            "question": "Can you integrate third-party plugins or tools into my WordPress site?",
            "answer": "Yes, we can integrate various third-party plugins and tools to add specific functionalities to your website."
          },
          {
            "question": "Can you optimize my website for speed and performance?",
            "answer": "Yes, we focus on optimising websites for speed and performance to ensure a smooth user experience."
          },
          {
            "question": "Can you create an e-commerce website using WordPress?",
            "answer": "Yes, we can develop an e-commerce website using WordPress and integrate popular e-commerce plugins like WooCommerce."
          },
          {
            "question": "What sets your WordPress development service apart from others?",
            "answer": "Our team of experienced developers, focus on client satisfaction, attention to detail, and dedication to delivering high-quality WordPress websites are what sets us apart as a WordPress development service provider."
          }
    ];


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    

  return (
    <section id="faq" className="faq">
            <div className="container">
                <div style={{textAlign: 'center'}}>
                    <h2 className="text-dark">Frequently Asked Questions</h2><br /><br />
                </div>

                <div className="faq-list">
                    <ul>
                        {faqData.map((item, index) => (
                            <li key={index}>
                                <i className="bi bi-question-circle-fill icon-help" aria-hidden="true"></i>
                                <a 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={`#faq-list-${index}`} 
                                    className={`collapse ${activeIndex === index ? 'show' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question} 
                                    <FaAngleDown className={`fa fa-sm fa-angle-${activeIndex === index ? 'up' : 'down'} icon-show`} aria-hidden="true"/>
                                    <FaAngleUp className={`fa fa-sm fa-angle-${activeIndex === index ? 'up' : 'down'} icon-close`}/>
                                </a>
                                <div 
                                    id={`faq-list-${index}`} 
                                    className={`collapse ${activeIndex === index ? 'show' : ''}`} 
                                    data-bs-parent=".faq-list"
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
  )
}

export default Frequently
