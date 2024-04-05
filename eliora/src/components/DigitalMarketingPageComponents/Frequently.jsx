import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import "../WebsiteDevelopmentPageComponents/Frequently.css";

const Frequently = () => {

    const faqData = [
      {
        question: "What is digital marketing?",
        answer: "Digital marketing is the practice of promoting and advertising goods, services, or brands to a specific audience via the use of digital platforms, channels, and technology. It includes a variety of online marketing methods and tactics that use the web and electronic gadgets to reach and interact with potential customers."
      },
      {
        question: "What is content marketing?",
        answer: "Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and engage a target audience. The primary goal of content marketing is to build trust, establish brand authority, and ultimately drive profitable customer actions, such as making a purchase, subscribing to a service, or taking any desired action."
      },
      {
        question: "What is the difference between digital marketing and content marketing?",
        answer: "Digital marketing encompasses all marketing efforts that use digital channels, platforms, and technologies to promote products, services, or brands. It includes a wide range of online marketing techniques such as SEO, PPC advertising, social media marketing, email marketing, influencer marketing, and more. While Content marketing is a specific subset of digital marketing. It focuses on the creation and distribution of valuable, relevant, and consistent content to attract and engage a target audience. The content can be in the form of blog posts, articles, videos, infographics, podcasts, and more."
      },
      {
        question: "What are some of the benefits of content marketing?",
        answer: "Content marketing provides businesses with numerous benefits, making it an essential strategy for online success. Through engaging content, businesses can attract and nurture leads, guiding them through the buyer's journey. Moreover, content marketing offers cost-effectiveness and measurable results, allowing marketers to optimise their strategies based on data-driven insights."
      },
      {
        question: "Why do I choose a digital marketing service?",
        answer: "Choosing a digital marketing service provides businesses with specialised expertise, time efficiency, and access to advanced tools. Experienced professionals develop customised. strategies, conduct market research, and handle various digital marketing channels. Detailed analytics offer measurable results and insights, ensuring data-driven decision-making. With a multi-channel approach and consistent branding, businesses can reach a wider audience, increase brand visibility, and achieve marketing objectives."
      },
      {
        question: "What is Search Engine Optimization (SEO)?",
        answer: "Search Engine Optimization (SEO) is a digital marketing strategy and process aimed at improving a website's visibility and ranking in search engine results pages (SERPs). The primary goal of SEO is to increase organic (non-paid) traffic to a website by optimising its content, structure, and overall user experience to align with the criteria used by search engines."
      },
      {
        question: "What is Pay-per-click (PPC)?",
        answer: "Pay-per-click (PPC) is an online advertising model in which advertisers pay a fee each time one of their ads is clicked. It is a form of digital advertising that allows businesses to display their ads on various platforms, such as search engines, social media platforms, websites, and mobile apps."
      },
      {
        question: "Why is Social media marketing important for your business?",
        answer: "Social media marketing is essential for businesses as it offers a plethora of benefits in the digital era. By harnessing the vast user base of social media platforms, businesses can significantly increase brand visibility and reach a broader audience. Targeted advertising options ensure that marketing messages reach the right audience, leading to improved engagement and conversions."
      },
      {
        question: "What is Email marketing?",
        answer: "Email marketing is a digital marketing strategy that involves sending targeted emails to a group of individuals, typically customers or potential customers, with the goal of promoting products, services, or brand messaging. It is a powerful and cost-effective method for businesses to engage with their audience, build relationships, and drive conversions."
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
