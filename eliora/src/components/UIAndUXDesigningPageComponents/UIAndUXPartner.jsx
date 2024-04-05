const UIAndUXPartner = () => {
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
              <h1 className="mb-0">Your Ultimate UI/UX Design Partner</h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Choosing the right partner for UI/UX design is pivotal for success
              in the digital landscape. Eliora emerges as the prime choice for
              several compelling reasons. Our design expertise goes beyond
              aesthetics; it's rooted in understanding user behavior, seamlessly
              blending form and function to create immersive digital
              experiences. Our commitment to innovation ensures your brand stays
              ahead of the curve. With a client-centric approach, we prioritize
              your goals and vision, ensuring every design element aligns with
              your brand identity. Eliora is not just a design agency; we're
              your partners in crafting user experiences that captivate,
              convert, and endure.
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
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Website Development in Nagpur"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/uiuxnew1.png"
                style={{
                  objectFit: "contain",
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

export default UIAndUXPartner;
