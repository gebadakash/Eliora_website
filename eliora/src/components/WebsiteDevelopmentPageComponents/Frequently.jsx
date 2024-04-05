import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "./Frequently.css";

const Frequently = () => {

    const faqData = [
        {
            question: "What types of websites do you build?",
            answer: "We specialize in building a wide range of websites, from simple static pages to dynamic web applications. Our expertise includes e-commerce platforms, content management systems (CMS), corporate websites, blogs, portfolio sites, and more. Whether you need a small business website or a complex web application, we have you covered."
        },
        {
            question: "Do you offer custom web development services?",
            answer: "Absolutely! We take pride in our ability to deliver tailor-made solutions that cater to your specific business needs. Our team of skilled developers and designers will work closely with you to understand your requirements and create a unique website that reflects your brand identity and objectives."
        },
        {
            question: "Can you optimize websites for mobile devices?",
            answer: "Security is a top priority for us. We follow industry best practices and implement robust security measures to protect your website from potential threats. This includes secure coding practices, SSL certificates for data encryption, and regular security audits to identify and address vulnerabilities proactively."
        },
        {
            question: "Can you help with website maintenance and updates?",
            answer: "Yes, we offer website maintenance and support services to keep your site running smoothly. Whether you need routine updates, bug fixes, or security patches, our team is here to assist you. We also provide ongoing support and can help you scale your website as your business grows."
        },
        {
            question: "What if I need to make changes to my website in the future?",
            answer: "We design websites with flexibility in mind. If you need to make changes or add new features down the road, we can easily accommodate those requests. Our websites are built to be easily maintainable and scalable, ensuring your online presence remains up-to-date and relevant."
        },
        {
            question: "How do I get started with your web development services?",
            answer: "Getting started is easy! Simply reach out to us through our contact page or give us a call. We'll set up an initial consultation to discuss your project requirements and goals. From there, we'll provide you with a detailed proposal and a roadmap for your exciting web development journey."
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
