import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const WebsiteDevelopmentService = () => {

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
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: '-40px'}}>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-5 mt-c" style={{minHeight: '500px'}}>
                        <div className="position-relative h-100">
                            <img
                                alt="Web Development"
                                className="position-absolute w-100 h-100 rounded wow zoomIn"
                                data-wow-delay="0.9s"
                                src="images/dev-1.png"
                                style={{objectFit: 'contain !important'}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-sc">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h1 className="mb-0">Website Development Services</h1>
                            <h5 className="fw-bold text-danger text-uppercase">Best Website Design And Development Agency</h5>
                        </div>
                        <p className="mb-4" style={{textAlign: 'justify'}}>
                            Create a strong online presence with a custom website development solution with us. We are a web development company that specializes in creating one-of-a-kind web-based applications with cutting-edge technologies to help businesses achieve their objectives. Our experienced team will collaborate with you to develop a beautiful custom web application and help in e-commerce development, mobile app development, CMS development, WordPress development that surpasses your expectations.
                        </p>
                        <div className="row g-0 mb-3"></div>
                        <NavLink to="/contactus" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s">
                            START A DIALOGUE
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebsiteDevelopmentService
