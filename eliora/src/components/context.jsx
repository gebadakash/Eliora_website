import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState ={

    title:"",
    subTitle:"",
    AgumentedTitle:"",
    AgumentedContent1:``,
    AgumentedContent2:``,
    AgumentedImage:"",
    DiscoverSectionTitle:"",
    DiscoverSectionSubTitle:"",
    DiscoverSectionParagraph:"",
    DiscoverSectionButton:"",
    DiscoverSectionImage:"",
    ServiceTitle:"",
    ServiceContent:``,
    ExcellenceSectionTitle:"",
    ExcellenceSectionSubTitle:"",
    ExcellenceSectionContent:``,
    ExcellenceSectionImage:"",
    ExcellenceSectionButton:"",

};

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const updatePlacementPage = () => {

        return dispatch({
            type:"PLACEMENT_PAGE",
            payload:{
                title:"Placement and Recruitment",
                subTitle:"Placement and Recruitment",
                AgumentedTitle:"Augment your Team with Placement and Recruitment Solution",
                AgumentedContent1:`In the dynamic realm of talent acquisition and placement, Eliora emerges as a beacon of expertise and innovation, specializing in IT recruitment, IT placement, BPO recruitment consultant, banking and financial services recruitment and logistics and marketing placement. With a team of dedicated individuals, we expertly bridge the divide between exceptional individuals and industry-leading enterprises across diverse sectors. Our primary motto centers on accuracy, matching elite individuals with suited opportunities and creating synergistic relationships in the constantly changing placement and recruiting scene.`,
                AgumentedContent2:`Our holistic approach extends beyond mere placement. Eliora's Recruitment and Placement service functions as your strategic compass, ensuring that the right individuals occupy the right positions. This commitment to precision provides a rock-solid foundation for your projects, ensuring continuity and undeviating stability. By choosing Eliora as your ally, you gain access to an exceptional talent reservoir. These individuals not only possess the requisite skills but also have a thorough understanding of the values and goals of your business.`,
                AgumentedImage:"images/ft.png",

            },
        });

    }

    const updateContractPage = () =>{

        return dispatch({
            type:"CONTRACT_PAGE",
            payload:{
                title:"Contract to Contract Staffing",
                subTitle:"Contract to Contract Staffing",
                AgumentedTitle:"Optimize Your Talent Acquisition with IT Contracting Staffing Solutions",
                AgumentedContent1:`In today's fiercely competitive business landscape, Staffing services have become a strategic imperative for companies seeking long-term success. Eliora, a trailblazer in the field, provides Contract services that surpasses traditional models, delivering operational accuracy and efficiency unmatched in the industry. We don't just combine skills; we coordinate synergies between candidates who share similar, synchronized career trajectories. By cultivating synergistic connections between individuals with aligned career goals, we facilitate the building of cohesive, mission-driven teams, seamlessly integrated with our philosophy and your company's principles.`,
                AgumentedContent2:`Our resume enhancement service uses advanced and AI-based analytics to ensure that candidates' qualifications not only shine through but are also perfectly matched to the talent needs of your organization. At the same time, our Interview Skills sessions equip candidates with the cognitive agility and emotional intelligence needed to excel at interviews, streamlining and accelerating your hiring process. By partnering with us, you gain access to an elite talent pool that not only possesses exceptional technical capabilities but also fits your company's culture and strategic imperatives. It's time to revolutionize your company's talent acquisition strategy with our contract staffing services expertise and gain a decisive advantage in the competitive market.`,
                AgumentedImage:"images/ft1.png",

            },
        });
    }

    const updateClientPage = () =>{

        return dispatch({
            type:"CLIENT_PAGE",
            payload:{
                title:"Our Clients",
                subTitle:"Our Client"
            }
        })
    }


    const updateContactPage = () =>{

        return dispatch({
            type:"CONTACT_PAGE",
            payload:{
                title:"Contact Us",
                subTitle:"Contact"
            }
        })
    }


    const updateGalleryPage = () =>{

        return dispatch({
            type:"GALLERY_PAGE",
            payload:{
                title:"Our Gallery",
                subTitle:"Gallery"
            }
        })
    }


    const updateBlogPostPage = () => {

        return dispatch({
            type:"BLOG_PAGE",
            payload:{
                title:"Blog",
                subTitle:"Blog"
            }
        })
    }


    const updateCareerPage = () => {

        return dispatch({
            type:"CAREER_PAGE",
            payload:{
                title:"career",
                subTitle:"career"
            }
        })

    }

    const updateWebDevelopmentPage = () => {

        return dispatch({
            type:"WEB_DEVELOPMENT_PAGE",
            payload:{
                title:"Website Development",
                subTitle:"Website Development",
                DiscoverSectionTitle:"Website Development Services",
                DiscoverSectionSubTitle:"BEST WEBSITE DESIGN AND DEVELOPMENT AGENCY",
                DiscoverSectionButton:"START A DIALOGUE",
                DiscoverSectionImage:"images/dev-1.png",
                DiscoverSectionParagraph:`Create a strong online presence with a custom website development solution with us. We are a web development company that specializes in creating one-of-a-kind web-based applications with cutting-edge technologies to help businesses achieve their objectives. Our experienced team will collaborate with you to develop a beautiful custom web application and help in e-commerce development, mobile app development, CMS development, WordPress development that surpasses your expectations.`,
                ServiceTitle:"Everything About Web Development",
                ServiceContent:`The process of building and managing websites and online applications is known as web development. It involves backend development and frontend development making it full stack development technologies. It requires a variety of duties such as designing, coding, and adding features. HTML, CSS, and JavaScript are examples of computer languages used by web developers to create a website’s visual components and structure. To speed up development, they also use frameworks, libraries, and content management systems. The creation of intuitive, interactive, and aesthetically pleasing websites that serve the requirements of organizations or individuals is the aim of web development.`,
                ExcellenceSectionTitle:"Ready to Experience Excellence",
                // ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`Utilize Our responsive Website Development Service to unbolt Your Digital Potential. If you are looking for Affordable web development services for small businesses, Experienced web developers specializing in e-commerce platforms, and Responsive web development for seamless mobile browsing experience, you are at the right place. We design gorgeous, approachable, and responsive websites that capture visitors, encourage interaction, and strengthen your online presence. To create a website that has an impact, our talented team blends cutting-edge design, seamless functionality, and optimized performance. We’re dedicated to turning your vision into a reality from concept to launch that distinguishes you in the digital world.`,
                ExcellenceSectionImage:"images/webdev2.png",
                ExcellenceSectionButton:"Get Your Website",

            }   
        })
    }

    const updateAboutPage = () => {

        return dispatch({
            type:"ABOUT_PAGE",
            payload:{
                title:"About Us",
                subTitle:"About Us"
            }
        })
    }


    const updateWebDesigningPage = () => {

        return dispatch({
            type:"WEB_DESIGNING_PAGE",
            payload:{
                title:"Web Designing",
                subTitle:"Web Designing",
                DiscoverSectionTitle:"Web Designing Services",
                DiscoverSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                DiscoverSectionParagraph:`Searching for the top web design company? Look nowhere else! Our company offers unique, imaginative, and contemporary solutions for web design. The best UI/UX and responsive design are guaranteed by our team of knowledgeable website designers. We provide responsive site design solutions for mobile optimization using our knowledge. Count on us to improve your online presence with our excellent web design services that seamlessly blend beauty and usability. Pick our company for the greatest web design experience because we put your business goals first and produce fantastic outcomes.`,
                DiscoverSectionImage:"images/web1-removebg.png",
                DiscoverSectionButton:"Take Expert Advice",
                ServiceTitle:"Discover The World Of Web Designing",
                ServiceContent:`Web designing is the creative process of conceptualizing, planning, and building websites to deliver engaging and visually appealing online experiences. It combines the art of design with the science of technology to craft websites that not only look stunning but also function seamlessly. In today’s digital age, web design plays a crucial role in shaping a brand’s online presence, as it serves as the first point of contact between a business and its audience.`,
                ExcellenceSectionTitle:"Discover The Difference: Choose Us For Unmatched Excellence",
                ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`If you're seeking professional web design services that prioritize innovation, usability, and user-centricity, look no other than Eliora Company. Our team of expert web designers is passionate about creating visually appealing and user-friendly websites. We stay updated with the latest industry trends, ensuring your website remains at the forefront of contemporary design.
                We specialize in responsive and mobile-friendly designs, vital in today's mobile-driven world. Our designs adapt seamlessly across different devices, guaranteeing the best user experience on PCs, tablets, and smartphones. User experience is a top priority for us. Our UI/UX designers focus on creating interfaces that are intuitive and engaging, promoting better visitor engagement and increased conversions.`,
                ExcellenceSectionImage:"images/service-3.png",
                ExcellenceSectionButton:"Craft Your Design",
            }
        })
    }


    const updateWordPressDevelopmentPage = () => {

        return dispatch({
            type:"WORDPRESS_PAGE",
            payload:{
                title:"WordPress Development",
                subTitle:"WordPress Development",
                DiscoverSectionTitle:"WordPress Development Services",
                DiscoverSectionSubTitle:"EXPERT WORDPRESS DEVELOPMENT SERVICES",
                DiscoverSectionParagraph:`We offer a wide range of WordPress development services, including custom WordPress websites, WordPress theme development, WordPress plugin development, WordPress website maintenance, and WordPress optimization. We offer affordable WordPress development services that fit your budget, and our team of WordPress experts has years of experience in building and maintaining WordPress websites. We are flexible and can adapt to your specific needs, and we deliver high-quality WordPress websites that are user-friendly and mobile-friendly. To learn more about our WordPress development services, please contact us today.`,
                DiscoverSectionImage:"images/WP-1.png",
                DiscoverSectionButton:"Get Your WordPress Website",
                ServiceTitle:"Everything About WordPress Development",
                ServiceContent:`
                WordPress web development refers to the process of creating and designing websites using the WordPress platform, a popular content management system (CMS) known for its flexibility and user-friendly interface. WordPress is widely used for website development due to its extensive range of features and plugins that enable customization and optimization. Additionally, WordPress web development includes ongoing support and website maintenance to ensure smooth operations, along with optimization for improved performance and search engine visibility.`,
                ExcellenceSectionTitle:"Your One-Stop Shop For WordPress Solutions",
                // ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`One of the key highlights of Elioras WordPress web development service is their commitment to a user-friendly interface. By prioritizing intuitive design and smooth navigation, they enhance user experience, keeping visitors engaged and increasing the likelihood of conversions. Whether its an e-commerce platform, corporate website, or personal blog, Elioras WordPress solutions are versatile and flexible, catering to various industries and niches.`,
                ExcellenceSectionImage:"images/WP-2.png",
                ExcellenceSectionButton:"Get Your WordPress Website",
            }
        })
    }


    const updateAppDevelopmentPage = () => {

        return dispatch({
            type:"APPDEVELOPMENT_PAGE",
            payload:{
                title:"App Development",
                subTitle:"App Development",
                DiscoverSectionTitle:"Application Development Services",
                DiscoverSectionSubTitle:"BEST APP DEVELOPMENT AGENCY",
                DiscoverSectionParagraph:`Our app development company specializes in creating cutting-edge mobile applications that excel in app design, user experience, and interface. Our expert team offers app development services for iOS and Android platforms, delivering custom solutions tailored to your needs. Whether you require native app development or cross-platform app development using technologies like React Native, we've got you covered. We also provide web app development services, ensuring a seamless experience across platforms.`,
                DiscoverSectionImage:"images/app1new.png",
                DiscoverSectionButton:"Let's Build",
                ServiceTitle:"What Is App Development?",
                ServiceContent:`
                App development is the process of creating applications for mobile devices or web platforms. It involves app design, development, and implementation. An app development company or agency offers app development services, specializing in mobile app development for iOS and Android platforms. They provide custom app development solutions, including native app development for optimal performance and hybrid app development for cross-platform compatibility. Web app development is also offered to create responsive and interactive applications. App marketing strategies are employed to ensure successful app launch and monetization. App analytics and security measures are implemented to enhance user experience and interface. Specialized app development agencies cater to specific industries like augmented reality, healthcare, e-commerce, on-demand services, education, and gaming.`,
                ExcellenceSectionTitle:"Choose Our App Development Excellence",
                // ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`When it comes to app development, choose us for our expertise and unmatched capabilities. As a leading app development company and agency, we offer top-notch app development services across platforms including mobile, iOS, Android, and web. Our team excels in app design, ensuring a captivating user experience and an intuitive user interface. We specialize in custom app development, crafting personalized solutions to meet your unique requirements. Whether you need native app development for optimal performance or hybrid app development for cross-platform compatibility, we've got you covered. Our app development extends to various domains, including educational, gaming, enterprise-grade, location-based, social media, and IoT applications. With a focus on app marketing, launch, monetization, analytics, and security, we guarantee exceptional results. Choose us for seamless app development that drives success and innovation.`,
                ExcellenceSectionImage:"images/appnew2.png",
                ExcellenceSectionButton:"Get Your Dream App Today",
            }
        })
    }


    const updateEcommerceDevelopmentPage = () => {

        return dispatch({
            type:"Ecommerce_PAGE",
            payload:{
                title:"E-commerce Development",
                subTitle:"E-commerce Development",
                DiscoverSectionTitle:"E-commerce Development Services",
                DiscoverSectionSubTitle:"EXPERT E-COMMERCE DEVELOPMENT SERVICES AWAIT",
                DiscoverSectionParagraph:`Looking to establish your online presence? Our custom e-commerce web development solutions are tailored to suit the needs of small businesses, ensuring a seamless shopping experience for your customers. Take your retail business to new heights with our professional online store development services. We create intuitive and visually appealing e-commerce websites that drive sales and conversions.`,
                DiscoverSectionImage:"images/ecom1.png",
                DiscoverSectionButton:"Launch Your E-commerce Website",
                ServiceTitle:"The Power Of Ecommerce Development",
                ServiceContent:`In today's fast-paced digital landscape, E-commerce web development has emerged as a game-changer, revolutionizing the way businesses operate online. Whether you're a small business owner or a retail giant, establishing a robust online presence has become crucial for sustainable growth and global reach. E-commerce websites play a pivotal role in the modern business landscape, offering unmatched opportunities for businesses to expand their reach and boost sales. By providing a digital storefront accessible 24/7 from anywhere in the world, e-commerce sites break down geographical barriers and cater to a global customer base. They offer convenience, allowing consumers to browse, compare, and purchase products or services with ease. E-commerce also empowers businesses to collect valuable customer data, enabling personalized marketing strategies. Furthermore, it fosters competition, innovation, and scalability, ensuring businesses stay relevant in the fast-paced digital era, making it an essential tool for sustained success.`,
                ExcellenceSectionTitle:"Take Our Expert Development Service",
                // ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`Welcome to Eliora, your ultimate destination for top-notch E-commerce development services. With our expert team and cutting-edge solutions, we empower businesses like yours to thrive in the digital marketplace. Our skilled developers have years of experience in crafting high-performing E-commerce websites tailored to your unique needs. We create bespoke E-commerce platforms that align perfectly with your brand and goals, ensuring a seamless user experience with intuitive design and mobile responsiveness. Rest easy knowing that our robust security measures protect your customers' sensitive data, fostering trust and loyalty. Choose Eliora for your E-commerce development needs, and let us help you build a powerful online presence that drives sales and propels your business toward success.`,
                ExcellenceSectionImage:"images/EC2.png",
                ExcellenceSectionButton:"Craft Your Design",
            }
        })
    }

    const updateGraphicsAndLogoPage = () => {

        return dispatch({
            type:"Graphics_PAGE",
            payload:{
                title:"Graphic And Logo Design",
                subTitle:"Graphic And Logo Design",
                DiscoverSectionTitle:"Graphic And Logo Design",
                DiscoverSectionSubTitle:"PROFESSIONAL GRAPHIC AND LOGO DESIGNING",
                DiscoverSectionParagraph:`Looking for eye-catching graphic design services that speak to your brand's unique identity? We specialize in custom logo design, web design, and more. Let's bring your vision to life! Your logo is the face of your business. Our expert team crafts high-quality, custom logos designed to your brand's personality. Partner with us for a captivating brand identity.`,
                DiscoverSectionImage:"images/logonew1.png",
                DiscoverSectionButton:"Get Your Design",
                ServiceTitle:"More About Graphic And Logo Design",
                ServiceContent:`
                Graphic design is the art and practice of creating visual content to communicate ideas. It can be used to create logos, websites, marketing materials, and more. Logo design is a specific type of graphic design that focuses on creating a unique and recognizable logo. A logo is a visual representation of a brand, and it should be memorable, distinctive, and relevant to the business it represents.`,
                ExcellenceSectionTitle:"Transform Your Brand With Graphic and Logo Design Services",
                // ExcellenceSectionSubTitle:"YOUR GATEWAY TO STUNNING WEB DESIGN",
                ExcellenceSectionContent:`Increase Your Brand with Eliora Web Development's Expert Graphic and Logo Design Services. Are you looking to make a lasting impression on your audience? At Eliora Web Development, we offer a range of top-notch graphic and logo design services to help you create a compelling brand identity that stands out from the crowd. Our creative agency specializes in crafting eye-catching logos that perfectly represent your startup or small business. We understand the significance of a professional logo in establishing trust and credibility for your brand.`,
                ExcellenceSectionImage:"images/GD2.png",
                ExcellenceSectionButton:"Get Your Website",

            }
        })
    }

    const updateDigitialMarketingPage = () => {

        return dispatch({
            type:"DigitialMarketing_PAGE",
            payload:{
                title:"Digital & Content Marketing",
                subTitle:"Digital & Content Marketing",
                DiscoverSectionTitle:"Digital Marketing And Content Marketing",
                DiscoverSectionSubTitle:"GO DIGITAL WITH DIGITAL AND CONTENT MARKETING",
                DiscoverSectionParagraph:`Any company's ability to connect with the right customers and leave a lasting impression is crucial to its success in the fast-paced digital environment of today. We are aware that every effective marketing campaign must start with high-quality content. Our staff of expert content writers is adept at producing compelling material that appeals to your target audience. Our writers can provide you with compelling website material, educational blog pieces, or persuading product descriptions. Here at Elioratechno, we take pleasure in providing professional digital marketing and content writing services designed to your specific requirements.`,
                DiscoverSectionImage:"images/DigitalNew.png",
                DiscoverSectionButton:"Contact Us",
                ServiceTitle:"Decoding Digital And Content Marketing",
                ServiceContent:`
                Digital and content marketing refers to a variety of tactics and offerings intended to advance brands and interact with target markets online. These tactics make use of the ability of carefully written information to draw in, educate, and win over potential clients. Let's put the supplied keywords together to make a detailed description:Services for Customized Content Strategy. Persuasive product description writing and effective email newsletter writing can increase conversion rates.`,
                ExcellenceSectionTitle:"Uncover the Power of Digital and Content Marketing -",
                ExcellenceSectionContent:`Strengthen Your Online Presence with Professional Website Content, SEO Content Writing, and Expert Content Writing Services. Using compelling copywriting and engaging blog writing services, engage your audience. With the help of efficient content marketing services, our talented content writers produce impactful content for your brand. Take Advantage of Article Writing Services to Strengthen Your Online Credibility, Crafted by Skilled Web Content Writers. Using focused business writing services, create high-quality content for your company. Use effective content creation services and technical writing services to engage your audience with engaging social media content. Get Notified by Writing Press Releases and Using Services for Tailored Content Strategies. Persuasive product description writing and effective email newsletter writing can increase conversion rates.`,
                ExcellenceSectionImage:"images/digitalnewimg1.png",
                ExcellenceSectionButton:"Get Your Website",
            }
        })
    }

    const updateUiAndUxDesignPage = () => {

        return dispatch({
            type:"UIAndUX_PAGE",
            payload:{
                title:"UI and UX Designing",
                subTitle:"UI and UX Designing",
                DiscoverSectionTitle:"UI and UX Designing Services Services",
                DiscoverSectionSubTitle:"ENHANCE USER EXPERIENCE WITH UI/UX DESIGN EXPERTISE.",
                DiscoverSectionParagraph:`Eliora is your gateway to elevating your digital presence. Our UI/UX design services redefine user experiences. With an unwavering commitment to innovation, we create interfaces that captivate and engage. We prioritize your users, ensuring intuitive designs through meticulous research. Seamlessly integrating with your brand, our mobile-first approach guarantees a consistent experience across all devices. We optimize for speed and accessibility, making your product inclusive and compliant. Eliora's collaborative process ensures your vision is at the forefront, delivering proven results that exceed expectations.`,
                DiscoverSectionImage:"images/uinew1.png",
                DiscoverSectionButton:"Enhance Your User Experience",
                ServiceTitle:"More About Understanding the UI/UX designing",
                ServiceContent:`
                UI/UX design is the art of creating digital environments that engage and satisfy users. UI focuses on the visual elements, such as layouts, buttons, and icons, ensuring they are not only aesthetically pleasing but also intuitively functional. UX, on the other hand, delves deeper, focusing on the overall user journey. It encompasses user research, information architecture, and usability testing to ensure that the digital product is not just visually appealing but also user-friendly. In essence, UI/UX design strives to bridge the gap between technology and user needs, making interactions seamless and enjoyable. It's the secret ingredient behind websites and apps that keep users coming back for more.`,
                ExcellenceSectionTitle:"Your Ultimate UI/UX Design Partner",
                ExcellenceSectionContent:`Choosing the right partner for UI/UX design is pivotal for success in the digital landscape. Eliora emerges as the prime choice for several compelling reasons. Our design expertise goes beyond aesthetics; it's rooted in understanding user behavior, seamlessly blending form and function to create immersive digital experiences. Our commitment to innovation ensures your brand stays ahead of the curve. With a client-centric approach, we prioritize your goals and vision, ensuring every design element aligns with your brand identity. Eliora is not just a design agency; we're your partners in crafting user experiences that captivate, convert, and endure.`,
                ExcellenceSectionImage:"images/uiuxnew1.png",
                ExcellenceSectionButton:"Get Your Design",
            }
        })
    }

    const updatePortFolioPage = () => {

        return dispatch({
            type:"PORTFOLIO_PAGE",
            payload:{
                title:"Our Portfolio",
                subTitle:"Our Portfolio"
            }
        })
    }


        return (
            <AppContext.Provider
            value={{...state, updatePlacementPage,updateContractPage,updateClientPage,
            updateGalleryPage,updateBlogPostPage,updateCareerPage,updateWebDevelopmentPage,
            updateAboutPage,updateWebDesigningPage,updateWordPressDevelopmentPage,updateAppDevelopmentPage,
            updateEcommerceDevelopmentPage,updateGraphicsAndLogoPage,updateDigitialMarketingPage,
            updateUiAndUxDesignPage,updatePortFolioPage,updateContactPage}}>
                {children}
            </AppContext.Provider>
        );


};


const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
// eslint-disable-next-line react-refresh/only-export-components
  export { AppContext, AppProvider, useGlobalContext };
