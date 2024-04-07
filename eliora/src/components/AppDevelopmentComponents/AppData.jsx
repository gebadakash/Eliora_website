const AppData = () => {

    const services = [
      {
        title: 'Native App Development',
        image: 'images/flat-1.jpg',
        description: 'This approach involves building applications specifically for a particular operating system (e.g., iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). Native apps provide high performance and access to device-specific features.'
      },
      {
        title: 'Hybrid App Development',
        image: 'images/flat-2.png',
        description: 'Hybrid apps are built using web technologies (HTML, CSS, JavaScript) and wrapped in a native container. They offer cross-platform compatibility, enabling developers to write code once and deploy it on multiple platforms.'
      },
      {
        title: 'Cross-Platform App Development',
        image: 'images/flat-3.png',
        description: 'This approach uses frameworks like React Native, Xamarin, or Flutter to develop apps that run on multiple platforms with a single codebase. It offers cost-efficiency and faster development time.'
      },
      {
        title: 'Web App Development',
        image: 'images/flat-4.jpg',
        description: 'Web apps are accessed through web browsers and do not require installation. They are built using web technologies and can be accessed on various devices and platforms with internet connectivity.'
      },
      {
        title: 'Augmented Reality (AR) App Development',
        image: 'images/flat-5.jpg',
        description: 'Elevate user engagement with our website development service using Ajax technology. Seamlessly update web content without page reloads, providing a smooth and immersive user experience.'
      },
      {
        title: 'App Launch',
        image: 'images/flat-6.jpg',
        description: 'App launch refers to the process of releasing your app to the market. It involves various activities like beta testing, quality assurance, and submission to app stores (e.g., Apple App Store, Google Play Store).'
      },
      {
        title: 'App Analytics',
        image: 'images/flat-7.jpg',
        description: 'App analytics help track user behavior, engagement, and performance metrics. By analyzing data, you can gain insights to optimize your app and make data-driven decisions.'
      },
      {
        title: 'App Security',
        image: 'images/flat-8.png',
        description: 'App security is crucial for protecting user data and ensuring secure transactions. It involves implementing measures like data encryption, secure authentication, and regular security audits.'
      },
      {
        title: 'App User Experience (UX)',
        image: 'images/flat-9.jpg',
        description: 'UX focuses on creating seamless and intuitive user experiences. It involves designing user interfaces, navigation, and interactions to provide an enjoyable and engaging app experience.'
      },
      {
        title: 'App User Interface (UI)',
        image: 'images/flat-10.png',
        description: 'UX focuses on creating seamless and intuitive user experiences. It involves designing user interfaces, navigation, and interactions to provide an enjoyable and engaging app experience.'
      },
    ];
  
    return (
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-danger text-uppercase">Our Services</h5>
            <h3 className="mb-0 text-black">Unleashing the Digital Alchemy: A Symphony of App Development Enchantments</h3>
          </div>
          <div className="row g-3">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6  wow zoomIn" data-wow-delay={`${0.3 * (index + 1)}s`} style={{ visibility: 'visible', animationDelay: `${0.3 * (index + 1)}s`, animationName: 'zoomIn' }}>
                <div className="service-item bg-white shadow rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '520px' }}>
                  <div className="mb-4">
                    <img alt={service.title} src={service.image} style={{ width: '160px' }} />
                  </div>
                  <h3 className="mb-3 pt-2 mt-4 text-danger">{service.title}</h3>
                  <h6 className="m-0 text-black" style={{ textAlign: 'justify' }}>{service.description}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  
  


export default AppData;