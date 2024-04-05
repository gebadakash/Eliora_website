const DynamicDigital = () => {
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
                src="images/contentnew1.png"
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
              <h1 className="mb-0">
                Our Dynamic Digital And Content Marketing Services
              </h1>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Utilize our professional article writing services to help your
              company reach its full potential. Our talented writing staff is
              adept at creating engaging and persuading material that connects
              with your audience and inspires action. We can provide you with
              compelling website text, captivating blog entries, or persuading
              marketing materials. Our professional website content services are
              our area of expertise. They are created to increase user
              interaction and leave a positive impression on your visitors. With
              our knowledge of SEO content creation, you may increase your
              online presence and move up the search results. Our authors are
              skilled in creating material that is appealing to readers and
              search engines alike, as well as the art of keyword optimisation.
              Let us assist you in boosting your web presence and attracting
              organic visitors.
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
              Experience the difference
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicDigital;
