import "./PlacementSection.css";
import place from "../../assets/place.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const PlacementSection = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = document.querySelectorAll(".navlink");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  return (
    <div
      className="container-fluid py-5 wow fadeInUp mt-c mt-in"
      data-wow-delay="0.1s"
      style={{
        marginTop: "-70px",
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-0">Placement and Recruitment</h1>
        </div>
        <br />
        <br />
        <div className="row g-5">
          <div className="col-lg-5 mt-c" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                alt="staffing services, recruitment, staffing company, staffing agency"
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={place}
                style={{
                  objectFit: "contain",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "zoomIn",
                }}
              />
            </div>
          </div>
          <div className="col-lg-7 mt-sc">
            <div className="position-relative pb-3 mb-3">
              <h3 className="mb-0 text-danger">Placement and Recruitment</h3>
            </div>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              In the dynamic realm of talent acquisition and placement, Eliora
              emerges as a beacon of expertise and innovation, specializing in
              IT recruitment, IT placement, BPO recruitment consultant, banking
              and financial services recruitment and logistics and marketing
              placement. With a team of dedicated individuals, we expertly
              bridge the divide between exceptional individuals and
              industry-leading enterprises across diverse sectors. Our primary
              motto centers on accuracy, matching elite individuals with suited
              opportunities and creating synergistic relationships in the
              constantly changing placement and recruiting scene.
            </p>
            <p className="mb-4" style={{ textAlign: "justify" }}>
              Our holistic approach extends beyond mere placement. Eliora's
              Recruitment and Placement service functions as your strategic
              compass, ensuring that the right individuals occupy the right
              positions.
            </p>
            <br />
            <NavLink
              to="/placement"
              className={`btn btn-danger py-2 px-2 mt-2 wow zoomIn navlink`}
              data-wow-delay="0.9s"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementSection;
