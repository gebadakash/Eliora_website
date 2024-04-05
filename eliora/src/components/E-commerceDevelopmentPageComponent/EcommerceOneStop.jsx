const EcommerceOneStop = () => {
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
              <h1 className="mb-0">Take Our Expert Development Service</h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Welcome to Eliora, your ultimate destination for top-notch
              E-commerce development services. With our expert team and
              cutting-edge solutions, we empower businesses like yours to thrive
              in the digital marketplace. Our skilled developers have years of
              experience in crafting high-performing E-commerce websites
              tailored to your unique needs. We create bespoke E-commerce
              platforms that align perfectly with your brand and goals, ensuring
              a seamless user experience with intuitive design and mobile
              responsiveness. Rest easy knowing that our robust security
              measures protect your customers' sensitive data, fostering trust
              and loyalty. Choose Eliora for your E-commerce development needs,
              and let us help you build a powerful online presence that drives
              sales and propels your business toward success.
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
              Craft Your Design
            </a>
          </div>
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/EC2.png"
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

export default EcommerceOneStop;
