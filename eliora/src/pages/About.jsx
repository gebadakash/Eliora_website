import { FaPhone } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import "../pages/about.css";
import Image1 from "../assets/aboutImg.png";
import Image2 from "../assets/image2.jpg";

const About = () => {
  return ( 
    <>
  
    <div className="about-container">
      <div className="image">
        <img src={Image2} alt="image2" />
      </div>
      <div className="about-box">
        <div className="about-content">
          <h2>LETS GET Start</h2>
          <h1>About Us</h1>
          <p>
            At Eliora, we are dedicated to providing exceptional services that
            cater to the needs of our valued customers. We are more than just a
            company driven by a shared vision to make a positive impact on
            peoples lives. At Eliora, we believe that every individual deserves
            to live a fulfilling and enriched life, and we strive to make that
            possible through our innovative products and services and we have
            been committed to delivering excellence and innovation in everything
            we do.
          </p>
          <div className="about-details">
            <div className="about-contact">
              <FaPhone />
              <p>
                Call to ask any question <br />
                <span>+91 8956101181</span>
              </p>
            </div>{" "}
            <button>Ready To stand Out</button>
          </div>
        </div>

        <img src={Image1} alt="aboutImg" />
      </div>
      {/* Served */}
      <div className="about-box-2">
        <h1>Industries We Served</h1>
        <div className="about-content-2">
          <ul>
            <li>
              {" "}
              <FaCheck /> E-Commerce Business{" "}
            </li>
            <li>
              <FaCheck /> Financial Services{" "}
            </li>
            <li>
              <FaCheck /> Education
            </li>
            <li>
              <FaCheck /> Travel Agencies{" "}
            </li>
            <li>
              <FaCheck />
              Hospitality Industry
            </li>
            <li>
              <FaCheck />
              Food Industry
            </li>
            <li>
              <FaCheck />
              Itb Support
            </li>
          </ul>

          <ul>
            <li>
              <FaCheck /> Construction & Building{" "}
            </li>
            <li>
              <FaCheck /> Doctors and dentists
            </li>
            <li>
              <FaCheck /> Textile{" "}
            </li>
            <li>
              <FaCheck />
              Technology
            </li>
            <li>
              <FaCheck />
              Small Businesses{" "}
            </li>
            <li>
              <FaCheck />
              Real Estate{" "}
            </li>
            <li>
              <FaCheck />
              Tech Services
            </li>
          </ul>
          <br />
          {/* 3 */}
          <ul>
            <li>
              <FaCheck />
              Artist{" "}
            </li>
            <li>
              <FaCheck /> Accountants
            </li>
            <li>
              <FaCheck />
              Dry Cleaners{" "}
            </li>
            <li>
              <FaCheck />
              Handymen and electricians
            </li>
            <li>
              <FaCheck />
              Automotive services{" "}
            </li>
            <li>
              <FaCheck />
              Real Estate{" "}
            </li>
            <li>
              <FaCheck />
              Legal Practitioners
            </li>
          </ul>
        </div>
      </div> 
         {/* Mission */}


       <div className="about-mission">
        <div className="cart">
          <h1>Our Mission</h1>
          <p>
            Eliora is a passionate and result oriented IT Firm based in India.
            From delivering creative, eye-catching website design to executing
            complex algorithms– we are all ready to jump within your imagination
            box and resolve your needs. We believe in daily homework to innovate
            something to benefit the category that ultimately leads to the
            encouragement of smiles at both sides.
          </p>
        </div>
        <div className="cart-1">
          <h1>Our Vision</h1>
          <p>
            Our Vision statement is to Go along with our happy customers for a
            rewarding career/growth. We put our best to align every prospect
            with your business values and goals. We are dealing with adventure
            every day, and the same leads us to ultimate success.
          </p>
        </div>
      </div>
    </div> 
  
      </>
  );
};

export default About;
