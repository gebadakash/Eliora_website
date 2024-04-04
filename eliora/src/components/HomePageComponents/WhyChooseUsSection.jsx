import styles from "../../style/WhyChooseUs.module.css";

const WhyChooseUsSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp mt-cc mt-in" data-wow-delay="0.1s" style={{ marginTop: "-58px" }}>
      <div className="container py-5">
        <div className={`${styles.sectionTitle} text-center position-relative pb-3 mb-5 mx-auto`} style={{ maxWidth: "600px" }}>
          <h5 className={`${styles.sectionHeading} fw-bold text-uppercase`}>Why Choose Us</h5>
          <h1 className="mb-0 text-danger">We Are Here to Grow Your Business Exponentially</h1>
        </div>
        <div className={`row g-5 ${styles.chooseUs}`}>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div className="bg-danger rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                <i className="bi bi-box-fill text-white"></i>
                </div>
                <h4>Best In Industry</h4>
                <p className="mb-0">Setting the standard for excellence in the industry.</p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-danger rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                <i className="bi bi-award-fill text-white"></i>
                </div>
                <h4>Projects Done</h4>
                <p className="mb-0">Successfully completed 135+ projects, delivering on promises and exceeding expectations.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: "350px" }}>
            <div className= "position-relative h-100">
              <img alt="staffing company, it recruitment, staffing company, staffing agency, employment agencies near me" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="images/grow.png" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div className="bg-danger rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                <i className="bi bi-people-fill text-white"></i>
                </div>
                <h4>Professional Staff</h4>
                <p className="mb-0">Trusted professionals dedicated to your success.</p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div className="bg-danger rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                <i className="bi bi-people-fill text-white"></i>
                </div>
                <h4>Happy Clients</h4>
                <p className="mb-0">103 happy clients and counting, because your satisfaction is our success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
