const WordPressDevelopmentServices = () => {
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
                src="images/WP-1.png"
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
              <h1 className="mb-0">WordPress Development Services</h1>
              <h5 className="fw-bold text-danger text-uppercase">
                Expert WordPress Development Services
              </h5>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              We offer a wide range of WordPress development services, including
              custom WordPress websites, WordPress theme development, WordPress
              plugin development, WordPress website maintenance, and WordPress
              optimization. We offer affordable WordPress development services
              that fit your budget, and our team of WordPress experts has years
              of experience in building and maintaining WordPress websites. We
              are flexible and can adapt to your specific needs, and we deliver
              high-quality WordPress websites that are user-friendly and
              mobile-friendly. To learn more about our WordPress development
              services, please contact us today.
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
              Get Your WordPress Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPressDevelopmentServices;
