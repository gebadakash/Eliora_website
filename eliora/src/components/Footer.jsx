import styles from "../style/Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const quickLinks = [
    { title: "Home", to:"/" },
    { title: "About us", to:"/about" },
    { title: "Client", to:"/clients" },
    { title: "Career", to:"/career" },
    { title: "Gallery", to:"/gallery" },
    { title: "Latest Blog", to:"/blog" },
    { title: "Contact us", to:"/contactus" },
  ];

  const Services = [
    { title: "Web Designing", to:"/websitedesign" },
    { title: "Web Development", to:"/webDevelopment" },
    { title: "Wordpress Development", to:"/wordpressdevelopment" },
    { title: "App Development", to:"/appdevelopment" },
    { title: "E-Commerce Development", to:"/ecommercedevelopment" },
    { title: "Graphics & Logo", to:"/graphicsandlogo" },
    { title: "Digital & Content Marketing", to:"/digitalandcontentmarketing" },
    { title: "UI/UX Designing", to:"/uiuxdesign"},
  ];

  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);


  return (
    <>
      <div className={`${styles.Footer}`}>
        <div className="container ">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 mt-4">
              <img
                className="img-fluid float-right "
                src="./images/elioralogo.png"
                style={{ marginBottom: "20px", width: "170px" }}
                alt="logo"
              />
              <p className={`${styles.paragraph}`}>
                At our company, we believe that affordability should never come
                at the expense of quality. Our team of skilled developers and
                designers work closely with you to ensure that your vision is
                brought to life in a timely and cost-effective manner.
              </p>
              <div className={`${styles.footerIcons}`}>
                <a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL" target="_blank"><i className="bi bi-facebook text-primary"></i></a>
                <a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/eliora-it-services/" target="_blank"><i className="bi bi-linkedin text-info"></i></a>
              </div>

             <h3 className={`${styles.contactUs}`}>Contact us now</h3>

             <h7>Contact us to get started on your website development journey.</h7>
             
             <input type="email" className="form-control mt-2" id="email-newsletter" value="" 
             placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" 
             required></input>

              <button className="btn btn-primary mt-2" type="submit">SEND<i className="bi bi-send ms-2"></i></button>



            </div>

            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className={`col-lg-3 col-md-12 pt-5 mb-5 ${styles.ft2}`}>
                  <h5>Quick Links</h5>
                  <ul>
                    {quickLinks.map((link, index) => (
                      <li className={styles.navItem} key={index}>
                        <i className="bi bi-arrow-right text-danger me-2"></i>
                        <NavLink to={link.to} className="navlink">{link.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5 ${styles.ft3}`}>
                  <h5>Get In Touch</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt-fill text-danger mt-2"></i>
                    <p>
                      Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee
                      Nagar, Nagpur, Maharashtra 440022
                    </p>
                  </div>

                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt-fill text-danger mt-2"></i>
                    <p>5396 N Reese Ave, Fresno, CA 93722, USA</p>
                  </div>

                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt-fill text-danger mt-2"></i>
                    <p>
                      Summerside, 1331 Mt Edward Rd, Nova Scotia, Canada - C1N
                      1B8
                    </p>
                  </div>

                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt-fill text-danger mt-2"></i>
                    <p>
                      Wollomombi, 89 Faulkner Street, New South Wales, Australia
                      - 2350
                    </p>
                  </div>
                </div>

                <div
                  className={`col-lg-5 col-md-12 pt-0 pt-lg-5 mb-5 ${styles.ft4}`}
                >
                  <h5 style={{ paddingLeft: "30px" }}>Services</h5>

                  <ul>
                    {Services.map((link, index) => (
                      <li className={styles.navItem} key={index}>
                        <i className="bi bi-arrow-right text-danger me-2"></i>
                        <NavLink to={link.to} className="navlink">{link.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex mb-2 ms-5">
                    <i className="bi bi-envelope-at-fill text-danger me-2"></i>
                    <p>info@elioratechno.com</p>
                  </div>

                  <div className="d-flex mb-2 ms-5">
                    <i className="bi bi-telephone-fill text-danger me-2"></i>
                    <p>+91 8956101181</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.Lastfooter}`}>
        <p>Copyright © 2023 Eliora Pvt. Ltd | ALL RIGHTS RESERVED.</p>
      </div>
    </>
  );
};

export default Footer;
