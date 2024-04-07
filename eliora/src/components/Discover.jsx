import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

const Discover = () => {

    const {DiscoverSectionTitle,DiscoverSectionSubTitle,DiscoverSectionParagraph,DiscoverSectionButton,DiscoverSectionImage} = useGlobalContext();

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
        <div className="container-fluid py-5 wow fadeInUp" style={{ marginTop: '-40px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-5 mt-c" style={{ minHeight: '500px' }}>
                <div className="position-relative h-100">
                  <img alt="Web Development" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={DiscoverSectionImage} style={{ objectFit: 'contain !important', visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }} />
                </div>
              </div>
              <div className="col-lg-7 mt-sc">
                <div className="section-title position-relative mb-5">
                  <h1 className="mb-0">{DiscoverSectionTitle}</h1>
                  <h5 className="fw-bold text-danger text-uppercase mt-3">{DiscoverSectionSubTitle}</h5>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>{DiscoverSectionParagraph}</p>
                <div className="row g-0 mb-3"></div>
                <NavLink to="/contactus" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn navlink" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>{DiscoverSectionButton}</NavLink>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Discover
