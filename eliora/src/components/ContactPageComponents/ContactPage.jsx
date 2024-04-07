

const ContactInfo = ({ iconClass, text, link }) => (
  <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
    <div className="bg-secondary d-flex align-items-center justify-content-center rounded" style={{ width: "35px", height: "35px" }}>
      <i className={iconClass + " text-white"}></i>
    </div>
    <div className="ps-4">
      <a href={link} style={{textDecoration:"none"}}><h5 className="mb-2 text-dark">{text}</h5></a>
    </div>
  </div>
);

const ContactForm = () => (
  <form method="POST">
    <div className="row g-3">
      <div className="col-md-4">
        <input type="text" className="form-control border-0  px-4" name="fname" placeholder="Your Name" style={{ height: "55px" }} />
      </div>
      <div className="col-md-4">
        <input type="email" className="form-control border-0  px-4" name="email" placeholder="Your Email" style={{ height: "55px" }} />
      </div>
      <div className="col-md-4">
        <select className="form-control border-0  px-4" name="about" style={{ height: "55px" }}>
          <option value="">Select an Option</option>
          <option value="About Staffing">About Staffing</option>
          <option value="About Project">About Project</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col-12">
        <input type="text" className="form-control border-0  px-4" name="subject" placeholder="Subject" style={{ height: "55px" }} />
      </div>
      <div className="col-12">
        <textarea className="form-control border-0  px-4 py-3" name="message" rows="4" placeholder="Message"></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-danger w-100 py-3" name="submit" type="submit">Send Message</button>
      </div>
    </div>
  </form>
);

const ContactPage = () => {
  const contactInfos = [
    { iconClass: "bi bi-telephone-fill", text: "+91 8668681466", link: "tel:+91 8668681466" },
    { iconClass: "bi bi-envelope-at-fill", text: "info@elioratechno.com", link: "mailto:info@elioratechno.com" },
    { iconClass: "bi bi-geo-alt-fill", text: "Trimurtee Nagar, Nagpur, Maharashtra 440022", link: "#" }
  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp mt-sc" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          {contactInfos.map((info, index) => (
            <div key={index} className="col-lg-4">
              <ContactInfo iconClass={info.iconClass} text={info.text} link={info.link} />
            </div>
          ))}
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <ContactForm />
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9180959043256!2d79.0352295750507!3d21.115831284782693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c105be93e64b%3A0x633455db6ed2def4!2sELIORA%20TECHNOLOGY%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1697103158268!5m2!1sen!2sin" frameBorder="0" style={{ minHeight: "350px", border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
