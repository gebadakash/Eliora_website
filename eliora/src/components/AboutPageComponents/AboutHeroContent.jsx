import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AboutHeroContent = () => {

  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);


  return (
    <div className="container-fluid py-5 wow fadeInUp mt-c mt-in" data-wow-delay="0.1s" style={{ marginTop: "-100px", visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
      <div className="container py-5 mt-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-uppercase">Let's get Started</h5>
              <h1 className="mb-0 text-danger">About Us</h1>
            </div>
            <p className="mb-4" style={{ textAlign: "justify", wordSpacing: "-2px" }}>At Eliora, we are dedicated to providing exceptional services that cater to the needs of our valued customers. We are more than just a company driven by a shared vision to make a positive impact on people's lives. At Eliora, we believe that every individual deserves to live a fulfilling and enriched life, and we strive to make that possible through our innovative products and services and we have been committed to delivering excellence and innovation in everything we do.</p>
            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeIn" }}>
              <div className="bg-secondary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                <i className="bi bi-telephone-fill text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-dark mb-0">+91 8956101181</h4>
              </div>
            </div>
            <NavLink to="/contactus" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s" style={{ visibility: "visible", animationDelay: "0.9s", animationName: "zoomIn" }}>READY TO STAND OUT</NavLink>
          </div>
          <div className="col-lg-5 mt-sc" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img alt="Web Design Services in Nagpur" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="images/abt.png" style={{ objectFit: "contain", visibility: "visible", animationDelay: "0.9s", animationName: "zoomIn" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroContent;
