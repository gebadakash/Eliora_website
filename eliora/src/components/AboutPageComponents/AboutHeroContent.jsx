import One from "/images/Collaborate.png";
// import Icon from "/icons/phone.gif";

const AboutHeroContent = () => {
  return (
    <div className="container mb-5">
      {" "}
      <div className="row m-2">
        <div className="col-lg-7 g-3 justify-content-center">
          <h1 className="mb-3 rounded-3 p-3">
            Dedicated Teams. <br />
            For your Dedicated Dreams.
          </h1>
          <h3 className="mb-3 p-3 text-danger">Let's Get Started</h3>
          <p
            className="mb-3 p-3"
            style={{ textAlign: "justify", wordSpacing: "-2px" }}
          >
            At Eliora, we are dedicated to providing exceptional services that
            cater to the needs of our valued customers. We are more than just a
            company driven by a shared vision to make a positive impact on
            peoples lives. At Eliora, we believe that every individual deserves
            to live a fulfilling and enriched life, and we strive to make that
            possible through our innovative products and services. We have been
            committed to delivering excellence and innovation in everything we
            do.
          </p>
          <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeIn",
            }}
          >
            <div className="d-flex align-items-center justify-content-center rounded">
              {/* <img src={Icon} alt="icon" className="icon" /> */}
            </div>
            <div className="ps-3">
              <h5 className="mb-2">Call to ask any question</h5>
              <span className="mb-0">+91 8956101181</span>
            </div>
          </div>
      
              <a href="/contact" className="btn btn-danger mx-3 px-4 py-3">READY TO STAND OUT</a>{" "}
        </div>
        <div className="col-lg-5">
          <div
            className="position-relative h-100"
            style={{ minHeight: "400px", marginRight: "20px" }}
          >
            <img src={One} alt="About-1" className="image img-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroContent;
