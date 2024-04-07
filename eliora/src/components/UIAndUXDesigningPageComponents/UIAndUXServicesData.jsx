const UiuxData =[
    {
        id: 1,
        title: 'User-Centric Design',
        image: 'images/UI3.png',
        description: 'We specialize in creating intuitive, user-friendly interfaces that enhance user experiences. Our designs prioritize user needs and behaviors to drive engagement and satisfaction.'
    },
    {
        id: 2,
        title: 'Responsive Design',
        image: 'images/UI4.png',
        description: 'We ensure your application or website adapts seamlessly to various devices and display dimensions, maximizing accessibility and reach.'
    },
    {
        id: 3,
        title: 'Visual Design',
        image: 'images/UI5.png',
        description: 'Our designs captivate users with compelling visuals, harmonious color schemes, and typography that aligns with your brand identity.'
    },
    {
        id: 4,
        title: 'Prototyping',
        image: 'images/UI6.png',
        description: 'We build interactive prototypes, allowing you to visualize the user journey and make informed design refinements before development.'
    },
    {
        id: 5,
        title: 'UI Kits',
        image: 'images/UI7.png',
        description: 'We provide custom UI kits and design systems to maintain consistency across your product, simplifying development and updates.'
    },
    {
        id: 6,
        title: 'Usability Testing',
        image: 'images/UI8.png',
        description: 'We conduct rigorous usability testing to validate design choices, ensuring a smooth and efficient user experience.'
    },
    {
        id: 7,
        title: 'Conversion Optimization',
        image: 'images/UI9.png',
        description: 'Our designs focus on boosting conversions by strategically placing calls-to-action and optimizing user flows.'
    },
    {
        id: 8,
        title: 'Web and Mobile App Design',
        image: 'images/UI10.png',
        description: 'We offer comprehensive design services for both web and mobile applications, ensuring a cohesive cross-platform experience.'
    },
    {
        id: 9,
        title: 'Accessibility Compliance',
        image: 'images/UI11.png',
        description: 'We design with accessibility standards in mind, ensuring your product is usable by all, including those with disabilities.'
    },
    {
        id: 10,
        title: 'Iterative Design',
        image: 'images/UI12.png',
        description: 'We Place trust in continuous improvement. We gather user feedback and iterate on designs to optimize performance and user satisfaction.'
    }
]


const ServiceItem = ({ title, image, description }) => (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
      <div
        className="service-item bg-white rounded d-flex flex-column text-center align-items-center justify-content-center shadow p-5"
      >
        <div className="mb-5" style={{position:"relative"}}>
          <img
            alt={title}
            src={image}
            style={{ width: "90px", paddingTop: "30px" }}
          />
        </div>
        <h3 className="mb-3 pt-3 fw-bold text-danger ">{title}</h3>
        <h6 className="m-0" style={{ textAlign: "justify", wordSpacing: "-3px" }}>
          {description}
        </h6>
      </div>
    </div>
  );


const UIAndUXServicesData = () => {
    return (
        <div
          className="container-fluid py-5 wow fadeInUp mt-c mt-s"
          data-wow-delay="0.1s"
          style={{ marginTop: "-90px" }}
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <h5 className="fw-bold text-uppercase text-danger mt-5">OUR SERVICES</h5>
              <h1 className="mb-0">Services We Offer</h1>
            </div>
            <div className="row g-5">
              {UiuxData.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default UIAndUXServicesData
