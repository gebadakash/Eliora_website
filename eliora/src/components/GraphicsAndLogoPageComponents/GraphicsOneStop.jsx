const GraphicsOneStop = () => {
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
              <h1 className="mb-0">
                Transform Your Brand With Graphic and Logo Design Services
              </h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Increase Your Brand with Eliora Web Development's Expert Graphic
              and Logo Design Services. Are you looking to make a lasting
              impression on your audience? At Eliora Web Development, we offer a
              range of top-notch graphic and logo design services to help you
              create a compelling brand identity that stands out from the crowd.
              Our creative agency specializes in crafting eye-catching logos
              that perfectly represent your startup or small business. We
              understand the significance of a professional logo in establishing
              trust and credibility for your brand.
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
              Get Your Website
            </a>
          </div>
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/GD2.png"
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

export default GraphicsOneStop;
