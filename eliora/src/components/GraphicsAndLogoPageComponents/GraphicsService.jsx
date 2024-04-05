const GraphicsService = () => {
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
                src="images/logonew1.png"
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
              <h1 className="mb-0">Graphic And Logo Design</h1>
              <h5 className="fw-bold text-danger text-uppercase">
                PROFESSIONAL GRAPHIC AND LOGO DESIGNING
              </h5>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Looking for eye-catching graphic design services that speak to
              your brand's unique identity? We specialize in custom logo design,
              web design, and more. Let's bring your vision to life! Your logo
              is the face of your business. Our expert team crafts high-quality,
              custom logos designed to your brand's personality. Partner with us
              for a captivating brand identity.
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
              Get Your Design
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicsService;
