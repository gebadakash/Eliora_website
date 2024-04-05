import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
        {
            question: "What is web design?",
            answer: "Web design is the process of creating and planning the layout, appearance, and functionality of websites. It involves various elements such as graphic design, user experience (UX) design, and user interface (UI) design to create a visually appealing and user-friendly website."
        },
        {
            question: "Why is web design important for my business?",
            answer: "An effective web design is crucial as it leaves a lasting impression on your visitors. A well-designed website can enhance your brand image, improve user engagement, boost conversions, and ultimately contribute to the success of your business."
        },
        {
            question: "Do you offer custom web design or templates?",
            answer: "We offer both options. We can create a custom web design tailored to your brand and requirements, or we can use pre-designed templates if you prefer a more budget-friendly solution."
        },
        {
            question: "Can you redesign my existing website?",
            answer: "Yes, we offer website redesign services to update the look and functionality of your current site, making it more modern and user-friendly."
        },
        {
            question: "How long does it take to design a website?",
            answer: "The timeline for web design varies depending on the complexity and scope of the project. A simple website might take a few weeks, while more complex ones can take several months to complete."
        },
        {
            question: "Will my website be mobile-friendly and responsive?",
            answer: "Absolutely! We prioritize mobile responsiveness to ensure your website looks and functions flawlessly on all devices, including smartphones and tablets."
        },
        {
            question: "Can you integrate social media into my website?",
            answer: "Absolutely! We can integrate social media icons and links to your social profiles, allowing visitors to connect and share your content easily."
        },

        {
            question: "How do I get started with your web design services?",
            answer: "To get started, simply contact us through our website or give us a call. We'll discuss your requirements, goals, and budget, and then provide you with a personalized plan to proceed with your web design project."
        },
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
