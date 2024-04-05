const Contentmarketing = () => {
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
                Uncover the Power of Digital and Content Marketing -
              </h1>
            </div>
            <p></p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Strengthen Your Online Presence with Professional Website Content,
              SEO Content Writing, and Expert Content Writing Services. Using
              compelling copywriting and engaging blog writing services, engage
              your audience. With the help of efficient content marketing
              services, our talented content writers produce impactful content
              for your brand. Take Advantage of Article Writing Services to
              Strengthen Your Online Credibility, Crafted by Skilled Web Content
              Writers. Using focused business writing services, create
              high-quality content for your company. Use effective content
              creation services and technical writing services to engage your
              audience with engaging social media content. Get Notified by
              Writing Press Releases and Using Services for Tailored Content
              Strategies. Persuasive product description writing and effective
              email newsletter writing can increase conversion rates.
            </p>
          </div>
          <div className="col-lg-6" style={{ minHeight: "350px" }}>
            <div className="position-relative h-100">
              <img
                alt="Web Development"
                className="digitalimg position-absolute w-100 rounded wow zoomIn"
                style={{
                  mixBlendMode: "darken",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "zoomIn",
                }}
                data-wow-delay="0.9s"
                src="images/digitalnewimg1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentmarketing;
