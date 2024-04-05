import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
      {
        question: "What is UI/UX design?",
        answer: "UI/UX design stands for User Interface and User Experience design. It's about creating digital interfaces that are visually appealing and user-friendly."
      },
      {
        question: "Why is UI/UX design important?",
        answer: "UI/UX design is crucial because it directly impacts user satisfaction and engagement. A well-designed interface enhances usability and encourages users to interact with your product."
      },
      {
        question: "What's the difference between UI and UX design?",
        answer: "UI (User Interface) focuses on the visual aspects, while UX (User Experience) covers the overall user journey, including research, usability, and interaction design."
      },
      {
        question: "How can UI/UX design benefit my business?",
        answer: "Effective UI/UX design can boost customer retention, conversion rates, and overall brand reputation, leading to increased revenue and growth."
      },
      {
        question: "What steps are involved in UI/UX design?",
        answer: "UI/UX design typically includes user research, wireframing, prototyping, usability testing, and final interface design."
      },
      {
        question: "How long does a UI/UX design project take?",
        answer: "The timeline varies depending on the project's complexity. Small projects may take a few weeks, while larger ones can span several months."
      },
      {
        question: "Do I need a dedicated UI/UX designer for my project?",
        answer: "Having a dedicated UI/UX designer is highly recommended for achieving the best results. They bring expertise in creating designs that align with user needs and business goals."
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
