const AppDevelopmentOneStop = () => {
  return (
    <div
      className="container-fluid py-5 wow fadeInUp mb-5"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">Choose Our App Development Excellence</h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              When it comes to app development, choose us for our expertise and
              unmatched capabilities. As a leading app development company and
              agency, we offer top-notch app development services across
              platforms including mobile, iOS, Android, and web. Our team excels
              in app design, ensuring a captivating user experience and an
              intuitive user interface. We specialize in custom app development,
              crafting personalized solutions to meet your unique requirements.
              Whether you need native app development for optimal performance or
              hybrid app development for cross-platform compatibility, we've got
              you covered. Our app development extends to various domains,
              including educational, gaming, enterprise-grade, location-based,
              social media, and IoT applications. With a focus on app marketing,
              launch, monetization, analytics, and security, we guarantee
              exceptional results. Choose us for seamless app development that
              drives success and innovation.
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
              Get Your Dream App Today
            </a>
          </div>
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/appnew2.png"
                style={{
                  objectFit: "cover",
                  marginTop: "15%",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "zoomIn",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentOneStop;
