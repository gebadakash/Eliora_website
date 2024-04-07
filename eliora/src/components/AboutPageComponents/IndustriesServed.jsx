const industries = [
  [
    "E-Commerce Business",
    "Education",
    "Travel Agencies",
    "Pharmacy",
    "Hospitality Industry",
    "Food Industry",
    "IT Support",
  ],
  [
    "Construction & Building",
    "Doctors and Dentists",
    "Textile",
    "Technology",
    "Small Businesses",
    "Real Estate",
    "Tech Services",
  ],
  [
    "Artist",
    "Accountants",
    "Dry Cleaners",
    "Handymen and Electricians",
    "Automotive Services",
    "Legal Practitioners",
  ],
];

const IndustriesServed = () => {
  return (
    <div
      className="wow fadeInUp mt-sc mt-abn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "url(images/bannew.png)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-0 text-white">Industries We Served</h1>
        </div>
        <div className="col-lg-12">
          <div className="row g-0 mb-3">
            <div
              className="col-sm-1  wow zoomIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "zoomIn",
              }}
            ></div>
            {industries.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`col-sm-${columnIndex === 0 ? "3" : "4"} wow zoomIn`}
                data-wow-delay={`${0.2 + columnIndex * 0.2}s`}
              >
                {column.map((industry, index) => (
                  <h5 key={index} className="mb-3 text-white">
                    <i className="bi bi-check-lg text-danger me-3"></i>
                    {industry}
                  </h5>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
