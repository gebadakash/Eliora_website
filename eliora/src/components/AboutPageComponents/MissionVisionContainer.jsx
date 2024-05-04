import React from "react";

const ServiceItem = ({ title, description }) => (
  <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "zoomIn" }}>
    <div className="service-item bg-light shadow rounded d-flex flex-column align-items-center justify-content-center text-center">
      <h4 className="mb-3 text-danger" style={{fontWeight:"700"}}>{title}</h4>
      <p className="m-0" style={{ textAlign: "justify", wordSpacing: "-2px" }}>{description}</p>
    </div>
  </div>
);

const MissionVisionContainer = () => {
  const servicesData = [
    {
      title: "Our Mission",
      description: "Eliora is a passionate and result oriented IT Firm based in India. From delivering creative, eye-catching website design to executing complex algorithms– we are all ready to jump within your imagination box and resolve your needs. We believe in daily homework to innovate something to benefit the category that ultimately leads to the encouragement of smiles at both sides.",
    },
    {
      title: "Our Vision",
      description: "At eliora Technology, our vision is to journey alongside our delighted customers,With unwavering dedication, we strive to harmonize every opportunity with the core values and aspirations of your business.turning them into stepping stones on our path to unparalleled success. Together, we embark on a transformative voyage, innovation, and excellence propel us towards our collective goals.",
    },
  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-2"></div>
          {servicesData.map((service, index) => (
            <ServiceItem key={index} title={service.title} description={service.description} />
          ))}
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionContainer;
