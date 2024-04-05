const WordPressOneStopShop = () => {
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
                Your One-Stop Shop For WordPress Solutions
              </h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              One of the key highlights of Elioras WordPress web development
              service is their commitment to a user-friendly interface. By
              prioritizing intuitive design and smooth navigation, they enhance
              user experience, keeping visitors engaged and increasing the
              likelihood of conversions. Whether its an e-commerce platform,
              corporate website, or personal blog, Elioras WordPress solutions
              are versatile and flexible, catering to various industries and
              niches.
            </p>
            <a href="contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>Get Your WordPress Website</a>
          </div>
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="position-absolute w-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src="images/WP-2.png"
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

export default WordPressOneStopShop;
