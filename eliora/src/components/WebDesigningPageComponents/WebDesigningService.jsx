const WebDesigningService = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" style={{ marginTop: '-40px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-5 mt-c" style={{ minHeight: '500px' }}>
                <div className="position-relative h-100">
                  <img alt="Web Development" className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="images/web1-removebg.png" style={{ objectFit: 'contain !important', visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }} />
                </div>
              </div>
              <div className="col-lg-7 mt-sc">
                <div className="section-title position-relative pb-3 mb-5">
                  <h1 className="mb-0">Web Designing Services</h1>
                  <h5 className="fw-bold text-danger text-uppercase">Your Gateway To Stunning Web Design</h5>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Searching for the top web design company? Look nowhere else! Our company offers unique, imaginative, and contemporary solutions for web design. The best UI/UX and responsive design are guaranteed by our team of knowledgeable website designers. We provide responsive site design solutions for mobile optimization using our knowledge. Count on us to improve your online presence with our excellent web design services that seamlessly blend beauty and usability. Pick our company for the greatest web design experience because we put your business goals first and produce fantastic outcomes.</p>
                <div className="row g-0 mb-3"></div>
                <a href="contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>Take Expert Advice</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default WebDesigningService
