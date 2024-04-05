import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
      {
        question: "What is graphic design?",
        answer: "Graphic design is a creative discipline that involves the creation of visual content to communicate messages, ideas, or information. It is the art of combining text, images, colours, and other visual elements to produce visually appealing and effective designs for various purposes."
      },
      {
        question: "What is logo design?",
        answer: "Logo design is the process of creating a unique and visually distinctive symbol or mark that represents a brand, business, organisation, or individual. The logo serves as a visual representation of the identity and values of the entity it represents."
      },
      {
        question: "What are the benefits of having a good logo?",
        answer: "A good logo offers several benefits, including increased brand recognition and recall, portraying professionalism and credibility, differentiation in a competitive market, fostering brand loyalty, ensuring consistency in branding, and versatility across platforms."
      },
      {
        question: "How do I choose the right logo for my business?",
        answer: "To choose the right logo for your business, understand your brand's identity and target audience. Keep it simple, versatile, and timeless. Consider colours wisely, get professional help, and seek feedback. Protect your logo legally through trademarking."
      },
      {
        question: "What are the different types of graphic design?",
        answer: "Brand Identity Design, Print Design, Digital/Web Design, Packaging Design, Advertising and Marketing Design, Motion Graphics, Illustration and Infographics, Environmental Design, Typography Design, Publication Design, User Interface (UI) Design, Icon Design, Social Media Design."
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
