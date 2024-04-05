const UIAndUXServices = () => {
  return (
    <div
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/uinew1.png"
                style={{
                  objectFit: "cover",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "zoomIn",
                }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">UI and UX Designing Services Services</h1>
              <h5 className="fw-bold text-danger text-uppercase">
                ENHANCE USER EXPERIENCE WITH UI/UX DESIGN EXPERTISE.
              </h5>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Eliora is your gateway to elevating your digital presence. Our
              UI/UX design services redefine user experiences. With an
              unwavering commitment to innovation, we create interfaces that
              captivate and engage. We prioritize your users, ensuring intuitive
              designs through meticulous research. Seamlessly integrating with
              your brand, our mobile-first approach guarantees a consistent
              experience across all devices. We optimize for speed and
              accessibility, making your product inclusive and compliant.
              Eliora's collaborative process ensures your vision is at the
              forefront, delivering proven results that exceed expectations.
            </p>
            <a
              href="contact"
              className="btn btn-danger py-3 px-5 mt-3 wow zoomIn"
              data-wow-delay="0.9s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "zoomIn",
              }}
            >
              Enhance Your User Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIAndUXServices;
