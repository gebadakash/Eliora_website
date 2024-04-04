import styles from "../../style/WebsiteDesignSection.module.css";
import { FaSquarePhone } from "react-icons/fa6";

const WebsiteDesignSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp mt-c mt-in" data-wow-delay="0.1s" style={{ marginTop: "-75px" }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className={`${styles.sectionDiv} col-lg-7`}>
            <div className={`${styles.sectionTitle} position-relative pb-3 mb-5`}>
              <h5 className={`${styles.sectionHeading} fw-bold text-uppercase`}>Website Design and Development Company in India</h5>
              <h1 className={`${styles.sectionSubHeading} mb-0 text-danger`}>Your Gateway to Exceptional Website Design and Development Services</h1>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>Experience a new standard of excellence in web design and development. Our innovative approach turns ideas into interactive web experiences. Whether youre an established brand or a startup, our custom made websites are designed to amplify your digital footprint. Propel your brands potential with us as your digital collaborators.</p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              </div>
            </div>
            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
              <div className="d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
              <FaSquarePhone/>
              </div>
              <div>
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-success mb-0">+91 8956101181</h4>
              </div>
            </div>
            <a href="contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Contact Us for Expert Web Solutions</a>
          </div>
          <div className="col-lg-5 mt-sm" style={{ minHeight: "500px" }}>
            <div className={`position-relative h-100 ${styles.websiteSectionImage}`}>
              <img alt="it recruitment" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="images/abt.png" style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesignSection;
