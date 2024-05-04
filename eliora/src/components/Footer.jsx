import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from "../../public/images/elioralogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    
    const addresses = [
        { address: "Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022", link: "contact" },
        { address: "5396 N Reese Ave, Fresno, CA 93722, USA", link: "contact" },
        { address: "Summerside, 1331 Mt Edward Rd, Nova Scotia, Canada - C1N 1B8", link: "contact" },
        { address: "Wollomombi, 89 Faulkner Street, New South Wales, Australia - 2350", link: "contact" }
    ];

    const quickLinks = [
        { text: "Home", link: "/" },
        { text: "About Us", link: "/about" },
        { text: "Client", link: "/clients" },
        { text: "Career", link: "/career" },
        { text: "Gallery", link: "/gallery" },
        { text: "Latest Blog", link: "/blog" },
        { text: "Contact Us", link: "/contactus" }
    ];

    const services = [
        { text: "Web Designing", link: "/websitedesign" },
        { text: "Web Development", link: "/webDevelopment" },
        { text: "Wordpress Development", link: "/wordpressdevelopment" },
        { text: "App Development", link: "/appdevelopment" },
        { text: "E-Commerce Development", link: "/ecommercedevelopment" },
        { text: "Graphics & Logo", link: "/graphicsandlogo" },
        { text: "Digital & Content Marketing", link: "/digitalandcontentmarketing" },
        { text: "UI/UX Designing", link: "/uiuxdesign" }
    ];

    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-danger p-4 c1">
                                <a href="index" className="navbar-brand">
                                    <img className="img-fluid float-right" src={logo} width="170px" alt="logo" />
                                </a>
                                <p className="mt-3 mb-4" style={{ textAlign: "justify" }}>At our company, we believe that affordability should never come at the expense of quality. Our team of skilled developers and designers works closely with you to ensure that your vision is brought to life in a timely and cost-effective manner.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    {addresses.map((item, index) => (
                                        <div className="d-flex mb-2" key={index}>
                                            <i className="bi bi-geo-alt text-danger me-2"></i>
                                            <NavLink to={item.link} className="text-white" style={{textDecoration:"none"}}><p className="mb-0">{item.address}</p></NavLink>
                                        </div>
                                    ))}
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-danger me-2"></i>
                                        <a href="mailto:info@elioratechno.com" className="text-white" style={{textDecoration:"none"}}><p className="mb-0">info@elioratechno.com</p></a>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-danger me-2"></i>
                                        <a href="tel:+91 8830826434" className="text-white" style={{textDecoration:"none"}}><p className="mb-0">+91 8830826434</p></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0" style={{ margin: "-2px" }}>Quick Links</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        {quickLinks.map((item, index) => (
                                            <a className="text-light mb-2" href={item.link} key={index} style={{textDecoration:"none"}}><i className="bi bi-arrow-right text-danger me-2"></i>{item.text}</a>
                                        ))}
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn me-2" href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL"><FaFacebookF style={{fontSize:"2rem", borderRadius:"0", boxShadow:"none", color:"blue"}}/></a>
                                        <a className="btn me-2" href="https://www.linkedin.com/company/eliora-it-services/"><FaLinkedinIn style={{fontSize:"2rem", borderRadius:"0", boxShadow:"none", color:"darkblue"}}/></a>
                                        <a className="btn" href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA=="><FaInstagram style={{fontSize:"2rem", borderRadius:"0", boxShadow:"none", color:"red"}}/></a>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Services</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        {services.map((item, index) => (
                                            <a className="text-light mb-2" href={item.link} key={index} style={{textDecoration:"none"}}><i className="bi bi-arrow-right text-danger me-2"></i>{item.text}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{ background: "#061429" }}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                                <p className="mb-0"> <a className="text-white border-bottom" href="#"></a> Copyright © 2023 Eliora Pvt. Ltd | ALL RIGHTS RESERVED.
                                    <a className="text-white border-bottom" href="#"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
