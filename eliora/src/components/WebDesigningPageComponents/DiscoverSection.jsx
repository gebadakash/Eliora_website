const DiscoverSection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="section-title position-relative pb-3 mb-5">
              <h1 className="mb-0">Discover The Difference: Choose Us For Unmatched Excellence</h1>
              <h5 className="fw-bold text-danger text-uppercase">Your Gateway To Stunning Web Design</h5>
            </div>
            <p className="mb-4" style={{ textAlign: 'justify' }}>If you're seeking professional web design services that prioritize innovation, usability, and user-centricity, look no other than Eliora Company. Our team of expert web designers is passionate about creating visually appealing and user-friendly websites. We stay updated with the latest industry trends, ensuring your website remains at the forefront of contemporary design.</p>
            <p className="mb-4" style={{ textAlign: 'justify' }}>We specialize in responsive and mobile-friendly designs, vital in today's mobile-driven world. Our designs adapt seamlessly across different devices, guaranteeing the best user experience on PCs, tablets, and smartphones. User experience is a top priority for us. Our UI/UX designers focus on creating interfaces that are intuitive and engaging, promoting better visitor engagement and increased conversions.</p>
            <a href="contact" className="btn btn-danger py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }}>Craft Your Design</a>
          </div>
          <div className="col-lg-6" style={{ minHeight: '250px' }}>
            <div className="position-relative h-100">
              <img alt="Web Development" className="position-absolute w-100 rounded wow zoomIn" data-wow-delay="0.9s" src="images/service-3.png" style={{ marginTop: '15%', objectFit: 'contain !important', visibility: 'visible', animationDelay: '0.9s', animationName: 'zoomIn' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
