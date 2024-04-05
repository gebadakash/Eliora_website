import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
        {
            "question": "How long does it take to develop an app?",
            "answer": "The development timeline depends on the app's complexity, features, and platform. Generally, it can take anywhere from a few weeks to several months"
          },
          {
            "question": "What are the benefits of having an app?",
            "answer": "Having a dedicated app can enhance user experience, offer offline access, send personalised notifications, and take advantage of device-specific features, leading to increased user engagement and loyalty."
          },
          {
            "question": "Can you integrate social media into the app?",
            "answer": "Yes, we can integrate social media features into the app, allowing users to share content and engage with your brand on various platforms."
          },
          {
            "question": "Will my app have offline capabilities?",
            "answer": "Yes, we strive to make the app responsive and compatible with various devices and screen sizes to ensure a seamless user experience."
          },
          {
            "question": "Will my app be compatible with all devices and screen sizes?",
            "answer": "Yes, we can develop an e-commerce website using WordPress and integrate popular e-commerce plugins like WooCommerce."
          },
          {
            "question": "Can you integrate my website's existing features into the app?",
            "answer": "Yes, we can integrate your website's features and functionalities into the app to ensure consistency across platforms."
          },

          {
            "question": "What is the difference between a native and a cross-platform app?",
            "answer": "A native app is developed for a specific platform (e.g., iOS or Android) using platform-specific programming languages and tools. A cross-platform app, on the other hand, is built using frameworks that allow code sharing across multiple platforms."
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
