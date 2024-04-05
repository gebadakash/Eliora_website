import { BsCheckCircle } from "react-icons/bs";

const IndustriesServed = () => {
  const industries = [
    "E-Commerce Business",
    "Education",
    "Travel Agencies",
    "Pharmacy",
    "Hospitality Industry",
    "Food Industry",
    "IT Support",
    "Construction & Building",
    "Doctors and Dentists",
    "Textile",
    "Technology",
    "Small Businesses",
    "Real Estate",
    "Tech Services",
    "Artist",
    "Accountants",
    "Dry Cleaners",
    "Handymen and Electricians",
    "Automotive Services",
    "Legal Practitioners",
  ];

  return (
      <div
        className="container py-5  border border-5  rounded-5"
      >
        <div
          className="text-center  position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="mb-0 text-dark">Industries We Served</h2>
        </div>
        <div className="col-lg-12">
          <div className="row g-0 mb-3">
            <div className="col-sm-1 wow zoomIn" data-wow-delay="0.2s"></div>
            <div className="col-sm-3 d-flex flex-column justify-content-between wow zoomIn" data-wow-delay="0.2s">
              {industries.slice(0, 7).map((industry, index) => (
                <h4 className="mb-3  d-flex align-items-center" key={index} style={{fontSize:"20px"}}>
                  <BsCheckCircle className=" me-3 text-black bg-light" style={{fontSize:"30px"}}/>
                  {industry}
                </h4>
              ))}
            </div>
            <div className="col-sm-4 d-flex flex-column justify-content-between wow zoomIn" data-wow-delay="0.2s">
              {industries.slice(7, 14).map((industry, index) => (
                <h4 className="mb-3 d-flex align-items-center" key={index} style={{fontSize:"20px"}}>
                <BsCheckCircle className=" me-3 text-black bg-light" style={{fontSize:"30px"}}/>
                  {industry}
                </h4>
              ))}
            </div>
            <div className="col-sm-4 d-flex flex-column justify-content-between wow zoomIn" data-wow-delay="0.4s">
              {industries.slice(14).map((industry, index) => (
                <h4 className="mb-3  d-flex align-items-center" key={index} style={{fontSize:"20px"}}>
                <BsCheckCircle className=" me-3 text-black bg-light" style={{fontSize:"30px"}}/>
                  {industry}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default IndustriesServed;
