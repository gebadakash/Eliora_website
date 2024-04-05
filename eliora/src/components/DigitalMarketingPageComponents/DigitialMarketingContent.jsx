const DigitialMarketingContent = () => {
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
                src="images/DigitalNew.png"
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
              <h1 className="mb-0">Digital Marketing And Content Marketing</h1>
              <h5 className="fw-bold text-danger text-uppercase">
                GO DIGITAL WITH DIGITAL AND CONTENT MARKETING
              </h5>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Any company's ability to connect with the right customers and
              leave a lasting impression is crucial to its success in the
              fast-paced digital environment of today. We are aware that every
              effective marketing campaign must start with high-quality content.
              Our staff of expert content writers is adept at producing
              compelling material that appeals to your target audience. Our
              writers can provide you with compelling website material,
              educational blog pieces, or persuading product descriptions. Here
              at Elioratechno, we take pleasure in providing professional
              digital marketing and content writing services designed to your
              specific requirements.
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
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitialMarketingContent;
