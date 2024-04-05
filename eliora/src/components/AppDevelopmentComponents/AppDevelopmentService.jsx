const AppDevelopmentService = () => {
    return (
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img
                  alt="Web Development"
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="images/app1new.png"
                  style={{ objectFit: 'cover', visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="mb-0">Application Development Services</h1>
                <h5 className="fw-bold text-danger text-uppercase">BEST APP DEVELOPMENT AGENCY</h5>
              </div>
              <p className="mb-4" style={{ textAlign: 'justify' }}>
              Our app development company specializes in creating cutting-edge mobile applications that excel in app design, user experience, and interface. Our expert team offers app development services for iOS and Android platforms, delivering custom solutions tailored to your needs. Whether you require native app development or cross-platform app development using technologies like React Native, we've got you covered. We also provide web app development services, ensuring a seamless experience across platforms.
              </p>
              <a href="contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>Let's Build</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  
export default AppDevelopmentService
