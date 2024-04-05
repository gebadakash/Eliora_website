import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
      {
        "question": "What is E-commerce development?",
        "answer": "E-commerce development refers to the process of creating and enhancing online platforms that facilitate the buying and selling of products or services over the internet."
      },
      {
        "question": "Why do businesses need E-commerce development services?",
        "answer": "Businesses need E-commerce development services to establish a strong online presence, expand their customer reach, increase sales, and provide a convenient shopping experience to their customers."
      },
      {
        "question": "Do you offer mobile-friendly E-commerce solutions?",
        "answer": "Absolutely! We ensure that all our E-commerce websites are mobile-friendly and responsive, providing a seamless shopping experience across various devices."
      },
      {
        "question": "Can you integrate third-party tools and plugins?",
        "answer": "Yes, we can integrate third-party tools and plugins to enhance the functionality of your E-commerce website, such as CRM systems, inventory management, email marketing, and analytics."
      },
      {
        "question": "Do you offer post-development support?",
        "answer": "Absolutely! Our team is available to provide support and assistance even after the E-commerce website is launched, helping you with any issues or updates."
      },
      {
        "question": "Can you integrate multiple payment gateways?",
        "answer": "Certainly! We can integrate various payment gateways to offer your customers a wide range of payment options, ensuring a smooth and secure checkout process."
      },
      {
        "question": "What is the estimated timeline for E-commerce website development?",
        "answer": "The timeline for E-commerce website development can vary depending on the complexity of the project and specific requirements. We will provide you with a detailed project plan and timeline during the initial consultation."
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
