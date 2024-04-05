const EcommerceService = () => {
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
                src="images/ecom1.png"
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
              <h1 className="mb-0">E-commerce Development Services</h1>
              <h5 className="fw-bold text-danger text-uppercase">
                EXPERT E-COMMERCE DEVELOPMENT SERVICES AWAIT
              </h5>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Looking to establish your online presence? Our custom e-commerce
              web development solutions are tailored to suit the needs of small
              businesses, ensuring a seamless shopping experience for your
              customers. Take your retail business to new heights with our
              professional online store development services. We create
              intuitive and visually appealing e-commerce websites that drive
              sales and conversions.
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
              Launch Your E-commerce Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceService;
